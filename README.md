# After Trials Web - Next.js

Production-ready Next.js conversion of the After Trials landing page with full TypeScript support, SEO optimization, and security best practices.

## Features

- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Supabase** authentication with email verification
- ✅ **Server-Side Rendering** (SSR) and Static Site Generation (SSG)
- ✅ **SEO optimized** with metadata and Open Graph tags
- ✅ **Security headers** configured
- ✅ **DOMPurify** for XSS protection
- ✅ **Responsive design** with mobile-first approach
- ✅ **Production optimizations** (compression, image optimization, etc.)

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file (copy from `.env.local.example`):
```bash
cp .env.local.example .env.local
```

4. Update environment variables in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SITE_URL=https://aftertrials.com
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Running Production Build

```bash
npm run start
```

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components (Footer, etc.)
│   └── sections/         # Page sections (Hero, Onboarding, etc.)
├── lib/                   # Utility functions
│   ├── supabase/         # Supabase client configuration
│   ├── supabase-auth.ts  # Authentication functions
│   ├── constants.ts      # App constants
│   └── i18n.ts           # Internationalization
├── public/               # Static assets
│   ├── assets/          # Images and media
│   ├── logo.png         # Site logo
│   └── robots.txt       # Robots configuration
├── middleware.ts         # Next.js middleware for Supabase
└── next.config.ts       # Next.js configuration

```

## Key Components

### Authentication Flow

The onboarding process follows a multi-step wizard:

1. **Phase 1**: User information (name, role, course, specialty, email, phone)
2. **Phase 2**: Password creation and confirmation
3. **Phase 3**: Email verification with 6-digit OTP
4. **Phase 4**: Success screen with referral link

### Supabase Integration

- Client-side authentication using `@supabase/ssr`
- Middleware for session management
- Server and client components with proper cookie handling
- Profile creation with referral tracking

### Security Features

- XSS protection with DOMPurify
- Security headers (CSP, HSTS, X-Frame-Options, etc.)
- Input validation and sanitization
- HTTPS enforcement in production
- Secure cookie handling

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |
| `NEXT_PUBLIC_SITE_URL` | Production site URL | Yes |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted with PM2

## Performance Optimizations

- Image optimization with Next.js Image component
- Font optimization with next/font
- Code splitting and lazy loading
- Compression enabled
- Static page generation where possible
- Server-side rendering for dynamic content

## SEO Features

- Optimized meta tags
- Open Graph and Twitter Card support
- Semantic HTML structure
- Sitemap generation
- robots.txt configuration
- Canonical URLs
- Structured data ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Proprietary - After Trials

## Support

For questions or support, contact: [your-email@aftertrials.com]

---

Built with ❤️ by the After Trials team
