# Phase 3: Page Implementation

## Overview

Implement all main pages of the website using the design system and components from Phase 2. This includes Home, Products, Services, Case Studies, News, Contact, and About pages.

## ⚠️ IMPORTANT: About Code Examples Below

**The code examples in this phase show PLACEHOLDER CONTENT for demonstration purposes.**

Examples like:
```typescript
<h1>50+ Years of Printing Excellence</h1>
<p>Family-run industrial printing company...</p>
```

These are **NOT the final content**. During implementation:
1. **Extract the actual text** from the current WordPress site at https://mascoprint.co.uk
2. **Replace ALL placeholder content** with exact wording from the current site
3. **Preserve every word** - do not paraphrase or modify

See **[Phase 4: Content & SEO](./04-content-seo.md) Step 6** for detailed content extraction and migration process.

The code examples below demonstrate:
- Page structure and layout
- Component usage
- TypeScript types
- Responsive design patterns

But all text content must come from the existing site.

## Page Structure

All pages follow the same pattern:
1. Export metadata for SEO
2. Use layout components (Container, Section)
3. Apply design system (typography, spacing, colors)
4. Implement responsive design
5. **Replace placeholder text with exact content from current site**

## Step 1: Home Page

**[src/app/page.tsx](../src/app/page.tsx)**:

```typescript
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="lg" className="bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="max-w-4xl">
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
              50+ Years of Printing Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Family-run industrial printing company specializing in screen and pad
              printing manufacturing. Serving aerospace, automotive, defence, medical,
              and plastics sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section spacing="lg">
        <Container>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-12 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Featured Products */}
      <Section spacing="lg" className="bg-gray-50">
        <Container>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-12 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.name}>
                <div className="aspect-video bg-gray-200 rounded-t-lg mb-4 -m-6 mb-0">
                  {/* Product image placeholder */}
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section spacing="lg">
        <Container>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-12 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <div className="aspect-square bg-gray-200 rounded-lg mb-4 -m-6 mb-0"></div>
              <CardHeader>
                <CardTitle>Yvonne Mason</CardTitle>
                <p className="text-gray-600">Director</p>
              </CardHeader>
            </Card>
            <Card>
              <div className="aspect-square bg-gray-200 rounded-lg mb-4 -m-6 mb-0"></div>
              <CardHeader>
                <CardTitle>Ian Mason</CardTitle>
                <p className="text-gray-600">Managing Director</p>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" className="bg-primary-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with our team to discuss your printing requirements.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}

const services = [
  {
    title: 'Screen Manufacturing',
    description: 'Custom screen production for all printing applications.',
  },
  {
    title: 'Artwork Origination',
    description: 'Professional artwork preparation and film production.',
  },
  {
    title: 'Cliche Plate Manufacture',
    description: 'High-quality cliche plates for pad printing.',
  },
  {
    title: 'Training',
    description: 'Expert training in cylindrical, flat screen, and pad printing.',
  },
  {
    title: 'Consultancy',
    description: 'Technical advice and troubleshooting services.',
  },
  {
    title: 'R&D Support',
    description: 'Research and development for custom printing solutions.',
  },
]

const products = [
  {
    name: 'CP12 Cylindrical Printer',
    description: 'Semi-automatic cylindrical screen-printing machine.',
  },
  {
    name: 'Custom Hand-Bases',
    description: 'Bespoke hand-bases for 3D article printing.',
  },
  {
    name: 'Tampograf Pad Printers',
    description: 'Professional pad printing equipment.',
  },
]
```

## Step 2: Products Page

**[src/app/products/page.tsx](../src/app/products/page.tsx)**:

