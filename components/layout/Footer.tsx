import Link from 'next/link';

export function Footer() {
    return (
        <footer className="site-footer" id="footer">
            <div className="site-footer-container">
                <div className="footer-grid">
                    {/* Cell 1: Brand & Motto */}
                    <div className="footer-cell">
                        <Link href="/" className="footer-brand" aria-label="After Trials home">
                            After Trials
                        </Link>
                        <p className="footer-motto">No healthcare professional should stand alone.</p>
                        <div className="footer-social-links">
                            <a
                                href="https://instagram.com/aftertrials"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </a>
                            <a
                                href="https://facebook.com/aftertrials"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/aftertrials"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X (Twitter)"
                            >
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com/company/aftertrials"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Cell 2: Explore */}
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

                    {/* Cell 3: Connect */}
                    <div className="footer-cell">
                        <span className="footer-label">CONNECT</span>
                        <div className="footer-links-col">
                            <Link href="/contact">Support &amp; Inquiries</Link>
                            <a href="mailto:hello@aftertrials.com">hello@aftertrials.com</a>
                            <a href="https://instagram.com/aftertrials" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                            <a href="https://facebook.com/aftertrials" target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                            <a href="https://x.com/aftertrials" target="_blank" rel="noopener noreferrer">
                                X (Twitter)
                            </a>
                            <a href="https://linkedin.com/company/aftertrials" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Cell 4: Compliance & Legal */}
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
    );
}
