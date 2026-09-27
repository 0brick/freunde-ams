<script setup lang="ts">
import { ref } from 'vue'
import PageHero from '../components/PageHero.vue'
import poster from '../assets/images/allgemein/weihnachtskonzert-2022.jpg'

const playing = ref(false)
</script>

<template>
  <PageHero eyebrow="Aktuelles" title="Weihnachtskonzert 2022" text="Ein festlicher Rückblick auf das Weihnachtskonzert 2022 der Africa Music School." />

  <section class="ams-section">
    <div class="cui-container">
      <div class="video">
        <iframe
          v-if="playing"
          src="https://www.youtube-nocookie.com/embed/fABfcLmMLnE?autoplay=1"
          title="Africa Music School – Weihnachtskonzert 2022"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <button v-else type="button" class="video__consent" @click="playing = true">
          <img :src="poster" alt="" />
          <span class="video__overlay">
            <span class="video__play" aria-hidden="true">▶</span>
            <strong>Video abspielen</strong>
            <small>Mit dem Abspielen wird eine Verbindung zu YouTube (Google) hergestellt.</small>
          </span>
        </button>
      </div>
      <p class="video__link">
        <a href="https://www.youtube.com/watch?v=fABfcLmMLnE" target="_blank" rel="noopener noreferrer">Video direkt auf YouTube ansehen</a>
      </p>
    </div>
  </section>
</template>

<style scoped>
.video {
  position: relative;
  aspect-ratio: 16 / 9;
  max-width: 100rem;
  margin: 0 auto;
  border-radius: var(--cui-radius-lg);
  overflow: hidden;
  background: #16120e;
  box-shadow: var(--cui-shadow-lg);
}

.video iframe,
.video__consent,
.video__consent img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video__consent {
  padding: 0;
  cursor: pointer;
  background: none;
}

.video__consent img {
  object-fit: cover;
  transform: scale(1.14);
  filter: brightness(0.55);
}

.video__overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: var(--cui-space-2);
  padding: var(--cui-space-5);
  color: #fff;
  text-align: center;
  font-size: 1.8rem;
}

.video__overlay small {
  max-width: 44ch;
  font-size: 1.4rem;
  opacity: 0.85;
}

.video__play {
  display: grid;
  place-items: center;
  width: 7.2rem;
  height: 7.2rem;
  padding-left: 0.4rem;
  border-radius: 50%;
  background: var(--ams-red);
  font-size: 2.6rem;
  transition: transform var(--cui-duration) var(--cui-ease);
}

.video__consent:hover .video__play {
  transform: scale(1.08);
}

.video__link {
  max-width: 100rem;
  margin: var(--cui-space-4) auto 0;
  text-align: center;
}
</style>
