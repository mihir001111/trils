'use client';

export function GlobalNetworkSection() {
    return (
        <section className="section-global-network" id="global-network">
            <div className="container">
                <div className="section-head">
                    <h2 className="section-title-large">
                        connecting healthcare professionals
                        <i>
                            <em> worldwide.</em>
                        </i>
                    </h2>
                    <p className="section-description">
                        Join thousands of medical professionals collaborating across borders,
                        sharing knowledge, and advancing healthcare together.
                    </p>
                </div>

                <div className="map-container">
                    <img
                        src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1791452780/Pixelated_Blue_World_Map_rdddjz.png"
                        alt="Global network of healthcare professionals on After Trials platform"
                        loading="lazy"
                        className="world-map"
                    />
                </div>
            </div>

            <style jsx>{`
                .section-global-network {
                    padding: 6rem 0;
                    background: #ffffff;
                    position: relative;
                }

                @media (min-width: 768px) {
                    .section-global-network {
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

                .map-container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 0 1rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .world-map {
                    width: 100%;
                    height: auto;
                    max-width: 100%;
                    object-fit: contain;
                    transition: transform 0.3s ease;
                }

                .world-map:hover {
                    transform: scale(1.02);
                }

                @media (max-width: 767px) {
                    .map-container {
                        max-width: 100%;
                    }
                }
            `}</style>
        </section>
    );
}
