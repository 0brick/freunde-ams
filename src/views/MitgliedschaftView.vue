<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import ContactPerson from '../components/ContactPerson.vue'
import { verein } from '../content/verein'
</script>

<template>
  <PageHero eyebrow="Unterstützung" title="Mitgliedschaft im Verein" text="Werden Sie Teil unserer Gemeinschaft und unterstützen Sie uns nachhaltig." />

  <section class="ams-section">
    <div class="cui-container ams-grid ams-grid--aside">
      <div class="ams-prose">
        <p class="ams-lead">
          Eine einfache Möglichkeit zu helfen, bietet unsere Mitgliedschaft im Verein „Freunde der Africa Music School Uganda e. V.“
        </p>
        <p>
          Mit einem Jahresbeitrag von 20,- SFR/EUR ist unser Ziel, möglichst viele Menschen für die Arbeit der AMS zu begeistern, denn in diesem Fall gilt: Viel
          hilft viel!
        </p>
        <p>Generell führt der Verein als Mitglieder (vgl. <RouterLink to="/verein/satzung">Satzung § 4 Mitgliedschaft</RouterLink>):</p>
        <ul>
          <li>Ordentliche Mitglieder, die den Verein regelmäßig mit ihrem Monats- bzw. Jahresbeitrag unterstützen.</li>
          <li>Fördermitglieder, die ein bestimmtes Projekt oder eine spezielle Aufgabe in besonderem Maße unterstützen möchten.</li>
        </ul>
      </div>
      <aside class="ams-grid">
        <cui-stat-card label="Jahresbeitrag" value="20,- SFR/EUR" />
        <ContactPerson name="Kai Kopp" role="Kontakt" :email="verein.email" :phone="verein.phone" :phone-href="verein.phoneHref" />
      </aside>
    </div>
  </section>
</template>
