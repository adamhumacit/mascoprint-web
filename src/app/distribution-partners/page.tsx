import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import { partners } from '@/config/partners'

export const metadata: Metadata = {
  title: 'Distribution Partners',
  description: 'Mascoprint is a proud distribution partner of Marabu Inks, Fujifilm Sericol, and Trelleborg ULON. We supply printing inks, speciality ink systems, and squeegee blades with full technical support.',
  openGraph: {
    title: 'Distribution Partners - Mascoprint',
    description: 'Proud distribution partners of Marabu Inks, Fujifilm Sericol, and Trelleborg ULON — supplying printing inks, speciality ink systems, and squeegee blades.',
    url: 'https://mascoprint.co.uk/distribution-partners',
    siteName: 'Mascoprint',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'Distribution Partners - Mascoprint',
    description: 'Proud distribution partners of Marabu Inks, Fujifilm Sericol, and Trelleborg ULON.',
  },
  alternates: {
    canonical: 'https://mascoprint.co.uk/distribution-partners',
  },
}

export default function DistributionPartnersPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://mascoprint.co.uk' },
        { name: 'Distribution Partners', url: 'https://mascoprint.co.uk/distribution-partners' },
      ]} />

      {/* Hero Section */}
      <Section spacing="lg" className="relative overflow-hidden pt-14 md:pt-20 pb-10 md:pb-14">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 opacity-[0.02]" />
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 bg-brand-600/10 border border-brand-600/20 rounded-full mb-6">
              <span className="text-sm font-semibold text-brand-700 tracking-wide uppercase">
                Partnerships
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 leading-[0.95]">
              Distribution
              <br />
              <span className="text-brand-600">Partners</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Mascoprint is proud to be distribution partners with the following manufacturers.
            </p>
          </div>
        </Container>
      </Section>

      {/* Partners */}
      <Section spacing="md">
        <Container>
          <div className="space-y-12">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="group grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-start"
              >
                {/* Logo */}
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${partner.name} website`}
                  className="relative h-48 bg-gray-50 border-2 border-gray-200 rounded-2xl flex items-center justify-center p-8 hover:border-brand-600 transition-colors"
                >
                  <div className={`relative ${index === 0 ? 'w-full h-full' : 'w-[70%] h-[70%]'}`}>
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      sizes="320px"
                      className="object-contain"
                    />
                  </div>
                </a>

                {/* Content */}
                <div className="space-y-4">
                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                    {partner.name}
                  </h2>
                  <div className="h-1 w-12 bg-brand-600 rounded-full" />
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {partner.longDescription}
                  </p>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium transition-colors group/link"
                  >
                    Visit website
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
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
                Have a Question?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                If you have any questions about what we offer or to make an enquiry, get in touch with us today.
              </p>
              <Button href="/contact" size="lg" className="bg-brand-600 hover:bg-brand-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-xl shadow-brand-600/25">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
