# Performance Optimization Guide

This document outlines implemented and recommended performance optimizations for the Mascoprint website.

## ✅ Implemented Optimizations

### 1. **React Hook Form Integration**
- ✅ Replaced manual form state management with `react-hook-form`
- ✅ Reduced re-renders with better form validation
- ✅ Added `onBlur` validation mode for better UX

### 2. **Next.js Configuration**
- ✅ Enabled image optimization (AVIF/WebP)
- ✅ Added image caching (1 year TTL)
- ✅ Enabled gzip compression
- ✅ Removed `console.log` in production
- ✅ Optimized CSS in production builds

### 3. **Resource Hints**
- ✅ Added preconnect for Google Fonts
- ✅ Added DNS prefetch for external resources

### 4. **Loading States**
- ✅ Skeleton loading components
- ✅ Image loading states with fade-in
- ✅ Form submission states

### 5. **Navigation Optimization**
- ✅ Auto-hiding header reduces DOM complexity
- ✅ Touch-friendly dropdowns with better performance

## 🎯 Additional Recommended Optimizations

### High Priority

#### 1. Image Optimization
Convert PNG product images to WebP/AVIF:
```bash
# Install sharp-cli
npm install -g sharp-cli

# Convert PNGs to WebP (smaller file size)
sharp -i public/images/products/cp12-*.png -o public/images/products/ -f webp -q 85
```

**Expected savings:** 40-60% file size reduction

#### 2. Use Dynamic Imports
Update pages to use dynamic imports for below-the-fold components:

**src/app/contact/page.tsx:**
```tsx
import { DynamicContactForm } from '@/components/DynamicComponents'

// Replace:
<ContactForm />
// With:
<DynamicContactForm />
```

**src/app/page.tsx:**
```tsx
import { DynamicPartnerLogos } from '@/components/DynamicComponents'

// Replace:
<PartnerLogos />
// With:
<DynamicPartnerLogos />
```

**Impact:** Reduces initial JavaScript bundle by ~15-25KB

#### 3. Add Viewport Meta Tag
In `src/app/layout.tsx` metadata:
```tsx
export const metadata: Metadata = {
  // ... existing metadata
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}
```

#### 4. Optimize Video Loading
In `src/app/products/page.tsx`, add lazy loading to iframe:
```tsx
<iframe
  src={product.videoUrl}
  className="absolute inset-0 w-full h-full"
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

#### 5. Add Prefetching for Key Routes
In navigation links, add prefetch:
```tsx
<Link href="/contact" prefetch={true}>
  Contact
</Link>
```

### Medium Priority

#### 6. Implement Service Worker (PWA)
Add offline support and caching:
```bash
npm install next-pwa
```

Configure in `next.config.js`:
```js
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})

module.exports = withPWA(withMDX(nextConfig))
```

#### 7. Add Bundle Analyzer
Monitor bundle size over time:
```bash
npm install @next/bundle-analyzer
```

```js
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(withPWA(withMDX(nextConfig)))
```

Run with:
```bash
ANALYZE=true npm run build
```

#### 8. Optimize Third-Party Scripts
If you add Google Analytics or other scripts:
```tsx
import Script from 'next/script'

<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
```

#### 9. Add Intersection Observer for Images
Replace eager loading with intersection observer for below-fold images:
```tsx
<Image
  src="..."
  alt="..."
  loading="lazy" // Add this
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Add blur placeholder
/>
```

#### 10. Optimize CSS
Consider using CSS modules for critical components:
```tsx
// Button.module.css instead of inline Tailwind for critical path
```

### Low Priority (Future Enhancements)

#### 11. Implement HTTP/2 Server Push
Configure server to push critical assets.

#### 12. Add Edge Caching
Deploy with Vercel/Cloudflare for automatic edge caching.

#### 13. Database Query Optimization
When you add CMS/database:
- Use database indexing
- Implement query result caching
- Use incremental static regeneration

#### 14. Add Monitoring
Implement performance monitoring:
```bash
npm install @vercel/analytics
```

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 📊 Performance Metrics to Track

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Additional Metrics
- **Time to First Byte (TTFB):** < 600ms
- **First Contentful Paint (FCP):** < 1.8s
- **Total Blocking Time (TBT):** < 200ms

## 🔍 Measuring Performance

### 1. Lighthouse (Built into Chrome DevTools)
```bash
npm install -g lighthouse
lighthouse https://mascoprint.co.uk --view
```

### 2. WebPageTest
https://www.webpagetest.org/

### 3. Next.js Built-in Analytics
Enable in production to track real user metrics.

### 4. Chrome DevTools Performance Tab
Record and analyze runtime performance.

## 🚀 Quick Wins Summary

1. ✅ **React Hook Form** - Implemented (reduces form re-renders)
2. ⏳ **Dynamic Imports** - Ready to use (see DynamicComponents.tsx)
3. ⏳ **Image Optimization** - Convert PNGs to WebP
4. ⏳ **Lazy Loading** - Add to iframes and below-fold images
5. ⏳ **Route Prefetching** - Add to navigation links

## 📈 Expected Impact

Implementing all high-priority optimizations:
- **Bundle Size:** -20-30%
- **LCP:** -0.5-1.0s
- **FCP:** -0.3-0.5s
- **Lighthouse Score:** +10-15 points

## 🔄 Maintenance

Review performance quarterly:
1. Run Lighthouse audits
2. Check bundle size with analyzer
3. Review Core Web Vitals in Google Search Console
4. Update dependencies for performance fixes
