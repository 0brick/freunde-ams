<script setup lang="ts">
import PageHero from '../components/PageHero.vue'

const options = [
  { title: 'Geldspenden', text: 'Ihre finanzielle Unterstützung ermöglicht uns den Kauf von Instrumenten, Lebensmitteln und Schulmaterial. Jeder Beitrag, ob gross oder klein, macht einen Unterschied.', href: '/unterstuetzung/geldspenden' },
  { title: 'Zeitspende', text: 'Gutes zu tun ist schön und mit viel Arbeit verbunden. Bringen Sie sich aktiv in die mannigfaltigen To-Dos des Vereins ein. Wir freuen uns über Ihre Kontaktaufnahme.', href: '/unterstuetzung/zeitspenden' },
  { title: 'Patenschaften', text: 'Übernehmen Sie eine Patenschaft für ein Kind und ermöglichen Sie ihm den Schulbesuch, eine tägliche Mahlzeit und eine musikalische Ausbildung.', href: '/unterstuetzung/patenschaften' },
  { title: 'Mitgliedschaft', text: 'Werden Sie Mitglied im Verein „Freunde der Africa Music School Uganda“ und unterstützen Sie uns nachhaltig. Ihr Mitgliedsbeitrag sichert die Zukunft unserer Projekte.', href: '/unterstuetzung/mitgliedschaft' }
]
</script>

<template>
  <PageHero title="Ihre Unterstützungsmöglichkeiten" text="Sie haben zahlreiche Möglichkeiten, die Arbeit der AMS zu unterstützen …" />

  <section class="ams-section">
    <div class="cui-container ams-grid ams-grid--2">
      <RouterLink v-for="(option, i) in options" :key="option.href" :to="option.href" class="option">
        <span class="option__number" aria-hidden="true">0{{ i + 1 }}</span>
        <h2 class="option__title">{{ option.title }}</h2>
        <p>{{ option.text }}</p>
        <span class="option__more">Mehr erfahren <span aria-hidden="true">→</span></span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.option {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: clamp(2.4rem, 3vw, 4rem);
  background: var(--ams-paper);
  border: 1px solid var(--ams-line);
  border-radius: var(--cui-radius-lg);
  color: var(--cui-text);
  text-decoration: none;
  transition:
    transform var(--cui-duration-slow) var(--cui-ease),
    box-shadow var(--cui-duration-slow) var(--cui-ease),
    border-color var(--cui-duration-slow) var(--cui-ease);
}

.option:hover {
  transform: translateY(-4px);
  box-shadow: var(--cui-shadow-md);
  border-color: var(--ams-red);
  color: var(--cui-text);
}

.option__number {
  font-family: var(--ams-font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--ams-red);
  margin-bottom: var(--cui-space-3);
}

.option__title {
  font-size: var(--cui-fz-h3);
  margin-bottom: var(--cui-space-3);
}

.option p {
  flex: 1;
}

.option__more {
  font-weight: 600;
  color: var(--ams-red-dark);
}
</style>
