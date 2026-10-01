'use client';

import { useEffect, useState } from 'react';
import { getWaitlistStats } from '@/lib/supabase-auth';

export function CommunitySection() {
    const [stats, setStats] = useState({ profiles: 0, institutions: 0 });
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        getWaitlistStats().then(setStats);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !animated) {
                        setAnimated(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const section = document.getElementById('community-conversations');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, [animated]);

    return (
        <>
            {/* Community Conversations Section */}
            <section className="section-community-conversations" id="community-conversations">
                <div className="container">
                    <div className="community-conversations-head">
                        <h2 className="community-conversations-title">
                            the conversations
                            <br />
                            <em>find jobs.</em> <em>connect with peers.</em> <em>build your reputation</em>
                        </h2>
                    </div>

                    <div className="community-conversations-grid">
                        <figure className="community-conversations-card">
                            <img
                                src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1790758756/76C72B8F-7078-4757-B61C-20FEEF274980_lxf30t.png"
                                alt="Medical community thread"
                                loading="lazy"
                            />
                        </figure>

                        <figure className="community-conversations-card">
                            <img
                                src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1790758755/312189E7-147B-4C66-AA73-0D31FA1CC9A6_sncfpt.png"
                                alt="Medical student network thread"
                                loading="lazy"
                            />
                        </figure>

                        <figure className="community-conversations-card">
                            <img
                                src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1790758618/37D15B1B-5A4E-4BF1-A86C-4AD04C5FA588_svhu8x.png"
                                alt="Medical student network thread"
                                loading="lazy"
                            />
                        </figure>

                        <figure className="community-conversations-card">
                            <img
                                src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1790758617/D2ACB9B7-9E66-4961-A340-CC6EE7CD2490_cfz3kc.png"
                                alt="Medical student network thread"
                                loading="lazy"
                            />
                        </figure>
                    </div>
                </div>
            </section>

            {/* Next Feature Section */}
            <section className="section-next-feature" id="next-feature">
                <div className="container">
                    <div className="next-feature-head">
                        <h2 className="next-feature-title">
                            more than a network.
                            <br />
                            <em>a place to belong.</em>
                        </h2>
                    </div>

                    <figure className="next-feature-image">
                        <img
                            src="https://res.cloudinary.com/dn1hjjczy/image/upload/v1789066941/copy_of_chatgpt_imagek_sep_10_2026_11_12_13_pm_yiv0ho.png"
                            alt="After Trials community feature"
                            loading="lazy"
                        />
                    </figure>
                </div>
            </section>
        </>
    );
}

function Counter({ target, animated }: { target: number; animated: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!animated || target === 0) return;

        const duration = 2000;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = progress * (2 - progress);
            const currentCount = Math.floor(easeProgress * target);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(animate);
    }, [target, animated]);

    return <span>{count.toLocaleString()}</span>;
}
