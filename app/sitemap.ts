import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aftertrials.com';
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function getBlogSlugs(): Promise<{ slug: string; published_at: string | null }[]> {
    try {
        const res = await fetch(
            `${SUPABASE_URL}/rest/v1/blogs?published=eq.true&select=slug,published_at&order=published_at.desc`,
            {
                headers: {
                    apikey: SUPABASE_ANON_KEY,
                    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
                },
                next: { revalidate: 3600 }, // re-fetch sitemap hourly
            }
        );
        if (!res.ok) return [];
        return await res.json();
    } catch {
        return [];
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogs = await getBlogSlugs();
    const now = new Date();

    const staticPages: MetadataRoute.Sitemap = [
        // Core
        {
            url: SITE_URL,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        // Content
        {
            url: `${SITE_URL}/blogs`,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/careers`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        // Legal
        {
            url: `${SITE_URL}/privacy`,
            lastModified: new Date('2026-03-01'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/terms`,
            lastModified: new Date('2026-03-01'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/guidelines`,
            lastModified: new Date('2026-03-01'),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: `${SITE_URL}/medical-disclaimer`,
            lastModified: new Date('2026-03-01'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/gdpr`,
            lastModified: new Date('2026-03-01'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/cookie`,
            lastModified: new Date('2026-03-01'),
            changeFrequency: 'yearly',
            priority: 0.2,
        },
    ];

    // Dynamic blog article pages — each article gets its own URL in the sitemap
    const blogPages: MetadataRoute.Sitemap = blogs.map(blog => ({
        url: `${SITE_URL}/blog/${blog.slug}`,
        lastModified: blog.published_at ? new Date(blog.published_at) : now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...staticPages, ...blogPages];
}
