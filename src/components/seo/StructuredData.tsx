export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mascoprint Developments Ltd',
    alternateName: 'Mascoprint',
    url: 'https://mascoprint.co.uk',
    logo: 'https://mascoprint.co.uk/images/logo/mascoprint-logo-main.png',
    description: 'Family-run industrial printing company specializing in screen and pad printing manufacturing with 50+ years experience.',
    foundingDate: '1970',
    email: 'office@mascoprint.co.uk',
    telephone: '+44-1582-791190',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Stags End Cottage Barn, Gaddesden Row',
      addressLocality: 'Hemel Hempstead',
      addressRegion: 'Hertfordshire',
      postalCode: 'HP2 6HN',
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44-1582-791190',
      contactType: 'customer service',
      email: 'office@mascoprint.co.uk',
      areaServed: 'GB',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://twitter.com/mascoprint',
      'https://www.youtube.com/@mascoprint',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://mascoprint.co.uk/#localbusiness',
    name: 'Mascoprint Developments Ltd',
    image: 'https://mascoprint.co.uk/images/logo/mascoprint-logo-main.png',
    description: 'Industrial printing specialists providing screen printing, pad printing, and cylindrical printing services to aerospace, automotive, defence, medical, and plastics sectors.',
    priceRange: '$$',
    telephone: '+44-1582-791190',
    email: 'office@mascoprint.co.uk',
    url: 'https://mascoprint.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Stags End Cottage Barn, Gaddesden Row',
      addressLocality: 'Hemel Hempstead',
      addressRegion: 'Hertfordshire',
      postalCode: 'HP2 6HN',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.8084,
      longitude: -0.4637,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Industrial Printing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Screen Manufacturing',
            description: 'Comprehensive screen solutions including frames, mesh, stretched screens, pre-sensitised screens, and ready-to-use exposed screens.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Artwork Origination',
            description: 'Generate, scan, and manipulate artwork using the latest computer technology including Adobe Illustrator and Adobe Photoshop.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cliché Plate Manufacture',
            description: 'High quality etching service on thin steel plate for pad printing applications.',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://mascoprint.co.uk/#website',
    url: 'https://mascoprint.co.uk',
    name: 'Mascoprint - Screen & Pad Printing Specialists',
    description: 'Industrial printing company specializing in screen and pad printing for aerospace, automotive, defence, medical, and plastics sectors.',
    publisher: {
      '@id': 'https://mascoprint.co.uk/#organization',
    },
    inLanguage: 'en-GB',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
