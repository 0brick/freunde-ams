import { createRouter, createWebHistory, type RouteComponent } from 'vue-router'
import { pages, redirects, pageTitle, type Page } from './pages'

const views: Record<string, () => Promise<RouteComponent>> = {
  home: () => import('./views/HomeView.vue'),
  verein: () => import('./views/VereinView.vue'),
  satzung: () => import('./views/SatzungView.vue'),
  schule: () => import('./views/SchuleView.vue'),
  busunju: () => import('./views/BusunjuView.vue'),
  bus: () => import('./views/BusView.vue'),
  events: () => import('./views/EventsView.vue'),
  recital: () => import('./views/RecitalView.vue'),
  netzwerk: () => import('./views/NetzwerkView.vue'),
  aktuelles: () => import('./views/AktuellesView.vue'),
  reisebericht: () => import('./views/ReiseberichtView.vue'),
  weihnachtskonzert: () => import('./views/WeihnachtskonzertView.vue'),
  unterstuetzung: () => import('./views/UnterstuetzungView.vue'),
  geldspenden: () => import('./views/GeldspendenView.vue'),
  zeitspenden: () => import('./views/ZeitspendenView.vue'),
  patenschaften: () => import('./views/PatenschaftenView.vue'),
  nazifah: () => import('./views/NazifahView.vue'),
  mitgliedschaft: () => import('./views/MitgliedschaftView.vue'),
  kontakt: () => import('./views/KontaktView.vue'),
  impressum: () => import('./views/ImpressumView.vue')
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...pages.map((page) => ({ path: page.path, name: page.name, component: views[page.name]!, meta: { page } })),
    ...redirects.map(({ from, to }) => ({ path: from, redirect: to })),
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('./views/NotFoundView.vue') }
  ],
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 90 }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const page = to.meta.page as Page | undefined
  document.title = page ? pageTitle(page) : 'Seite nicht gefunden – Freunde der Africa Music School Uganda'
  const description = document.querySelector('meta[name="description"]')
  if (page && description) description.setAttribute('content', page.description)
})

export default router
