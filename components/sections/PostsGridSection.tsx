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
        </section>
    );
}
