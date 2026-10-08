'use client';

export function PostsGridSection() {
    return (
        <section className="section-posts-grid" id="feed-preview">
            <div className="container">
                <div className="section-head">
                    <h2 className="section-title-large">
                        talk cases. talk research.
                        <br />
                        <i>
                            <em>talk medicine.</em>
                        </i>
                    </h2>
                </div>

                {/* Unique bento-style grid */}
                <div className="bento-grid">
                    <div className="bento-card card-1">
                        <div className="card-accent"></div>
                        <div className="card-content">
                            <p className="card-quote">
                                "Finally found a space where I can discuss complex cases with peers who actually understand the nuances."
                            </p>
                            <div className="card-footer">
                                <span className="location-badge">🇮🇹 Rome, Italy</span>
                            </div>
                        </div>
                    </div>

                    <div className="bento-card card-2">
                        <div className="card-accent"></div>
                        <div className="card-content">
                            <p className="card-quote">
                                "The research collaborations I've built here have genuinely changed my approach to patient care."
                            </p>
                            <div className="card-footer">
                                <span className="location-badge">🇺🇸 NY, US</span>
                            </div>
                        </div>
                    </div>

                    <div className="bento-card card-3">
                        <div className="card-accent"></div>
                        <div className="card-content">
                            <p className="card-quote">
                                "Being able to connect with specialists without the noise of traditional social media."
                            </p>
                            <div className="card-footer">
                                <span className="location-badge">🇨🇳 Beijing, China</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .section-posts-grid {
                    padding: 6rem 0;
                    background: linear-gradient(180deg, #ffffff 0%, #f8f9fb 100%);
                    position: relative;
                    overflow: hidden;
                }

                .section-posts-grid::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.03) 0%, transparent 50%);
                    pointer-events: none;
                }

                @media (min-width: 768px) {
                    .section-posts-grid {
                        padding: 8rem 0;
                    }
                }

                .section-head {
                    text-align: center;
                    margin-bottom: 5rem;
                    position: relative;
                    z-index: 1;
                }

                .bento-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                    position: relative;
                    z-index: 1;
                }

                @media (min-width: 768px) {
                    .bento-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 2rem;
                    }
                }

                .bento-card {
                    position: relative;
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(20px);
                    border-radius: 24px;
                    padding: 2.5rem;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
                }

                .bento-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }

                .bento-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
                    border-color: rgba(99, 102, 241, 0.2);
                }

                .bento-card:hover::before {
                    opacity: 1;
                }

                .card-accent {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    transition: all 0.4s ease;
                }

                .card-1 .card-accent {
                    background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
                }

                .card-2 .card-accent {
                    background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
                }

                .card-3 .card-accent {
                    background: linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%);
                }

                .bento-card:hover .card-accent {
                    height: 6px;
                }

                .card-content {
                    position: relative;
                    z-index: 1;
                }

                .card-quote {
                    margin: 0 0 2rem;
                    font-size: clamp(1.0625rem, 2vw, 1.1875rem);
                    line-height: 1.7;
                    color: #1e293b;
                    font-weight: 400;
                    letter-spacing: -0.01em;
                }

                .card-footer {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .location-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: rgba(15, 23, 42, 0.04);
                    border-radius: 12px;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #475569;
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                }

                .bento-card:hover .location-badge {
                    background: rgba(15, 23, 42, 0.06);
                    transform: scale(1.05);
                }

                /* Unique asymmetric heights for desktop */
                @media (min-width: 768px) {
                    .card-1 {
                        transform: translateY(-10px);
                    }

                    .card-2 {
                        transform: translateY(10px);
                    }

                    .card-3 {
                        transform: translateY(-5px);
                    }

                    .card-1:hover {
                        transform: translateY(-20px);
                    }

                    .card-2:hover {
                        transform: translateY(0);
                    }

                    .card-3:hover {
                        transform: translateY(-15px);
                    }
                }

                @media (max-width: 767px) {
                    .bento-card {
                        padding: 2rem;
                    }

                    .card-quote {
                        margin-bottom: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
}
