<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import ContactPerson from '../components/ContactPerson.vue'
import { verein } from '../content/verein'
</script>

<template>
  <PageHero eyebrow="Unterstützung" title="Zeitspenden" text="Ihre Zeit und Ihr Talent sind eine wertvolle Unterstützung." />

  <section class="ams-section">
    <div class="cui-container ams-grid ams-grid--aside">
      <div class="ams-prose">
        <blockquote class="ams-quote">
          <p>„Kunst ist schön, macht aber viel Arbeit.“</p>
          <footer class="ams-quote__source">Karl Valentin</footer>
        </blockquote>
        <p class="ams-lead">Gutes zu tun ist ebenso schön und mit viel Arbeit verbunden.</p>
        <p>Gerne laden wir Sie ein, sich aktiv in die mannigfaltigen To-Dos des Vereins einzubringen. Nehmen Sie bitte Kontakt auf zu:</p>
      </div>
      <ContactPerson name="Kai Kopp" role="Kontakt" :email="verein.email" :phone="verein.phone" :phone-href="verein.phoneHref" />
    </div>
  </section>
</template>
