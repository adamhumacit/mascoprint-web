import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive screen manufacturing services including screen production, cliché plate manufacture, artwork origination, and technical support. 50+ years of expertise in industrial printing.',
  openGraph: {
    title: 'Services - Mascoprint',
    description: 'Screen manufacturing, cliché plates, artwork origination, and technical support for industrial printing applications.',
    url: 'https://mascoprint.co.uk/services',
    siteName: 'Mascoprint',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'Services - Mascoprint',
    description: 'Screen manufacturing, cliché plates, artwork origination, and technical support for industrial printing.',
  },
  alternates: {
    canonical: 'https://mascoprint.co.uk/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 opacity-[0.02]" />
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 bg-brand-600/10 border border-brand-600/20 rounded-full mb-6">
              <span className="text-sm font-semibold text-brand-700 tracking-wide uppercase">
                50+ Years of Excellence
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 leading-[0.95]">
              Manufacturing
              <br />
              <span className="text-brand-600">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              A comprehensive suite of screen printing solutions, from precision manufacturing to expert consultancy.
            </p>
          </div>
        </Container>
      </Section>

      {/* Service 1: Screen Manufacturing - Image Left */}
      <Section spacing="md">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-2xl group">
              <Image
                src="/images/screen-manufacturing.jpg"
                alt="Screen Manufacturing Process"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-6xl md:text-7xl font-bold text-white/20 leading-none tracking-tighter">
                  01
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="text-sm font-bold text-brand-600 tracking-widest uppercase mb-3">
                  Core Service
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
                  Screen Manufacturing
                </h2>
              </div>
              <div className="h-1 w-16 bg-brand-600 rounded-full" />
              <p className="text-lg text-gray-600 leading-relaxed">
                Comprehensive screen solutions including frames, mesh only, stretched screens, pre-sensitised screens, and ready-to-use exposed screens.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gray-900">10-180</div>
                  <div className="text-sm text-gray-600">Threads per cm mesh grades</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gray-900">40N</div>
                  <div className="text-sm text-gray-600">Max tension (stainless steel)</div>
                </div>
              </div>
              <ul className="space-y-3 pt-4">
                {['Wood, steel, and aluminium frames', 'Tensions up to 30N (polyester) / 40N (stainless)', 'Film/emulsion stencils: 12-300+ microns'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service 2: Cliché Plates - Image Right */}
      <Section spacing="md">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 lg:order-1">
              <div>
                <div className="text-sm font-bold text-brand-600 tracking-widest uppercase mb-3">
                  Precision Etching
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
                  Cliché Thin
                  <br />
                  Steel Plates
                </h2>
              </div>
              <div className="h-1 w-16 bg-brand-600 rounded-full" />
              <p className="text-lg text-gray-600 leading-relaxed">
                High-quality etching services on 0.5mm and 0.3mm thin steel plates specifically designed for pad printing applications.
              </p>
              <div className="bg-slate-50 rounded-xl p-6 space-y-4 border border-slate-200">
                <div className="flex items-baseline gap-3">
                  <div className="text-4xl font-bold text-gray-900">0.5mm</div>
                  <div className="text-gray-600">& 0.3mm plate thickness</div>
                </div>
                <p className="text-sm text-gray-600">
                  Precision-etched plates delivering consistent, high-quality results for demanding pad printing applications.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-2xl group lg:order-2">
              <Image
                src="/images/cliche-steel-plates.jpg"
                alt="Cliché Steel Plates Etching"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-6xl md:text-7xl font-bold text-white/20 leading-none tracking-tighter">
                  02
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services 3 & 4: Grid Layout with Icons */}
      <Section spacing="md">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Artwork Origination */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-12 text-white group hover:shadow-2xl transition-shadow duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl -translate-y-32 translate-x-32 group-hover:bg-brand-600/20 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="mb-8">
                  <svg className="w-16 h-16 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-white/10 leading-none tracking-tighter mb-6">03</div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Artwork Origination
                </h3>
                <div className="h-1 w-12 bg-brand-600 rounded-full mb-6" />
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Generate, scan, and manipulate artwork using current computer technology with professional-grade software.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium backdrop-blur-sm border border-white/20">
                    Adobe Illustrator®
                  </div>
                  <div className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium backdrop-blur-sm border border-white/20">
                    Adobe Photoshop®
                  </div>
                </div>
              </div>
            </div>

            {/* Consultancy Services */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-12 text-white group hover:shadow-2xl transition-shadow duration-500">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-32 -translate-x-32 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="mb-8">
                  <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-white/10 leading-none tracking-tighter mb-6">04</div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Consultancy Services
                </h3>
                <div className="h-1 w-12 bg-white rounded-full mb-6" />
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Our wealth of experience helps advise you with the best solutions for your project, from equipment selection to production challenges.
                </p>
                <ul className="space-y-3">
                  {['Equipment & consumables guidance', 'Technical requirements support', 'Production environment solutions'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
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
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to start
                <br />
                your next project?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Get in touch to discuss your requirements. We'll help you find the perfect solution for your printing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-xl shadow-brand-600/25">
                    Contact Us Today
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
