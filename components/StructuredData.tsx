const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aftertrials.com';

/**
 * Homepage structured data:
 * - Organization schema
 * - WebSite schema (enables sitelinks searchbox)
 * - WebPage schema
 * - SoftwareApplication schema (for app store rich results)
 * - FAQPage schema
 */
export function HomepageStructuredData() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'After Trials',
        url: SITE_URL,
        logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/logo.png`,
            width: 512,
            height: 512,
        },
        description:
            'After Trials is the professional network for doctors, medical students, and healthcare professionals worldwide.',
        foundingDate: '2024',
        knowsAbout: [
            'Medical networking',
            'Healthcare professionals',
            'Clinical case discussion',
            'Medical education',
            'Physician careers',
        ],
        contactPoint: [
            {
                '@type': 'ContactPoint',
                email: 'hello@aftertrials.com',
                contactType: 'customer support',
                availableLanguage: 'English',
            },
            {
                '@type': 'ContactPoint',
                email: 'privacy@aftertrials.com',
                contactType: 'privacy',
            },
        ],
        sameAs: [
            'https://instagram.com/aftertrials',
            'https://x.com/aftertrials',
            'https://linkedin.com/company/aftertrials',
            'https://facebook.com/aftertrials',
        ],
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'After Trials',
        description: 'Professional network for medicine',
        publisher: {
            '@id': `${SITE_URL}/#organization`,
        },
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${SITE_URL}/?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };

    const webpageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: 'After Trials — Professional Network for Medicine',
        description:
            'The professional healthcare network for doctors, residents, and medical students. Share cases, connect with peers, and build your medical career.',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        primaryImageOfPage: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/assets/social-banner.png`,
            width: 1200,
            height: 630,
        },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: SITE_URL,
                },
            ],
        },
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.hero-desc', '.section-title-large'],
        },
    };

    const softwareApplicationSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'After Trials',
        applicationCategory: 'SocialNetworkingApplication',
        operatingSystem: 'iOS, Android, Web',
        description:
            'Professional networking app for doctors, medical students, and healthcare professionals.',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        url: SITE_URL,
        author: {
            '@id': `${SITE_URL}/#organization`,
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '120',
            bestRating: '5',
            worstRating: '1',
        },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What is After Trials?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'After Trials is a professional networking platform built exclusively for doctors, medical students, residents, and allied health professionals. It enables clinical case discussions, peer connections, job discovery, and research collaboration.',
                },
            },
            {
                '@type': 'Question',
                name: 'Who can join After Trials?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'After Trials is open to medical students enrolled in a recognized program, qualified doctors, and other healthcare professionals. All users are verified to maintain the integrity of the professional community.',
                },
            },
            {
                '@type': 'Question',
                name: 'Is After Trials free to use?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, After Trials is free to join and use. Core professional networking features are available at no cost.',
                },
            },
            {
                '@type': 'Question',
                name: 'How does After Trials protect patient privacy?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'After Trials strictly prohibits sharing identifiable patient information. All clinical content must be fully anonymized. The platform complies with GDPR, CCPA/CPRA, and applicable medical privacy regulations.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can I find medical jobs on After Trials?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, After Trials facilitates career opportunities including job listings, recruiter connections, and professional networking that can lead to career opportunities in medicine.',
                },
            },
        ],
    };

    const schemas = [
        organizationSchema,
        websiteSchema,
        webpageSchema,
        softwareApplicationSchema,
        faqSchema,
    ];

    return (
        <>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}

/** Structured data for legal pages */
export function LegalPageStructuredData({
    title,
    description,
    url,
    dateModified,
}: {
    title: string;
    description: string;
    url: string;
    dateModified: string;
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': `${url}#webpage`,
                url,
                name: title,
                description,
                dateModified,
                isPartOf: { '@id': `${SITE_URL}/#website` },
                publisher: { '@id': `${SITE_URL}/#organization` },
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                        { '@type': 'ListItem', position: 2, name: title, item: url },
                    ],
                },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/** Structured data for Contact page */
export function ContactPageStructuredData() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        '@id': `${SITE_URL}/contact#webpage`,
        url: `${SITE_URL}/contact`,
        name: 'Contact After Trials',
        description: 'Get in touch with the After Trials team for support, partnerships, or general inquiries.',
        publisher: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/** Structured data for Careers page */
export function CareersPageStructuredData() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        '@id': `${SITE_URL}/careers#jobposting`,
        title: 'Open Roles at After Trials',
        description:
            'After Trials is hiring across engineering, design, clinical advisory, growth, and operations. Join us in building the professional network for healthcare.',
        datePosted: '2026-03-01',
        hiringOrganization: {
            '@type': 'Organization',
            name: 'After Trials',
            sameAs: SITE_URL,
        },
        jobLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'IT',
            },
        },
        employmentType: ['FULL_TIME', 'PART_TIME', 'CONTRACTOR'],
        directApply: true,
        url: `${SITE_URL}/careers`,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
