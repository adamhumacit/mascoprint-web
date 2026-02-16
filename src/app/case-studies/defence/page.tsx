import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Defence Case Studies',
  description: 'Secure and reliable screen and pad printing solutions for defence applications. Trusted industrial printing services for military and defence equipment from Mascoprint.',
  openGraph: {
    title: 'Defence Case Studies - Mascoprint',
    description: 'Secure and reliable printing solutions for defence applications with proven expertise.',
    url: 'https://mascoprint.co.uk/case-studies/defence',
    siteName: 'Mascoprint',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'Defence Case Studies - Mascoprint',
    description: 'Secure printing solutions for the defence industry.',
  },
  alternates: {
    canonical: 'https://mascoprint.co.uk/case-studies/defence',
  },
}

export default function DefencePage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="sm" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/[0.02] via-brand-600/[0.01] to-slate-900/[0.02]" />
        <Container>
          <div className="relative">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-600 transition-colors mb-8 group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Case Studies
            </Link>

            <div className="max-w-4xl">
              <div className="inline-block px-4 py-1.5 bg-brand-600/10 border border-brand-600/20 rounded-full mb-6">
                <span className="text-sm font-bold text-brand-700 tracking-wide uppercase">
                  Case Study
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Defence
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Rugged Marking Solutions for Military Equipment
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Content Sections */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Section 1: Project Overview */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 text-8xl font-bold text-brand-600/5 leading-none">01</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-1 w-12 bg-brand-600 rounded-full" />
                  <h2 className="font-display text-3xl font-bold">Project Overview</h2>
                </div>
                <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A defence contractor required durable, high-contrast markings on military-grade equipment that would withstand extreme environmental conditions, including temperature fluctuations, chemical exposure, and physical abrasion in field operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Challenges & Solutions */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 text-8xl font-bold text-brand-600/5 leading-none">02</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-1 w-12 bg-brand-600 rounded-full" />
                  <h2 className="font-display text-3xl font-bold">Key Challenges & Solutions</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-600 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-600/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-3">Environmental Durability</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Mascoprint developed a specialized ink formulation combined with UV curing technology to ensure markings remained legible after exposure to extreme temperatures (-40°C to +85°C), salt spray, and chemical agents commonly encountered in military operations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-600 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-600/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-3">Compliance Testing</h3>
                        <p className="text-gray-700 leading-relaxed">
                          All materials and processes were rigorously tested to meet MIL-STD standards, with comprehensive documentation provided for traceability and quality assurance requirements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-600 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-600/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-3">Security & Traceability</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Custom serialization and data matrix printing capabilities were implemented to enable secure component tracking throughout the supply chain and lifecycle management.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Implementation */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 text-8xl font-bold text-brand-600/5 leading-none">03</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-1 w-12 bg-brand-600 rounded-full" />
                  <h2 className="font-display text-3xl font-bold">Implementation</h2>
                </div>
                <div className="bg-gradient-to-br from-brand-600 to-brand-700 border-2 border-brand-700 rounded-2xl p-8 text-white">
                  <p className="text-lg leading-relaxed">
                    The solution was deployed with secure production protocols and full documentation packages. The marking system is now operating in a controlled manufacturing environment, producing components that consistently meet defence industry standards for durability and traceability.
                  </p>
                </div>
              </div>
            </div>
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
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Have a similar challenge?
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Our team of experts can help develop a custom solution for your defence printing needs.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-xl shadow-brand-600/25">
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
