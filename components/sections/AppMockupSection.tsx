'use client';

export function AppMockupSection() {
    return (
        <section className="section-app-mockup" id="app-preview">
            <div className="container">
                <div className="section-head">
                    <span className="kicker">Experience the Platform</span>
                    <h2 className="section-title-large">
                        Your professional network,
                        <br />
                        <em>anywhere you go.</em>
                    </h2>
                    <p className="section-description">
                        Stay connected with your medical community on the go. Share insights,
                        collaborate on cases, and advance your career—all from your mobile device.
                    </p>
                </div>

                <div className="mockup-container">
                    <img
                        src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1777456137/177shots_so_ohlge1.png"
                        alt="After Trials mobile application mockup showing the professional medical network interface"
                        loading="lazy"
                        className="mockup-image"
                    />
                </div>

                <div className="app-features">
                    <div className="feature-item">
                        <div className="feature-icon">📱</div>
                        <h3 className="feature-title">Mobile-First Design</h3>
                        <p className="feature-text">
                            Built for healthcare professionals on the move. Access your network anytime, anywhere.
                        </p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">🔔</div>
                        <h3 className="feature-title">Real-Time Updates</h3>
                        <p className="feature-text">
                            Stay informed with instant notifications for discussions, collaborations, and opportunities.
                        </p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">🔒</div>
                        <h3 className="feature-title">Secure & Private</h3>
                        <p className="feature-text">
                            Your professional conversations protected with enterprise-grade security and privacy.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .section-app-mockup {
                    padding: 6rem 0;
                    background: #ffffff;
                    position: relative;
                }

                @media (min-width: 768px) {
                    .section-app-mockup {
                        padding: 8rem 0;
                    }
                }

                .section-head {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .section-description {
                    font-family: var(--font-sans);
                    font-size: clamp(1rem, 2vw, 1.125rem);
                    line-height: 1.7;
                    color: var(--text-secondary);
                    max-width: 680px;
                    margin: 1.5rem auto 0;
                }

                .mockup-container {
                    max-width: 1100px;
                    margin: 0 auto 5rem;
                    padding: 0 1rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .mockup-image {
                    width: 100%;
                    height: auto;
                    max-width: 100%;
                    object-fit: contain;
                    filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.08));
                    transition: transform 0.3s ease;
                }

                .mockup-image:hover {
                    transform: scale(1.02);
                }

                @media (max-width: 767px) {
                    .mockup-container {
                        margin-bottom: 3rem;
                    }
                }

                .app-features {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2.5rem;
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }

                @media (min-width: 768px) {
                    .app-features {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 3rem;
                    }
                }

                .feature-item {
                    text-align: center;
                    padding: 2rem 1.5rem;
                    border-radius: 12px;
                    background: #fafafa;
                    transition: all 0.3s ease;
                }

                .feature-item:hover {
                    background: #f5f5f5;
                    transform: translateY(-4px);
                }

                .feature-icon {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                    line-height: 1;
                }

                .feature-title {
                    font-family: var(--font-sans);
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: var(--text);
                    margin: 0 0 0.75rem 0;
                    letter-spacing: -0.01em;
                }

                .feature-text {
                    font-family: var(--font-sans);
                    font-size: 0.9375rem;
                    line-height: 1.6;
                    color: var(--text-secondary);
                    margin: 0;
                }
            `}</style>
        </section>
    );
}
