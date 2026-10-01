import Link from 'next/link';
import { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aftertrials.com';

export const metadata: Metadata = {
    title: 'Contact Us',
    description:
        'Get in touch with the After Trials team for support, partnership inquiries, privacy requests, or general questions. We read every message.',
    alternates: { canonical: `${SITE_URL}/contact` },
    openGraph: {
        title: 'Contact After Trials',
        description: 'Reach out for support, partnerships, or privacy requests.',
        url: `${SITE_URL}/contact`,
    },
};

const channels = [
    {
        number: '01',
        label: 'General Inquiries',
        description: 'For general questions about After Trials, the platform, or our mission.',
        email: 'hello@aftertrials.com',
    },
    {
        number: '02',
        label: 'Support',
        description: 'Experiencing a technical issue or need help with your account?',
        email: 'support@aftertrials.com',
    },
    {
        number: '03',
        label: 'Privacy & Data Requests',
        description: 'For data access, deletion, or other privacy-related requests.',
        email: 'privacy@aftertrials.com',
    },
    {
        number: '04',
        label: 'Partnerships & Press',
        description: 'Interested in partnering with After Trials or media inquiries?',
        email: 'partnerships@aftertrials.com',
    },
];

export default function ContactPage() {
    return (
        <div className="legal-page-root">

            {/* Top Bar */}
            <header className="legal-topbar">
                <div className="legal-topbar-inner">
                    <Link href="/" className="legal-brand" aria-label="After Trials home">
                        After <span>Trials</span>
                    </Link>
                    <Link href="/" className="legal-back-link">← Back to After Trials</Link>
                </div>
            </header>

            {/* Hero */}
            <div className="legal-hero">
                <div className="legal-hero-inner">
                    <span className="legal-eyebrow">Get in Touch</span>
                    <h1 className="legal-title">
                        Contact <em style={{ fontStyle: 'italic', color: 'var(--at-blue)' }}>Us</em>
                    </h1>
                    <p className="legal-subtitle">
                        Have a question, a partnership inquiry, or need support? Reach out to the After Trials team — we are here to help.
                    </p>
                </div>
            </div>
            <main className="contact-body">
                <div className="contact-grid">
                    {channels.map((ch) => (
                        <div key={ch.number} className="contact-card">
                            <span className="contact-card-num">{ch.number}</span>
                            <h2 className="contact-card-title">{ch.label}</h2>
                            <p className="contact-card-desc">{ch.description}</p>
                            <a href={`mailto:${ch.email}`} className="contact-email-link">
                                {ch.email}
                            </a>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
