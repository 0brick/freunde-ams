<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import { verein } from '../content/verein'
</script>

<template>
  <PageHero
    title="Über den Verein"
    text="Wir sind die „Freunde der Africa Music School Uganda e. V.“, gegründet 2023, um die wertvolle Arbeit der Africa Music School zu fördern und zu unterstützen."
  />

  <section class="ams-section">
    <div class="cui-container ams-grid ams-grid--aside">
      <div class="ams-prose">
        <h2>Wie alles anfing</h2>
        <p>
          Kerstin und Kai haben seit längerem eine intensive Arbeitsbeziehung über die Jugendmusikschule Kreuzlingen mit der Africa Music School und ganz
          besonders mit Francis Kalema, dem Leiter der Africa Music School.
        </p>
        <p>
          Karl-Heinz ist ein ehemaliger Berufsschullehrer, der auch in der Schulleitung und Schulverwaltung tätig war. Im Sommer 2023 wurde er vier Wochen lang
          vom Senior Experten Service in Bonn in Kampala vor Ort eingesetzt, um die Leitung der Africa Music School zu unterstützen bei der Verbesserung der
          Organisationsstrukturen. Dabei ging es auch darum, die nachhaltige Verstetigung der Arbeit der Africa Music School zu sichern. Er war schnell
          beeindruckt sowohl von der Herzlichkeit und Wärme des Umgangs mit den Kindern und Jugendlichen wie auch von der Professionalität der Organisation und
          des Unterrichts.
        </p>
        <p>
          Dabei sind sich Kai und Karl-Heinz an der Africa Music School in Kampala begegnet und haben schnell beschlossen, dass sie gemeinsam etwas unternehmen
          könnten, um dieser tollen und wertvollen Einrichtung zu helfen. Daraus entstand letztlich dieser Verein.
        </p>
        <p>
          Unser Verein ist selbstlos tätig, alle Mitglieder des Vereins arbeiten ehrenamtlich. Unser Ziel ist, die Africa Music School durch Spenden und
          Zuwendungen finanziell zu fördern und dabei gleichzeitig auch administrativ und pädagogisch zur Seite zu stehen.
        </p>
        <blockquote class="ams-quote">
          <p>
            Durch unseren persönlichen Kontakt und unser persönliches Interesse an der Africa Music School sind wir direkt in die Abläufe und das Geschehen an
            der AMS in Uganda eingebunden. Ihre Spenden kommen direkt und ohne Umwege den Kindern und Jugendlichen an der Africa Music School in Uganda zugute.
            Hierfür verbürgen wir uns.
          </p>
          <footer class="ams-quote__source">Der Vorstand</footer>
        </blockquote>
      </div>

      <aside class="ams-grid">
        <div class="ams-card">
          <h3>Unser Vorstand</h3>
          <ul class="board">
            <li v-for="member in verein.board" :key="member.name">
              <strong>{{ member.name }}</strong>
              <span>{{ member.role }}</span>
            </li>
          </ul>
        </div>
        <div class="ams-card">
          <h3>Sitz des Vereins</h3>
          <p>
            <template v-for="line in verein.address" :key="line">{{ line }}<br /></template>
            <a :href="`mailto:${verein.email}`">{{ verein.email }}</a>
          </p>
          <cui-button variant="outline" size="sm" href="/verein/satzung">Satzung einsehen</cui-button>
        </div>
      </aside>
    </div>
  </section>

  <cui-cta-banner
    background="navy"
    title="Werden Sie Mitglied"
    text="Unterstützen Sie die Africa Music School nachhaltig mit einer Mitgliedschaft im Förderverein. Jeder Beitrag hilft, unsere Projekte langfristig zu sichern."
    :action="{ label: 'Jetzt Mitglied werden', href: '/unterstuetzung/mitgliedschaft' }"
  />
</template>

<style scoped>
.board {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: var(--cui-space-4);
}

.board li {
  display: grid;
  padding-left: var(--cui-space-4);
  border-left: 3px solid var(--ams-gold);
}

.board strong {
  font-size: 1.8rem;
  color: var(--cui-heading);
}

.board span {
  color: var(--cui-text-muted);
}
</style>
