# Mascoprint Website Rewrite - Overview

## Project Context

Mascoprint.co.uk is currently a WordPress-based industrial printing company website. The goal is to modernize it with:

- **Better Performance**: Fast page loads and optimal SEO
- **Modern Tech Stack**: Move from WordPress to Next.js with MDX content
- **Improved Design**: Modern minimal aesthetic with bold typography
- **Maintainability**: Content as code (MDX files) without admin interface
- **Same Functionality**: Preserve all existing sections, content, and features

## ⚠️ CRITICAL: Content Preservation

**ALL existing content and wording from the current WordPress site MUST be preserved exactly.**

This is a technology and design modernization - NOT a content rewrite. The implementation will:

### What CHANGES ✨
- Technology stack (WordPress → Next.js)
- Visual design and styling (modern minimal aesthetic)
- Page layouts and structure (improved UX)
- Site performance (faster loading, better SEO)
- Content management approach (admin panel → MDX files)

### What STAYS THE SAME 🔒
- **ALL text and copy** - product descriptions, service descriptions, company information
- **ALL blog/news articles** - exact wording, titles, dates, authors
- **ALL case study content** - complete text preservation
- **ALL team bios** - Yvonne & Ian's descriptions
- **ALL legal pages** - Privacy Policy, Terms & Conditions (exact wording)
- **Company details** - contact info, address, phone, email
- **Partner information** - Marabu Inks, Fujifilm, Trelleborg references

### Code Examples vs. Final Content

Throughout this plan, code examples show **placeholder/example content** like:
```typescript
description: 'Custom screen production for all printing applications.'
```

These are **ONLY to demonstrate the code structure**. During implementation:
1. Extract the real content from the current WordPress site
2. Replace ALL placeholders with the exact original wording
3. Preserve formatting, paragraph breaks, lists, emphasis
4. Maintain the same tone and terminology

**The goal**: Visitors should see the same trusted content they're familiar with, just presented in a faster, more modern package.

## Current Website Analysis

**Business**: Family-run industrial printing company specializing in screen and pad printing manufacturing with 50+ years experience.

**Sectors Served**: Aerospace, automotive, defence, medical, plastics

**Main Sections**:
- Home
- Products (CP12, hand-bases, Tampograf pad printers)
- Services (screen manufacturing, artwork, training, consultancy)
- Case Studies (7 industries: Aerospace, Automotive, Defence, Medical, Plastics, Glassware, R&D)
- News/Blog
- Contact
- About/Team

**Current Stack**: WordPress with TwentyTwenty-Three theme

## Technology Stack

- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Styling**: Tailwind CSS v3+
- **Content**: MDX files for pages and blog posts
- **Image Optimization**: Next.js Image component with sharp
- **SEO**: next-seo, structured data, meta tags
- **Forms**: React Hook Form + server actions for contact form
- **Deployment**: Docker container on self-hosted VPS with nginx reverse proxy
- **Analytics**: Google Analytics 4

## Design Direction

**Modern Minimal with Bold Typography**:
- Large, bold headings (text-4xl to text-6xl)
- Generous whitespace
- Limited color palette (2-3 colors + neutrals)
- High-quality photography
- Clean grid layouts
- Subtle animations
- Sans-serif fonts throughout

## Implementation Phases

1. **[Phase 1: Project Setup & Foundation](./01-project-setup.md)**
   - Next.js initialization
   - Tailwind configuration
   - TypeScript setup
   - Project structure

2. **[Phase 2: Design System & Core Components](./02-design-system.md)**
   - Typography and color system
   - UI component library
   - Layout components (Header, Footer)
   - Responsive patterns

3. **[Phase 3: Page Implementation](./03-page-implementation.md)**
   - Home page
   - Products and Services
   - Case Studies
   - News/Blog
   - Contact page
   - About/Team

4. **[Phase 4: Content & SEO](./04-content-seo.md)**
   - MDX configuration
   - Content migration
   - SEO optimization
   - Structured data
   - Performance optimization

5. **[Phase 5: Deployment & Infrastructure](./05-deployment.md)**
   - Docker setup
   - VPS deployment
   - Nginx configuration
   - SSL certificates
   - CI/CD considerations

## Success Criteria

- ✅ All existing pages migrated and accessible
- ✅ Contact form functional with email delivery
- ✅ Lighthouse Performance score 90+
- ✅ Lighthouse SEO score 100
- ✅ Mobile responsive on all screen sizes
- ✅ Docker deployment successful on VPS
- ✅ HTTPS enabled with valid SSL
- ✅ Google Analytics tracking active
- ✅ All images optimized and loading correctly
- ✅ Modern minimal design implemented consistently

## Design Decisions

**Branding & Visual Design**:
- **Logo**: Keep existing logo as-is, extract from current site when needed
- **Colors**: Open to updating - can use fresh modern color palette (professional industrial feel)
- **Typography**: Use modern fonts (Inter for body, Outfit for headings) - upgrade from Century Gothic
- **Design Style**: Modern minimal with bold typography (as outlined above)

**Technical Decisions**:
- **WordPress Access**: Admin access available for content export
- **Email/SMTP**: Configure later during contact form implementation
- **Hosting**: Deploy to new VPS (to be provisioned)
- **Staging**: No staging environment - deploy directly to production
- **URL Structure**: Keep all URLs exactly the same (no redirects needed)
- **Social Media**: Maintain existing Twitter and YouTube links