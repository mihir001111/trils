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
                    <img
                        src="https://res.cloudinary.com/dn1hjjczy/image/upload/c_crop,g_north_west,h_941,w_1487,x_98/Red_Testimonial_Card_in_Blurred_Social_Feed_zwuici.png"
                        alt="Healthcare testimonial"
                        className="testimonial-image"
                    />
                </div>
            </div>

            <style jsx>{`
                .human-layer-testimonials {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    margin-top: 2rem;
                }

                .testimonial-image {
                    width: 100%;
                    max-width: 1200px;
                    height: auto;
                    object-fit: contain;
                    border-radius: 12px;
                }

                /* Large desktop */
                @media (min-width: 1441px) {
                    .testimonial-image {
                        max-width: 1300px;
                    }
                }

                /* Desktop */
                @media (min-width: 1025px) and (max-width: 1440px) {
                    .testimonial-image {
                        max-width: 1000px;
                    }
                }

                /* Tablet landscape */
                @media (min-width: 769px) and (max-width: 1024px) {
                    .testimonial-image {
                        max-width: 90%;
                    }
                }

                /* Tablet portrait */
                @media (min-width: 641px) and (max-width: 768px) {
                    .testimonial-image {
                        max-width: 95%;
                    }
                }

                /* Mobile landscape */
                @media (max-width: 896px) and (orientation: landscape) {
                    .testimonial-image {
                        max-width: 85%;
                    }
                }

                /* Mobile portrait */
                @media (max-width: 640px) and (orientation: portrait) {
                    .testimonial-image {
                        max-width: 100%;
                    }
                }
            `}</style>
        </section>
    );
}

