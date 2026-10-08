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

                {/* Unique masonry-style cards with visual interest */}
                <div className="masonry-grid">
                    <div className="post-card card-large">
                        <div className="card-accent accent-pink"></div>
                        <div className="post-header">
                            <img
                                src="https://randomuser.me/api/portraits/women/32.jpg"
                                alt="Dr. Sofia Romano"
                                className="post-avatar"
                            />
                            <div className="post-meta">
                                <h4 className="post-author">Dr. Sofia Romano</h4>
                                <span className="post-tag">🇮🇹 Rome</span>
                            </div>
                        </div>
                        <p className="post-text">
                            Just wrapped up a complex case with input from colleagues across three specialties. This platform makes collaboration feel natural, not forced.
                        </p>
                    </div>

                    <div className="post-card card-medium">
                        <div className="card-accent accent-blue"></div>
                        <div className="post-header">
                            <img
                                src="https://randomuser.me/api/portraits/men/46.jpg"
                                alt="Dr. James Mitchell"
                                className="post-avatar"
                            />
                            <div className="post-meta">
                                <h4 className="post-author">Dr. James Mitchell</h4>
                                <span className="post-tag">🇺🇸 New York</span>
                            </div>
                        </div>
                        <p className="post-text">
                            Finally, a professional space without the noise. Real conversations about medicine with people who actually understand the work.
                        </p>
                    </div>

                    <div className="post-card card-large">
                        <div className="card-accent accent-amber"></div>
                        <div className="post-header">
                            <img
                                src="https://randomuser.me/api/portraits/women/68.jpg"
                                alt="Dr. Li Wei"
                                className="post-avatar"
                            />
                            <div className="post-meta">
                                <h4 className="post-author">Dr. Li Wei</h4>
                                <span className="post-tag">🇨🇳 Beijing</span>
                            </div>
                        </div>
                        <p className="post-text">
                            Connected with researchers worldwide studying similar cases. The quality of discussion here is unmatched.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .section-posts-grid {
                    padding: 6rem 0;
                    background: #ffffff;
                    position: relative;
                }

                @media (min-width: 768px) {
                    .section-posts-grid {
                        padding: 8rem 0;
                    }
                }

                .section-head {
                    text-align: center;
                    margin-bottom: 4.5rem;
                }

                .masonry-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }

                @media (min-width: 768px) {
                    .masonry-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 2rem;
                        align-items: start;
                    }
                }

                .post-card {
                    background: #ffffff;
                    border-radius: 20px;
                    padding: 0;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1.5px solid #f1f5f9;
                    position: relative;
                }

                .post-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
                    border-color: transparent;
                }

                .card-accent {
                    height: 3px;
                    width: 100%;
                    transition: height 0.3s ease;
                }

                .post-card:hover .card-accent {
                    height: 5px;
                }

                .accent-pink {
                    background: linear-gradient(90deg, #ec4899 0%, #f97316 100%);
                }

                .accent-blue {
                    background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
                }

                .accent-amber {
                    background: linear-gradient(90deg, #f59e0b 0%, #ef4444 100%);
                }

                .post-header {
                    padding: 1.75rem 1.75rem 0;
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                }

                .post-avatar {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    object-fit: cover;
                    flex-shrink: 0;
                }

                .post-meta {
                    flex: 1;
                    min-width: 0;
                }

                .post-author {
                    margin: 0;
                    font-size: 0.9375rem;
                    font-weight: 600;
                    color: #0f172a;
                    line-height: 1.5;
                }

                .post-tag {
                    display: inline-block;
                    margin-top: 0.25rem;
                    font-size: 0.8125rem;
                    color: #64748b;
                    font-weight: 500;
                }

                .post-text {
                    margin: 0;
                    padding: 1.25rem 1.75rem 1.75rem;
                    font-size: 0.9375rem;
                    line-height: 1.65;
                    color: #334155;
                }

                /* Varying heights for visual interest */
                @media (min-width: 768px) {
                    .card-large {
                        transform: translateY(-12px);
                    }

                    .card-medium {
                        transform: translateY(8px);
                    }

                    .card-large:hover {
                        transform: translateY(-18px);
                    }

                    .card-medium:hover {
                        transform: translateY(2px);
                    }
                }

                @media (max-width: 767px) {
                    .post-header {
                        padding: 1.5rem 1.5rem 0;
                    }

                    .post-text {
                        padding: 1rem 1.5rem 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
}
