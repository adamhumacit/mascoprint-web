# Phase 1: Project Setup & Foundation

## Overview

Set up the Next.js project with TypeScript, Tailwind CSS, and all necessary dependencies. Establish the project structure and configuration files.

## Step 1: Initialize Next.js Project

```bash
npx create-next-app@latest mascoprint-web --typescript --tailwind --app --src-dir --import-alias "@/*"
cd mascoprint-web
```

Answer prompts:
- ✅ TypeScript
- ✅ ESLint
- ✅ Tailwind CSS
- ✅ `src/` directory
- ✅ App Router
- ✅ Import alias (@/*)
- ❌ Customize default import alias (use default @/*)

## Step 2: Install Dependencies

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
npm install react-hook-form
npm install next-seo
npm install sharp
npm install clsx tailwind-merge
npm install -D @types/mdx
```

**Package purposes**:
- `@next/mdx` - MDX support in Next.js
- `react-hook-form` - Form validation
- `next-seo` - SEO meta tags
- `sharp` - Image optimization
- `clsx`, `tailwind-merge` - Utility for merging Tailwind classes

## Step 3: Project Structure

Create the following directory structure:

```
mascoprint-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── products/
│   │   ├── services/
│   │   ├── case-studies/
│   │   ├── news/
│   │   ├── contact/
│   │   ├── about/
│   │   ├── privacy-policy/
│   │   └── terms-conditions/
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   └── forms/
│   ├── content/
│   │   └── news/
│   ├── lib/
│   │   ├── mdx.ts
│   │   ├── metadata.ts
│   │   └── utils.ts
│   └── types/
├── public/
│   ├── images/
│   │   ├── products/
│   │   ├── team/
│   │   ├── partners/
│   │   └── news/
│   └── favicon.ico
├── docs/
│   └── plans/
├── .env.local
├── .env.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── Dockerfile
└── docker-compose.yml
```

## Step 4: Configure Next.js

**next.config.js**:
```javascript
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  output: 'standalone', // For Docker deployment
}

module.exports = withMDX(nextConfig)
```

## Step 5: Configure TypeScript

**tsconfig.json** (verify/update):
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Step 6: Configure Tailwind CSS

**tailwind.config.ts**:
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Will be defined in Phase 2
      },
      spacing: {
        // Custom spacing if needed
      },
    },
  },
  plugins: [],
}
export default config
```

## Step 7: Setup Utility Functions

**src/lib/utils.ts**:
```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Step 8: Environment Variables

**.env.example**:
```env
# Analytics
NEXT_PUBLIC_GA_ID=

# Contact Form
CONTACT_EMAIL_TO=office@mascoprint.co.uk
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://mascoprint.co.uk
```

**.env.local** (create from example, add real values):
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
CONTACT_EMAIL_TO=office@mascoprint.co.uk
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-user
SMTP_PASS=your-password
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Step 9: Setup MDX Types

**src/types/mdx.d.ts**:
```typescript
declare module '*.mdx' {
  import { MDXProps } from 'mdx/types'
  export default function MDXContent(props: MDXProps): JSX.Element
}
```

**mdx-components.tsx** (in root):
```typescript
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-4 mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mb-3 mt-6">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
    ...components,
  }
}
```

## Step 10: ESLint & Prettier

**.eslintrc.json** (verify):
```json
{
  "extends": "next/core-web-vitals"
}
```

**.prettierrc** (create):
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

## Step 11: Git Setup

**.gitignore** (verify includes):
```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

## Step 12: Verify Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
# Verify the default Next.js page loads

# Build to check for errors
npm run build

# Type check
npx tsc --noEmit
```

## Checklist

- [ ] Next.js project initialized with TypeScript
- [ ] Tailwind CSS configured
- [ ] MDX dependencies installed
- [ ] Project directory structure created
- [ ] Environment variables setup (.env.example, .env.local)
- [ ] MDX types configured
- [ ] Utility functions created
- [ ] ESLint and Prettier configured
- [ ] Git repository initialized (if needed)
- [ ] Development server runs without errors
- [ ] Build completes successfully

## Next Steps

Proceed to **[Phase 2: Design System & Core Components](./02-design-system.md)** to establish the visual design system and create reusable UI components.
