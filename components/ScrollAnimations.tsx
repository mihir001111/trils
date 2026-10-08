'use client';

import { useEffect } from 'react';

export function ScrollAnimations() {
    useEffect(() => {
        // Check if we're in a browser
        if (typeof window === 'undefined') return;

        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -80px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            section.classList.add('animate-section');
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <style jsx global>{`
            /* Smooth fade and slide for all sections */
            .animate-section {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 1s ease-out,
                            transform 1s ease-out;
            }

            .animate-section.animate-in {
                opacity: 1;
                transform: translateY(0);
            }

            /* Grid items with stagger */
            .crazy-posts-grid > *,
            .content-grid > *,
            .masonry-grid > * {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.8s ease-out,
                            transform 0.8s ease-out;
            }

            .animate-in .crazy-posts-grid > *,
            .animate-in .content-grid > *,
            .animate-in .masonry-grid > * {
                opacity: 1;
                transform: translateY(0);
            }

            /* Subtle stagger delays */
            .crazy-posts-grid > *:nth-child(1),
            .content-grid > *:nth-child(1),
            .masonry-grid > *:nth-child(1) {
                transition-delay: 0.15s;
            }

            .crazy-posts-grid > *:nth-child(2),
            .content-grid > *:nth-child(2),
            .masonry-grid > *:nth-child(2) {
                transition-delay: 0.3s;
            }

            .crazy-posts-grid > *:nth-child(3),
            .content-grid > *:nth-child(3),
            .masonry-grid > *:nth-child(3) {
                transition-delay: 0.45s;
            }

            /* Smooth fade for large images */
            .world-map,
            .showcase-image,
            .mockup-image {
                opacity: 0;
                transform: translateY(15px);
                transition: opacity 1.2s ease-out,
                            transform 1.2s ease-out;
                transition-delay: 0.2s;
            }

            .animate-in .world-map,
            .animate-in .showcase-image,
            .animate-in .mockup-image {
                opacity: 1;
                transform: translateY(0);
            }

            /* Testimonial cards smooth entrance */
            .testimonial-card {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.9s ease-out,
                            transform 0.9s ease-out;
            }

            .animate-in .testimonial-card {
                opacity: 1;
                transform: translateY(0);
            }

            .animate-in .testimonial-card:nth-child(1) {
                transition-delay: 0.2s;
            }

            .animate-in .testimonial-card:nth-child(2) {
                transition-delay: 0.35s;
            }

            /* Section headings clean fade */
            .section-head {
                opacity: 0;
                transform: translateY(15px);
                transition: opacity 0.9s ease-out,
                            transform 0.9s ease-out;
            }

            .animate-in .section-head {
                opacity: 1;
                transform: translateY(0);
            }

            /* Reduce motion for accessibility */
            @media (prefers-reduced-motion: reduce) {
                .animate-section,
                .crazy-posts-grid > *,
                .content-grid > *,
                .masonry-grid > *,
                .world-map,
                .showcase-image,
                .mockup-image,
                .testimonial-card,
                .section-head {
                    opacity: 1 !important;
                    transform: none !important;
                    transition: none !important;
                }
            }
        `}</style>
    );
}
