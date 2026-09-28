<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import PhotoGallery from '../components/PhotoGallery.vue'
import img1 from '../assets/images/roseneggfest/img_8877.jpg'
import img2 from '../assets/images/roseneggfest/img_8908.jpg'
import img3 from '../assets/images/roseneggfest/img_8881.jpg'
import img4 from '../assets/images/roseneggfest/img_8939.jpg'

const images = [img1, img2, img3, img4].map((src, i) => ({ src, alt: `Spendenaktion beim Roseneggfest 2024, Bild ${i + 1}` }))
</script>

<template>
  <PageHero eyebrow="Projekt" title="Bus to Busunju 2024" text="Ein Meilenstein für die Mobilität und Sicherheit unserer Schüler." />

  <section class="ams-section">
    <div class="cui-container">
      <div class="ams-grid ams-grid--2">
        <div class="ams-card">
          <h2>Der neue Schulbus ist da!</h2>
          <p>
            Ein Etappenziel 2024 ist die Finanzierung eines Transportmittels für Schülerinnen, Schüler und Lehrpersonen der AMS zur neuen Schule in Busunju.
          </p>
          <p class="ams-lead">Dieses Ziel konnten wir im September dank Ihrer Spenden erreichen. Herzlichen Dank!</p>
        </div>
        <div class="ams-card">
          <h2>Spendenaktion beim Roseneggfest 2024</h2>
          <p>Dank Ihrer Spenden können wir 272,- SFR (289,21 Euro) für den Bus to Busunju einsetzen.</p>
          <cui-stat-card label="Spenden beim Roseneggfest 2024" value="289,21 €" />
        </div>
      </div>
      <PhotoGallery :images="images" ratio="4 / 3" min-width="26rem" class="ams-gallery" />
    </div>
  </section>
</template>
