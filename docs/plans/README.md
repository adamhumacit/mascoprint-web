# Mascoprint Website Rewrite - Implementation Plan

This directory contains the complete implementation plan for rewriting the Mascoprint website from WordPress to Next.js.

## 📚 Plan Documents

Start with the overview and follow the phases in order:

1. **[00-overview.md](./00-overview.md)** - Project context, goals, design decisions, and success criteria
2. **[01-project-setup.md](./01-project-setup.md)** - Initial Next.js setup, dependencies, and configuration
3. **[02-design-system.md](./02-design-system.md)** - Typography, colors, UI components, and layouts
4. **[03-page-implementation.md](./03-page-implementation.md)** - All page implementations (Home, Products, Services, etc.)
5. **[04-content-seo.md](./04-content-seo.md)** - MDX setup, content migration, SEO optimization
6. **[05-deployment.md](./05-deployment.md)** - Docker, VPS deployment, nginx, SSL, monitoring

## 🎯 Quick Reference

### Technology Stack
- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX files (no CMS)
- **Deployment**: Docker on self-hosted VPS
- **Fonts**: Inter (body), Outfit (headings)

### Key Principles
- ✅ Preserve ALL existing content word-for-word
- ✅ Fresh modern color scheme (professional industrial aesthetic)
- ✅ Keep all URL structures the same
- ✅ Modern fonts and visual design
- ✅ Focus on performance and SEO

### Design Decisions
- Logo: Keep existing, extract from current site
- Colors: Open to updating with modern palette
- Typography: Modern (Inter/Outfit)
- URLs: Preserve all existing URLs
- Staging: None - deploy directly

## 🚀 Getting Started

To begin implementation:

1. Read [00-overview.md](./00-overview.md) for full context
2. Follow [01-project-setup.md](./01-project-setup.md) to initialize the project
3. Work through phases 2-5 in sequence

## ⚠️ Critical Reminders

- **Content Preservation**: ALL text must be copied exactly from the current WordPress site
- **Code Examples**: Placeholders in the plan must be replaced with real content
- **WordPress Export**: Use admin access to export all content before starting
- **Logo**: Extract logo file from current site when needed

## 📝 Implementation Checklist

Track your progress through the phases:

- [ ] Phase 1: Project Setup Complete
- [ ] Phase 2: Design System Complete
- [ ] Phase 3: Pages Implemented
- [ ] Phase 4: Content Migrated & SEO Optimized
- [ ] Phase 5: Deployed to Production

## 🔗 Resources

- Current site: https://mascoprint.co.uk
- WordPress admin: https://mascoprint.co.uk/wp-admin
- Contact: office@mascoprint.co.uk

---

**Last Updated**: 2026-02-16
