export const verein = {
  name: 'Freunde der Africa Music School Uganda e. V.',
  shortName: 'Freunde der AMS',
  address: ['c/o Kai Kopp', 'Fischenzstrasse 36', '78462 Konstanz'],
  email: 'kai.kopp@schule-uzwil.ch',
  phone: '0049 170 815 41 44',
  phoneHref: 'tel:+491708154144',
  register: { court: 'Amtsgericht Freiburg', number: 'VR 704091', date: '5.3.2024' },
  board: [
    { name: 'Kai Kopp', role: 'Präsident, Schulleiter Musikschule Uzwil' },
    { name: 'Luise Baumgartl', role: 'Vizepräsidentin' },
    { name: 'Marco Weber', role: 'Kassierer, Geschäftsführer Blaswerk Haag' }
  ]
}

export const bank = {
  name: 'Freunde der Africa Music School',
  iban: 'DE23 6519 1500 0543 5740 08',
  bic: 'GENODES1TET',
  bank: 'Volksbank Bodensee-Oberschwaben eG'
}

export const paypalUrl = 'https://www.paypal.com/donate?hosted_button_id=KE4YWLGPHZZ68'

export const navigation = [
  {
    label: 'Der Verein',
    children: [
      { label: 'Über den Verein', to: '/verein' },
      { label: 'Unsere Vereinssatzung', to: '/verein/satzung' }
    ]
  },
  { label: 'Die Africa Music School', to: '/die-schule' },
  {
    label: 'Projekte',
    children: [
      { label: 'Ein neues Zuhause in Busunju', to: '/projekte/busunju' },
      { label: 'Bus to Busunju 2024', to: '/projekte/bus-to-busunju-2024' }
    ]
  },
  {
    label: 'Events',
    children: [
      { label: 'Kommende Events', to: '/events' },
      { label: 'Recital', to: '/recital' }
    ]
  },
  { label: 'Netzwerk', to: '/netzwerk' },
  { label: 'Aktuelles', to: '/aktuelles' },
  { label: 'Unterstützung', to: '/unterstuetzung' },
  { label: 'Kontakt', to: '/kontakt' }
]
