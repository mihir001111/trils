'use client';

const HERO_IMAGE_MOBILE = 'https://res.cloudinary.com/dn1hjjczy/image/upload/v1791288619/Friendly_Healthcare_Team_Illustration_uba54x.png';
const HERO_IMAGE_DESKTOP = 'https://res.cloudinary.com/dn1hjjczy/image/upload/v1791106022/Healthcare_Team_Lineup_on_Transparent_Background_vi1fqv.png';

export function HeroSection() {
    return (
        <section className="hero" id="hero">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap"
            />

            <style jsx>{`
                .hero {
                    --ink: #3b3d5c;
                    --muted: #6f7290;
                    --accent: #7a81a6;
                    --font: 'Manrope', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;

                    position: relative;
                    width: 100%;
                    height: 100vh;
                    height: 100svh;
                    display: grid;
                    grid-template-rows: auto auto minmax(0, 1fr) auto;
                    justify-items: center;
                    padding: max(clamp(10px, 2.4vh, 28px), env(safe-area-inset-top)) clamp(14px, 4vw, 48px) 0;
                    background: #ffffff;
                    color: var(--ink);
                    font-family: var(--font);
                    overflow: hidden;
                    box-sizing: border-box;
                }
                
                /* Desktop: remove the extra row */
                @media (min-width: 768px) {
                    .hero {
                        grid-template-rows: auto auto minmax(0, 1fr);
                    }
                }

                .hero *,
                .hero *::before,
                .hero *::after {
                    box-sizing: border-box;
                }

                /* ---------- Logo ---------- */
                .logo {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    color: var(--accent);
                    font-family: var(--font-serif), 'Cormorant Garamond', Georgia, serif;
                    font-size: clamp(15px, 2.6vh, 22px);
                    font-weight: 500;
                    font-style: italic;
                    letter-spacing: -0.01em;
                    text-decoration: none;
                }
                
                /* Mobile: reduce logo top spacing */
                @media (max-width: 767px) and (orientation: portrait) {
                    .hero {
                        padding-top: clamp(8px, 1.5vh, 16px);
                    }
                }

                .logo svg {
                    width: 1.25em;
                    height: 1.25em;
                    flex-shrink: 0;
                }

                /* ---------- Text ---------- */
                .copy {
                    text-align: center;
                    width: 100%;
                    max-width: 720px;
                    padding-top: clamp(20px, 4vh, 50px);
                    position: relative;
                    z-index: 5;
                }
                
                /* Mobile: reduce top padding even more */
                @media (max-width: 767px) and (orientation: portrait) {
                    .copy {
                        padding-top: clamp(8px, 1.5vh, 16px);
                    }
                }

                .title {
                    margin: 0;
                    font-family: var(--font-serif), 'Cormorant Garamond', Georgia, serif;
                    font-size: clamp(2.8rem, 5.5vw, 4.5rem);
                    font-weight: 300;
                    font-style: normal;
                    line-height: 1.08;
                    letter-spacing: -0.02em;
                    text-transform: none;
                    color: var(--text);
                    opacity: 1;
                    background: none;
                    -webkit-text-fill-color: currentColor;
                }
                
                /* Mobile: smaller title */
                @media (max-width: 767px) and (orientation: portrait) {
                    .title {
                        font-size: clamp(2.2rem, 8vw, 2.8rem);
                    }
                }
                
                .title em {
                    font-style: italic;
                    font-weight: 300;
                    color: #0d8fe9;
                }

                .subtitle {
                    margin: clamp(6px, 1.5vh, 18px) auto 0;
                    max-width: 560px;
                    font-family: var(--font);
                    font-size: clamp(10.5px, min(3.1vw, 1.9vh), 17px);
                    font-weight: 400;
                    line-height: 1.45;
                    color: var(--ink);
                    opacity: 0.85;
                }

                /* ---------- CTA Button ---------- */
                .cta-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    margin-top: clamp(20px, 3vh, 32px);
                    padding: 12px 28px;
                    font-family: var(--font);
                    font-size: clamp(14px, 1.8vh, 16px);
                    font-weight: 500;
                    color: #ffffff;
                    background: #0d8fe9;
                    border: 1px solid #0d8fe9;
                    border-radius: 6px;
                    text-decoration: none;
                    transition: all 0.25s ease;
                    letter-spacing: -0.01em;
                }
                
                /* Mobile: hide CTA in copy section, show it after image */
                @media (max-width: 767px) and (orientation: portrait) {
                    .copy .cta-button {
                        display: none;
                    }
                }

                .cta-button:hover {
                    background: #0873be;
                    border-color: #0873be;
                    transform: translateY(-2px);
                }

                .cta-button svg {
                    width: 16px;
                    height: 16px;
                    transition: transform 0.25s ease;
                }

                .cta-button:hover svg {
                    transform: translateX(3px);
                }

                /* ---------- Stage: uses ALL remaining space ---------- */
                .stage {
                    width: 100%;
                    min-height: 0;
                    min-width: 0;
                    container-type: size;
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                }
                
                /* Mobile: align image to bottom */
                @media (max-width: 767px) and (orientation: portrait) {
                    .stage {
                        align-items: center;
                        padding: clamp(20px, 4vh, 32px) 0;
                    }
                }

                /* largest box that fits in the remaining space - now much wider */
                .frame {
                    position: relative;
                    width: 96vw;
                    max-width: 96vw;
                    height: 100%;
                    container-type: inline-size;
                    flex-shrink: 0;
                }

                .portrait {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    object-position: 50% 100%;
                    pointer-events: none;
                    user-select: none;
                }
                
                /* Desktop: use lineup image, no mask */
                @media (min-width: 768px) {
                    .portrait {
                        content: url('https://res.cloudinary.com/dn1hjjczy/image/upload/v1789066941/copy_of_chatgpt_imagek_sep_10_2026_11_12_13_pm_yiv0ho.png');
                    }
                }
                
                /* Mobile portrait: use app screenshot */
                @media (max-width: 767px) and (orientation: portrait) {
                    .portrait {
                        content: url('https://res.cloudinary.com/dn1hjjczy/image/upload/v1777456137/177shots_so_ohlge1.png');
                    }
                    
                    .subtitle {
                        display: none;
                    }
                }
                
                /* Mobile/iPad landscape: use desktop image */
                @media (max-width: 767px) and (orientation: landscape),
                       (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
                    .portrait {
                        content: url('https://res.cloudinary.com/dn1hjjczy/image/upload/v1789066941/copy_of_chatgpt_imagek_sep_10_2026_11_12_13_pm_yiv0ho.png');
                    }
                }

                /* Short screens (phone landscape): tighten text so the image keeps room */
                @media (max-height: 520px) {
                    .subtitle {
                        display: none;
                    }
                }

                /* Mobile CTA after image */
                .mobile-cta {
                    display: none;
                }
                
                @media (max-width: 767px) and (orientation: portrait) {
                    .mobile-cta {
                        display: flex;
                        justify-content: center;
                        padding: clamp(20px, 4vh, 32px) clamp(14px, 4vw, 48px) clamp(24px, 4vh, 36px);
                        width: 100%;
                    }
                    
                    .mobile-cta .cta-button {
                        display: inline-flex;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    * {
                        animation: none !important;
                        transition: none !important;
                    }
                }
            `}</style>

            {/* Logo */}
            <a href="#hero" className="logo" aria-label="After Trials">
                <img src="https://res.cloudinary.com/dn1hjjczy/image/upload/c_crop,g_north_west,h_50,w_305,x_101,y_243/bitmap_r04fi5.png" alt="After Trials" style={{ height: 'clamp(32px, 5vh, 48px)', width: 'auto' }} />
            </a>

            {/* Text */}
            <div className="copy">
                <h1 className="title">
                    the professional network
                    <br />
                    <em>for medicine.</em>
                </h1>
                <p className="subtitle">
                    Connect with peers, share clinical insights, and advance your medical career. A trusted community built by healthcare professionals, for healthcare professionals.
                </p>
                <a href="#onboarding" className="cta-button">
                    Join the Network
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

            {/* Visual */}
            <div className="stage">
                <div className="frame">
                    <img
                        className="portrait"
                        src={HERO_IMAGE_MOBILE}
                        alt=""
                        loading="eager"
                    />
                </div>
            </div>

            {/* Mobile CTA after image */}
            <div className="mobile-cta">
                <a href="#onboarding" className="cta-button">
                    Join the Network
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </section>
    );
}