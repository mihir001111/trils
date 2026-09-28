'use client';

import { useEffect } from 'react';

export function ReferralCapture() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const refCode = urlParams.get('ref');
        if (refCode) localStorage.setItem('at_referral_code', refCode);
    }, []);

    return null;
}
