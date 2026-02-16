import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Screen and pad printing equipment and supplies from Mascoprint.',
}

const products = [
  {
    title: 'CP12 Cylindrical Printer',
    description: 'Professional cylindrical screen printing machine for bottles, tubes, and containers.',
  },
  {
    title: 'Hand Screen Printing Bases',
    description: 'Manual screen printing equipment for small batch production and prototyping.',
  },
  {
    title: 'Tampograf Pad Printers',
    description: 'High-quality pad printing machines for industrial applications.',
  },
  {
    title: 'Screen Printing Inks',
    description: 'Marabu inks and consumables for all printing applications.',
  },
]

export default function ProductsPage() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            High-quality screen and pad printing equipment, supplies, and consumables
            for industrial applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.title}>
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
