import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Mascoprint Developments Ltd terms and conditions of sale and service. Important information about purchasing products and services from Mascoprint.',
  openGraph: {
    title: 'Terms & Conditions - Mascoprint',
    description: 'Terms and conditions of sale and service for Mascoprint Developments Ltd.',
    url: 'https://mascoprint.co.uk/terms-conditions',
    siteName: 'Mascoprint',
    type: 'website',
    locale: 'en_GB',
  },
  alternates: {
    canonical: 'https://mascoprint.co.uk/terms-conditions',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function TermsConditionsPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-8">
            Terms & Conditions
          </h1>

          <p className="text-gray-700 mb-8">
            <strong>Mascoprint Developments Ltd</strong><br />
            Stags End Cottage Barn, Gaddesden Row, Hemel Hempstead, Herts HP2 6HN<br />
            VAT: GB 196 9926 85 | Company No: 1040660
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">1. BASIS OF CONTRACT</h2>
          <p>
            These Conditions shall form part of every Contract of sale of goods and supply of services...entered into by Mascoprint Developments Limited...and will operate to the entire exclusion of any terms and conditions of purchase of any Customer.
          </p>
          <p>
            The company states it corrects errors without liability. Trade orders only are accepted; consumer sales are excluded.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">2. REPRESENTATIONS</h2>
          <p>
            Pre-order representations not in quotations are expressly excluded.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">3. PRICES</h2>
          <p>
            Prices exclude VAT and are ex works, subject to variation before dispatch. Service charges apply on time and materials basis using standard hourly rates. The company may charge for expenses including travel, accommodation, and third-party services.
          </p>
          <p>
            Price increases may be implemented before delivery to reflect cost changes, including force majeure events, customer specification changes, or inadequate information. Written notice is required. If such increase is more than 10% of the total price...the Customer may notify the Company...within 7 days.
          </p>
          <p>
            Order cancellations require written company agreement. Customers indemnify the company for all cancellation losses.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">4. DELIVERY</h2>
          <p>
            Delivery dates are estimates only; Time for delivery shall not be of the essence of the contract unless previously specifically agreed.
          </p>
          <p>
            Delivery occurs at company premises. Company-arranged onward delivery is at customer risk and expense. The company holds no liability for transit losses or damage.
          </p>
          <p>
            Customers must report damage within three days of delivery. The company's liability for non-delivery is limited to 25% of goods price. Damaged goods may be repaired or replaced at company discretion.
          </p>
          <p>
            Failed customer acceptance allows the company to store goods at customer expense or sell them, applying proceeds against contract price or charging shortfalls.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">5. TERMS OF PAYMENT</h2>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">UK Sales</h3>
          <ul>
            <li>Machines: 30% deposit with order, 60% on delivery, balance within 30 days</li>
            <li>Other goods/services: Full payment within 30 days of invoice</li>
          </ul>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Export Sales</h3>
          <p>
            As UK sales unless otherwise stated in quotation. Customers handle import regulations, taxes, and duties.
          </p>
          <p>
            The company reserves the right to charge interest under the Late Payment of Commercial Debts (Interest) Act 1998 on overdue amounts.
          </p>
          <p>
            All sums due to the Company are payable in full, without deduction, counterclaim or set-off.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">6. SERVICES</h2>
          <p>
            The company may make necessary changes to comply with law or safety requirements without materially affecting service nature or quality.
          </p>
          <p>
            Customers must:
          </p>
          <ul>
            <li>Cooperate on all service matters</li>
            <li>Provide premises access and facilities</li>
            <li>Supply accurate information and materials</li>
            <li>Prepare premises appropriately</li>
            <li>Obtain necessary licenses and consents</li>
            <li>Maintain company materials in safe condition</li>
          </ul>
          <p>
            The company may suspend services if customer acts or omissions prevent performance. Customers bear responsibility for resulting costs. Service dates are estimates; time shall not be of the essence for the performance of the services.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">7. RISK</h2>
          <p>
            If the company delivers goods, risk passes at delivery time. If customers arrange collection, risk passes when goods are ready for pickup.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">8. TITLE</h2>
          <p>
            Until full payment, goods remain company property. Goods may be used in ordinary business but remain separately identified and insured.
          </p>
          <p>
            Upon customer default, insolvency, bankruptcy, or receivership, payment becomes immediately due. The company may treat the contract as discharged, repossess goods, and recover costs and price differences.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">9. WARRANTY AND EXCLUSIONS</h2>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Screen and Pad Printing Equipment</h3>
          <p>
            Equipment is warranted free from material and workmanship defects for twelve months from delivery. The company must inspect alleged defects before liability applies. The Company's liability under this warranty is limited to repairing or replacing or at the discretion of the Company refunding the purchase price.
          </p>
          <p>
            Defects caused by misuse, neglect, improper installation, repair, alteration, or accident are excluded.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Screen and Pad Printing Consumables</h3>
          <p>
            Consumables are warranted free from defects at delivery. Notification must occur within fourteen days with company inspection allowed. Because of their delicate nature...the Company can give no warranty that any consumables will remain free from defects.
          </p>
          <p>
            Defects in consumables made from customer-supplied positives are excluded. Liability is limited to repair, replacement, or refund at company discretion.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">Inks and Screen Mesh</h3>
          <p>
            All such materials are bought in by the Company and accordingly the Company can give no warranty that such goods will be free from defects or fit for the Customer's purpose. The company passes manufacturer guarantees to customers where applicable.
          </p>

          <h3 className="font-display font-semibold text-xl mt-6 mb-3">General Exclusions</h3>
          <p>
            All representations warranties conditions expressed or implied and statutory or otherwise (including but not limited to any concerning fitness for a particular purpose) are expressly excluded to the fullest extent permitted by law.
          </p>
          <p>
            The company excludes liability for defects from customer specifications, fair wear and tear, negligence, abnormal conditions, instruction non-compliance, misuse, or unauthorized alterations.
          </p>
          <p>
            No warranty applies if payment is incomplete, goods aren't returned for inspection, or customer fails Health & Safety compliance. The Customer will indemnify the Company against any actions, claims, damages, costs and expenses incurred or suffered by the Company as a result of any injury or damage.
          </p>
          <p>
            Warranties exclude non-company manufactured parts; customers receive only manufacturer warranties.
          </p>
          <p>
            The Company shall under no circumstances whatever be liable...for any loss of profit, or any direct, indirect or consequential loss, and the Company's total liability...shall in no circumstances exceed £5,000,000.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">10. CUSTOMER'S INDEMNITY FOR THIRD PARTY INTELLECTUAL PROPERTY CLAIMS</h2>
          <p>
            Customers indemnify the company against all liabilities, costs, damages, and losses from third-party intellectual property infringement claims arising from company use of customer-directed or customer-supplied specifications.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">11. GENERAL</h2>
          <p>
            The company is not liable for delays or non-performance from events beyond reasonable control, including strikes, utility failures, acts of God, war, malicious damage, legal compliance, accidents, machinery breakdown, or supplier defaults.
          </p>
          <p>
            If the Company is prevented by force majeure from providing any of the services and/or goods for more than twelve weeks, the Company shall...have the right to terminate this Contract immediately.
          </p>
          <p>
            The company may amend specifications for statutory or regulatory compliance. Returns require prior arrangement and company procedures.
          </p>

          <h2 className="font-display font-bold text-2xl mt-8 mb-4">12. GOVERNING LAW</h2>
          <p>
            These conditions are governed by English law. Parties submit to exclusive English court jurisdiction. The company may alternatively refer disputes to a single arbitrator agreed by parties or nominated by FESPA UK Association President. The arbitration seat is London; governing law is English; language is English.
          </p>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              For questions about these terms and conditions, please contact us at{' '}
              <a href="mailto:office@mascoprint.co.uk" className="text-primary-600 hover:underline">
                office@mascoprint.co.uk
              </a>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
