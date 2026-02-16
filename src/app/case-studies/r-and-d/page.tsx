import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'R&D Case Studies',
  description: 'Innovative screen and pad printing solutions for research and development projects. Prototype and experimental printing services for R&D from Mascoprint.',
  openGraph: {
    title: 'R&D Case Studies - Mascoprint',
    description: 'Innovative printing solutions for research and development projects and prototyping.',
    url: 'https://mascoprint.co.uk/case-studies/r-and-d',
    siteName: 'Mascoprint',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'R&D Case Studies - Mascoprint',
    description: 'Innovative printing solutions for research and development.',
  },
  alternates: {
    canonical: 'https://mascoprint.co.uk/case-studies/r-and-d',
  },
}

export default function RAndDPage() {
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
                R&D
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Flexible Printing Solutions for Advanced Materials Research
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
                    A university research laboratory required a versatile screen printing platform for conducting materials science experiments, including printed electronics, functional inks, and novel substrate testing. The solution needed to accommodate frequent changeovers, precise parameter control, and small batch sizes.
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-3">Precision Parameter Control</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Mascoprint provided a CP8 laboratory-grade screen printer with fully adjustable print parameters including snap-off distance (0-10mm), squeegee pressure (0-100N), print speed (10-300mm/s), and automated stroke control. Digital encoders ensure precise, repeatable settings for research documentation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-600 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-600/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-3">Flexible Tooling System</h3>
                        <p className="text-gray-700 leading-relaxed">
                          A modular vacuum bed and custom fixture library enable rapid changeovers between different substrate sizes and materials, from standard glass slides to flexible films and irregular shapes, with setup times under 5 minutes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-600 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-600/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-3">Data Logging & Traceability</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Integrated software captures all process parameters for each print run, enabling researchers to correlate printing conditions with experimental outcomes and maintain full traceability for publication-quality documentation.
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
                    The CP8 system was installed in the research laboratory with comprehensive training for graduate students and research staff. Since deployment, the system has supported multiple research projects across printed electronics, biosensors, and advanced materials, contributing to several peer-reviewed publications and three patent applications.
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
                Our team of experts can help develop a custom solution for your research and development needs.
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
