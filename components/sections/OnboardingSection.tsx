'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { COURSE_SPECIALTIES } from '@/lib/constants';
import {
    signUpUser,
    verifySignupOTP,
    createProfile,
    resendSignupOTP,
    mapRoleToUserType,
} from '@/lib/supabase-auth';
import DOMPurify from 'isomorphic-dompurify';

type Phase = 'prose' | 'password' | 'otp' | 'success';

export function OnboardingSection() {
    const [phase, setPhase] = useState<Phase>('prose');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Form data
    const [formData, setFormData] = useState({
        fullName: '',
        role: '',
        course: '',
        specialty: '',
        specialtyCustom: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);
    const [otpTimer, setOtpTimer] = useState(0);
    const [referralLink, setReferralLink] = useState('');

    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    // Submit Phase 1 (Prose)
    const submitPhase1 = async (e: FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
        if (!formData.role) newErrors.role = 'Role is required';
        if (!formData.course) newErrors.course = 'Course is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';

        if (formData.course !== 'Others' && !formData.specialty && formData.specialty !== 'Others') {
            newErrors.specialty = 'Specialty is required';
        }

        if (
            (formData.course === 'Others' || formData.specialty === 'Others') &&
            !formData.specialtyCustom.trim()
        ) {
            newErrors.specialtyCustom = 'Please specify your specialty';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setPhase('password');
    };

    // Submit Phase 2 (Password)
    const submitPhase2 = async () => {
        const newErrors: Record<string, string> = {};

        if (!formData.password || formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        setErrors({});

        try {
            const userType = mapRoleToUserType(formData.role);
            await signUpUser(formData.email, formData.password, userType);
            setPhase('otp');
            startOtpTimer();
        } catch (err: any) {
            setErrors({ signup: err.message || 'Signup failed' });
        } finally {
            setLoading(false);
        }
    };

    // Submit Phase 3 (OTP)
    const submitPhase3 = async () => {
        const fullOtp = otpCode.join('');

        if (fullOtp.length !== 6) {
            setErrors({ otp: 'Please enter all 6 digits' });
            return;
        }

        setLoading(true);
        setErrors({});

        try {
            await verifySignupOTP(formData.email, fullOtp);

            const specialty =
                formData.course === 'Others' || formData.specialty === 'Others'
                    ? formData.specialtyCustom
                    : formData.specialty;

            const result = await createProfile({
                fullName: formData.fullName,
                userType: mapRoleToUserType(formData.role),
                course: formData.course,
                specialization: specialty,
                phone: formData.phone,
            });

            const link = `${window.location.origin}?ref=${result.referralCode}`;
            setReferralLink(link);
            setPhase('success');
        } catch (err: any) {
            setErrors({ otp: err.message || 'Verification failed' });
        } finally {
            setLoading(false);
        }
    };

    // Resend OTP
    const handleResendOtp = async () => {
        try {
            await resendSignupOTP(formData.email);
            setOtpCode(['', '', '', '', '', '']);
            startOtpTimer();
        } catch (err: any) {
            setErrors({ otp: err.message || 'Failed to resend code' });
        }
    };

    // OTP Timer
    const startOtpTimer = () => {
        setOtpTimer(60);
        const interval = setInterval(() => {
            setOtpTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    return (
        <section id="onboarding" className="py-24 md:py-32 border-b border-[var(--border)] bg-white">
            <div className="container">
                <div className="max-w-[960px] mx-auto">
                    {phase === 'prose' && <ProsePhase formData={formData} handleChange={handleChange} errors={errors} onSubmit={submitPhase1} />}
                    {phase === 'password' && (
                        <PasswordPhase
                            formData={formData}
                            handleChange={handleChange}
                            errors={errors}
                            loading={loading}
                            onSubmit={submitPhase2}
                            onBack={() => setPhase('prose')}
                        />
                    )}
                    {phase === 'otp' && (
                        <OtpPhase
                            email={formData.email}
                            otpCode={otpCode}
                            setOtpCode={setOtpCode}
                            errors={errors}
                            loading={loading}
                            otpTimer={otpTimer}
                            onSubmit={submitPhase3}
                            onResend={handleResendOtp}
                        />
                    )}
                    {phase === 'success' && <SuccessPhase referralLink={referralLink} />}
                </div>
            </div>
        </section>
    );
}

// Phase 1: Prose Form
function ProsePhase({
    formData,
    handleChange,
    errors,
    onSubmit,
}: {
    formData: any;
    handleChange: any;
    errors: Record<string, string>;
    onSubmit: (e: FormEvent) => void;
}) {
    const specialties = formData.course ? COURSE_SPECIALTIES[formData.course] || [] : [];

    return (
        <form onSubmit={onSubmit} className="text-left">
            <div className="font-sans text-[clamp(1.4rem,3.2vw,2.3rem)] font-light leading-[2.1] text-[var(--text-secondary)] mb-14">
                <p>
                    My name is{' '}
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="your name"
                        className="inline-input"
                        required
                    />
                    , I am a{' '}
                    <select name="role" value={formData.role} onChange={handleChange} className="inline-select" required>
                        <option value="" disabled>
                            select role
                        </option>
                        <option value="Student">Student</option>
                        <option value="Doctor">Doctor</option>
                    </select>
                    {' '}studying{' '}
                    <select name="course" value={formData.course} onChange={handleChange} className="inline-select" required>
                        <option value="" disabled>
                            select course
                        </option>
                        {Object.keys(COURSE_SPECIALTIES).map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                    {formData.course && formData.course !== 'Others' && (
                        <>
                            {' '}
                            specializing in{' '}
                            <select name="specialty" value={formData.specialty} onChange={handleChange} className="inline-select">
                                <option value="" disabled>
                                    select specialty
                                </option>
                                {specialties.map((s) => (
                                    <option key={s} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                        </>
                    )}
                    {(formData.course === 'Others' || formData.specialty === 'Others') && (
                        <>
                            {' '}
                            <input
                                type="text"
                                name="specialtyCustom"
                                value={formData.specialtyCustom}
                                onChange={handleChange}
                                placeholder="type specialty"
                                className="inline-input"
                            />
                        </>
                    )}
                    . You can reach me at{' '}
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="inline-input"
                        required
                    />
                    {' '}or{' '}
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+39 123 456 7890"
                        className="inline-input"
                    />
                    .
                </p>
            </div>

            {Object.keys(errors).length > 0 && (
                <div className="mb-4 text-red-600 text-sm">
                    {Object.values(errors).map((err, idx) => (
                        <div key={idx}>{err}</div>
                    ))}
                </div>
            )}

            <div className="flex items-center justify-between flex-wrap gap-6">
                <button type="submit" className="btn-primary">
                    Continue →
                </button>
            </div>
        </form>
    );
}

// Phase 2: Password
function PasswordPhase({
    formData,
    handleChange,
    errors,
    loading,
    onSubmit,
    onBack,
}: {
    formData: any;
    handleChange: any;
    errors: Record<string, string>;
    loading: boolean;
    onSubmit: () => void;
    onBack: () => void;
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <h3 className="font-serif text-3xl mb-8">Create your password</h3>

            <div className="space-y-6 mb-8">
                <div>
                    <label className="block font-sans text-sm font-semibold mb-2">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--at-blue)]"
                        required
                    />
                    {errors.password && <div className="text-red-600 text-sm mt-1">{errors.password}</div>}
                </div>

                <div>
                    <label className="block font-sans text-sm font-semibold mb-2">Confirm Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--at-blue)]"
                        required
                    />
                    {errors.confirmPassword && <div className="text-red-600 text-sm mt-1">{errors.confirmPassword}</div>}
                </div>

                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-sm text-[var(--at-blue)] font-semibold"
                >
                    {showPassword ? 'Hide' : 'Show'} Password
                </button>
            </div>

            {errors.signup && <div className="text-red-600 text-sm mb-4">{errors.signup}</div>}

            <div className="flex gap-4">
                <button type="button" onClick={onBack} className="btn-secondary">
                    ← Back
                </button>
                <button type="button" onClick={onSubmit} disabled={loading} className="btn-primary">
                    {loading ? 'Creating...' : 'Create Account →'}
                </button>
            </div>
        </div>
    );
}

// Phase 3: OTP
function OtpPhase({
    email,
    otpCode,
    setOtpCode,
    errors,
    loading,
    otpTimer,
    onSubmit,
    onResend,
}: {
    email: string;
    otpCode: string[];
    setOtpCode: (code: string[]) => void;
    errors: Record<string, string>;
    loading: boolean;
    otpTimer: number;
    onSubmit: () => void;
    onResend: () => void;
}) {
    const handleOtpChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otpCode];
        newOtp[index] = value.slice(-1);
        setOtpCode(newOtp);

        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    return (
        <div>
            <h3 className="font-serif text-3xl mb-4">Verify your email</h3>
            <p className="font-sans text-[var(--text-secondary)] mb-8">
                We sent a 6-digit code to <strong>{email}</strong>
            </p>

            <div className="flex gap-3 justify-start mb-6">
                {otpCode.map((digit, idx) => (
                    <input
                        key={idx}
                        id={`otp-${idx}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        className="w-14 h-14 text-center text-2xl font-mono border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--at-blue)]"
                    />
                ))}
            </div>

            {errors.otp && <div className="text-red-600 text-sm mb-4">{errors.otp}</div>}

            {otpTimer > 0 ? (
                <p className="text-sm text-[var(--text-secondary)] mb-6">
                    Resend code in 00:{otpTimer.toString().padStart(2, '0')}
                </p>
            ) : (
                <button type="button" onClick={onResend} className="text-sm text-[var(--at-blue)] font-semibold mb-6">
                    Resend Code
                </button>
            )}

            <button type="button" onClick={onSubmit} disabled={loading} className="btn-primary">
                {loading ? 'Verifying...' : 'Verify Email →'}
            </button>
        </div>
    );
}

// Phase 4: Success
function SuccessPhase({ referralLink }: { referralLink: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="text-center py-16">
            <div className="text-6xl text-[var(--at-blue)] mb-6">✓</div>
            <h3 className="font-serif text-5xl italic font-light mb-6">Welcome aboard</h3>
            <p className="font-sans text-lg text-[var(--text-secondary)] mb-8 max-w-[600px] mx-auto">
                You're now part of the After Trials community. Share your unique referral link to invite others.
            </p>

            <div className="max-w-[500px] mx-auto">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={referralLink}
                        readOnly
                        className="flex-1 px-4 py-3 border border-[var(--border)] rounded-lg bg-[var(--bg)] font-mono text-sm"
                    />
                    <button onClick={handleCopy} className="btn-primary">
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
        </div>
    );
}
