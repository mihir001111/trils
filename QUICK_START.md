# Quick Start Guide

Get the After Trials Next.js app running in 5 minutes.

## Prerequisites

- Node.js 18+ installed
- npm (comes with Node.js)

## Steps

### 1. Install Dependencies

```bash
cd after-trials-web-nextjs
npm install
```

### 2. Environment Setup

The `.env.local` file is already configured with the correct values. No changes needed for development!

### 3. Run Development Server

```bash
npm run dev
```

### 4. Open in Browser

Visit [http://localhost:3000](http://localhost:3000)

## What to Test

- [x] Homepage loads
- [x] Click "Join Now" button
- [x] Fill out the signup form (4 phases):
  1. Enter your details
  2. Create password
  3. Verify email (check your inbox for OTP)
  4. See success screen with referral link

## Common Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Run production build locally
npm run start

# Type checking
npm run type-check

# Linting
npm run lint
```

## Troubleshooting

### Port already in use?
```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000
```

### Build errors?
```bash
# Clean install
rm -rf node_modules .next
npm install
npm run build
```

### Types not working?
```bash
# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P -> TypeScript: Restart TS Server
```

## Project Structure

```
├── app/              # Pages and layouts
├── components/       # React components
├── lib/             # Utilities and helpers
├── public/          # Static files
└── middleware.ts    # Auth middleware
```

## Key Files

- `app/page.tsx` - Homepage
- `components/sections/OnboardingSection.tsx` - Signup flow
- `lib/supabase-auth.ts` - Authentication logic
- `.env.local` - Environment variables

## Next Steps

1. Test the signup flow
2. Review the code structure
3. Read `DEPLOYMENT.md` for production deployment
4. Check `PRODUCTION_CHECKLIST.md` before going live

## Support

Questions? Check these files:
- `README.md` - Full documentation
- `CONVERSION_SUMMARY.md` - What changed from HTML version
- `MIGRATION_GUIDE.md` - Detailed migration info
- `DEPLOYMENT.md` - How to deploy

---

**You're all set!** The app is running at http://localhost:3000 🚀
