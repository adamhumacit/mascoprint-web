import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Mascoprint Developments Ltd privacy policy and GDPR compliance information. Learn how we collect, use, and protect your personal data.',
  openGraph: {
    title: 'Privacy Policy - Mascoprint',
    description: 'Privacy policy and GDPR compliance information for Mascoprint Developments Ltd.',
    url: 'https://mascoprint.co.uk/privacy-policy',
    siteName: 'Mascoprint',
    type: 'website',
    locale: 'en_GB',
  },
  alternates: {
    canonical: 'https://mascoprint.co.uk/privacy-policy',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-8">
            Privacy Policy
          </h1>

          <p className="lead text-xl text-gray-700 mb-8">
            This privacy notice is provided by Mascoprint Developments Ltd, company number 1040660, registered in the United Kingdom. The registered office is located at Stags End Cottage Barn, Gaddesden Row, Hemel Hempstead, Hertfordshire HP2 6HN.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">Introduction</h2>
          <p>
            The organization takes privacy protection seriously and confirms that its policy aligns with UK law and EU General Data Protection Regulation (GDPR) requirements. The notice explains how personal information is collected, processed, and protected. Visitors are directed to www.knowyourprivacyrights.org for details about their rights. The company states it does not share, sell, or disclose information to third parties except as outlined in the policy.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">Processing Bases</h2>
          <p>
            The organization processes personal information under six legal bases:
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">1. Contractual Obligations</h3>
          <p>
            Information collected during purchase or service provision is used for identity verification, product delivery, service provision, and suggestions. Processing continues until contract termination.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">2. Consent</h3>
          <p>
            Information provided through browsing or inquiries is processed with consent. Recipients can withdraw consent by contacting info@mascoprint.co.uk, though this may limit website access.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">3. Legitimate Interests</h3>
          <p>
            Processing occurs for record-keeping, responding to communications, protecting legal rights, managing business risk, and protecting user interests.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">4. Legal Obligations</h3>
          <p>
            Information may be disclosed to comply with statutory requirements and legal authorities.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">Specific Uses</h2>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Public Information</h3>
          <p>
            User-posted content becomes publicly available. The organization stores this data and reserves future usage rights, accepting no responsibility for third-party actions.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Payment Information</h3>
          <p>
            Payment data is never retained by the organization; transactions use SagePay's secure gateway.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Support Communications</h3>
          <p>
            Messages to the support team are recorded to improve efficiency and track service quality.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Complaints</h3>
          <p>
            Complaint information is used for resolution and statistical analysis without identifying individuals.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Affiliate Information</h3>
          <p>
            Business partner data is kept confidential and used solely for referral tracking and commission processing.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">Automated Collection</h2>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Cookies</h3>
          <p>
            The website uses cookies to track usage, record message views, maintain login status, store survey responses, and record live chat conversations. Details appear in the separate cookie policy.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Browsing Data</h3>
          <p>
            Information such as geographical location, IP address, internet service provider, device type, and screen resolution is collected in aggregate to assess webpage popularity and content delivery performance.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">Data Sharing</h2>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Third-Party Services</h3>
          <p>
            While personal information isn't disclosed to third parties, the organization may receive indirectly-derived data from service providers. This information isn't personally identifiable.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Credit Reference</h3>
          <p>
            Information is shared with credit reference agencies regarding clients who cancel payment without acceptable reason.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">International Processing</h3>
          <p>
            Websites are hosted in the United Kingdom, though outsourced services may process data outside the European Union. All processors comply with GDPR requirements.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">User Rights</h2>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Access</h3>
          <p>
            Individuals can request copies of personal information by contacting info@mascoprint.co.uk. The organization will specify response timelines and any applicable fees.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Verification</h3>
          <p>
            Identity is verified before granting access to, editing, or deleting personal information.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">Additional Provisions</h2>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Children</h3>
          <p>
            The website doesn't sell products to or market toward children. Users under 18 require parental or guardian consent.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Data Encryption</h3>
          <p>
            Secure Sockets Layer (SSL) certificates encrypt data transfers, identifiable by padlock symbols in browser URL bars.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Complaints</h3>
          <p>
            Dissatisfaction can be reported to info@mascoprint.co.uk. Unresolved disputes may proceed through mediation or arbitration. The Information Commissioner's Office can be contacted at https://ico.org.uk/concerns/.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Retention</h3>
          <p>
            Personal data is retained only as long as necessary to provide services, comply with law, or support legal claims.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Updates</h3>
          <p>
            The policy may be updated periodically; current terms apply on the date of website use.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at{' '}
            <a href="mailto:info@mascoprint.co.uk" className="text-primary-600 hover:underline">
              info@mascoprint.co.uk
            </a>
          </p>
        </div>
      </Container>
    </Section>
  )
}
