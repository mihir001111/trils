import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter, JetBrains_Mono, Baloo_Bhai_2, Dancing_Script } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-serif',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
});

const balooBhai = Baloo_Bhai_2({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-baloo',
    display: 'swap',
});

const dancingScript = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-dancing',
    display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aftertrials.com';
const SITE_NAME = 'After Trials';
const OG_IMAGE = `${SITE_URL}/assets/social-banner.png`;

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#ffffff',
    colorScheme: 'light',
};

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    title: {
        default: 'After Trials — Professional Network for Medicine',
        template: '%s | After Trials',
    },

    description:
        'After Trials is the professional network for doctors, medical students, and healthcare professionals. Share cases, connect with peers, find jobs, and grow your medical career.',

    keywords: [
        'medical professional network',
        'doctor networking',
        'medical student network',
        'healthcare professionals',
        'clinical case discussion',
        'medical careers',
        'physician network',
        'residency network',
        'medical research collaboration',
        'healthcare jobs',
        'after trials',
        'medical community',
        'doctors online',
    ],

    authors: [{ name: 'After Trials', url: SITE_URL }],
    creator: 'After Trials',
    publisher: 'After Trials',

    category: 'Healthcare',

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: SITE_URL,
        siteName: SITE_NAME,
        title: 'After Trials — Professional Network for Medicine',
        description:
            'The professional healthcare network for doctors, residents, and medical students. Share cases, connect with peers, and build your medical career.',
        images: [
            {
                url: OG_IMAGE,
                width: 1200,
                height: 630,
                alt: 'After Trials — Professional Network for Medicine',
                type: 'image/png',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        site: '@aftertrials',
        creator: '@aftertrials',
        title: 'After Trials — Professional Network for Medicine',
        description:
            'The professional healthcare network for doctors, residents, and medical students.',
        images: [
            {
                url: OG_IMAGE,
                alt: 'After Trials — Professional Network for Medicine',
            },
        ],
    },

    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/logo.png', type: 'image/png', sizes: '512x512' },
        ],
        shortcut: '/logo.png',
    },

    manifest: '/site.webmanifest',

    alternates: {
        canonical: SITE_URL,
    },

    other: {
        'mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'default',
        'apple-mobile-web-app-title': 'After Trials',
        'application-name': 'After Trials',
        'msapplication-TileColor': '#0d8fe9',
        'msapplication-config': '/browserconfig.xml',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://res.cloudinary.com" />
                <link rel="dns-prefetch" href="https://mzcydbxztotigdubrabb.supabase.co" />
            </head>
            <body
                className={`${inter.variable} ${cormorant.variable} ${jetbrains.variable} ${balooBhai.variable} ${dancingScript.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
