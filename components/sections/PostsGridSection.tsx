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

                {/* Ultra-creative floating cards with user images */}
                <div className="creative-grid">
                    <div className="float-card card-rome">
                        <div className="card-visual">
                            <div className="user-stack">
                                <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" className="user-img" />
                                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="User" className="user-img" />
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="user-img" />
                            </div>
                            <div className="activity-pulse">
                                <span className="pulse-dot"></span>
                                <span className="pulse-text">live now</span>
                            </div>
                        </div>
                        <div className="card-label">
                            <span className="label-icon">🇮🇹</span>
                            <span className="label-text">Rome</span>
                        </div>
                    </div>

                    <div className="float-card card-ny">
                        <div className="card-visual">
                            <div className="user-stack">
                                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="User" className="user-img" />
                                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="user-img" />
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="user-img" />
                            </div>
                            <div className="activity-pulse">
                                <span className="pulse-dot"></span>
                                <span className="pulse-text">live now</span>
                            </div>
                        </div>
                        <div className="card-label">
                            <span className="label-icon">🇺🇸</span>
                            <span className="label-text">New York</span>
                        </div>
                    </div>

                    <div className="float-card card-beijing">
                        <div className="card-visual">
                            <div className="user-stack">
                                <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="User" className="user-img" />
                                <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="User" className="user-img" />
                                <img src="https://randomuser.me/api/portraits/women/76.jpg" alt="User" className="user-img" />
                            </div>
                            <div className="activity-pulse">
                                <span className="pulse-dot"></span>
                                <span className="pulse-text">live now</span>
                            </div>
                        </div>
                        <div className="card-label">
                            <span className="label-icon">🇨🇳</span>
                            <span className="label-text">Beijing</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .section-posts-grid {
                    padding: 6rem 0;
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                }

                @media (min-width: 768px) {
                    .section-posts-grid {
                        padding: 8rem 0 10rem;
                    }
                }

                .section-head {
                    text-align: center;
                    margin-bottom: 5rem;
                    position: relative;
                    z-index: 1;
                }

                .creative-grid {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 3rem;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 1rem;
                    position: relative;
                }

                @media (min-width: 768px) {
                    .creative-grid {
                        flex-direction: row;
                        justify-content: center;
                        align-items: flex-start;
                        gap: 0;
                        padding: 0 2rem;
                    }
                }

                .float-card {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                @media (min-width: 768px) {
                    .card-rome {
                        transform: translateY(-40px) rotate(-8deg);
                        z-index: 3;
                    }

                    .card-ny {
                        transform: translateY(20px) rotate(4deg) translateX(-30px);
                        z-index: 2;
                    }

                    .card-beijing {
                        transform: translateY(-20px) rotate(-5deg) translateX(-60px);
                        z-index: 1;
                    }

                    .float-card:hover {
                        transform: translateY(-60px) rotate(0deg) scale(1.05) !important;
                        z-index: 10 !important;
                    }
                }

                .card-visual {
                    position: relative;
                    width: 280px;
                    height: 360px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 24px;
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                    overflow: hidden;
                    transition: all 0.4s ease;
                }

                .card-rome .card-visual {
                    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                }

                .card-ny .card-visual {
                    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                }

                .card-beijing .card-visual {
                    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
                }

                .card-visual::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
                    animation: float 8s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-20px, -20px); }
                }

                .float-card:hover .card-visual {
                    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
                    transform: translateY(-10px);
                }

                .user-stack {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    z-index: 1;
                    margin-top: auto;
                    margin-bottom: auto;
                }

                .user-img {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    border: 4px solid rgba(255, 255, 255, 0.3);
                    object-fit: cover;
                    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                    background: #fff;
                }

                .user-img:not(:first-child) {
                    margin-left: -35px;
                }

                .float-card:hover .user-img {
                    border-color: rgba(255, 255, 255, 0.8);
                    transform: scale(1.1);
                }

                .float-card:hover .user-img:nth-child(1) {
                    transform: translateX(-15px) scale(1.1);
                }

                .float-card:hover .user-img:nth-child(3) {
                    transform: translateX(15px) scale(1.1);
                }

                .activity-pulse {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    position: relative;
                    z-index: 1;
                }

                .pulse-dot {
                    width: 8px;
                    height: 8px;
                    background: #22c55e;
                    border-radius: 50%;
                    animation: pulse 2s ease-in-out infinite;
                    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
                }

                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
                    }
                    50% {
                        transform: scale(1.2);
                        box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
                    }
                }

                .pulse-text {
                    color: #ffffff;
                    font-size: 0.875rem;
                    font-weight: 600;
                    text-transform: lowercase;
                    letter-spacing: 0.5px;
                }

                .card-label {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    background: #ffffff;
                    padding: 0.75rem 1.5rem;
                    border-radius: 16px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                }

                .float-card:hover .card-label {
                    transform: scale(1.1);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                }

                .label-icon {
                    font-size: 1.5rem;
                }

                .label-text {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #1e293b;
                    letter-spacing: -0.02em;
                }

                @media (max-width: 767px) {
                    .card-visual {
                        width: 260px;
                        height: 340px;
                    }

                    .user-img {
                        width: 70px;
                        height: 70px;
                    }

                    .user-img:not(:first-child) {
                        margin-left: -30px;
                    }
                }
            `}</style>
        </section>
    );
}
