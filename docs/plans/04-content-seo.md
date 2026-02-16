# Phase 4: Content & SEO

## Overview

Set up MDX for blog content, implement the contact form, migrate content from WordPress, and optimize for SEO with meta tags, structured data, and performance enhancements.

## Step 1: MDX Configuration

**Install dependencies** (if not done in Phase 1):
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter remark-gfm
npm install -D @types/mdx
```

**Create MDX utility** - [src/lib/mdx.ts](../src/lib/mdx.ts):

```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'src/content')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  image?: string
  author?: string
}

export async function getAllPosts(): Promise<Post[]> {
  const newsDir = path.join(contentDirectory, 'news')

  // Create directory if it doesn't exist
  if (!fs.existsSync(newsDir)) {
    return []
  }

  const files = fs.readdirSync(newsDir)
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const filePath = path.join(newsDir, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt || '',
        content,
        image: data.image,
        author: data.author,
      } as Post
    })

  // Sort by date descending
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(contentDirectory, 'news', `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || '',
      content,
      image: data.image,
      author: data.author,
    }
  } catch (error) {
    return null
  }
}
```

## Step 2: News/Blog Pages

**News listing page** - [src/app/news/page.tsx](../src/app/news/page.tsx):

```typescript
import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'News',
  description: 'Latest news and updates from Mascoprint.',
}

export default async function NewsPage() {
  const posts = await getAllPosts()

  return (
    <Section spacing="lg">
      <Container>
        <div className="max-w-3xl mb-16">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            News & Updates
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Stay up to date with the latest news and developments from Mascoprint.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-gray-600">No news articles yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/news/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  {post.image && (
                    <div className="aspect-video bg-gray-200 rounded-t-lg -m-6 mb-0"></div>
                  )}
                  <CardHeader>
                    <div className="text-sm text-gray-500 mb-2">
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </Section>
  )
}
```

**Individual news article** - [src/app/news/[slug]/page.tsx](../src/app/news/[slug]/page.tsx):

```typescript
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function NewsArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <Section spacing="lg">
      <Container>
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="text-sm text-gray-500 mb-4">
              {new Date(post.date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              {post.title}
            </h1>
            {post.author && (
              <p className="text-lg text-gray-600">By {post.author}</p>
            )}
          </header>

          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </Container>
    </Section>
  )
}
```

**Example MDX post** - [src/content/news/example-post.mdx](../src/content/news/example-post.mdx):

```mdx
---
title: "Welcome to Our New Website"
date: "2024-03-15"
excerpt: "We're excited to announce the launch of our newly redesigned website."
author: "Mascoprint Team"
image: "/images/news/new-website.jpg"
---

We're thrilled to announce the launch of our completely redesigned website!

## Modern Design

Our new site features a modern, clean design that makes it easier than ever to find information about our products and services.

## Improved Performance

Built with the latest web technologies, the new site loads faster and provides a better experience on all devices.

## Stay Connected

Be sure to check back regularly for news, updates, and insights from the Mascoprint team.
```

## Step 3: Contact Form Implementation

**Contact form component** - [src/components/forms/ContactForm.tsx](../src/components/forms/ContactForm.tsx):

```typescript
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/Button'

interface FormData {
  name: string
  email: string
  phone?: string
  company?: string
  inquiryType: string
  message: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name *
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">
          Inquiry Type *
        </label>
        <select
          {...register('inquiryType', { required: 'Please select an inquiry type' })}
          id="inquiryType"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        >
          <option value="">Select...</option>
          <option value="products">Products</option>
          <option value="services">Services</option>
          <option value="training">Training</option>
          <option value="consultancy">Consultancy</option>
          <option value="other">Other</option>
        </select>
        {errors.inquiryType && (
          <p className="mt-1 text-sm text-red-600">
            {errors.inquiryType.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          id="message"
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800">
            Thank you for your message! We'll be in touch soon.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800">
            Something went wrong. Please try again or email us directly at
            office@mascoprint.co.uk
          </p>
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} size="lg">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
```

**Contact API route** - [src/app/api/contact/route.ts](../src/app/api/contact/route.ts):

```typescript
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, inquiryType, message } = body

    // Validate required fields
    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL_TO || 'office@mascoprint.co.uk',
      subject: `New Contact Form Submission - ${inquiryType}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Inquiry Type: ${inquiryType}

Message:
${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<p><strong>Company:</strong> ${company || 'Not provided'}</p>
<p><strong>Inquiry Type:</strong> ${inquiryType}</p>
<h3>Message:</h3>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
```

**Install nodemailer**:
```bash
npm install nodemailer
npm install -D @types/nodemailer
```

**Contact page** - [src/app/contact/page.tsx](../src/app/contact/page.tsx):

```typescript
import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ContactForm } from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Mascoprint for printing solutions, equipment, training, or consultancy services.',
}

