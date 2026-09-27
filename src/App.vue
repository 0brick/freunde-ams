<script setup lang="ts">
import { useRouter, RouterLink, RouterView } from 'vue-router'
import AmsLogo from './components/AmsLogo.vue'
import { navigation, verein } from './content/verein'

const router = useRouter()
const year = new Date().getFullYear()

const footerColumns = [
  {
    title: 'Der Verein',
    links: [
      { label: 'Über den Verein', href: '/verein' },
      { label: 'Unsere Vereinssatzung', href: '/verein/satzung' },
      { label: 'Netzwerk', href: '/netzwerk' },
      { label: 'Aktuelles', href: '/aktuelles' }
    ]
  },
  {
    title: 'Africa Music School',
    links: [
      { label: 'Die Africa Music School', href: '/die-schule' },
      { label: 'Ein neues Zuhause in Busunju', href: '/projekte/busunju' },
      { label: 'Bus to Busunju 2024', href: '/projekte/bus-to-busunju-2024' },
      { label: 'Events', href: '/events' }
    ]
  },
  {
    title: 'Unterstützung',
    links: [
      { label: 'Geldspenden', href: '/unterstuetzung/geldspenden' },
      { label: 'Zeitspenden', href: '/unterstuetzung/zeitspenden' },
      { label: 'Patenschaften', href: '/unterstuetzung/patenschaften' },
      { label: 'Mitgliedschaft', href: '/unterstuetzung/mitgliedschaft' }
    ]
  }
]

function interceptLinks(event: MouseEvent) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  const link = (event.target as Element).closest<HTMLAnchorElement>('a[href]')
  if (!link || link.target || link.hasAttribute('download')) return
  const href = link.getAttribute('href') ?? ''
  if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/downloads/')) return
  event.preventDefault()
  router.push(href)
}
</script>

<template>
  <div class="site" @click="interceptLinks">
    <cui-site-header skip-label="Zum Inhalt springen" links-align="end" class="site-header">
      <template #brand>
        <RouterLink to="/" class="brand" aria-label="Freunde der AMS – Startseite">
          <AmsLogo class="brand__logo" />
          <span class="brand__text">Freunde der <strong>AMS</strong></span>
        </RouterLink>
      </template>
      <template #links>
        <template v-for="item in navigation" :key="item.label">
          <template v-if="item.children">
            <cui-dropdown trigger-variant="chevron-label" :label="item.label" class="nav-desktop">
              <RouterLink v-for="child in item.children" :key="child.to" :to="child.to">{{ child.label }}</RouterLink>
            </cui-dropdown>
            <div class="nav-mobile nav-group">
              <span class="nav-group__label">{{ item.label }}</span>
              <RouterLink v-for="child in item.children" :key="child.to" :to="child.to">{{ child.label }}</RouterLink>
            </div>
          </template>
          <RouterLink v-else :to="item.to">{{ item.label }}</RouterLink>
        </template>
      </template>
    </cui-site-header>

    <main id="main-content" tabindex="-1">
      <RouterView />
    </main>

    <cui-site-footer
      collapsible
      class="site-footer"
      :columns="footerColumns"
      :legal-links="[
        { label: 'Impressum', href: '/impressum' },
        { label: 'Kontakt', href: '/kontakt' }
      ]"
      :copyright="`© ${year} Freunde der Africa Music School. Alle Rechte vorbehalten.`"
    >
      <template #brand>
        <p class="footer-brand"><AmsLogo class="footer-brand__logo" /><span>Freunde der <strong>AMS</strong></span></p>
        <p>
          {{ verein.address[0] }}<br />
          {{ verein.address[1] }}, {{ verein.address[2] }}<br />
          <a :href="`mailto:${verein.email}`">{{ verein.email }}</a>
        </p>
      </template>
    </cui-site-footer>
  </div>
</template>

<style scoped>
.site {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  outline: none;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: var(--cui-heading);
}

.brand__logo {
  font-size: 3.8rem;
  transition: transform var(--cui-duration-slow) var(--cui-ease);
}

.brand:hover .brand__logo {
  transform: rotate(-6deg) scale(1.05);
}

.brand__text {
  font-family: var(--ams-font-display);
  font-size: 2.1rem;
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: -0.01em;
}

.brand__text strong {
  font-weight: 750;
  color: var(--ams-red-dark);
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: var(--ams-font-display);
  font-size: 2.2rem;
  margin-bottom: var(--cui-space-3);
}

.footer-brand__logo {
  font-size: 3.4rem;
  --ams-logo-outline: #f5efe6;
}

.site-footer a {
  color: inherit;
}
</style>
