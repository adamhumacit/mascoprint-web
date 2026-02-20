import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Automotive Case Studies',
  description: 'Durable screen and pad printing for automotive parts, components, and assemblies. Industrial printing solutions for the automotive sector from Mascoprint.',
  openGraph: {
    title: 'Automotive Case Studies - Mascoprint',
    description: 'Durable printing solutions for automotive components and assemblies with proven reliability.',
    url: 'https://mascoprint.co.uk/case-studies/automotive',
    siteName: 'Mascoprint',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'Automotive Case Studies - Mascoprint',
    description: 'Durable printing solutions for the automotive industry.',
  },
  alternates: {
    canonical: 'https://mascoprint.co.uk/case-studies/automotive',
  },
}

export default function AutomotivePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://mascoprint.co.uk' },
        { name: 'Case Studies', url: 'https://mascoprint.co.uk/case-studies' },
        { name: 'Automotive', url: 'https://mascoprint.co.uk/case-studies/automotive' },
      ]} />
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
                Automotive
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Screen Printing onto Silicone Hoses
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Content Sections */}
      <Section spacing="md">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Section 1: Challenge */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 text-8xl font-bold text-brand-600/5 leading-none">01</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-brand-600 rounded-full" />
                  <h2 className="font-display text-3xl font-bold">Challenge</h2>
                </div>
                <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    The client needed a machine capable of producing high-quality prints on complex-shaped hoses using special inks.
                  </p>
                  <div className="mt-6 p-4 bg-white border-l-4 border-brand-600 rounded">
                    <p className="text-gray-700 font-semibold">
                      Silicone rubber is difficult to print onto as ink does not adhere easily.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Solution Development */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 text-8xl font-bold text-brand-600/5 leading-none">02</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-brand-600 rounded-full" />
                  <h2 className="font-display text-3xl font-bold">Solution Development</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-brand-600 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-600/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-3">Initial Prototype</h3>
                        <p className="text-gray-700 leading-relaxed">
                          The company modified an existing machine and created wooden tooling to test the concept. Following successful trials, they developed more robust prototype tooling.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-brand-600 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-600/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-3">Refinement</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Additional modifications were necessary due to component weight, preventing slippage during the printing process.
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
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-brand-600 rounded-full" />
                  <h2 className="font-display text-3xl font-bold">Implementation</h2>
                </div>
                <div className="bg-gradient-to-br from-brand-600 to-brand-700 border-2 border-brand-700 rounded-2xl p-6 text-white">
                  <p className="text-lg leading-relaxed">
                    Mascoprint conducted extensive production trials before manufacturing a new CP12 machine fitted with the final tooling version. The machine is now installed at the customer's factory producing hoses for high performance motor vehicles.
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
                Our team of experts can help develop a custom solution for your automotive printing needs.
              </p>
              <Button href="/contact" size="lg" className="bg-brand-600 hover:bg-brand-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-xl shadow-brand-600/25">
                Discuss Your Project
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
