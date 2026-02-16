import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Mascoprint privacy policy and data protection information.',
}

export default function PrivacyPolicyPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-8">
            Privacy Policy
          </h1>

          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-GB')}
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">Introduction</h2>
          <p>
            Mascoprint is committed to protecting your privacy. This privacy policy
            explains how we collect, use, and safeguard your personal information.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">Information We Collect</h2>
          <p>
            We may collect personal information that you provide to us, including your
            name, email address, phone number, and any other information you choose to
            provide when contacting us.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries, provide our
            services, and improve our business operations.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal information
            from unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at{' '}
            <a href="mailto:office@mascoprint.co.uk" className="text-primary-600 hover:underline">
              office@mascoprint.co.uk
            </a>
          </p>
        </div>
      </Container>
    </Section>
  )
}
