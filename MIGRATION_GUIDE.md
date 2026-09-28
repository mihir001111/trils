# Migration Guide: HTML → Next.js

## Overview

This document explains the migration from the static HTML/JS version to the production-ready Next.js application.

## Key Changes

### 1. Architecture

**Before (HTML)**
- Static HTML files
- Vanilla JavaScript
- Client-side only rendering
- Manual DOM manipulation

**After (Next.js)**
- React components
- TypeScript for type safety
- Server-side rendering + static generation
- React state management

### 2. File Structure

**Before:**
```
/
├── index.html
├── main.js
├── supabase-auth.js
├── i18n.js
├── translations.js
└── assets/
```

**After:**
```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   └── sections/
├── lib/
│   ├── supabase/
│   ├── supabase-auth.ts
│   ├── constants.ts
│   └── i18n.ts
└── public/
```

### 3. Authentication Flow

The multi-step onboarding has been refactored into a single component with phase management:

**HTML Version:**
```javascript
// Phase switching via classList manipulation
phaseProse.classList.add('hidden');
phasePassword.classList.remove('hidden');
```

**Next.js Version:**
```typescript
// React state-based phase management
const [phase, setPhase] = useState<Phase>('prose');
setPhase('password');
```

### 4. Supabase Integration

**HTML Version:**
```javascript
// Global window object
window.supabaseClient = supabase.createClient(url, key);
window.SupabaseAuth = { signUpUser, ... };
```

**Next.js Version:**
```typescript
// Proper imports and modules
import { createClient } from '@/lib/supabase/client';
import { signUpUser } from '@/lib/supabase-auth';
```

### 5. Styling

**HTML Version:**
- Inline `<style>` tags
- CSS custom properties
- No build step

**Next.js Version:**
- `globals.css` for global styles
- Tailwind CSS utility classes (optional)
- PostCSS processing
- CSS modules available

### 6. Form Handling

**HTML Version:**
```javascript
document.getElementById('input-name').value
```

**Next.js Version:**
```typescript
const [formData, setFormData] = useState({...});
<input value={formData.name} onChange={handleChange} />
```

## Component Breakdown

### OnboardingSection.tsx

Replaces the entire signup flow from `index.html` and `main.js`:

- **ProsePhase**: Initial form with inline inputs
- **PasswordPhase**: Password creation
- **OtpPhase**: Email verification
- **SuccessPhase**: Completion screen

### HeroSection.tsx

Replaces hero HTML with:
- React component
- Smooth scroll functionality
- Responsive typography

### CommunitySection.tsx

Replaces counter animation with:
- React hooks for animation
- Intersection Observer for triggering
- Supabase stats fetching

## Security Improvements

1. **XSS Protection**
   - DOMPurify integration
   - Input sanitization
   - Output escaping

2. **Type Safety**
   - TypeScript throughout
   - Runtime validation
   - Compile-time checks

3. **Headers**
   - CSP, HSTS, X-Frame-Options
   - Configured in `next.config.ts`

4. **Environment Variables**
   - Proper `.env.local` handling
   - No secrets in client code

## Performance Improvements

1. **Code Splitting**
   - Automatic with Next.js
   - Dynamic imports where needed

2. **Image Optimization**
   - Next.js Image component
   - Automatic format conversion
   - Responsive images

3. **Font Optimization**
   - `next/font` for Google Fonts
   - Self-hosting with subsetting

4. **Caching**
   - Automatic static optimization
   - ISR for dynamic pages
   - HTTP caching headers

## SEO Improvements

1. **Metadata**
   - Structured in `layout.tsx`
   - OpenGraph tags
   - Twitter Cards

2. **Sitemap**
   - Automatic generation
   - Dynamic updates

3. **Semantic HTML**
   - Proper heading hierarchy
   - ARIA labels where needed

## Testing Strategy

### Manual Testing Checklist

- [ ] Signup flow (all 4 phases)
- [ ] Email verification
- [ ] Error handling
- [ ] Referral link generation
- [ ] Stats counter animation
- [ ] Responsive design
- [ ] Form validation
- [ ] OTP resend
- [ ] Password visibility toggle

### Automated Testing (Recommended)

```bash
# Unit tests
npm test

# E2E tests (with Playwright)
npm run test:e2e

# Type checking
npm run type-check
```

## Backward Compatibility

### URLs
All routes maintained:
- `/` → Home
- `/privacy` → Privacy Policy
- `/terms` → Terms
- `/blogs` → Blog listing

### Referral Codes
- Same format: `AT-XXXXXXXXXX`
- Compatible with existing codes
- Stored in localStorage

### Database Schema
- No changes required
- Same tables and columns
- RLS policies unchanged

## Migration Steps for Existing Site

1. **Backup Current Site**
   ```bash
   # If on Vercel
   vercel download
   ```

2. **Test New Version**
   ```bash
   npm install
   npm run build
   npm run start
   ```

3. **Deploy to Staging**
   - Create preview deployment
   - Test thoroughly
   - Verify all functionality

4. **Deploy to Production**
   - Use blue-green deployment if possible
   - Monitor error rates
   - Be ready to rollback

5. **Post-Deployment**
   - Check analytics
   - Monitor performance
   - Gather user feedback

## Common Issues & Solutions

### Issue: Fonts not loading
**Solution:** Ensure Google Fonts are properly configured in `layout.tsx`

### Issue: Supabase auth fails
**Solution:** Verify environment variables are set correctly

### Issue: Build fails
**Solution:** Run `npm run type-check` to find TypeScript errors

### Issue: Styling differs from original
**Solution:** Check `globals.css` and ensure all CSS variables are defined

## Support

For questions during migration:
1. Check this guide
2. Review component documentation
3. Check Next.js docs: https://nextjs.org/docs
4. Contact development team

---

Last updated: 2026-01-XX