```typescript
import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Mascoprint offers professional screen and pad printing equipment including CP12 cylindrical printers, custom hand-bases, and Tampograf pad printers.',
}

export default function ProductsPage() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl mb-16">
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional printing equipment designed for industrial applications.
              All our products are backed by decades of expertise and comprehensive
              support.
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="aspect-video bg-gray-200 rounded-lg"></div>
                <div>
                  <h2 className="font-display font-bold text-3xl mb-4">
                    {product.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {product.description}
                  </p>
                  {product.features && (
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Button asChild>
                    <Link href="/contact">Request Information</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

const products = [
  {
    id: 'cp12',
    name: 'CP12 Semi-Automatic Cylindrical Screen-Printing Machine',
    description:
      'Our flagship CP12 is a versatile semi-automatic machine designed for cylindrical screen printing applications.',
    features: [
      'Semi-automatic operation for efficiency',
      'Suitable for various cylindrical objects',
      'Precise registration and positioning',
      'Robust construction for industrial use',
    ],
  },
  {
    id: 'hand-bases',
    name: 'Custom Hand-Bases for 3D Articles',
    description:
      'Bespoke hand-bases manufactured to your exact specifications for printing on complex 3D shapes.',
    features: [
      'Custom designed for your specific needs',
      'Precision engineered for accurate registration',
      'Compatible with various printing systems',
      'Durable construction for long-term use',
    ],
  },
  {
    id: 'tampograf',
    name: 'Tampograf Pad Printers',
    description:
      'Professional-grade pad printing equipment for precision transfer printing applications.',
    features: [
      'Accurate ink transfer',
      'Suitable for complex surfaces',
      'Reliable and consistent results',
      'Full training and support included',
    ],
  },
]
```

## Step 3: Services Page

**[src/app/services/page.tsx](../src/app/services/page.tsx)**:

```typescript
import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Mascoprint provides screen manufacturing, artwork origination, cliche plate manufacture, training, and consultancy services for the printing industry.',
}

export default function ServicesPage() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl mb-16">
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive printing services backed by 50+ years of expertise.
              From screen manufacturing to training and consultancy, we support
              your printing needs at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    {/* Icon placeholder */}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {service.details && (
                    <ul className="space-y-1 text-sm text-gray-600">
                      {service.details.map((detail, i) => (
                        <li key={i}>• {detail}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

const services = [
  {
    title: 'Screen Manufacturing',
    description:
      'Custom screen production for all your printing applications, manufactured to exacting standards.',
    details: [
      'Cylindrical screens',
      'Flat screens',
      'Custom mesh specifications',
      'Quick turnaround times',
    ],
  },
  {
    title: 'Artwork Origination',
    description:
      'Professional artwork preparation and film production services ensuring perfect print reproduction.',
    details: [
      'Digital artwork preparation',
      'Film production',
      'Color separation',
      'Quality control checks',
    ],
  },
  {
    title: 'Cliche Plate Manufacture',
    description:
      'High-precision cliche plates for pad printing applications, produced using advanced photopolymer technology.',
    details: [
      'Photopolymer plates',
      'Custom depths and sizes',
      'Fine detail reproduction',
      'Fast production times',
    ],
  },
  {
    title: 'Training',
    description:
      'Expert training programs covering all aspects of screen and pad printing techniques.',
    details: [
      'Cylindrical screen printing',
      'Flat screen printing',
      'Pad printing techniques',
      'Equipment maintenance',
    ],
  },
  {
    title: 'Consultancy & Troubleshooting',
    description:
      'Technical consultancy services to help you optimize your printing processes and resolve issues.',
    details: [
      'Process optimization',
      'Problem diagnosis',
      'Equipment recommendations',
      'Quality improvement',
    ],
  },
  {
    title: 'R&D Support',
    description:
      'Research and development support for custom printing solutions and new applications.',
    details: [
      'Custom solution development',
      'Prototype testing',
      'Material compatibility testing',
      'Process development',
    ],
  },
]
```

## Step 4: Case Studies Pages

**[src/app/case-studies/page.tsx](../src/app/case-studies/page.tsx)**:

