<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import recitalImage from '../assets/images/recital/abtu6829.jpg'
import konzertImage from '../assets/images/allgemein/weihnachtskonzert-2022.jpg'

const past = [
  { title: 'Recital 2024', text: 'Bilder vom Recital 2024 der Africa Music School.', image: recitalImage, href: '/recital' },
  { title: 'Weihnachtskonzert 2022', text: 'Ein festlicher Rückblick auf das Weihnachtskonzert 2022 der Africa Music School.', image: konzertImage, href: '/aktuelles/weihnachtskonzert-2022' }
]
</script>

<template>
  <PageHero title="Events & News" text="Besuchen Sie unsere nächste Veranstaltung und bleiben Sie über unsere Neuigkeiten auf dem Laufenden." />

  <section class="ams-section">
    <div class="cui-container">
      <h2>Kommende Events</h2>
      <cui-empty-state title="Derzeit sind keine Veranstaltungen geplant" text="Neue Termine veröffentlichen wir hier und unter „Aktuelles“.">
        <template #icon>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 10h18M8 3v4M16 3v4" />
          </svg>
        </template>
      </cui-empty-state>
    </div>
  </section>

  <div class="ams-section--paper">
    <cui-teaser-grid title="Vergangene Events" intro="Ein Einblick in die Momente, die unsere Schule besonders machen." :items="past" />
  </div>
</template>
