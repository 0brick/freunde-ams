<script setup lang="ts">
import heroImage from '../assets/images/recital/kvcd4729.jpg'
import kinderImage from '../assets/images/allgemein/og-kinder.jpg'
import busunjuImage from '../assets/images/busunju/bild6.jpg'
import busImage from '../assets/images/roseneggfest/img_8908.jpg'
import reiseImage from '../assets/images/allgemein/reisebericht-2023.jpg'
import recitalImage from '../assets/images/recital/ijdw4776.jpg'

const teasers = [
  { title: 'Ein neues Zuhause in Busunju', text: 'Ein neues Kapitel für die Africa Music School.', image: busunjuImage, href: '/projekte/busunju' },
  { title: 'Bus to Busunju 2024', text: 'Ein Meilenstein für die Mobilität und Sicherheit unserer Schüler.', image: busImage, href: '/projekte/bus-to-busunju-2024' },
  { title: 'Reisebericht 2023', text: 'Ein persönlicher Einblick in die Arbeit der Africa Music School.', image: reiseImage, href: '/aktuelles/reisebericht-2023' },
  { title: 'Recital 2024', text: 'Bilder vom Recital 2024 der Africa Music School.', image: recitalImage, href: '/recital' }
]
</script>

<template>
  <cui-hero-section
    stage
    full-height
    align="left"
    vertical-align="center"
    :image="heroImage"
    image-alt="Blasorchester und Tänzerinnen der Africa Music School beim Recital 2024"
    scroll-target="#ueber-uns"
    eyebrow="Kampala · Uganda"
    title="Freunde der Africa Music School"
    text="Durch Musik bewirken wir Veränderung."
    :primary-action="{ label: 'Über den Verein', href: '/verein' }"
    :secondary-action="{ label: 'Jetzt unterstützen', href: '/unterstuetzung' }"
    class="home-hero"
  />

  <section id="ueber-uns" class="ams-section">
    <div class="cui-container ams-grid ams-grid--aside intro">
      <div class="ams-prose">
        <p class="ams-kicker">Über uns</p>
        <h2>Gemeinsam für eine bessere Zukunft durch Musik</h2>
        <p class="ams-lead">
          Die Africa Music School (AMS) in Kampala, Uganda, ist mehr als nur eine Schule. Sie ist ein Zufluchtsort, der bedürftigen Kindern nicht nur eine
          musikalische Ausbildung, sondern auch Hoffnung und eine Perspektive für die Zukunft gibt.
        </p>
        <p>
          Geleitet von Francis Kalema, der selbst den Weg aus der Armut durch die Musik gefunden hat, bietet die AMS den Kindern eine sichere Umgebung, eine
          Mahlzeit und vor allem eine fundierte musikalische Bildung.
        </p>
        <p>
          Als Verein „Freunde der Africa Music School“ haben wir es uns zur Aufgabe gemacht, diese wertvolle Arbeit zu unterstützen. Gegründet aus einer tiefen
          Verbundenheit und der Überzeugung, dass Musik Leben verändern kann, bündeln wir unsere Kräfte, um die Schule sowohl finanziell als auch ideell zu
          fördern.
        </p>
        <p>
          Unsere enge Partnerschaft mit der Jugendmusik Kreuzlingen (JMK) und das Engagement unserer Mitglieder ermöglichen es uns, gezielt dort zu helfen, wo es
          am dringendsten benötigt wird – sei es durch Instrumentenspenden, die Finanzierung von Projekten oder den Austausch von Wissen.
        </p>
        <blockquote class="ams-quote">
          <p>Mit grosser Freude unterstützen wir diese wertvolle Arbeit und laden Sie ein, ein Teil davon zu werden.</p>
        </blockquote>
      </div>
      <aside class="intro__aside">
        <img :src="kinderImage" alt="Kinder der Africa Music School beim Musizieren" class="ams-photo" loading="lazy" />
        <div class="ams-card">
          <h3>Einblick in die Arbeit der Schule</h3>
          <p>Verschaffen Sie sich einen Einblick in die Arbeit der Schule:</p>
          <ul class="external-links">
            <li><span>Homepage</span><a href="https://www.africamusicschool.org" target="_blank" rel="noopener noreferrer">www.africamusicschool.org</a></li>
            <li><span>Facebook</span><a href="https://www.facebook.com/amsmusicschool/" target="_blank" rel="noopener noreferrer">facebook.com/amsmusicschool</a></li>
            <li>
              <span>Instagram</span
              ><a href="https://www.instagram.com/africa_music_school_foundation/" target="_blank" rel="noopener noreferrer"
                >instagram.com/africa_music_school_foundation</a
              >
            </li>
          </ul>
          <p class="intro__note">Wir freuen uns riesig, einen kleinen Teil zum Erfolg dieses Projekts beitragen zu können.</p>
        </div>
      </aside>
    </div>
  </section>

  <div class="ams-section--paper">
    <cui-teaser-grid class="ams-teasers-4" eyebrow="Projekte & Einblicke" title="Aus der Africa Music School" :items="teasers" />
  </div>

  <cui-cta-banner
    background="#F5A800"
    class="ams-cta-gold"
    title="Möchten Sie die Schule unterstützen?"
    text="Der Verein „Freunde der Africa Music School“ sammelt Spenden und organisiert Unterstützung, um die Arbeit von Francis Kalema und seinem Team zu sichern."
    :action="{ label: 'Jetzt unterstützen', href: '/unterstuetzung' }"
  />
</template>

<style scoped>
.home-hero :deep(.cui-hero__media--stage img) {
  object-position: center 35%;
  filter: saturate(1.05) contrast(1.05);
}

.home-hero :deep(.cui-hero__veil) {
  background:
    linear-gradient(90deg, rgba(14, 10, 8, 0.86) 0%, rgba(14, 10, 8, 0.6) 45%, rgba(14, 10, 8, 0.2) 100%),
    linear-gradient(0deg, rgba(14, 10, 8, 0.6) 0%, rgba(14, 10, 8, 0) 45%);
}

.home-hero :deep(h1) {
  max-width: 14ch;
  font-size: clamp(4.4rem, 6vw + 1rem, 8.8rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
}

.home-hero :deep(.cui-hero__text-copy) {
  font-size: clamp(2rem, 1vw + 1.6rem, 2.6rem);
  font-family: var(--ams-font-display);
  font-style: italic;
  font-weight: 400;
}

.intro__aside {
  display: grid;
  gap: var(--cui-space-5);
}

.intro__aside .ams-photo {
  aspect-ratio: 16 / 10;
}

.external-links {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--cui-space-4);
  display: grid;
  gap: var(--cui-space-3);
}

.external-links li {
  display: grid;
}

.external-links span {
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cui-text-muted);
}

.external-links a {
  overflow-wrap: anywhere;
}

.intro__note {
  margin: 0;
  font-style: italic;
  color: var(--cui-text-muted);
}
</style>