export default function ContactPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="font-display font-bold text-5xl mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Have a question about our products or services? We'd love to hear
              from you. Fill out the form and we'll get back to you as soon as
              possible.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl mb-2">Address</h3>
                <p className="text-gray-600">
                  Stags End Cottage Barn
                  <br />
                  Gaddesden Row
                  <br />
                  Hemel Hempstead
                  <br />
                  Hertfordshire
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl mb-2">Phone</h3>
                <a
                  href="tel:+441582791190"
                  className="text-primary-600 hover:text-primary-700"
                >
                  +44 (0)1582 791190
                </a>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl mb-2">Email</h3>
                <a
                  href="mailto:office@mascoprint.co.uk"
                  className="text-primary-600 hover:text-primary-700"
                >
                  office@mascoprint.co.uk
                </a>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  )
}
```

## Step 4: SEO Optimization

**Sitemap** - [src/app/sitemap.ts](../src/app/sitemap.ts):

```typescript
import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mascoprint.co.uk'
  const posts = await getAllPosts()

  const newsUrls = posts.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...newsUrls,
  ]
}
```

**Robots.txt** - [src/app/robots.ts](../src/app/robots.ts):

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mascoprint.co.uk'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
```

**Structured data helper** - [src/lib/metadata.ts](../src/lib/metadata.ts):

```typescript
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mascoprint',
    url: 'https://mascoprint.co.uk',
    logo: 'https://mascoprint.co.uk/logo.png',
    description:
      'Family-run industrial printing company specializing in screen and pad printing manufacturing with 50+ years experience.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Stags End Cottage Barn, Gaddesden Row',
      addressLocality: 'Hemel Hempstead',
      addressRegion: 'Hertfordshire',
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44-1582-791190',
      email: 'office@mascoprint.co.uk',
      contactType: 'Customer Service',
    },
    sameAs: [
      'https://twitter.com/mascoprint',
      'https://youtube.com/@mascoprint',
    ],
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Mascoprint',
    image: 'https://mascoprint.co.uk/logo.png',
    '@id': 'https://mascoprint.co.uk',
    url: 'https://mascoprint.co.uk',
    telephone: '+44-1582-791190',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Stags End Cottage Barn, Gaddesden Row',
      addressLocality: 'Hemel Hempstead',
      addressRegion: 'Hertfordshire',
      addressCountry: 'GB',
    },
  }
}
```

**Add to layout** - [src/app/layout.tsx](../src/app/layout.tsx):

```typescript
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/metadata'

// In layout component:
<head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(generateOrganizationSchema()),
    }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(generateLocalBusinessSchema()),
    }}
  />
</head>
```

## Step 5: Performance Optimization

**Image optimization guidelines**:
- Use Next.js Image component everywhere
- Provide width and height attributes
- Use appropriate sizes prop for responsive images
- Convert images to WebP/AVIF formats
- Lazy load images below the fold

**Example**:
```typescript
import Image from 'next/image'

<Image
  src="/images/product.jpg"
  alt="Product name"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority={false} // true for above-fold images
/>
```

