'use client';

export function HeroSection() {
    return (
        <section className="hero-reimagined" id="hero">
            <div className="container">
                {/* Floating Badge */}
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    <span className="hero-badge-text">Join 10,000+ Medical Professionals</span>
                </div>

                {/* Main Content Grid */}
                <div className="hero-content-grid">
                    {/* Left: Editorial Typography with Rhythm */}
                    <div className="hero-text-block">
                        <h1 className="hero-headline">
                            <span className="hero-line-1">Where</span>
                            <span className="hero-line-2">
                                <em>medicine</em>
                            </span>
                            <span className="hero-line-3">connects.</span>
                        </h1>

                        <p className="hero-subtext">
                            The professional network built for doctors, residents, and medical students. Real conversations. Real connections. Real impact.
                        </p>

                        <div className="hero-cta-row">
                            <button className="btn-primary">Get Started →</button>
                            <a href="#community" className="hero-link">
                                See how it works
                            </a>
                        </div>

                        {/* Social Proof Avatars */}
                        <div className="hero-proof">
                            <div className="hero-avatar-stack">
                                <div className="hero-avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=1)' }}></div>
                                <div className="hero-avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=5)' }}></div>
                                <div className="hero-avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=8)' }}></div>
                                <div className="hero-avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=12)' }}></div>
                                <div className="hero-avatar-more">+10K</div>
                            </div>
                            <span className="hero-proof-text">Trusted by medical professionals worldwide</span>
                        </div>
                    </div>

                    {/* Right: Dynamic Visual Composition */}
                    <div className="hero-visual-zone">
                        {/* Floating Accent Element */}
                        <div className="hero-accent-shape"></div>

                        {/* Stacked Cards with Depth */}
                        <div className="hero-cards-stack">
                            <div className="hero-card hero-card-primary">
                                <img
                                    src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1790758758/C7B5D4BA-089C-4D47-BCF6-22A2A79693F1_mbn9ye.png"
                                    alt="Medical discussion on After Trials"
                                    loading="eager"
                                />
                            </div>

                            <div className="hero-card hero-card-secondary">
                                <img
                                    src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1790763415/ChatGPT_Image_Sep_30_2026_03_46_29_PM_tbsdzh.png"
                                    alt="Medical case discussion"
                                    loading="eager"
                                />
                            </div>
                        </div>

                        {/* Floating Stats Cards */}
                        <div className="hero-stat-card hero-stat-1">
                            <div className="hero-stat-number">24/7</div>
                            <div className="hero-stat-label">Community Active</div>
                        </div>

                        <div className="hero-stat-card hero-stat-2">
                            <div className="hero-stat-number">150+</div>
                            <div className="hero-stat-label">Universities</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Background Elements */}
            <div className="hero-bg-elements">
                <div className="hero-bg-circle hero-bg-circle-1"></div>
                <div className="hero-bg-circle hero-bg-circle-2"></div>
            </div>
        </section>
    );
}
