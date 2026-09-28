'use client';

export function EcosystemSection() {
    return (
        <section className="section-ecosystem" id="network-graph">
            <div className="container">
                <div className="section-head">
                    <h2 className="section-title-large">
                        if medicine is your world,
                        <br />
                        <em>welcome home.</em>
                    </h2>
                </div>

                {/* Panoramic Community Frame from index.html */}
                <div className="ecosystem-panoramic-frame">
                    <img
                        src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1788974024/Group_1_xox19c.png"
                        alt="After Trials community platform"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
