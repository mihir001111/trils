'use client';

import { useEffect } from 'react';

export function MobileAnimations() {
    useEffect(() => {
        // Only run on mobile
        if (typeof window === 'undefined' || window.innerWidth > 600) return;

        // Add ready class after a brief delay
        setTimeout(() => {
            document.body.classList.add('mobile-animation-ready');
        }, 100);

        // Scroll Progress Bar
        const progressBar = document.createElement('div');
        progressBar.className = 'mobile-scroll-progress';
        document.body.appendChild(progressBar);

        const updateScrollProgress = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            progressBar.style.width = `${progress}%`;
        };

        window.addEventListener('scroll', updateScrollProgress, { passive: true });
        updateScrollProgress();

        // Intersection Observer for scroll-triggered animations
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px',
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        // Hero elements
        const heroBrand = document.querySelector('.hero-brand-word');
        const heroDesc = document.querySelector('.hero-desc');
        const heroImages = document.querySelectorAll('.hero-post-item');

        if (heroBrand) {
            heroBrand.classList.add('mobile-hero-brand');
        }
        if (heroDesc) {
            heroDesc.classList.add('mobile-hero-desc');
        }
        heroImages.forEach((img, index) => {
            img.classList.add(`mobile-hero-image-${index + 1}`);
        });

        // Section titles
        const sectionTitles = document.querySelectorAll('.section-title-large, .community-conversations-title, .next-feature-title, .human-layer-title');
        sectionTitles.forEach((title) => {
            title.classList.add('mobile-section-title');
            observer.observe(title);
        });

        // Post grid cards
        const postCards = document.querySelectorAll('.post-grid-card');
        postCards.forEach((card, index) => {
            card.classList.add(`mobile-card-${index + 1}`, 'mobile-interactive');
            observer.observe(card);
        });

        // Community cards
        const communityCards = document.querySelectorAll('.community-conversations-card');
        communityCards.forEach((card, index) => {
            card.classList.add(`mobile-card-${(index % 4) + 1}`, 'mobile-interactive');
            observer.observe(card);
        });

        // Human layer split reveal
        const humanLayerCopy = document.querySelector('.human-layer-copy');
        const humanLayerImage = document.querySelector('.human-layer-image');

        if (humanLayerCopy) {
            humanLayerCopy.classList.add('mobile-reveal-left');
            observer.observe(humanLayerCopy);
        }
        if (humanLayerImage) {
            humanLayerImage.classList.add('mobile-reveal-right');
            observer.observe(humanLayerImage);
        }

        // All interactive cards
        const allCards = document.querySelectorAll('.ecosystem-panoramic-frame, .subgrid-card, .next-feature-image');
        allCards.forEach((card) => {
            card.classList.add('mobile-interactive');
        });

        // Section border fade
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            section.classList.add('mobile-border-fade');
            observer.observe(section);
        });

        // Parallax effect for images
        const parallaxImages = document.querySelectorAll('.hero-post-item img, .human-layer-image img, .next-feature-image img');

        const handleParallax = () => {
            parallaxImages.forEach((img) => {
                const parent = img.closest('.hero-post-item, .human-layer-image, .next-feature-image');
                if (!parent) return;

                const rect = parent.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                if (isVisible) {
                    const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                    const movement = (scrollProgress - 0.5) * 20; // Subtle 20px range
                    (img as HTMLElement).style.transform = `translateY(${movement}px)`;
                }
            });
        };

        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleParallax();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        handleParallax(); // Initial call

        // Touch feedback for buttons
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-submit-petition');
        buttons.forEach((button) => {
            button.addEventListener('touchstart', () => {
                button.classList.add('active');
            }, { passive: true });

            button.addEventListener('touchend', () => {
                setTimeout(() => button.classList.remove('active'), 150);
            }, { passive: true });
        });

        // Cleanup
        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
            window.removeEventListener('scroll', onScroll);
            observer.disconnect();
            progressBar.remove();
        };
    }, []);

    return null;
}
