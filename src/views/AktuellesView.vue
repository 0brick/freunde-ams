<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import reportImage from '../assets/images/allgemein/annual-report-2024.jpg'
import recitalImage from '../assets/images/recital/eowg8894.jpg'
import reiseImage from '../assets/images/allgemein/reisebericht-2023.jpg'
import konzertImage from '../assets/images/allgemein/weihnachtskonzert-2022.jpg'

const items = [
  { title: 'Jahresbericht 2024', text: 'Der Tätigkeitsbericht 2024 der Africa Music School (PDF, englisch und deutsch).', image: reportImage, href: '/downloads/jahresbericht-2024.pdf', newTab: true },
  { title: 'Recital 2024', text: 'Bilder vom Recital 2024 der Africa Music School.', image: recitalImage, href: '/recital' },
  { title: 'Reisebericht 2023', text: 'Ein persönlicher Einblick in die Arbeit der Africa Music School.', image: reiseImage, href: '/aktuelles/reisebericht-2023' },
  { title: 'Weihnachtskonzert 2022', text: 'Ein festlicher Rückblick auf das Weihnachtskonzert 2022 der Africa Music School.', image: konzertImage, href: '/aktuelles/weihnachtskonzert-2022' }
]
</script>

<template>
  <PageHero title="Aktuelles" text="Bleiben Sie auf dem Laufenden über unsere Projekte, Veranstaltungen und Neuigkeiten." />
  <cui-teaser-grid title="Neuigkeiten" :items="items" class="news ams-teasers-4" />
</template>

<style scoped>
.news :deep(.cui-section-head),
.news :deep(h2) {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}
</style>
