<script setup lang="ts">
import PageHero from '../components/PageHero.vue'

const links = [
  { label: 'Verein „Freunde der Africa Music School Uganda“', href: '/verein' },
  { label: 'Blaswerk Haag, Weinfelden', href: 'https://www.blaswerkhaagshop.ch', newTab: true },
  { label: 'Musikschule Uzwil', href: 'https://www.schule-uzwil.ch/musikschule', newTab: true },
  { label: 'Muziek voor Kinderen', href: 'https://www.muziekvoorkinderen.org', newTab: true }
]
</script>

<template>
  <PageHero title="Unser Netzwerk" />

  <section class="ams-section">
    <div class="cui-container ams-grid ams-grid--aside">
      <div class="ams-prose">
        <blockquote class="ams-quote">
          <p>Wer schnell sein will, geht alleine. Wer weit kommen will, geht gemeinsam.</p>
          <footer class="ams-quote__source">Afrikanisches Sprichwort</footer>
        </blockquote>
        <h2>Die Helferinnen und Helfer der Africa Music School</h2>
        <p>
          An dieser Stelle möchten wir Ihnen alle Helferinnen und Helfer vorstellen, die die Arbeit von Francis Kalema und der Africa Music School in Uganda
          kontinuierlich mit grossem Engagement unterstützen:
        </p>
      </div>
      <cui-related-links title="Institutionen" :links="links" />
    </div>
  </section>
</template>
