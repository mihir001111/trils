# Deployment Guide

## Pre-deployment Checklist

- [ ] All environment variables configured
- [ ] Build passes without errors (`npm run build`)
- [ ] Type checking passes (`npm run type-check`)
- [ ] Linting passes (`npm run lint`)
- [ ] Test the production build locally (`npm run start`)
- [ ] Update `NEXT_PUBLIC_SITE_URL` to production URL
- [ ] Review security headers in `next.config.ts`
- [ ] Verify Supabase RLS policies are enabled
- [ ] Check robots.txt and sitemap
- [ ] Test all form submissions
- [ ] Verify email verification flow
- [ ] Test on multiple devices and browsers

## Deployment Steps

### Vercel Deployment

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository

2. **Configure Project**
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Environment Variables**
   Add these in Vercel dashboard:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://mzcydbxztotigdubrabb.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
   NEXT_PUBLIC_SITE_URL=https://aftertrials.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live!

5. **Custom Domain**
   - Go to Project Settings > Domains
   - Add `aftertrials.com`
   - Configure DNS records as instructed

### Alternative: Netlify

1. **Create New Site**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"

2. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

3. **Environment Variables**
   Add in Site Settings > Build & Deploy > Environment
   
4. **Deploy**

### Alternative: Self-Hosted (PM2)

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Install PM2**
   ```bash
   npm install -g pm2
   ```

3. **Create ecosystem file** (`ecosystem.config.js`):
   ```javascript
   module.exports = {
     apps: [{
       name: 'after-trials-web',
       script: 'npm',
       args: 'start',
       env: {
         NODE_ENV: 'production',
         PORT: 3000,
         NEXT_PUBLIC_SUPABASE_URL: 'your_url',
         NEXT_PUBLIC_SUPABASE_ANON_KEY: 'your_key',
         NEXT_PUBLIC_SITE_URL: 'https://aftertrials.com'
       }
     }]
   };
   ```

4. **Start with PM2**
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

5. **Setup Nginx reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name aftertrials.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Post-Deployment

### Verify Production

- [ ] Homepage loads correctly
- [ ] All sections render properly
- [ ] Signup flow works end-to-end
- [ ] Email verification works
- [ ] Stats counter animates
- [ ] Referral link generation works
- [ ] All links work (footer, navigation)
- [ ] Forms validate correctly
- [ ] Error messages display properly
- [ ] Mobile responsiveness
- [ ] Page speed (target: >90 on PageSpeed Insights)
- [ ] SEO meta tags present (view source)
- [ ] Analytics tracking (if configured)

### Performance Monitoring

1. **Set up monitoring**
   - Enable Vercel Analytics (if using Vercel)
   - Set up Sentry for error tracking
   - Configure uptime monitoring

2. **Monitor key metrics**
   - Core Web Vitals
   - Error rates
   - API response times
   - User conversion rates

### Security Checks

- [ ] HTTPS enabled
- [ ] Security headers present (check with securityheaders.com)
- [ ] No exposed secrets in client-side code
- [ ] Supabase RLS policies active
- [ ] Rate limiting configured (if needed)
- [ ] CORS configured properly

## Rollback Procedure

### Vercel
1. Go to Deployments tab
2. Find previous working deployment
3. Click "..." > "Promote to Production"

### Netlify
1. Go to Deploys
2. Find previous deploy
3. Click "Publish deploy"

### PM2
```bash
# Stop current version
pm2 stop after-trials-web

# Deploy previous version
git checkout <previous-commit>
npm run build
pm2 restart after-trials-web
```

## Troubleshooting

### Build Fails

1. Check build logs for errors
2. Verify all dependencies installed
3. Run `npm run type-check` locally
4. Ensure environment variables are set

### Runtime Errors

1. Check server logs
2. Verify environment variables in production
3. Check Supabase connectivity
4. Review browser console for client errors

### Performance Issues

1. Enable Next.js analytics
2. Check bundle size (`npm run build` output)
3. Verify images are optimized
4. Check for unnecessary re-renders
5. Review database query performance

## Maintenance

### Regular Updates

```bash
# Update dependencies monthly
npm update

# Check for security vulnerabilities
npm audit

# Test after updates
npm run build
npm run type-check
```

### Backup Strategy

- Database: Configure Supabase automatic backups
- Code: Maintained in Git repository
- Environment variables: Store securely in password manager

---

For support, contact the development team.