```typescript
import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Explore our case studies across aerospace, automotive, defence, medical, plastics, glassware, and R&D sectors.',
}

export default function CaseStudiesPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="max-w-3xl mb-16">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover how we've helped clients across diverse industries with
            specialized printing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/case-studies/${industry.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-50 rounded-t-lg -m-6 mb-0"></div>
                <CardHeader>
                  <CardTitle>{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}

const industries = [
  {
    name: 'Aerospace',
    slug: 'aerospace',
    description: 'Precision printing solutions for the aerospace industry.',
  },
  {
    name: 'Automotive',
    slug: 'automotive',
    description: 'Durable printing for automotive components and parts.',
  },
  {
    name: 'Defence',
    slug: 'defence',
    description: 'Specialized printing services for defence applications.',
  },
  {
    name: 'Medical',
    slug: 'medical',
    description: 'Compliant printing solutions for medical devices.',
  },
  {
    name: 'Plastics',
    slug: 'plastics',
    description: 'Expert printing on plastic components and products.',
  },
  {
    name: 'Glassware',
    slug: 'glassware',
    description: 'Decorative and functional printing on glass.',
  },
  {
    name: 'R&D',
    slug: 'r-and-d',
    description: 'Research and development printing projects.',
  },
]
```

**Create individual case study pages** (example: [src/app/case-studies/aerospace/page.tsx](../src/app/case-studies/aerospace/page.tsx)):

```typescript
import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Aerospace Case Studies',
  description: 'Precision printing solutions for the aerospace industry.',
}

export default function AerospacePage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="max-w-4xl">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Aerospace
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Content about aerospace printing applications, case studies, and
            expertise will be added from migrated content.
          </p>
        </div>
      </Container>
    </Section>
  )
}
```

Repeat for: automotive, defence, medical, plastics, glassware, r-and-d

## Step 5: Contact Page

See **[Phase 4: Content & SEO](./04-content-seo.md)** for contact form implementation.

## Step 6: About/Team Page

**[src/app/about/page.tsx](../src/app/about/page.tsx)**:

```typescript
import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Mascoprint - a family-run industrial printing company with 50+ years of experience.',
}

export default function AboutPage() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              About Mascoprint
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed">
                Mascoprint is a family-run industrial printing company with over 50
                years of experience in screen and pad printing manufacturing.
              </p>
              <p className="text-gray-600">
                We serve a wide range of sectors including aerospace, automotive,
                defence, medical, and plastics, providing specialized printing
                solutions tailored to each industry's unique requirements.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-gray-50">
        <Container>
          <h2 className="font-display font-bold text-4xl mb-12 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <div className="aspect-square bg-gray-200 rounded-lg mb-6"></div>
              <h3 className="font-display font-bold text-2xl mb-2">
                Yvonne Mason
              </h3>
              <p className="text-primary-600 font-medium mb-4">Director</p>
              <p className="text-gray-600">
                Biography and information about Yvonne will be added here.
              </p>
            </div>
            <div>
              <div className="aspect-square bg-gray-200 rounded-lg mb-6"></div>
              <h3 className="font-display font-bold text-2xl mb-2">Ian Mason</h3>
              <p className="text-primary-600 font-medium mb-4">
                Managing Director
              </p>
              <p className="text-gray-600">
                Biography and information about Ian will be added here.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
```

## Step 7: Legal Pages

**[src/app/privacy-policy/page.tsx](../src/app/privacy-policy/page.tsx)**:

```typescript
import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPolicyPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="max-w-4xl">
          <h1 className="font-display font-bold text-4xl mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            {/* Privacy policy content will be migrated here */}
            <p>Privacy policy content to be added.</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
```

**[src/app/terms-conditions/page.tsx](../src/app/terms-conditions/page.tsx)**: Similar structure

## Checklist

- [ ] Home page implemented with all sections
- [ ] Products page with product listings
- [ ] Services page with service cards
- [ ] Case Studies overview page
- [ ] Individual case study pages (7 total)
- [ ] About/Team page
- [ ] Privacy Policy page
- [ ] Terms & Conditions page
- [ ] All pages responsive
- [ ] All pages have proper metadata
- [ ] Navigation links work correctly

## Next Steps

Proceed to **[Phase 4: Content & SEO](./04-content-seo.md)** for MDX setup, content migration, contact form, and SEO optimization.
