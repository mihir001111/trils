'use client';

export function HumanLayerSection() {
    return (
        <section className="section-human-layer" id="human-layer">
            <div className="container human-layer-wrap">
                <div className="human-layer-copy">
                    <h2 className="human-layer-title">
                        medicine is bigger than your
                        <br />
                        <i>
                            <em className="workplace-word">workplace.</em>
                        </i>
                    </h2>


                </div>

                <div className="human-layer-testimonials">
                    {/* Desktop: Original testimonial cards */}
                    <div className="testimonial-card desktop-only">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Dr. Sarah Chen"
                            className="testimonial-avatar"
                        />
                        <blockquote className="testimonial-quote">
                            Honestly, we spend years learning how to keep everyone else alive, then completely forget to check in on ourselves. Some days, being a doctor just means quietly falling apart between two patients and pretending you're fine.
                        </blockquote>
                    </div>

                    <div className="testimonial-card desktop-only">
                        <img
                            src="https://randomuser.me/api/portraits/women/65.jpg"
                            alt="Dr. Emily Rodriguez"
                            className="testimonial-avatar"
                        />
                        <blockquote className="testimonial-quote">
                            Honestly, we spend years learning how to keep everyone else alive, then completely forget to check in on ourselves. Some days, being a doctor just means quietly falling apart between two patients and pretending you're fine.
                        </blockquote>
                    </div>

                    {/* Mobile/Tablet: Image only */}
                    <div className="mobile-image-wrapper">
                        <img
                            src="https://res.cloudinary.com/dn1hjjczy/image/upload/c_crop,g_north_west,h_1890,w_966,x_54,y_30/724shots_so_uhkhts.png"
                            alt="Healthcare professionals"
                            className="human-layer-image"
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .human-layer-testimonials {
                    display: flex;
                    flex-direction: column;
                    gap: 2.5rem;
                    width: 100%;
                }

                /* Desktop: show testimonial cards */
                .desktop-only {
                    display: flex;
                }

                /* Mobile: hide desktop testimonials */
                .mobile-image-wrapper {
                    display: none;
                }

                .testimonial-card {
                    align-items: flex-start;
                    gap: 2rem;
                    background: #ffffff;
                    padding: 0;
                }

                .testimonial-avatar {
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    object-fit: cover;
                    flex-shrink: 0;
                    border: 3px solid #e2e8f0;
                }

                .testimonial-quote {
                    flex: 1;
                    margin: 0;
                    font-family: 'Cormorant Garamond', Georgia, serif;
                    font-size: clamp(1.05rem, 2.1vw, 1.15rem);
                    line-height: 1.7;
                    color: #1e293b;
                    font-weight: 400;
                    font-style: italic;
                    position: relative;
                }

                /* Tablet and below: show image, hide testimonials */
                @media (max-width: 1024px) {
                    .desktop-only {
                        display: none;
                    }

                    .mobile-image-wrapper {
                        display: flex;
                        justify-content: center;
                        padding: clamp(1.5rem, 3vw, 3rem);
                        background: #f8f9fa;
                        border-radius: 12px;
                    }

                    .human-layer-image {
                        width: 100%;
                        max-width: 500px;
                        max-height: 80vh;
                        height: auto;
                        object-fit: contain;
                        border-radius: 8px;
                    }
                }

                /* Mobile portrait */
                @media (max-width: 640px) and (orientation: portrait) {
                    .mobile-image-wrapper {
                        padding: clamp(1rem, 4vw, 1.5rem);
                    }
                    
                    .human-layer-image {
                        max-width: 100%;
                        max-height: 70vh;
                    }
                }

                /* Mobile landscape */
                @media (max-width: 896px) and (orientation: landscape) {
                    .mobile-image-wrapper {
                        padding: 1.5rem;
                    }
                    
                    .human-layer-image {
                        max-width: 450px;
                        max-height: 75vh;
                    }
                }
            `}</style>
        </section>
    );
}

