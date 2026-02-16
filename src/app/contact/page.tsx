import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

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
      <Section spacing="lg" className="relative overflow-hidden">
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
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-2 space-y-8">
              {/* Address */}
              <div className="relative group">
                <div className="absolute -top-3 -left-3 text-7xl font-bold text-brand-600/5 leading-none pointer-events-none">
                  01
                </div>
                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-600 transition-colors">
                  <div className="w-12 h-12 bg-brand-600/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4">Address</h3>
                  <div className="space-y-1 text-gray-600">
                    <p className="font-semibold">Mascoprint Developments Ltd</p>
                    <p>Stags End Cottage Barn</p>
                    <p>Gaddesden Row</p>
                    <p>Hemel Hempstead</p>
                    <p>Hertfordshire</p>
                    <p>HP2 6HN</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 space-y-1 text-sm text-gray-500">
                    <p>VAT: GB 196 9926 85</p>
                    <p>Company No: 1040660</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="relative group">
                <div className="absolute -top-3 -left-3 text-7xl font-bold text-brand-600/5 leading-none pointer-events-none">
                  02
                </div>
                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-600 transition-colors">
                  <div className="w-12 h-12 bg-brand-600/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4">Phone</h3>
                  <a
                    href="tel:+441582791190"
                    className="text-lg text-brand-600 hover:text-brand-700 font-semibold transition-colors"
                  >
                    +44 (0)1582 791190
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="relative group">
                <div className="absolute -top-3 -left-3 text-7xl font-bold text-brand-600/5 leading-none pointer-events-none">
                  03
                </div>
                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-600 transition-colors">
                  <div className="w-12 h-12 bg-brand-600/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4">Email</h3>
                  <a
                    href="mailto:office@mascoprint.co.uk"
                    className="text-lg text-brand-600 hover:text-brand-700 font-semibold transition-colors break-all"
                  >
                    office@mascoprint.co.uk
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 md:p-12 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                  }}
                />
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="mb-8">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
                      Send us a message
                    </h2>
                    <div className="h-1 w-16 bg-brand-600 rounded-full" />
                  </div>

                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-600 focus:border-brand-600 transition-all backdrop-blur-sm"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-600 focus:border-brand-600 transition-all backdrop-blur-sm"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-600 focus:border-brand-600 transition-all backdrop-blur-sm"
                        placeholder="+44 (0)1234 567890"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-600 focus:border-brand-600 transition-all backdrop-blur-sm resize-none"
                        placeholder="Tell us about your project..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-xl shadow-brand-600/25 hover:shadow-2xl hover:shadow-brand-600/30"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
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
