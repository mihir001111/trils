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

                {/* Clean user content cards */}
                <div className="content-grid">
                    <div className="content-card">
                        <div className="card-header">
                            <img
                                src="https://randomuser.me/api/portraits/women/32.jpg"
                                alt="Dr. Sofia Romano"
                                className="user-avatar"
                            />
                            <div className="user-info">
                                <h4 className="user-name">Dr. Sofia Romano</h4>
                                <p className="user-location">🇮🇹 Rome, Italy</p>
                            </div>
                        </div>
                        <p className="user-content">
                            Just wrapped up a complex case with input from colleagues across three specialties. This platform makes collaboration feel natural, not forced.
                        </p>
                    </div>

                    <div className="content-card">
                        <div className="card-header">
                            <img
                                src="https://randomuser.me/api/portraits/men/46.jpg"
                                alt="Dr. James Mitchell"
                                className="user-avatar"
                            />
                            <div className="user-info">
                                <h4 className="user-name">Dr. James Mitchell</h4>
                                <p className="user-location">🇺🇸 New York, US</p>
                            </div>
                        </div>
                        <p className="user-content">
                            Finally, a professional space without the noise. Real conversations about medicine with people who actually understand the work.
                        </p>
                    </div>

                    <div className="content-card">
                        <div className="card-header">
                            <img
                                src="https://randomuser.me/api/portraits/women/68.jpg"
                                alt="Dr. Li Wei"
                                className="user-avatar"
                            />
                            <div className="user-info">
                                <h4 className="user-name">Dr. Li Wei</h4>
                                <p className="user-location">🇨🇳 Beijing, China</p>
                            </div>
                        </div>
                        <p className="user-content">
                            Connected with researchers worldwide studying similar cases. The quality of discussion here is unmatched.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .section-posts-grid {
                    padding: 6rem 0;
                    background: #fafafa;
                    position: relative;
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

                .content-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }

                @media (min-width: 768px) {
                    .content-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 2rem;
                    }
                }

                .content-card {
                    background: #ffffff;
                    border-radius: 16px;
                    padding: 2rem;
                    transition: all 0.3s ease;
                    border: 1px solid transparent;
                }

                .content-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
                    border-color: #e5e7eb;
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.25rem;
                }

                .user-avatar {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    object-fit: cover;
                    flex-shrink: 0;
                    border: 2px solid #f3f4f6;
                }

                .user-info {
                    flex: 1;
                    min-width: 0;
                }

                .user-name {
                    margin: 0;
                    font-size: 1rem;
                    font-weight: 600;
                    color: #111827;
                    line-height: 1.4;
                }

                .user-location {
                    margin: 0.25rem 0 0;
                    font-size: 0.875rem;
                    color: #6b7280;
                    line-height: 1.4;
                }

                .user-content {
                    margin: 0;
                    font-size: 0.9375rem;
                    line-height: 1.6;
                    color: #374151;
                }

                @media (max-width: 767px) {
                    .content-card {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
}
