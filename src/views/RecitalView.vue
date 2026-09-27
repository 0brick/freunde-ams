<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import PhotoGallery from '../components/PhotoGallery.vue'

const files = import.meta.glob<string>('../assets/images/recital/*.jpg', { eager: true, import: 'default' })
const images = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src], i) => ({ src, alt: `Recital 2024 Bild ${i + 1}` }))
</script>

<template>
  <PageHero eyebrow="Events" title="Recital 2024" />
  <section class="ams-section">
    <div class="cui-container">
      <PhotoGallery :images="images" />
    </div>
  </section>
</template>
