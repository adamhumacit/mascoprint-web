# Phase 2: Design System & Core Components

## Overview

Establish a modern minimal design system with bold typography, create reusable UI components, and implement the core layout components (Header and Footer).

## Design Principles

**Modern Minimal with Bold Typography**:
- Large, impactful headings
- Generous whitespace for breathing room
- Limited color palette for focus
- High-quality photography
- Subtle, purposeful animations
- Professional sans-serif typefaces

## Step 1: Typography System

**Install Fonts** - [src/app/layout.tsx](../src/app/layout.tsx):

```typescript
import { Inter, Outfit } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})
```

**Typography Scale**:
- Headings: Outfit (bold weights: 700, 800)
- Body: Inter (regular: 400, medium: 500, semibold: 600)

**Tailwind Configuration** - Update [tailwind.config.ts](../tailwind.config.ts):

```typescript
fontFamily: {
  sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  display: ['var(--font-outfit)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
},
fontSize: {
  'xs': ['0.75rem', { lineHeight: '1rem' }],
  'sm': ['0.875rem', { lineHeight: '1.5rem' }],
  'base': ['1rem', { lineHeight: '1.75rem' }],
  'lg': ['1.125rem', { lineHeight: '2rem' }],
  'xl': ['1.25rem', { lineHeight: '2rem' }],
  '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
  '3xl': ['2rem', { lineHeight: '2.5rem' }],
  '4xl': ['2.5rem', { lineHeight: '3rem' }],
  '5xl': ['3rem', { lineHeight: '3.5rem' }],
  '6xl': ['3.75rem', { lineHeight: '1' }],
  '7xl': ['4.5rem', { lineHeight: '1' }],
},
```

## Step 2: Color System

**Color Palette** - Update [tailwind.config.ts](../tailwind.config.ts):

```typescript
colors: {
  // Primary - Professional blue/industrial
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  // Neutral grays
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
  // Accent for CTAs
  accent: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
}
```

## Step 3: Spacing & Layout

**Container Configuration** - Update [tailwind.config.ts](../tailwind.config.ts):

```typescript
container: {
  center: true,
  padding: {
    DEFAULT: '1rem',
    sm: '2rem',
    lg: '4rem',
    xl: '5rem',
    '2xl': '6rem',
  },
},
```

## Step 4: Core UI Components

### Button Component

**[src/components/ui/Button.tsx](../src/components/ui/Button.tsx)**:

```typescript
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-600':
              variant === 'primary',
            'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500':
              variant === 'secondary',
            'hover:bg-gray-100 hover:text-gray-900': variant === 'ghost',
            'border-2 border-gray-900 hover:bg-gray-900 hover:text-white':
              variant === 'outline',
          },
          {
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
```

### Card Component

**[src/components/ui/Card.tsx](../src/components/ui/Card.tsx)**:

```typescript
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border border-gray-200 bg-white p-6 shadow-sm',
          'transition-shadow hover:shadow-md',
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mb-4', className)} {...props} />
  )
)
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-2xl font-bold font-display', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-gray-600', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

export { Card, CardHeader, CardTitle, CardContent }
```

### Container Component

**[src/components/ui/Container.tsx](../src/components/ui/Container.tsx)**:

```typescript
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('container mx-auto px-4 sm:px-6 lg:px-8', className)}
        {...props}
      />
    )
  }
)

Container.displayName = 'Container'

export { Container }
```

### Section Component

**[src/components/ui/Section.tsx](../src/components/ui/Section.tsx)**:

```typescript
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: 'sm' | 'md' | 'lg'
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = 'md', ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          {
            'py-12 md:py-16': spacing === 'sm',
            'py-16 md:py-24': spacing === 'md',
            'py-24 md:py-32': spacing === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Section.displayName = 'Section'

export { Section }
```

## Step 5: Header Component

**[src/components/layout/Header.tsx](../src/components/layout/Header.tsx)**:

```typescript
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Container } from '@/components/ui/Container'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  {
    name: 'Case Studies',
    href: '/case-studies',
    submenu: [
      { name: 'Aerospace', href: '/case-studies/aerospace' },
      { name: 'Automotive', href: '/case-studies/automotive' },
      { name: 'Defence', href: '/case-studies/defence' },
      { name: 'Medical', href: '/case-studies/medical' },
      { name: 'Plastics', href: '/case-studies/plastics' },
      { name: 'Glassware', href: '/case-studies/glassware' },
      { name: 'R&D', href: '/case-studies/r-and-d' },
    ],
  },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold font-display">Mascoprint</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white shadow-lg rounded-lg border border-gray-200 py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-6 text-sm">
            <a
              href="tel:+441582791190"
              className="text-gray-600 hover:text-primary-600"
            >
              +44 (0)1582 791190
            </a>
            <a
              href="mailto:office@mascoprint.co.uk"
              className="text-gray-600 hover:text-primary-600"
            >
              office@mascoprint.co.uk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {/* Hamburger icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-primary-600 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block text-sm text-gray-600 hover:text-primary-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}
```

## Step 6: Footer Component

**[src/components/layout/Footer.tsx](../src/components/layout/Footer.tsx)**:

```typescript
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Mascoprint</h3>
            <p className="text-sm text-gray-600 mb-2">
              Stags End Cottage Barn
              <br />
              Gaddesden Row
              <br />
              Hemel Hempstead
              <br />
              Hertfordshire
            </p>
            <p className="text-sm text-gray-600">
              <strong>Phone:</strong>{' '}
              <a href="tel:+441582791190" className="hover:text-primary-600">
                +44 (0)1582 791190
              </a>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:office@mascoprint.co.uk"
                className="hover:text-primary-600"
              >
                office@mascoprint.co.uk
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-primary-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-600 hover:text-primary-600">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-600 hover:text-primary-600">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners & Social */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Our Partners</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* Partner logos will be added later */}
              <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-400">Marabu</span>
              </div>
              <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-400">Fujifilm</span>
              </div>
              <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-400">Trelleborg</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/mascoprint"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@mascoprint"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600"
              >
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; 2024 Mascoprint. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <p>Company No: 1040660</p>
            <p>VAT: GB 196 9926 85</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-primary-600">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-primary-600">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
```

## Step 7: Root Layout

**[src/app/layout.tsx](../src/app/layout.tsx)**:

```typescript
import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Mascoprint - Screen & Pad Printing Specialists',
    template: '%s | Mascoprint',
  },
  description:
    'Family-run industrial printing company specializing in screen and pad printing manufacturing with 50+ years experience. Serving aerospace, automotive, defence, medical, and plastics sectors.',
  keywords: [
    'screen printing',
    'pad printing',
    'industrial printing',
    'cylindrical printing',
    'aerospace printing',
    'automotive printing',
  ],
  authors: [{ name: 'Mascoprint' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mascoprint.co.uk',
    siteName: 'Mascoprint',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

## Checklist

- [ ] Typography system configured (Inter, Outfit fonts)
- [ ] Color palette defined in Tailwind config
- [ ] Container and spacing configured
- [ ] Button component created
- [ ] Card component created
- [ ] Container component created
- [ ] Section component created
- [ ] Header component with navigation
- [ ] Footer component with company info
- [ ] Root layout updated with fonts and structure
- [ ] Components render correctly

## Next Steps

Proceed to **[Phase 3: Page Implementation](./03-page-implementation.md)** to build out all the main pages of the website.