## Step 6: Content Migration (PRESERVE EXACT WORDING)

**⚠️ CRITICAL**: This step preserves ALL existing content word-for-word. Do NOT rewrite, paraphrase, or change any text from the current site.

### 6.1: WordPress Content Export

**Using WordPress Admin**:
1. Log into WordPress admin at `https://mascoprint.co.uk/wp-admin`
2. Go to Tools → Export
3. Select "All content" and download the XML file
4. This contains all posts, pages, and metadata

**Direct Database Access (Alternative)**:
```bash
# If you have database access
mysqldump -u username -p database_name > mascoprint_backup.sql

# Or export via phpMyAdmin
# Download wp_posts and wp_postmeta tables
```

**Using WordPress API**:
```bash
# Get all posts via REST API
curl https://mascoprint.co.uk/wp-json/wp/v2/posts > posts.json
curl https://mascoprint.co.uk/wp-json/wp/v2/pages > pages.json
```

### 6.2: Extract Content by Section

Create a content inventory spreadsheet tracking:

| Section | Current URL | Text Content | Images | Notes |
|---------|-------------|--------------|--------|-------|
| Home | / | Hero text, services overview, etc. | Hero image, logos | Copy exactly |
| Products | /products | Product descriptions | Product photos | Preserve all specs |
| Services | /services | Service descriptions | Service icons | Keep all details |
| ... | ... | ... | ... | ... |

### 6.3: Blog/News Posts Migration

**For each WordPress post**:

1. **Export post data**:
   - Title (exact)
   - Date published
   - Author name
   - Featured image
   - Full post content (HTML)
   - Excerpt (if exists)
   - Categories/tags

2. **Convert to MDX format**:

Example - if WordPress has:
```html
<h2>Our New Machine</h2>
<p>We are pleased to announce...</p>
<ul>
  <li>Feature one</li>
  <li>Feature two</li>
</ul>
```

Convert to MDX ([src/content/news/our-new-machine.mdx](../src/content/news/our-new-machine.mdx)):
```mdx
---
title: "Our New Machine"  # EXACT title from WordPress
date: "2024-01-15"  # Original publish date
excerpt: "We are pleased to announce..."  # EXACT excerpt
author: "Mascoprint Team"  # Original author
image: "/images/news/new-machine.jpg"
---

## Our New Machine

We are pleased to announce...

- Feature one
- Feature two
```

**Conversion Tools**:
```bash
# Install conversion helper
npm install wordpress-export-to-markdown -g

# Convert all posts
wordpress-export-to-markdown --input=export.xml --output=src/content/news
```

**Manual Review Required**:
- Verify all formatting preserved
- Check lists, bold/italic maintained
- Ensure links still work
- Confirm images referenced correctly

### 6.4: Static Page Content Migration

**Home Page** - Extract from WordPress home:
1. View source of `https://mascoprint.co.uk/`
2. Copy exact text for:
   - Hero heading (e.g., "50+ Years of Printing Excellence")
   - Hero paragraph/tagline
   - Services section headings and descriptions
   - Call-to-action text
   - Any testimonials or quotes

3. Update [src/app/page.tsx](../src/app/page.tsx) replacing placeholders with exact text:

```typescript
// BEFORE (placeholder):
<h1>50+ Years of Printing Excellence</h1>
<p>Family-run industrial printing company...</p>

// AFTER (from current site):
<h1>{/* EXACT heading from current site */}</h1>
<p>{/* EXACT paragraph from current site */}</p>
```

**Products Page** - Extract from `/products`:
1. For each product (CP12, hand-bases, Tampograf):
   - Product name (exact)
   - Full description (word-for-word)
   - Feature lists (all items)
   - Specifications (if listed)
   - Any disclaimers or notes

2. Create product data structure:

