import { createClient } from './supabase/client';

// Role mapping: Web form values → DB user_type
const ROLE_MAP: Record<string, string> = {
    Student: 'medical_student',
    Doctor: 'doctor',
};

export function mapRoleToUserType(formRole: string): string {
    return ROLE_MAP[formRole] || 'doctor';
}

// Map Course display string to DB degree string
const COURSE_DEGREE_MAP: Record<string, string> = {
    Medicine: 'MD',
    Surgery: 'MS',
    Dentistry: 'BDS',
    Nursing: 'B.Sc Nursing',
    Physiotherapy: 'BPT',
};

export function mapCourseToDegree(course: string): string | null {
    return COURSE_DEGREE_MAP[course] || course || null;
}

// Username generation
export function generateUsername(fullName: string): string {
    let clean = String(fullName || '')
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '');

    if (!clean) clean = 'user';

    const parts = clean.split('_').filter(Boolean);
    const first = parts.length > 0 ? parts[0] : clean;

    if (parts.length > 1) {
        const candidate = `${parts[0]}_${parts[parts.length - 1]}`.substring(0, 12);
        if (candidate.length >= 3) {
            return candidate;
        }
    }

    if (first.length >= 3) {
        return first;
    }

    return `${first}1`;
}

// Referral code generation
export function generateReferralCode(): string {
    if (typeof window !== 'undefined' && window.crypto && typeof window.crypto.randomUUID === 'function') {
        return `AT-${window.crypto.randomUUID().replace(/-/g, '').substring(0, 10).toUpperCase()}`;
    }

    return `AT-${Date.now().toString(36).toUpperCase()}-${Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase()}`;
}

// Sign Up — creates auth user and sends the real Supabase OTP email
export async function signUpUser(email: string, password: string, userType: string) {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                user_type: userType,
            },
        },
    });

    if (error) {
        throw new Error(error.message);
    }

    if (data.user && (!data.user.identities || data.user.identities.length === 0)) {
        throw new Error('This email is already in use. Please try logging in.');
    }

    return data;
}

// Verify OTP — confirms signup with the 6-digit email code
export async function verifySignupOTP(email: string, token: string) {
    const supabase = createClient();

    const { data, error } = await supabase.auth.verifyOtp({
        type: 'signup',
        email,
        token,
    });

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

interface CreateProfileParams {
    fullName: string;
    userType: string;
    course?: string;
    degree?: string;
    specialization?: string;
    phone?: string;
}

// Create Profile
export async function createProfile({
    fullName,
    userType,
    course,
    degree,
    specialization,
    phone,
}: CreateProfileParams) {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        throw new Error('Not authenticated. Please try again.');
    }

    const resolvedDegree = degree || mapCourseToDegree(course || '');

    let existingReferralCode: string | null = null;

    const { data: existingProfile, error: existingProfileError } = await supabase
        .from('profiles')
        .select('referral_code')
        .eq('id', user.id)
        .maybeSingle();

    if (!existingProfileError && existingProfile) {
        existingReferralCode = existingProfile.referral_code;
    }

    const referralCode = existingReferralCode || generateReferralCode();

    const profileData: Record<string, unknown> = {
        id: user.id,
        full_name: fullName,
        user_type: userType,
        degree: resolvedDegree,
        specialization: specialization || null,
        referral_code: referralCode,
        verification_status: 'pending',
        updated_at: new Date().toISOString(),
    };

    // Referral tracking
    if (typeof window !== 'undefined') {
        const refCode = localStorage.getItem('at_referral_code');

        if (refCode && refCode.trim()) {
            const normalizedRefCode = refCode.trim();

            if (normalizedRefCode.toUpperCase() !== referralCode.toUpperCase()) {
                profileData.referred_by = normalizedRefCode;
            }
        }
    }

    const { error: profileError } = await supabase.from('profiles').upsert(profileData, {
        onConflict: 'id',
    });

    if (profileError) {
        throw new Error(profileError.message);
    }

    // Save private phone information
    if (phone && phone.trim()) {
        const { error: privateInfoError } = await supabase.from('user_private_info').upsert(
            {
                id: user.id,
                phone_number: phone.trim(),
                updated_at: new Date().toISOString(),
            },
            {
                onConflict: 'id',
            }
        );

        if (privateInfoError) {
            console.error('Failed to save private info:', privateInfoError);
            throw new Error('Profile created but failed to save secure contact details: ' + privateInfoError.message);
        }
    }

    // Clear referral from storage
    if (typeof window !== 'undefined') {
        const refCode = localStorage.getItem('at_referral_code');
        if (refCode) {
            localStorage.removeItem('at_referral_code');
        }
    }

    return {
        userId: user.id,
        username: generateUsername(fullName),
        referralCode: referralCode,
    };
}

// Resend OTP
export async function resendSignupOTP(email: string) {
    const supabase = createClient();

    const { error } = await supabase.auth.resend({
        type: 'signup',
        email,
    });

    if (error) {
        throw new Error(error.message);
    }
}

// Get current authenticated user
export async function getCurrentUser() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user;
}

// Get current user's referral code
export async function getReferralCode(userId?: string) {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const targetUserId = userId || user?.id;

    if (!targetUserId) {
        throw new Error('Not authenticated.');
    }

    const { data, error } = await supabase
        .from('profiles')
        .select('referral_code')
        .eq('id', targetUserId)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data ? data.referral_code : null;
}

// Sign in with email and password
export async function signIn(email: string, password: string) {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

// Sign out
export async function signOut() {
    const supabase = createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
        throw new Error(error.message);
    }
}

// Get stats for community section
export async function getWaitlistStats() {
    const supabase = createClient();

    try {
        const { count: profilesCount } = await supabase
            .from('profiles')
            .select('*', { count: 'exact', head: true });

        const { count: instCount } = await supabase
            .from('institutions')
            .select('*', { count: 'exact', head: true });

        return {
            profiles: profilesCount || 0,
            institutions: instCount || 0,
        };
    } catch (e) {
        console.error('Error fetching stats:', e);
        return { profiles: 0, institutions: 0 };
    }
}
