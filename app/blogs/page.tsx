'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';

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

function formatCategory(c: string | null) {
    if (!c) return 'General';
    return c.replace(/[-_]/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase());
}

function formatDate(d: string | null) {
    if (!d) return '';
    const date = new Date(d);
    if (isNaN(date.getTime())) return '';
    return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
}

function ImagePlaceholder({ large = false }: { large?: boolean }) {
    return (
        <div style={{
            width: '100%', height: '100%',
            minHeight: large ? '360px' : '205px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'radial-gradient(circle at 30% 30%, rgba(13,143,233,0.13), transparent 40%), #f6f9fb',
            color: '#0d8fe9', fontFamily: 'var(--font-serif)',
            fontSize: large ? '60px' : '40px', fontStyle: 'italic',
        }}>AT</div>
    );
}

function BlogMeta({ blog }: { blog: Blog }) {
    return (
        <div className="blog-post-meta">
            <span className="blog-category">{formatCategory(blog.category)}</span>
            {blog.published_at && <><span className="blog-dot" /><span>{formatDate(blog.published_at)}</span></>}
            {blog.read_time && <><span className="blog-dot" /><span>{blog.read_time} read</span></>}
            {blog.author_name && <><span className="blog-dot" /><span>By {blog.author_name}</span></>}
        </div>
    );
}

function FeaturedCard({ blog }: { blog: Blog }) {
    return (
        <Link href={`/blog/${blog.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="blog-featured-card">
                <div className="blog-featured-image">
                    {blog.cover_image
                        ? <img src={blog.cover_image} alt={blog.title} loading="eager" />
                        : <ImagePlaceholder large />}
                </div>
                <div className="blog-featured-content">
                    <BlogMeta blog={blog} />
                    <h2 className="blog-featured-title">{blog.title}</h2>
                    {blog.excerpt && <p className="blog-featured-excerpt">{blog.excerpt}</p>}
                    <span className="blog-read-link">Read story <span>→</span></span>
                </div>
            </div>
        </Link>
    );
}

function BlogCard({ blog }: { blog: Blog }) {
    return (
        <Link href={`/blog/${blog.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <article className="blog-card">
                <div className="blog-card-image">
                    {blog.cover_image
                        ? <img src={blog.cover_image} alt={blog.title} loading="lazy" />
                        : <ImagePlaceholder />}
                </div>
                <div className="blog-card-body">
                    <BlogMeta blog={blog} />
                    <h3 className="blog-card-title">{blog.title}</h3>
                    {blog.excerpt && <p className="blog-card-excerpt">{blog.excerpt}</p>}
                    <div className="blog-card-footer">
                        <span>{formatDate(blog.published_at)}</span>
                        <span>Read →</span>
                    </div>
                </div>
            </article>
        </Link>
    );
}

const CATEGORIES = ['all', 'medicine', 'careers', 'community', 'research', 'perspectives'];

export default function BlogsPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
        const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
        const url = `${SUPABASE_URL}/rest/v1/blogs?select=id,title,slug,excerpt,content,category,author_name,cover_image,read_time,featured,published,published_at&published=eq.true&order=published_at.desc`;

        fetch(url, {
            headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
        })
            .then(res => { if (!res.ok) throw new Error(`HTTP ${res.status}`); return res.json(); })
            .then(data => { setBlogs(Array.isArray(data) ? data : []); setLoading(false); })
            .catch(err => { console.error('Blogs fetch error:', err); setError(true); setLoading(false); });
    }, []);

    const filtered = blogs.filter(b => {
        const matchCat = activeCategory === 'all' || (b.category || '').toLowerCase() === activeCategory;
        const matchSearch = !search || [b.title, b.excerpt, b.category, b.author_name]
            .join(' ').toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    const featured = filtered.find(b => b.featured) || filtered[0];
    const rest = featured ? filtered.filter(b => b.id !== featured.id) : [];

    return (
        <div className="legal-page-root">
            {/* Topbar */}
            <header className="legal-topbar">
                <div className="legal-topbar-inner">
                    <Link href="/" className="legal-brand">After <span>Trials</span></Link>
                    <Link href="/" className="legal-back-link">← Back to After Trials</Link>
                </div>
            </header>

            {/* Hero */}
            <section className="blog-hero">
                <div className="blog-hero-inner">
                    <div className="blog-eyebrow">After Trials Journal</div>
                    <h1 className="blog-hero-title">Ideas in <em>medicine.</em></h1>
                    <p className="blog-hero-desc">
                        Stories, perspectives and conversations from the people shaping medicine and the community growing around them.
                    </p>
                </div>
            </section>

            {/* Controls */}
            <div className="blog-controls">
                <div className="blog-controls-inner">
                    <div className="blog-categories">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                className={`blog-cat-btn${activeCategory === cat ? ' active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>
                    <div className="blog-search">
                        <input
                            type="search"
                            placeholder="Search stories..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            aria-label="Search stories"
                        />
                    </div>
                </div>
            </div>

            <main className="blog-main">
                {loading && (
                    <div className="blog-state">
                        <div className="blog-spinner" />
                        <p>Loading stories...</p>
                    </div>
                )}

                {error && !loading && (
                    <div className="blog-state">
                        <h3>Unable to load stories</h3>
                        <p>We couldn&apos;t load the journal right now. Please try again in a moment.</p>
                    </div>
                )}

                {!loading && !error && filtered.length === 0 && (
                    <div className="blog-state">
                        <h3>No stories found</h3>
                        <p>Try another category or search term.</p>
                    </div>
                )}

                {!loading && !error && featured && (
                    <>
                        <section className="blog-section">
                            <div className="blog-section-inner">
                                <div className="blog-section-label">Featured</div>
                                <FeaturedCard blog={featured} />
                            </div>
                        </section>

                        {rest.length > 0 && (
                            <section className="blog-section blog-section--latest">
                                <div className="blog-section-inner">
                                    <div className="blog-section-label">Latest stories</div>
                                    <div className="blog-grid">
                                        {rest.map(b => <BlogCard key={b.id} blog={b} />)}
                                    </div>
                                </div>
                            </section>
                        )}
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
}
