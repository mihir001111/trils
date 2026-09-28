import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/layout/Footer';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aftertrials.com';
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string | null;
    category: string | null;
    author_name: string | null;
    cover_image: string | null;
    read_time: string | null;
    featured: boolean;
    published: boolean;
    published_at: string | null;
}

async function getBlog(slug: string): Promise<Blog | null> {
    try {
        const url = `${SUPABASE_URL}/rest/v1/blogs?slug=eq.${encodeURIComponent(slug)}&published=eq.true&select=*&limit=1`;
        const res = await fetch(url, {
            headers: {
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
            next: { revalidate: 300 }, // revalidate every 5 minutes
        });
        if (!res.ok) return null;
        const data = await res.json();
        return Array.isArray(data) && data.length > 0 ? data[0] : null;
    } catch {
        return null;
    }
}

async function getRelatedBlogs(slug: string, category: string | null): Promise<Blog[]> {
    try {
        const catFilter = category ? `&category=eq.${encodeURIComponent(category)}` : '';
        const url = `${SUPABASE_URL}/rest/v1/blogs?published=eq.true&slug=neq.${encodeURIComponent(slug)}${catFilter}&select=id,title,slug,excerpt,category,author_name,published_at,read_time&order=published_at.desc&limit=3`;
        const res = await fetch(url, {
            headers: {
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
            next: { revalidate: 300 },
        });
        if (!res.ok) return [];
        const data = await res.json();
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const blog = await getBlog(slug);
    if (!blog) return { title: 'Article Not Found | After Trials' };

    const articleUrl = `${SITE_URL}/blog/${blog.slug}`;
    const ogImage = blog.cover_image || `${SITE_URL}/assets/social-banner.png`;

    return {
        title: blog.title,
        description: blog.excerpt || `Read "${blog.title}" on After Trials — the professional network for medicine.`,
        alternates: { canonical: articleUrl },
        openGraph: {
            type: 'article',
            url: articleUrl,
            title: blog.title,
            description: blog.excerpt || '',
            publishedTime: blog.published_at || undefined,
            authors: blog.author_name ? [blog.author_name] : ['After Trials'],
            section: blog.category || 'Medicine',
            images: [{ url: ogImage, width: 1200, height: 630, alt: blog.title }],
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.title,
            description: blog.excerpt || '',
            images: [ogImage],
        },
    };
}

function formatDate(d: string | null) {
    if (!d) return '';
    const date = new Date(d);
    if (isNaN(date.getTime())) return '';
    return new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric' }).format(date);
}

function formatCategory(c: string | null) {
    if (!c) return 'General';
    return c.replace(/[-_]/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase());
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = await getBlog(slug);
    if (!blog) notFound();

    const related = await getRelatedBlogs(blog.slug, blog.category);
    const articleUrl = `${SITE_URL}/blog/${blog.slug}`;

    // JSON-LD BlogPosting schema
    const blogPostingSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${articleUrl}#article`,
        headline: blog.title,
        description: blog.excerpt || '',
        url: articleUrl,
        datePublished: blog.published_at || '',
        dateModified: blog.published_at || '',
        author: {
            '@type': 'Person',
            name: blog.author_name || 'After Trials',
        },
        publisher: {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: 'After Trials',
            logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
        },
        image: blog.cover_image
            ? { '@type': 'ImageObject', url: blog.cover_image }
            : { '@type': 'ImageObject', url: `${SITE_URL}/assets/social-banner.png` },
        mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
        articleSection: blog.category || 'Medicine',
        keywords: [blog.category, 'medicine', 'healthcare', 'After Trials'].filter(Boolean).join(', '),
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Dispatches', item: `${SITE_URL}/blogs` },
                { '@type': 'ListItem', position: 3, name: blog.title, item: articleUrl },
            ],
        },
    };

    return (
        <div className="legal-page-root">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />

            {/* Topbar */}
            <header className="legal-topbar">
                <div className="legal-topbar-inner">
                    <Link href="/" className="legal-brand">After <span>Trials</span></Link>
                    <Link href="/blogs" className="legal-back-link">← Back to Dispatches</Link>
                </div>
            </header>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="blog-breadcrumb">
                <div className="blog-breadcrumb-inner">
                    <Link href="/">Home</Link>
                    <span aria-hidden="true"> / </span>
                    <Link href="/blogs">Dispatches</Link>
                    <span aria-hidden="true"> / </span>
                    <span aria-current="page">{blog.title}</span>
                </div>
            </nav>

            {/* Article */}
            <main>
                <div className="blog-article-view" style={{ paddingTop: '2rem' }}>
                    <div className="blog-article-container">
                        <article itemScope itemType="https://schema.org/BlogPosting">
                            <meta itemProp="datePublished" content={blog.published_at || ''} />
                            <meta itemProp="dateModified" content={blog.published_at || ''} />
                            <meta itemProp="author" content={blog.author_name || 'After Trials'} />

                            <header className="blog-article-header">
                                <div className="blog-post-meta">
                                    {blog.category && (
                                        <Link
                                            href={`/blogs?category=${blog.category.toLowerCase()}`}
                                            className="blog-category"
                                        >
                                            {formatCategory(blog.category)}
                                        </Link>
                                    )}
                                    {blog.published_at && (
                                        <>
                                            <span className="blog-dot" />
                                            <time dateTime={blog.published_at}>
                                                {formatDate(blog.published_at)}
                                            </time>
                                        </>
                                    )}
                                    {blog.read_time && (
                                        <>
                                            <span className="blog-dot" />
                                            <span>{blog.read_time} read</span>
                                        </>
                                    )}
                                    {blog.author_name && (
                                        <>
                                            <span className="blog-dot" />
                                            <span itemProp="author">By {blog.author_name}</span>
                                        </>
                                    )}
                                </div>

                                <h1 className="blog-article-title" itemProp="headline">{blog.title}</h1>

                                {blog.excerpt && (
                                    <p className="blog-article-excerpt" itemProp="description">
                                        {blog.excerpt}
                                    </p>
                                )}
                            </header>

                            {blog.cover_image && (
                                <div className="blog-article-cover" itemProp="image">
                                    <img src={blog.cover_image} alt={blog.title} />
                                </div>
                            )}

                            <div
                                className="blog-article-content"
                                itemProp="articleBody"
                                dangerouslySetInnerHTML={{ __html: blog.content || '<p>No content yet.</p>' }}
                            />
                        </article>

                        {/* Internal links: back to blogs + related */}
                        <aside className="blog-article-aside">
                            <div className="blog-aside-cta">
                                <p>After Trials is the professional network built for medicine.</p>
                                <Link href="/#onboarding" className="btn-primary">
                                    Join the community →
                                </Link>
                            </div>
                        </aside>

                        {/* Related posts - internal linking for SEO */}
                        {related.length > 0 && (
                            <section className="blog-related" aria-label="Related articles">
                                <h2 className="blog-related-title">More from Dispatches</h2>
                                <div className="blog-related-grid">
                                    {related.map(post => (
                                        <Link key={post.id} href={`/blog/${post.slug}`} className="blog-related-card">
                                            <span className="blog-related-category">
                                                {formatCategory(post.category)}
                                            </span>
                                            <strong className="blog-related-post-title">{post.title}</strong>
                                            {post.excerpt && (
                                                <span className="blog-related-excerpt">{post.excerpt}</span>
                                            )}
                                            <span className="blog-related-meta">
                                                {formatDate(post.published_at)}
                                                {post.read_time && ` · ${post.read_time}`}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

// Generate static paths for known slugs at build time
export async function generateStaticParams() {
    try {
        const url = `${SUPABASE_URL}/rest/v1/blogs?published=eq.true&select=slug`;
        const res = await fetch(url, {
            headers: {
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
        });
        if (!res.ok) return [];
        const data = await res.json();
        return Array.isArray(data) ? data.map((b: { slug: string }) => ({ slug: b.slug })) : [];
    } catch {
        return [];
    }
}
