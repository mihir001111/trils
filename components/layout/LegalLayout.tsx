import Link from 'next/link';
import { ReactNode } from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aftertrials.com';

interface LegalLayoutProps {
    children: ReactNode;
    title: string;
    subtitle?: string;
    eyebrow: string;
    lastUpdated?: string;
    path?: string; // e.g. '/privacy' — used for canonical link
}

export function LegalLayout({ children, title, subtitle, eyebrow, lastUpdated, path }: LegalLayoutProps) {
    return (
        <div className="legal-page-root">

            {/* ── Top Bar ─────────────────────────────────────────── */}
            <header className="legal-topbar">
                <div className="legal-topbar-inner">
                    <Link href="/" className="legal-brand" aria-label="After Trials home">
                        After <span>Trials</span>
                    </Link>
                    <Link href="/" className="legal-back-link">
                        ← Back to After Trials
                    </Link>
                </div>
            </header>

            {/* ── Page Hero ───────────────────────────────────────── */}
            <div className="legal-hero">
                <div className="legal-hero-inner">
                    <span className="legal-eyebrow">{eyebrow}</span>
                    <h1 className="legal-title">{title}</h1>
                    {subtitle && <p className="legal-subtitle">{subtitle}</p>}
                    {lastUpdated && (
                        <p className="legal-date">{lastUpdated}</p>
                    )}
                </div>
            </div>

            {/* ── Body ────────────────────────────────────────────── */}
            <main className="legal-body">
                <div className="legal-body-inner">
                    {children}
                </div>
            </main>

            {/* ── Footer ──────────────────────────────────────────── */}
            <footer className="site-footer">
                <div className="site-footer-container">
                    <div className="footer-grid">

                        <div className="footer-cell">
                            <Link href="/" className="footer-brand">After Trials</Link>
                            <p className="footer-motto">No healthcare professional should stand alone.</p>
                            <div className="footer-social-links">
                                <a href="https://instagram.com/aftertrials" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                    </svg>
                                </a>
                                <a href="https://x.com/aftertrials" target="_blank" rel="noopener noreferrer" aria-label="X">
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a href="https://linkedin.com/company/aftertrials" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect width="4" height="12" x="2" y="9" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="footer-cell">
                            <span className="footer-label">EXPLORE</span>
                            <div className="footer-links-col">
                                <Link href="/">Home</Link>
                                <Link href="/blogs">Dispatches</Link>
                                <Link href="/careers">Careers</Link>
                                <Link href="/contact">Contact Us</Link>
                                <Link href="/guidelines">Community Guidelines</Link>
                            </div>
                        </div>

                        <div className="footer-cell">
                            <span className="footer-label">CONNECT</span>
                            <div className="footer-links-col">
                                <Link href="/contact">Support &amp; Inquiries</Link>
                                <a href="mailto:hello@aftertrials.com">hello@aftertrials.com</a>
                                <a href="https://instagram.com/aftertrials" target="_blank" rel="noopener noreferrer">Instagram</a>
                                <a href="https://x.com/aftertrials" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                                <a href="https://linkedin.com/company/aftertrials" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </div>
                        </div>

                        <div className="footer-cell">
                            <span className="footer-label">COMPLIANCE &amp; LEGAL</span>
                            <div className="footer-links-col">
                                <Link href="/privacy">Privacy Policy</Link>
                                <Link href="/terms">Terms of Service</Link>
                                <Link href="/medical-disclaimer">Medical Disclaimer</Link>
                                <Link href="/gdpr">GDPR &amp; Sovereignty</Link>
                                <Link href="/cookie">Cookie Policy</Link>
                            </div>
                        </div>

                    </div>

                    <div className="footer-bottom">
                        <span>&copy; 2026 After Trials. All rights reserved.</span>
                        <span>Built for physicians, not corporations.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
