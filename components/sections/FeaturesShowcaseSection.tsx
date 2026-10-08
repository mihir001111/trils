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
                    font-family: var(--font-sans);
                    font-size: clamp(1rem, 2vw, 1.125rem);
                    line-height: 1.7;
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
