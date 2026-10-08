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

                {/* Crazy Gen-Z Post Grid: Clean, flat user post cards */}
                <div className="crazy-posts-grid">
                    <figure className="post-grid-card">
                        <img
                            src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1788973981/Tweet_-7_olsdpc.png"
                            alt="Clinical discussion post"
                            loading="lazy"
                        />
                    </figure>

                    <figure className="post-grid-card">
                        <img
                            src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1788973980/Tweet_-5_dpye9e.png"
                            alt="Clinical debate post"
                            loading="lazy"
                        />
                    </figure>

                    <figure className="post-grid-card">
                        <img
                            src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1788973980/Tweet_-4_swx4ue.png"
                            alt="Residency and training post"
                            loading="lazy"
                        />
                    </figure>
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

                .crazy-posts-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }

                @media (min-width: 768px) {
                    .crazy-posts-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 2rem;
                    }
                }

                .post-grid-card {
                    margin: 0;
                    overflow: hidden;
                }

                .post-grid-card img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
            `}</style>
        </section>
    );
}
