import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Mascoprint terms and conditions of service.',
}

export default function TermsConditionsPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-8">
            Terms & Conditions
          </h1>

          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-GB')}
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">Introduction</h2>
          <p>
            These terms and conditions govern your use of Mascoprint's services and website.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">Services</h2>
          <p>
            Mascoprint provides industrial printing services, equipment, and related products.
            All services are subject to availability and our standard business terms.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">Pricing and Payment</h2>
          <p>
            Prices are quoted in British Pounds (GBP) and are subject to change. Payment
            terms will be agreed upon for each project or purchase.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">Limitation of Liability</h2>
          <p>
            Mascoprint shall not be liable for any indirect, incidental, or consequential
            damages arising from the use of our services or products.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">Contact</h2>
          <p>
            For questions about these terms and conditions, please contact us at{' '}
            <a href="mailto:office@mascoprint.co.uk" className="text-primary-600 hover:underline">
              office@mascoprint.co.uk
            </a>
          </p>
        </div>
      </Container>
    </Section>
  )
}
