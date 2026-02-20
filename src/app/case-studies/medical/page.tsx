import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Medical Case Studies',
  description: 'Hygienic and precise screen and pad printing for medical devices, instruments, and equipment. Compliant industrial printing solutions for the healthcare sector from Mascoprint.',
  openGraph: {
    title: 'Medical Case Studies - Mascoprint',
    description: 'Hygienic and precise printing solutions for medical devices and instruments.',
    url: 'https://mascoprint.co.uk/case-studies/medical',
    siteName: 'Mascoprint',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'Medical Case Studies - Mascoprint',
    description: 'Precise printing solutions for the medical industry.',
  },
  alternates: {
    canonical: 'https://mascoprint.co.uk/case-studies/medical',
  },
}

export default function MedicalPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://mascoprint.co.uk' },
        { name: 'Case Studies', url: 'https://mascoprint.co.uk/case-studies' },
        { name: 'Medical', url: 'https://mascoprint.co.uk/case-studies/medical' },
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
                Medical
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Precision Screen Printing on Medical Camera Lens Surrounds
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Content Sections */}
      <Section spacing="md">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Section 1: Client Challenge */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 text-8xl font-bold text-brand-600/5 leading-none" aria-hidden="true">01</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-brand-600 rounded-full" />
                  <h2 className="font-display text-3xl font-bold">Client Challenge</h2>
                </div>
                <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The client needed to screen print very fine detail on the circumference of precision-engineered delicate camera lens surrounds.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Solution Developed */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 text-8xl font-bold text-brand-600/5 leading-none" aria-hidden="true">02</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-brand-600 rounded-full" />
                  <h2 className="font-display text-3xl font-bold">Solution Developed</h2>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-brand-600 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-600/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-3">Specialized Tooling</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Engineers created a specialized tool featuring a specially-machined groove allowing the lens surrounds to be loaded with a 'snug' fit into the tool, held securely whilst printing, and 'flicked' out at the end of the print cycle, thus avoiding any potential for product distortion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Equipment Used */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 text-8xl font-bold text-brand-600/5 leading-none" aria-hidden="true">03</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-brand-600 rounded-full" />
                  <h2 className="font-display text-3xl font-bold">Equipment Used</h2>
                </div>
                <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-600/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        The custom tool was integrated into a <span className="font-semibold text-brand-700">Mascoprint CP12</span> cylindrical screen printing machine, with additional trials conducted using different screen specifications to optimize print quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Results */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 text-8xl font-bold text-brand-600/5 leading-none" aria-hidden="true">04</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-brand-600 rounded-full" />
                  <h2 className="font-display text-3xl font-bold">Results</h2>
                </div>
                <div className="bg-gradient-to-br from-brand-600 to-brand-700 border-2 border-brand-700 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <svg className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-lg leading-relaxed">
                        The machine is now operational at the client's facility, printing <span className="font-bold">several thousand lens surrounds per annum</span>.
                      </p>
                    </div>
                  </div>
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
                Our team of experts can help develop a custom solution for your medical device printing needs.
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
