export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Kamil Travel',
    url: 'https://www.kamiltravel.com',
    email: 'info@kamiltravel.com',
    telephone: '020 2220011',
    description: 'Premium travel management, airport support, and regional journey planning for Kenya, Somalia, and beyond.',
    areaServed: ['Kenya', 'Somalia'],
    serviceType: ['Corporate Travel', 'Airport Transfers', 'Flight Booking', 'Travel Insurance', 'VIP Lounge', 'Travel Consultancy'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
