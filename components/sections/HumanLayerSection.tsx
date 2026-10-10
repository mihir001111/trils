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
                        src="https://res.cloudinary.com/dn1hjjczy/image/upload/c_crop,g_north_west,h_1890,w_966,x_54,y_30/724shots_so_uhkhts.png"
                        alt="Healthcare professionals"
                        className="human-layer-image"
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

                .human-layer-image {
                    width: 100%;
                    max-width: 800px;
                    height: auto;
                    border-radius: 8px;
                }

                @media (max-width: 640px) {
                    .human-layer-image {
                        max-width: 100%;
                    }
                }
            `}</style>
        </section>
    );
}

