import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { DynamicContactForm } from '@/components/DynamicComponents'
import { ContactInfo } from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Mascoprint for industrial screen and pad printing solutions. Based in Coalville, Leicestershire. Phone: 01530 510 027 | Email: office@mascoprint.co.uk',
  openGraph: {
    title: 'Contact - Mascoprint',
    description: 'Get in touch with Mascoprint for industrial printing solutions. Based in Coalville, Leicestershire.',
    url: 'https://mascoprint.co.uk/contact',
    siteName: 'Mascoprint',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'Contact - Mascoprint',
    description: 'Get in touch with Mascoprint for industrial printing solutions.',
  },
  alternates: {
    canonical: 'https://mascoprint.co.uk/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="lg" className="relative overflow-hidden pt-14 md:pt-20 pb-10 md:pb-14">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/[0.02] via-brand-600/[0.01] to-slate-900/[0.02]" />
        <Container>
          <div className="max-w-4xl relative">
            <div className="inline-block px-4 py-1.5 bg-brand-600/10 border border-brand-600/20 rounded-full mb-6">
              <span className="text-sm font-bold text-brand-700 tracking-wide uppercase">
                Get in Touch
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 leading-[0.95]">
              Let's
              <br />
              <span className="text-brand-600">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              If you have any questions about what we offer or to make an enquiry, get in touch with us today.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Content */}
      <Section spacing="md">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information - Left Side */}
            <ContactInfo />

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <DynamicContactForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* Business Hours / Additional Info */}
      <Section spacing="lg" className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Business Hours
              </h2>
              <div className="h-1 w-16 bg-brand-600 rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-brand-600/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Weekdays</h3>
                <p className="text-gray-600">Monday - Friday</p>
                <p className="text-2xl font-bold text-brand-600 mt-2">9:00 AM - 5:00 PM</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Weekends</h3>
                <p className="text-gray-600">Saturday - Sunday</p>
                <p className="text-2xl font-bold text-gray-400 mt-2">Closed</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
