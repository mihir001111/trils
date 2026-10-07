# Manual Hosting Guide for After Trials Web

This guide explains how to manually host your Next.js static export on various platforms.

## Current Build Status

The app is configured for **static export** (`output: 'export'` in next.config.ts).

After running `npm run build`, your static files will be in the `out/` directory.

---

## Quick Start

```bash
# 1. Build the static export
npm run build

# 2. The static files will be in the 'out' directory
# 3. Upload the contents of 'out' to any static hosting service
```

---

## Hosting Options

### Option 1: GitHub Pages (FREE)

**Steps:**

1. Build your site:
   ```bash
   npm run build
   ```

2. The `out/` folder contains your static site

3. Push to GitHub:
   ```bash
   cd out
   git init
   git add .
   git commit -m "Deploy to GitHub Pages"
   git branch -M gh-pages
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin gh-pages --force
   ```

4. Enable GitHub Pages:
   - Go to your repo → Settings → Pages
   - Source: Deploy from branch → `gh-pages` → `/root`
   - Save

5. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

### Option 2: Netlify (FREE tier available)

**Method A: Drag & Drop (Easiest)**

1. Build: `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `out` folder onto the page
4. Done! Your site is live

**Method B: Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --dir=out --prod
```

---

### Option 3: Firebase Hosting (FREE tier available)

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting
# Choose: 'out' as public directory
# Configure as single-page app: No
# Overwrite index.html: No

# Deploy
npm run build
firebase deploy --only hosting
```

---

### Option 4: AWS S3 + CloudFront

**Steps:**

1. Build: `npm run build`

2. Create S3 bucket (e.g., `aftertrials-web`)

3. Enable static website hosting on the bucket

4. Upload `out/` contents to S3:
   ```bash
   aws s3 sync out/ s3://aftertrials-web/ --delete
   ```

5. Create CloudFront distribution pointing to S3 bucket

6. Update DNS to point to CloudFront

---

### Option 5: Simple HTTP Server (Local/VPS)

**For testing locally:**

```bash
# Build first
npm run build

# Serve with Node.js http-server
npx serve out -p 3000

# Or use Python
cd out
python -m http.server 8000

# Or use PHP
cd out
php -S localhost:8000
```

**For production on VPS (using Nginx):**

1. Build and copy to server:
   ```bash
   npm run build
   scp -r out/* user@your-server:/var/www/aftertrials/
   ```

2. Nginx configuration (`/etc/nginx/sites-available/aftertrials`):
   ```nginx
   server {
       listen 80;
       server_name aftertrials.com www.aftertrials.com;
       root /var/www/aftertrials;
       index index.html;

       location / {
           try_files $uri $uri/ $uri.html /index.html;
       }

       # Security headers
       add_header X-Frame-Options "SAMEORIGIN" always;
       add_header X-Content-Type-Options "nosniff" always;
       add_header X-XSS-Protection "1; mode=block" always;

       # Cache static assets
       location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

3. Enable and restart:
   ```bash
   sudo ln -s /etc/nginx/sites-available/aftertrials /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

4. Add SSL with Let's Encrypt:
   ```bash
   sudo certbot --nginx -d aftertrials.com -d www.aftertrials.com
   ```

---

### Option 6: Cloudflare Pages (FREE)

**Method A: Direct Upload**

1. Build: `npm run build`
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
3. Pages → Create a project → Upload assets
4. Upload `out` folder contents
5. Done!

**Method B: Git Integration**

1. Connect your Git repository
2. Build command: `npm run build`
3. Build output directory: `out`
4. Deploy

---

### Option 7: DigitalOcean App Platform

1. Connect repository or upload `out` folder
2. Detect Static Site
3. Deploy

**Or use DigitalOcean Spaces + CDN:**

```bash
# Install s3cmd
pip install s3cmd

# Configure
s3cmd --configure

# Upload
npm run build
s3cmd sync out/ s3://your-space-name/
```

---

## Important Notes

### Environment Variables

Since this is a static export, all environment variables must be set at **build time**:

```env
NEXT_PUBLIC_SUPABASE_URL=https://mzcydbxztotigdubrabb.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**These are baked into the static files during build!**

### Redirects and Headers

With static export, redirects and custom headers from `next.config.ts` won't work automatically. You'll need to configure them on your hosting platform:

**For Netlify** - Create `public/_redirects`:
```
/cookies  /cookie  301
/blog  /blogs  301
```

**For Cloudflare Pages** - Create `public/_redirects`

**For Nginx** - Add to your server config

**For Apache** - Use `.htaccess`

### 404 Page

Next.js will generate a `404.html`. Make sure your hosting is configured to serve it for not-found routes.

---

## Testing Before Deploy

Always test locally:

```bash
npm run build
npx serve out
```

Visit `http://localhost:3000` and test all pages.

---

## Updating Your Site

1. Make changes to code
2. Build: `npm run build`
3. Re-upload `out` folder to hosting
4. Clear CDN cache if applicable

---

## Performance Tips

- Enable Gzip/Brotli compression on server
- Use CDN (CloudFront, Cloudflare, etc.)
- Enable browser caching for static assets
- Consider adding service worker for offline support

---

## Troubleshooting

### Build fails
- Check `npm run type-check` for TypeScript errors
- Verify environment variables are set

### Images not loading
- Ensure `unoptimized: true` is in next.config.ts
- Check image paths are relative

### Supabase connection fails
- Verify environment variables in `.env.local`
- Check CORS settings in Supabase dashboard

### 404 errors
- Configure hosting to serve 404.html
- For client-side routing, use proper rewrites

---

## Recommended: Netlify or Cloudflare Pages

For easiest deployment with zero configuration:
- **Netlify**: Drag & drop or Git integration
- **Cloudflare Pages**: Fast global CDN, free tier

Both handle redirects, headers, and SSL automatically.

---

## Need Help?

Check the build output for the `out/` directory structure:
```bash
npm run build
dir out /s
```
