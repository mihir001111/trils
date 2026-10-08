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

                {/* Clean testimonial-style quotes */}
                <div className="quotes-grid">
                    <div className="quote-card">
                        <div className="quote-header">
                            <div className="quote-avatar">
                                <span>DR</span>
                            </div>
                            <div className="quote-meta">
                                <p className="quote-author">Dr. Sarah Chen</p>
                                <p className="quote-location">Rome, Italy</p>
                            </div>
                        </div>
                        <p className="quote-text">
                            Finally found a space where I can discuss complex cases with peers who actually understand the nuances. No algorithms, just real conversations.
                        </p>
                    </div>

                    <div className="quote-card">
                        <div className="quote-header">
                            <div className="quote-avatar">
                                <span>DR</span>
                            </div>
                            <div className="quote-meta">
                                <p className="quote-author">Dr. Marco Rossi</p>
                                <p className="quote-location">Milan, Italy</p>
                            </div>
                        </div>
                        <p className="quote-text">
                            The research collaborations I've built here have genuinely changed my approach to patient care. This is what professional networking should be.
                        </p>
                    </div>

                    <div className="quote-card">
                        <div className="quote-header">
                            <div className="quote-avatar">
                                <span>DR</span>
                            </div>
                            <div className="quote-meta">
                                <p className="quote-author">Dr. Elena Bianchi</p>
                                <p className="quote-location">Florence, Italy</p>
                            </div>
                        </div>
                        <p className="quote-text">
                            Being able to connect with specialists across different hospitals without the noise of traditional social media—it's exactly what medicine needs.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .section-posts-grid {
                    padding: 6rem 0;
                    background: #ffffff;
                }

                @media (min-width: 768px) {
                    .section-posts-grid {
                        padding: 8rem 0;
                    }
                }

                .section-head {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .quotes-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                @media (min-width: 768px) {
                    .quotes-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 2.5rem;
                    }
                }

                .quote-card {
                    background: #ffffff;
                    padding: 2rem;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    transition: all 0.3s ease;
                }

                .quote-card:hover {
                    border-color: #cbd5e1;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                }

                .quote-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.25rem;
                }

                .quote-avatar {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .quote-avatar span {
                    color: #ffffff;
                    font-size: 0.875rem;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                }

                .quote-meta {
                    flex: 1;
                }

                .quote-author {
                    margin: 0;
                    font-size: 1rem;
                    font-weight: 600;
                    color: #1e293b;
                    line-height: 1.4;
                }

                .quote-location {
                    margin: 0.25rem 0 0;
                    font-size: 0.875rem;
                    color: #64748b;
                    line-height: 1.4;
                }

                .quote-text {
                    margin: 0;
                    font-size: 0.9375rem;
                    line-height: 1.7;
                    color: #475569;
                    font-style: italic;
                }

                @media (max-width: 767px) {
                    .quote-card {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
}
