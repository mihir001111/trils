'use client';

export function AppMockupSection() {
    return (
        <section className="section-app-mockup" id="app-preview">
            <div className="container">
                <div className="section-head">
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
                        src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1790758618/37D15B1B-5A4E-4BF1-A86C-4AD04C5FA588_svhu8x.png"
                        alt="After Trials mobile application mockup showing the professional medical network interface"
                        loading="lazy"
                        className="mockup-image"
                    />
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
                    max-width: 900px;
                    margin: 0 auto;
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
                    transition: transform 0.3s ease;
                }

                .mockup-image:hover {
                    transform: scale(1.01);
                }
                
                /* Large desktop */
                @media (min-width: 1441px) {
                    .mockup-container {
                        max-width: 1000px;
                    }
                }
                
                /* Desktop */
                @media (min-width: 1025px) and (max-width: 1440px) {
                    .mockup-container {
                        max-width: 850px;
                    }
                }
                
                /* Tablet landscape */
                @media (min-width: 769px) and (max-width: 1024px) {
                    .mockup-container {
                        max-width: 700px;
                    }
                }
                
                /* Tablet portrait */
                @media (min-width: 641px) and (max-width: 768px) {
                    .mockup-container {
                        max-width: 600px;
                    }
                }
                
                /* Mobile landscape */
                @media (max-width: 896px) and (orientation: landscape) {
                    .mockup-container {
                        max-width: 550px;
                    }
                }
                
                /* Mobile portrait */
                @media (max-width: 640px) and (orientation: portrait) {
                    .mockup-container {
                        max-width: 100%;
                        padding: 0 0.5rem;
                    }
                }
            `}</style>
        </section>
    );
}
