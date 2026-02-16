import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

const services = [
  {
    title: 'Screen Manufacturing',
    description: 'Custom screen production for all printing applications.',
  },
  {
    title: 'Artwork Services',
    description: 'Professional artwork preparation and design services.',
  },
  {
    title: 'Training & Consultancy',
    description: 'Expert training and consultancy for printing operations.',
  },
]

const sectors = [
  'Aerospace',
  'Automotive',
  'Defence',
  'Medical',
  'Plastics',
  'Glassware',
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="lg" className="bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="max-w-4xl">
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
              50+ Years of Printing Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Family-run industrial printing company specializing in screen and pad
              printing manufacturing. Serving aerospace, automotive, defence, medical,
              and plastics sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section spacing="lg">
        <Container>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-12 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Sectors We Serve */}
      <Section spacing="md" className="bg-gray-50">
        <Container>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-12 text-center">
            Sectors We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sectors.map((sector) => (
              <div
                key={sector}
                className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <p className="font-display font-semibold text-lg">{sector}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg">
        <Container>
          <div className="bg-primary-600 rounded-2xl p-12 text-center text-white">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Contact us today to discuss your printing requirements
            </p>
            <Button size="lg" variant="secondary">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
