import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Mascoprint case studies across aerospace, automotive, defence, medical, plastics, glassware, and R&D sectors.',
}

const industries = [
  {
    name: 'Aerospace',
    slug: 'aerospace',
    description: 'Precision printing solutions for aerospace components and equipment.',
  },
  {
    name: 'Automotive',
    slug: 'automotive',
    description: 'Durable printing for automotive parts and assemblies.',
  },
  {
    name: 'Defence',
    slug: 'defence',
    description: 'Secure and reliable printing for defence applications.',
  },
  {
    name: 'Medical',
    slug: 'medical',
    description: 'High-quality printing for medical devices and equipment.',
  },
  {
    name: 'Plastics',
    slug: 'plastics',
    description: 'Specialized printing solutions for plastic components.',
  },
  {
    name: 'Glassware',
    slug: 'glassware',
    description: 'Premium printing for glass products and containers.',
  },
  {
    name: 'R&D',
    slug: 'r-and-d',
    description: 'Flexible printing solutions for research and development.',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Explore our work across diverse industries and applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/case-studies/${industry.slug}`}>
                <Card className="h-full hover:border-primary-600 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle>{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{industry.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
