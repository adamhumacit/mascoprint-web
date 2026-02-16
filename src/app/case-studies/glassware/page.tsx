import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Glassware Case Studies',
  description: 'Mascoprint printing solutions for the glassware industry.',
}

export default function GlasswarePage() {
  return (
    <Section spacing="lg">
      <Container>
        <Link href="/case-studies" className="text-primary-600 hover:underline mb-4 inline-block">
          ← Back to Case Studies
        </Link>
        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
          Glassware
        </h1>
        <div className="max-w-4xl">
          <p className="text-xl text-gray-600 mb-8">
            Premium printing for glass products and containers.
          </p>
          <Button>
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
