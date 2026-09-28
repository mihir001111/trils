export const translations = {
    en: {
        // Nav
        nav_mission: 'Mission',
        nav_philosophy: 'Philosophy',
        nav_pillars: 'Pillars',
        nav_evidence: 'Evidence',
        nav_community: 'Community',

        // Hero
        hero_brand: 'after trials',
        hero_desc: 'The professional healthcare network for doctors, residents, and medical students.',
        hero_cta: 'Unite With Us →',

        // Footer
        foot_copyright: '© 2026 AFTER TRIALS. Built by doctors for doctors.',
    },
    it: {
        // Nav
        nav_mission: 'Missione',
        nav_philosophy: 'Filosofia',
        nav_pillars: 'Pilastri',
        nav_evidence: 'Prove',
        nav_community: 'Comunità',

        // Hero
        hero_brand: 'after trials',
        hero_desc: 'La rete professionale sanitaria per medici, specializzandi e studenti di medicina.',
        hero_cta: 'Unisciti a Noi →',

        // Footer
        foot_copyright: '© 2026 AFTER TRIALS. Costruito da medici per i medici.',
    },
};

export type Language = keyof typeof translations;

export function t(key: string, lang: Language = 'en'): string {
    return translations[lang][key as keyof (typeof translations)['en']] || key;
}