```typescript
// src/data/products.ts
export const products = [
  {
    id: 'cp12',
    name: 'CP12 Semi-Automatic Cylindrical Screen-Printing Machine', // EXACT
    description: `
      [PASTE EXACT DESCRIPTION FROM CURRENT SITE]
    `,
    features: [
      '[EXACT FEATURE 1 FROM CURRENT SITE]',
      '[EXACT FEATURE 2 FROM CURRENT SITE]',
      // ... all features word-for-word
    ],
  },
  // ... other products
]
```

**Services Page** - Extract from `/services`:
1. For each service:
   - Service title (exact)
   - Description (complete text)
   - Details/bullet points (all items)

```typescript
// src/data/services.ts
export const services = [
  {
    title: '[EXACT TITLE FROM CURRENT SITE]',
    description: '[EXACT DESCRIPTION FROM CURRENT SITE]',
    details: [
      '[EXACT DETAIL 1]',
      '[EXACT DETAIL 2]',
      // ... all details
    ],
  },
]
```

**Case Studies** - Extract from each industry page:
1. For Aerospace (`/case-studies/aerospace`):
   - Full page content (all paragraphs)
   - Any project examples (exact descriptions)
   - Technical details (preserve terminology)

2. Repeat for: Automotive, Defence, Medical, Plastics, Glassware, R&D

Create MDX files or page content:
```typescript
// src/app/case-studies/aerospace/page.tsx
export default function AerospacePage() {
  return (
    <div className="prose">
      {/* PASTE EXACT CONTENT FROM CURRENT /case-studies/aerospace PAGE */}
      <p>[Exact paragraph 1...]</p>
      <p>[Exact paragraph 2...]</p>
      {/* etc. */}
    </div>
  )
}
```

**About/Team Page** - Extract from `/about`:
1. Company history text (exact)
2. Team member bios:
   - Yvonne Mason bio (word-for-word)
   - Ian Mason bio (word-for-word)
   - Job titles (exact)

**Legal Pages**:
1. Privacy Policy - Copy entire page content exactly
2. Terms & Conditions - Copy entire page content exactly

```typescript
// src/app/privacy-policy/page.tsx
export default function PrivacyPolicyPage() {
  return (
    <div className="prose max-w-none">
      {/* PASTE EXACT PRIVACY POLICY FROM CURRENT SITE */}
      {/* DO NOT PARAPHRASE OR MODIFY */}
    </div>
  )
}
```

### 6.5: Image Migration

**Download all images**:
1. Use WordPress export or download media library
2. Or scrape images from site:

```bash
# Download all images from current site
wget -r -l 1 -H -t 1 -nd -N -np -A jpg,jpeg,png,gif,svg -e robots=off https://mascoprint.co.uk/wp-content/uploads/

# Organize by category
mkdir -p public/images/{products,team,partners,news,case-studies}
```

**Image inventory**:
| Image | Current URL | New Location | Used On |
|-------|-------------|--------------|---------|
| CP12 machine | /wp-content/uploads/2023/cp12.jpg | /images/products/cp12.jpg | Products page |
| Yvonne Mason | /wp-content/uploads/2023/yvonne.jpg | /images/team/yvonne-mason.jpg | About page |
| ... | ... | ... | ... |

**Optimize images**:
```bash
# Install sharp-cli
npm install -g sharp-cli

# Optimize all images (maintain quality)
sharp -i "public/images/**/*.{jpg,jpeg,png}" -o "public/images" --webp

# Keep originals as fallbacks
```

**Update image references**:
- Note original filenames
- Maintain descriptive alt text (exact from WordPress)
- Update paths in code

### 6.6: Meta Descriptions & SEO Content

Extract from WordPress (Yoast/RankMath or meta tags):

1. **For each page**, record:
   - Page title (exact)
   - Meta description (exact)
   - Focus keywords
   - Social media descriptions (Open Graph)

2. **Update metadata in Next.js**:

