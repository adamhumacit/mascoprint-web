import type { Metadata } from 'next'
import { BreadcrumbSchema, ProductSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Industrial printing equipment and supplies from Mascoprint. Including CP12 cylindrical printers, Tampograf pad printers, screen printing equipment, and specialist inks.',
  openGraph: {
    title: 'Products - Mascoprint',
    description: 'Industrial printing equipment including cylindrical printers, pad printers, and specialist inks.',
    url: 'https://mascoprint.co.uk/products',
    siteName: 'Mascoprint',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'Products - Mascoprint',
    description: 'Industrial printing equipment and specialist inks.',
  },
  alternates: {
    canonical: 'https://mascoprint.co.uk/products',
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://mascoprint.co.uk' },
        { name: 'Products', url: 'https://mascoprint.co.uk/products' },
      ]} />
      <ProductSchema
        name="CP12 Cylindrical Screen Printing Machine"
        description="A bench mounted semi-automatic cylindrical screen printing machine capable of printing on diverse items including pens, thermometers, tubes, hoses, plastic bottles, glass jars, mugs, alloy cans, ice buckets, and fire extinguishers."
        image="https://mascoprint.co.uk/images/products/cp12-2.webp"
        category="Industrial Printing Equipment"
        url="https://mascoprint.co.uk/products"
      />
      <ProductSchema
        name="Tampograf Pad Printers"
        description="A range of modular pad printing machines which can satisfy all the demands of pad printing users. Excel at printing onto uneven surfaces, making them ideal for three-dimensional objects like golf balls and pens."
        image="https://mascoprint.co.uk/images/products/tg150.webp"
        category="Industrial Printing Equipment"
        url="https://mascoprint.co.uk/products"
      />
      <ProductSchema
        name="Custom-Built Hand Bases"
        description="Bespoke wooden hand bases designed for short-run articles and R&D work. Custom-made products built to specification."
        category="Industrial Printing Equipment"
        url="https://mascoprint.co.uk/products"
      />
      {children}
    </>
  )
}
