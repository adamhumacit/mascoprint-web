import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Mascoprint is a family-run industrial printing company with 50+ years of experience in screen and pad printing. Serving aerospace, automotive, defence, medical, plastics, and glassware sectors across the UK.',
  openGraph: {
    title: 'Mascoprint - Screen & Pad Printing Specialists',
    description: 'Family-run industrial printing company with 50+ years of experience in screen and pad printing for aerospace, automotive, defence, and medical sectors.',
    url: 'https://mascoprint.co.uk',
    siteName: 'Mascoprint',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mascoprint - Screen & Pad Printing Specialists',
    description: 'Family-run industrial printing company with 50+ years of experience in screen and pad printing.',
  },
  alternates: {
    canonical: 'https://mascoprint.co.uk',
  },
}

const services = [
  {
    title: 'Screen Manufacturing',
    description: 'Comprehensive screen solutions including frames, mesh, stretched screens, pre-sensitised screens, and ready-to-use exposed screens.',
    number: '01',
  },
  {
    title: 'Artwork Origination',
    description: 'Generate, scan, and manipulate artwork using current computer technology including Adobe Illustrator® and Adobe Photoshop®.',
    number: '02',
  },
  {
    title: 'Cliché Plate Manufacture',
    description: 'High quality etching service on 0.5mm and 0.3mm thin steel plate for pad printing applications.',
    number: '03',
  },
]

const sectors = [
  'Aerospace',
  'Automotive',
  'Defence',
  'Medical',
  'Plastics',
  'Glassware',
  'Research and Development',
]

const trainingPrograms = [
  'Cylindrical screen-printing',
  'Flat screen-printing',
  'Pad printing',
  'Ergonomics in production',
]

const consultancyServices = [
  'Equipment and consumables selection',
  'Technical and scientific requirements',
  'Production troubleshooting',
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/[0.02] via-brand-600/[0.01] to-slate-900/[0.02]" />
        <Container>
          <div className="max-w-5xl relative">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-brand-600/10 border border-brand-600/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-brand-600 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-brand-700 tracking-wide uppercase">
                Over 50 Years of Excellence
              </span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8 leading-[0.9]">
              50 Years of
              <br />
              <span className="text-brand-600">Printing</span>
              <br />
              Excellence
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 leading-relaxed max-w-3xl">
              A family-owned business specialising in screen and pad printing solutions for industrial applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-xl shadow-brand-600/25">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold border-2">
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* About Section */}
      <Section spacing="lg" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl" />

        <Container>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-sm font-bold text-brand-500 tracking-widest uppercase mb-4">
                Our Story
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                About Mascoprint
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                With over 50 years' experience, we are committed to providing a high quality service. Our skilled technicians ensure that every job is done to the highest standard.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                At Mascoprint, we understand the importance of innovation and staying ahead of the curve in an ever-changing world. We pride ourselves on our excellent customer service and work closely with our clients to achieve their desired outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-16">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
                <h3 className="font-display text-2xl font-bold mb-2">Lucy Hughes</h3>
                <p className="text-gray-400">Director</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
                <h3 className="font-display text-2xl font-bold mb-2">Stuart Wing</h3>
                <p className="text-gray-400">Director</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-brand-600 tracking-widest uppercase mb-4">
              What We Do
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div key={service.title} className="group relative">
                <div className="absolute -top-4 -left-4 text-8xl font-bold text-brand-600/10 leading-none">
                  {service.number}
                </div>
                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <h3 className="font-display text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-2">
                View All Services
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Sectors We Serve */}
      <Section spacing="lg" className="bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-brand-600 tracking-widest uppercase mb-4">
              Industries
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sectors We Serve
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {sectors.map((sector) => (
              <div
                key={sector}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:border-brand-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <p className="font-display font-bold text-lg">{sector}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/case-studies">
              <Button variant="outline" size="lg" className="border-2">
                View Case Studies
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Training & Consultancy */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-brand-600 tracking-widest uppercase mb-4">
              Expertise
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Training & Consultancy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our wealth of experience can help advise you with the best solutions for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-10 hover:border-brand-600 transition-colors">
              <div className="w-16 h-16 bg-brand-600/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-6">Consultancy Services</h3>
              <ul className="space-y-3">
                {consultancyServices.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-brand-600 to-brand-700 border-2 border-brand-700 rounded-2xl p-10 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-6">Training Programs</h3>
              <ul className="space-y-3">
                {trainingPrograms.map((program) => (
                  <li key={program} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0" />
                    <span className="text-white/95">{program}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Distribution Partners */}
      <Section spacing="lg" className="bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-brand-600 tracking-widest uppercase mb-4">
              Partnerships
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Distribution Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <a
              href="https://www.marabu-inks.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-brand-600 transition-colors group"
            >
              <div className="relative h-48 bg-gray-50 flex items-center justify-center p-6">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/partners/marabu.png"
                    alt="Marabu Inks UK"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">Marabu Inks UK</h3>
                <p className="text-gray-600">Comprehensive range of pad and printing inks</p>
              </div>
            </a>

            <a
              href="https://www.sericol.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-brand-600 transition-colors group"
            >
              <div className="relative h-48 bg-gray-50 flex items-center justify-center p-6">
                <div className="relative w-[70%] h-[70%]">
                  <Image
                    src="/images/partners/sericol.png"
                    alt="Fujifilm Sericol"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">Fujifilm Sericol</h3>
                <p className="text-gray-600">Speciality Ink Systems</p>
              </div>
            </a>

            <a
              href="https://www.trelleborg.com/en/applied-technologies/products-and-solutions/screen-printing-squeegee-blades/unitex-ulon-hp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-brand-600 transition-colors group"
            >
              <div className="relative h-48 bg-gray-50 flex items-center justify-center p-6">
                <div className="relative w-[70%] h-[70%]">
                  <Image
                    src="/images/partners/ulon.png"
                    alt="Trelleborg ULON"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">Trelleborg ULON</h3>
                <p className="text-gray-600">Squeegee blades</p>
              </div>
            </a>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Contact us today to discuss your printing requirements and discover how we can help.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-xl shadow-brand-600/25">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