```typescript
// src/app/products/page.tsx
export const metadata: Metadata = {
  title: '[EXACT TITLE FROM WORDPRESS META]',
  description: '[EXACT META DESCRIPTION FROM WORDPRESS]',
  keywords: '[EXACT KEYWORDS FROM WORDPRESS]',
  openGraph: {
    title: '[EXACT OG:TITLE FROM WORDPRESS]',
    description: '[EXACT OG:DESCRIPTION FROM WORDPRESS]',
  },
}
```

### 6.7: Content Verification Checklist

**For EACH page**:
- [ ] All headings match exactly
- [ ] All body text matches word-for-word
- [ ] All bullet points/lists complete
- [ ] All links preserved and working
- [ ] All images present with correct alt text
- [ ] No placeholder text remaining
- [ ] Formatting (bold, italic, links) preserved
- [ ] Meta descriptions match original
- [ ] Any legal disclaimers included

**Cross-reference test**:
1. Open current WordPress page
2. Open new Next.js page side-by-side
3. Read through line-by-line
4. Confirm exact text match

### 6.8: Content Migration Script (Helper)

Create a content extraction script:

```javascript
// scripts/extract-content.js
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const pages = [
  { url: 'https://mascoprint.co.uk/', name: 'home' },
  { url: 'https://mascoprint.co.uk/products', name: 'products' },
  { url: 'https://mascoprint.co.uk/services', name: 'services' },
  // ... all pages
];

async function extractContent(url, name) {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  // Remove header, footer, scripts
  $('header, footer, script, style').remove();

  // Extract main content
  const content = $('main, .content, article').html();

  // Save to file
  fs.writeFileSync(`content-extracted/${name}.html`, content);
  console.log(`Extracted: ${name}`);
}

pages.forEach(page => extractContent(page.url, page.name));
```

Run: `node scripts/extract-content.js`

This creates HTML snapshots of current content for reference during migration.

### 6.9: WordPress to Next.js Content Mapping

| WordPress Location | Next.js Location | Content Type | Status |
|--------------------|------------------|--------------|--------|
| Home page | src/app/page.tsx | React component | ⏳ |
| /products | src/app/products/page.tsx | React component | ⏳ |
| /services | src/app/services/page.tsx | React component | ⏳ |
| /case-studies/aerospace | src/app/case-studies/aerospace/page.tsx | React component | ⏳ |
| Blog posts | src/content/news/*.mdx | MDX files | ⏳ |
| /privacy-policy | src/app/privacy-policy/page.tsx | React component | ⏳ |
| /terms | src/app/terms-conditions/page.tsx | React component | ⏳ |
| Images | public/images/* | Static files | ⏳ |

Mark each ✅ when verified content matches exactly.

### 6.10: Final Content Verification

Before going live:

1. **Side-by-side comparison**:
   - Open old and new sites
   - Compare every page
   - Verify text matches exactly

2. **Stakeholder review**:
   - Have Yvonne and Ian review
   - Check company descriptions
   - Verify technical terminology
   - Approve team bios

3. **Legal review** (if applicable):
   - Privacy Policy unchanged
   - Terms & Conditions unchanged
   - Any compliance text preserved

**Sign-off checklist**:
- [ ] All page content reviewed and approved
- [ ] No content changes or paraphrasing
- [ ] Images all present and correct
- [ ] Team bios approved by Yvonne & Ian
- [ ] Product descriptions technically accurate
- [ ] Contact information correct
- [ ] Legal pages word-for-word match

## REMEMBER: This is a TECHNOLOGY upgrade, NOT a content rewrite. Every word matters.

## Checklist

- [ ] MDX configuration complete
- [ ] News listing page implemented
- [ ] Individual news article pages working
- [ ] Contact form implemented with validation
- [ ] Contact API route configured
- [ ] Email sending tested
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] Structured data added (Organization, LocalBusiness)
- [ ] Images optimized with Next.js Image
- [ ] Content migrated from WordPress
- [ ] All pages have proper metadata

## Next Steps

Proceed to **[Phase 5: Deployment & Infrastructure](./05-deployment.md)** for Docker setup and VPS deployment.
