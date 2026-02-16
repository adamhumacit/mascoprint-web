import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Aerospace Case Studies',
  description: 'Mascoprint printing solutions for the aerospace industry.',
}

export default function AerospacePage() {
  return (
    <Section spacing="lg">
      <Container>
        <Link href="/case-studies" className="text-primary-600 hover:underline mb-4 inline-block">
          ← Back to Case Studies
        </Link>
        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
          Aerospace
        </h1>
        <div className="max-w-4xl">
          <p className="text-xl text-gray-600 mb-8">
            Precision printing solutions for aerospace components and equipment requiring
            the highest standards of quality and durability.
          </p>
          <Button>
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
