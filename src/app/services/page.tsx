import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional screen printing services including screen manufacturing, artwork, training, and consultancy.',
}

const services = [
  {
    title: 'Screen Manufacturing',
    description: 'Custom screen production for all printing applications. High-quality mesh, frames, and emulsion work.',
  },
  {
    title: 'Artwork & Design',
    description: 'Professional artwork preparation and design services for optimal printing results.',
  },
  {
    title: 'Training & Consultancy',
    description: 'Expert training courses and consultancy services for screen and pad printing operations.',
  },
  {
    title: 'Technical Support',
    description: 'Ongoing technical support and maintenance for all printing equipment and processes.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Comprehensive printing services to support your manufacturing needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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

          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We provide tailored services to meet your specific printing requirements.
            </p>
            <Button size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
