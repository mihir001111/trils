import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aftertrials.com';

export const metadata: Metadata = {
    title: 'Dispatches',
    description:
        'Stories, perspectives and conversations from the people shaping medicine and the community growing around them. Ideas in medicine, from After Trials.',
    alternates: { canonical: `${SITE_URL}/blogs` },
    openGraph: {
        title: 'Dispatches — After Trials Journal',
        description: 'Stories, perspectives and conversations from the people shaping medicine.',
        url: `${SITE_URL}/blogs`,
        type: 'website',
    },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
