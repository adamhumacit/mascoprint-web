import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Explore Mascoprint case studies across aerospace, automotive, defence, medical, plastics, glassware, and R&D sectors. See how our printing solutions solve industry challenges.',
  openGraph: {
    title: 'Case Studies - Mascoprint',
    description: 'Industrial printing case studies across aerospace, automotive, defence, medical, and plastics sectors.',
    url: 'https://mascoprint.co.uk/case-studies',
    siteName: 'Mascoprint',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'Case Studies - Mascoprint',
    description: 'Industrial printing case studies across multiple sectors.',
  },
  alternates: {
    canonical: 'https://mascoprint.co.uk/case-studies',
  },
}

const industries = [
  {
    name: 'Aerospace',
    slug: 'aerospace',
    description: 'Precision printing solutions for aerospace components and equipment.',
    number: '01',
  },
  {
    name: 'Automotive',
    slug: 'automotive',
    description: 'Durable printing for automotive parts and assemblies.',
    number: '02',
  },
  {
    name: 'Defence',
    slug: 'defence',
    description: 'Secure and reliable printing for defence applications.',
    number: '03',
  },
  {
    name: 'Medical',
    slug: 'medical',
    description: 'High-quality printing for medical devices and equipment.',
    number: '04',
  },
  {
    name: 'Plastics',
    slug: 'plastics',
    description: 'Specialized printing solutions for plastic components.',
    number: '05',
  },
  {
    name: 'Glassware',
    slug: 'glassware',
    description: 'Premium printing for glass products and containers.',
    number: '06',
  },
  {
    name: 'R&D',
    slug: 'r-and-d',
    description: 'Flexible printing solutions for research and development.',
    number: '07',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="lg" className="relative overflow-hidden pt-14 md:pt-20 pb-10 md:pb-14">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/[0.02] via-brand-600/[0.01] to-slate-900/[0.02]" />
        <Container>
          <div className="max-w-4xl relative">
            <div className="inline-block px-4 py-1.5 bg-brand-600/10 border border-brand-600/20 rounded-full mb-6">
              <span className="text-sm font-bold text-brand-700 tracking-wide uppercase">
                Our Work
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 leading-[0.95]">
              Case
              <br />
              <span className="text-brand-600">Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              Our experience has earned our highly respected name in the industry. We offer industrial screen and pad printing solutions across many sectors.
            </p>
          </div>
        </Container>
      </Section>

      {/* Industries Grid */}
      <Section spacing="md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/case-studies/${industry.slug}`}>
                <div className="group relative">
                  {/* Large number background */}
                  <div className="absolute -top-6 -right-4 text-9xl font-bold text-brand-600/5 leading-none pointer-events-none">
                    {industry.number}
                  </div>

                  <div className="relative h-full bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-bold text-brand-600 tracking-wider uppercase">
                          {industry.number}
                        </div>
                        <svg
                          className="w-6 h-6 text-gray-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>

                      <h3 className="font-display text-3xl font-bold group-hover:text-brand-600 transition-colors">
                        {industry.name}
                      </h3>

                      <div className="h-1 w-12 bg-brand-600/20 group-hover:bg-brand-600 group-hover:w-20 rounded-full transition-all" />

                      <p className="text-gray-600 leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-12 py-20 text-center">
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
                backgroundSize: '32px 32px'
              }}
            />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to discuss
                <br />
                your project?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Get in touch to learn how our expertise can benefit your specific industry needs.
              </p>
              <Link href="/contact">
                <button className="bg-brand-600 hover:bg-brand-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-lg shadow-xl shadow-brand-600/25 transition-colors">
                  Contact Us Today
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
