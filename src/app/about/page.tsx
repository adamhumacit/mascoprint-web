import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Mascoprint - a family-run industrial printing company with over 50 years of experience.',
}

const team = [
  {
    name: 'Yvonne',
    role: 'Co-Founder',
    bio: 'With decades of experience in the printing industry, Yvonne leads operations and customer service.',
  },
  {
    name: 'Ian',
    role: 'Co-Founder',
    bio: 'Ian brings technical expertise and innovation to our printing solutions and equipment.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            About Mascoprint
          </h1>
          <div className="max-w-3xl mb-12">
            <p className="text-xl text-gray-600 mb-6">
              Mascoprint is a family-run industrial printing company with over 50 years
              of experience in screen and pad printing manufacturing.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We specialize in providing high-quality printing solutions for aerospace,
              automotive, defence, medical, and plastics sectors.
            </p>
            <p className="text-lg text-gray-600">
              Our commitment to excellence and customer service has made us a trusted
              partner for industrial printing needs across the UK and beyond.
            </p>
          </div>

          <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {team.map((member) => (
              <Card key={member.name}>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-primary-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p>{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We work with industry-leading suppliers to provide the best equipment
              and materials:
            </p>
            <ul className="space-y-2 text-lg">
              <li>• Marabu Inks</li>
              <li>• Fujifilm</li>
              <li>• Trelleborg</li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  )
}
