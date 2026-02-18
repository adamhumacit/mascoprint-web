import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Plastics Case Studies',
  description: 'Versatile screen and pad printing for plastic products, containers, and components. Specialized industrial printing solutions for plastics manufacturing from Mascoprint.',
  openGraph: {
    title: 'Plastics Case Studies - Mascoprint',
    description: 'Versatile printing solutions for plastic products and components with proven results.',
    url: 'https://mascoprint.co.uk/case-studies/plastics',
    siteName: 'Mascoprint',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'Plastics Case Studies - Mascoprint',
    description: 'Versatile printing solutions for the plastics industry.',
  },
  alternates: {
    canonical: 'https://mascoprint.co.uk/case-studies/plastics',
  },
}

export default function PlasticsPage() {
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
                Plastics
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                High-Volume Printing for Molded Plastic Components
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Content Sections */}
      <Section spacing="sm">
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
                    A consumer electronics manufacturer required decorative branding and functional labeling on injection-molded plastic housings. The solution needed to handle multiple substrate materials (ABS, PC, PP) with varying surface energies while maintaining high throughput rates of 1,200+ parts per hour.
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-3">Surface Preparation & Adhesion</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Mascoprint implemented an inline corona treatment system to modify the surface energy of low-energy plastics, combined with specially formulated two-component inks that provide exceptional adhesion without the need for primers or additional processing steps.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-600 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-600/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-3">High-Speed Automation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          A fully automated Mascoprint CP16 machine with robotic part handling was deployed, featuring vision-guided registration to accommodate part-to-part variations typical in injection molding, while maintaining cycle times under 3 seconds.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-600 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-600/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-3">Quality Validation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Integrated vision inspection systems verify print quality, registration accuracy, and color consistency on every part, with automatic reject mechanisms removing non-conforming pieces from the production line.
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
                    The complete printing system was installed and commissioned within the client's manufacturing facility, with comprehensive operator training and preventive maintenance programs established. The system now operates three shifts per day, achieving 99.7% uptime and processing millions of components annually with consistent quality.
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
                Our team of experts can help develop a custom solution for your plastics printing needs.
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
