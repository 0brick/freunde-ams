<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import image from '../assets/images/busunju/bild6.jpg'
</script>

<template>
  <PageHero
    eyebrow="Projekt"
    title="Ein neues Zuhause in Busunju"
    text="Ein neues Kapitel für die Africa Music School."
    :image="image"
    image-alt="Erste Holzbauten der Africa Music School auf dem Grundstück in Busunju"
    image-position="center 55%"
    image-position-mobile="65% center"
  />

  <section class="ams-section">
    <div class="cui-container ams-grid ams-grid--aside">
      <div class="ams-prose">
        <h2>Ein neues Zuhause auf dem Land</h2>
        <p>
          Zurzeit ist die Africa Music School in einer Phase des Umbruchs: Die bisherigen Räumlichkeiten in Kampalas Stadtteil Masajja sind zu klein geworden und
          sie sind zudem viel zu teuer für die Schule. Dem Leiter, Francis Kalema, ist es gelungen, in einem Vorort von Kampala, in Busunju, ein Grundstück zu
          erwerben, um die Schule dort neu zu errichten und kostengünstiger betreiben zu können.
        </p>
        <p>
          Aber es fehlen die Räume für den Unterricht, die Verwaltung und die sichere Verwahrung der Instrumente der Schule, und es fehlt die Wasserversorgung. Es
          müssen also Gebäude erstellt und ein Brunnen sowie eine Sickergrube gebaut werden. Gerechnet wird für den Anfang dort mit reinen Baukosten von ca.
          15.000 €. Danach werden noch weitere Kosten für Mobiliar etc. anfallen.
        </p>
        <p class="ams-lead">Für dies alles braucht die Africa Music School dringend Unterstützung.</p>
        <div class="ams-actions">
          <cui-button variant="accent" href="/unterstuetzung/geldspenden">Jetzt für Busunju spenden</cui-button>
        </div>
      </div>
      <aside>
        <cui-stat-card label="Geschätzte reine Baukosten für den Anfang" value="ca. 15.000 €" class="cost" />
      </aside>
    </div>
  </section>
</template>

<style scoped>
.cost {
  position: sticky;
  top: 10rem;
}
</style>
