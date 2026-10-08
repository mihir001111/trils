'use client';

export function FeaturesShowcaseSection() {
    return (
        <section className="section-features-showcase" id="features-showcase">
            <div className="container">
                <div className="section-head">
                    <span className="kicker">Powerful Features</span>
                    <h2 className="section-title-large">
                        Everything you need to
                        <br />
                        <em>thrive in medicine.</em>
                    </h2>
                    <p className="section-description">
                        From clinical discussions to career opportunities, After Trials provides
                        a comprehensive platform designed specifically for healthcare professionals.
                    </p>
                </div>

                <div className="showcase-container">
                    <img
                        src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1777457034/943shots_so_nys2ej.png"
                        alt="After Trials platform features showcase displaying the professional medical network interface"
                        loading="lazy"
                        className="showcase-image"
                    />
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-number">01</div>
                        <h3 className="feature-card-title">Clinical Collaboration</h3>
                        <p className="feature-card-text">
                            Share cases, discuss complex diagnoses, and learn from peers across specialties
                            in a secure, professional environment.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-number">02</div>
                        <h3 className="feature-card-title">Career Advancement</h3>
                        <p className="feature-card-text">
                            Discover opportunities, connect with mentors, and access resources to
                            accelerate your medical career journey.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-number">03</div>
                        <h3 className="feature-card-title">Verified Community</h3>
                        <p className="feature-card-text">
                            Join a trusted network of verified healthcare professionals where
                            authenticity and expertise come first.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-number">04</div>
                        <h3 className="feature-card-title">Knowledge Sharing</h3>
                        <p className="feature-card-text">
                            Access research insights, best practices, and real-world experiences
                            from medical professionals worldwide.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .section-features-showcase {
                    padding: 6rem 0;
                    background: #fafafa;
                    position: relative;
                }

                @media (min-width: 768px) {
                    .section-features-showcase {
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

                .showcase-container {
                    max-width: 1200px;
                    margin: 0 auto 5rem;
                    padding: 0 1rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .showcase-image {
                    width: 100%;
                    height: auto;
                    max-width: 100%;
                    object-fit: contain;
                    border-radius: 16px;
                    filter: drop-shadow(0 25px 70px rgba(0, 0, 0, 0.1));
                    transition: transform 0.3s ease;
                }

                .showcase-image:hover {
                    transform: scale(1.01);
                }

                @media (max-width: 767px) {
                    .showcase-container {
                        margin-bottom: 3rem;
                    }
                    
                    .showcase-image {
                        border-radius: 12px;
                    }
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }

                @media (min-width: 640px) {
                    .features-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 2.5rem;
                    }
                }

                @media (min-width: 1024px) {
                    .features-grid {
                        grid-template-columns: repeat(4, 1fr);
                        gap: 2rem;
                    }
                }

                .feature-card {
                    padding: 2rem 1.5rem;
                    background: #ffffff;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .feature-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: linear-gradient(90deg, #0d8fe9, #0873be);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.3s ease;
                }

                .feature-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 30px rgba(13, 143, 233, 0.12);
                    border-color: #0d8fe9;
                }

                .feature-card:hover::before {
                    transform: scaleX(1);
                }

                .feature-number {
                    font-family: var(--font-mono), monospace;
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: #0d8fe9;
                    margin-bottom: 1rem;
                    letter-spacing: 0.05em;
                }

                .feature-card-title {
                    font-family: var(--font-sans);
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: var(--text);
                    margin: 0 0 0.75rem 0;
                    letter-spacing: -0.01em;
                }

                .feature-card-text {
                    font-family: var(--font-sans);
                    font-size: 0.9375rem;
                    line-height: 1.65;
                    color: var(--text-secondary);
                    margin: 0;
                }
            `}</style>
        </section>
    );
}
