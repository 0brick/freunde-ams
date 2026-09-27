export const siteUrl = 'https://freunde-ams.de'
export const siteName = 'Freunde der Africa Music School Uganda'

export interface Page {
  path: string
  name: string
  title: string
  description: string
}

export const pages: Page[] = [
  { path: '/', name: 'home', title: siteName, description: 'Der Verein „Freunde der Africa Music School Uganda“ unterstützt nachhaltig die musikalische Ausbildung und ganzheitliche Entwicklung von Kindern und Jugendlichen in Uganda.' },
  { path: '/verein', name: 'verein', title: 'Über den Verein', description: 'Wir sind die „Freunde der Africa Music School Uganda e. V.“ – ein ehrenamtlicher Verein zur Förderung der Africa Music School.' },
  { path: '/verein/satzung', name: 'satzung', title: 'Unsere Vereinssatzung', description: 'Satzung des Vereins „Freunde der Africa Music School Uganda“.' },
  { path: '/die-schule', name: 'schule', title: 'Die Africa Music School', description: 'Ein Ort der Hoffnung und Veränderung in Kampala, Uganda.' },
  { path: '/projekte/busunju', name: 'busunju', title: 'Ein neues Zuhause in Busunju', description: 'Ein neues Kapitel für die Africa Music School.' },
  { path: '/projekte/bus-to-busunju-2024', name: 'bus', title: 'Bus to Busunju 2024', description: 'Ein Meilenstein für die Mobilität und Sicherheit unserer Schüler.' },
  { path: '/events', name: 'events', title: 'Events', description: 'Veranstaltungen und Rückblicke rund um die Africa Music School.' },
  { path: '/recital', name: 'recital', title: 'Recital 2024', description: 'Bilder vom Recital 2024 der Africa Music School.' },
  { path: '/netzwerk', name: 'netzwerk', title: 'Unser Netzwerk', description: 'Die Helferinnen und Helfer der Africa Music School.' },
  { path: '/aktuelles', name: 'aktuelles', title: 'Aktuelles', description: 'Bleiben Sie auf dem Laufenden über unsere Projekte, Veranstaltungen und Neuigkeiten.' },
  { path: '/aktuelles/reisebericht-2023', name: 'reisebericht', title: 'Reisebericht 2023', description: 'Ein persönlicher Einblick in die Arbeit der Africa Music School.' },
  { path: '/aktuelles/weihnachtskonzert-2022', name: 'weihnachtskonzert', title: 'Weihnachtskonzert 2022', description: 'Ein festlicher Rückblick auf das Weihnachtskonzert 2022 der Africa Music School.' },
  { path: '/unterstuetzung', name: 'unterstuetzung', title: 'Ihre Unterstützungsmöglichkeiten', description: 'Sie haben zahlreiche Möglichkeiten, die Arbeit der AMS zu unterstützen.' },
  { path: '/unterstuetzung/geldspenden', name: 'geldspenden', title: 'Geldspenden', description: 'Ihre finanzielle Unterstützung macht einen direkten Unterschied.' },
  { path: '/unterstuetzung/zeitspenden', name: 'zeitspenden', title: 'Zeitspenden', description: 'Ihre Zeit und Ihr Talent sind eine wertvolle Unterstützung.' },
  { path: '/unterstuetzung/patenschaften', name: 'patenschaften', title: 'Patenschaften', description: 'Unterstützen Sie ein Kind direkt auf seinem Bildungsweg.' },
  { path: '/unterstuetzung/patenschaften/nazifah', name: 'nazifah', title: 'Nazifahs Geschichte', description: 'Ein Beispiel, wie Patenschaften Leben verändern.' },
  { path: '/unterstuetzung/mitgliedschaft', name: 'mitgliedschaft', title: 'Mitgliedschaft im Verein', description: 'Werden Sie Teil unserer Gemeinschaft und unterstützen Sie uns nachhaltig.' },
  { path: '/kontakt', name: 'kontakt', title: 'Kontakt', description: 'Wir freuen uns, von Ihnen zu hören. Nehmen Sie Kontakt mit uns auf.' },
  { path: '/impressum', name: 'impressum', title: 'Impressum', description: 'Impressum des Vereins „Freunde der Africa Music School Uganda e. V.“' }
]

export const redirects = [{ from: '/contact', to: '/kontakt' }]

export function pageTitle(page: Page) {
  return page.path === '/' ? siteName : `${page.title} – ${siteName}`
}
