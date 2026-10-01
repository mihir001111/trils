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
                            src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1790763415/ChatGPT_Image_Sep_30_2026_03_46_29_PM_tbsdzh.png"
                            alt="Medical post on After Trials"
                            loading="eager"
                        />
                    </div>

                    <div className="hero-post-item offset">
                        <img
                            src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1790758758/C7B5D4BA-089C-4D47-BCF6-22A2A79693F1_mbn9ye.png"
                            alt="Medical case discussion post"
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
