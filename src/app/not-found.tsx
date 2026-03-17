import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <Section spacing="lg" className="pt-14 md:pt-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
            <span className="text-brand-600">404</span>
          </h1>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist. It may have been moved during our recent website update.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" size="lg" className="bg-brand-600 hover:bg-brand-700 text-white border-0 font-semibold shadow-lg shadow-brand-600/25">
              Go to Homepage
            </Button>
            <Button href="/contact" size="lg" variant="outline" className="border-2">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
