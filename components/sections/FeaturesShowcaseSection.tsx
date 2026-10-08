'use client';

export function FeaturesShowcaseSection() {
    return (
        <section className="section-features-showcase" id="features-showcase">
            <div className="container">
                <div className="section-head">
                    <h2 className="section-title-large">
                        Everything you need to
                        <br />
                        <em>thrive in medicine.</em>
                    </h2>
                    <p className="section-description">
                        Discover tools built for clinicians who need more than another social network. Access curated opportunities, engage in meaningful dialogue, and navigate your career with resources tailored to the realities of modern healthcare practice.
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
            </div>

            <style jsx>{`
                .section-features-showcase {
                    padding: 6rem 0;
                    background: #ffffff;
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
                    font-family: 'Times New Roman', Times, Georgia, serif;
                    font-size: clamp(1.0625rem, 2vw, 1.1875rem);
                    font-weight: 400;
                    line-height: 1.75;
                    color: var(--text-secondary);
                    max-width: 680px;
                    margin: 1.5rem auto 0;
                }

                .showcase-container {
                    max-width: 900px;
                    margin: 0 auto;
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
                    transition: transform 0.3s ease;
                }

                .showcase-image:hover {
                    transform: scale(1.01);
                }
                
                /* Larger on mobile */
                @media (max-width: 767px) {
                    .showcase-container {
                        max-width: 100%;
                    }
                }
            `}</style>
        </section>
    );
}
