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

                    <p className="human-layer-desc">
                        After Trials is built to make those conversations easier to find — without turning them into
                        content.
                    </p>
                </div>

                <figure className="human-layer-image">
                    <img
                        src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1790758617/ChatGPT_Image_Sep_29_2026_07_21_23_PM_svgkbf.png"
                        alt="After Trials medical community visual"
                        loading="lazy"
                    />
                </figure>
            </div>
        </section>
    );
}
