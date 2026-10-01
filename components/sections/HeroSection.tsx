'use client';

export function HeroSection() {
    return (
        <section className="section-hero" id="hero">
            <div className="container hero-grid">
                {/* Left: Minimalist High-Impact Editorial Typography */}
                <div>
                    <h1 className="hero-title">
                        <span className="hero-brand-word hero-brand-serif">after trials</span>
                    </h1>

                    <p className="hero-desc">
                        <i>Medicine is a big world. Start meeting the people in it.</i>
                    </p>

                    <div className="hero-cta-group"></div>
                </div>

                {/* Right: Raw Real User Interaction Posts */}
                <div className="hero-post-display">
                    <div className="hero-post-item">
                        <img
                            src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1788795066/Tweet_-1_qp4lgq.png"
                            alt="Medical post on After Trials"
                            loading="eager"
                        />
                    </div>

                    <div className="hero-post-item offset">
                        <img
                            src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1788974024/Group_1_xox19c.png"
                            alt="Medical case discussion post"
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
