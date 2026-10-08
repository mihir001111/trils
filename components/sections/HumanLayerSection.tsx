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
                    <div className="testimonial-card">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Dr. Sarah Chen"
                            className="testimonial-avatar"
                        />
                        <blockquote className="testimonial-quote">
                            Honestly, we spend years learning how to keep everyone else alive, then completely forget to check in on ourselves. Some days, being a doctor just means quietly falling apart between two patients and pretending you're fine.
                        </blockquote>
                    </div>

                    <div className="testimonial-card">
                        <img
                            src="https://randomuser.me/api/portraits/women/65.jpg"
                            alt="Dr. Emily Rodriguez"
                            className="testimonial-avatar"
                        />
                        <blockquote className="testimonial-quote">
                            Honestly, we spend years learning how to keep everyone else alive, then completely forget to check in on ourselves. Some days, being a doctor just means quietly falling apart between two patients and pretending you're fine.
                        </blockquote>
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

                .testimonial-card {
                    display: flex;
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

                @media (max-width: 640px) {
                    .testimonial-card {
                        flex-direction: column;
                        gap: 1.25rem;
                    }

                    .testimonial-avatar {
                        width: 72px;
                        height: 72px;
                    }
                }
            `}</style>
        </section>
    );
}

