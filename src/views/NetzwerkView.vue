<script setup lang="ts">
import PageHero from '../components/PageHero.vue'

const partners = [
  {
    kind: 'Förderverein',
    name: 'Freunde der Africa Music School Uganda e.\u00a0V.',
    place: 'Konstanz',
    text: 'Sammelt Spenden und organisiert Unterstützung, um die Arbeit von Francis Kalema und seinem Team zu sichern.',
    href: '/verein',
    linkLabel: 'Mehr über den Verein'
  },
  {
    kind: 'Instrumentenbau',
    name: 'Blaswerk Haag',
    place: 'Weinfelden, Schweiz',
    text: 'Bei Blaswerk Haag lernte Francis Kalema die Reparatur von Instrumenten und erhielt Spezialwerkzeuge für die Werkstatt der AMS.',
    href: 'https://www.blaswerkhaagshop.ch',
    linkLabel: 'blaswerkhaagshop.ch'
  },
  {
    kind: 'Musikschule',
    name: 'Musikschule Uzwil',
    place: 'Uzwil, Schweiz',
    text: 'Geleitet von Kai Kopp, dem Präsidenten unseres Vereins.',
    href: 'https://www.schule-uzwil.ch/musikschule',
    linkLabel: 'schule-uzwil.ch'
  },
  {
    kind: 'Initiative',
    name: 'Muziek voor Kinderen',
    place: '',
    text: '',
    href: 'https://www.muziekvoorkinderen.org',
    linkLabel: 'muziekvoorkinderen.org'
  }
].map((partner) => ({ ...partner, external: partner.href.startsWith('http') }))
</script>

<template>
  <PageHero title="Unser Netzwerk" />

  <section class="ams-section">
    <div class="cui-container">
      <div class="ams-prose intro">
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

      <h3 class="partners-title">Institutionen</h3>
      <ul class="partners">
        <li v-for="partner in partners" :key="partner.href">
          <a
            :href="partner.href"
            class="partner"
            :target="partner.external ? '_blank' : undefined"
            :rel="partner.external ? 'noopener noreferrer' : undefined"
          >
            <span class="partner__kind">{{ partner.kind }}</span>
            <strong class="partner__name">{{ partner.name }}</strong>
            <span v-if="partner.place" class="partner__place">{{ partner.place }}</span>
            <span v-if="partner.text" class="partner__text">{{ partner.text }}</span>
            <span class="partner__link">
              {{ partner.linkLabel }}
              <span aria-hidden="true">{{ partner.external ? '↗' : '→' }}</span>
              <span v-if="partner.external" class="sr-only">(öffnet in neuem Tab)</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.intro {
  margin-bottom: var(--cui-space-7);
}

.partners-title {
  margin-bottom: var(--cui-space-5);
}

.partners {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: var(--cui-space-5);
}

@media (min-width: 800px) {
  .partners {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.partner {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: clamp(2.4rem, 3vw, 3.2rem);
  background: var(--ams-paper);
  border: 1px solid var(--ams-line);
  border-top: 4px solid var(--ams-gold);
  border-radius: var(--cui-radius-lg);
  color: var(--cui-text);
  text-decoration: none;
  transition:
    transform var(--cui-duration-slow) var(--cui-ease),
    box-shadow var(--cui-duration-slow) var(--cui-ease),
    border-color var(--cui-duration-slow) var(--cui-ease);
}

.partner:hover {
  transform: translateY(-4px);
  box-shadow: var(--cui-shadow-md);
  border-color: var(--ams-red);
  color: var(--cui-text);
}

.partner:focus-visible {
  outline: 3px solid var(--cui-focus-ring);
  outline-offset: 3px;
}

.partner__kind {
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ams-red-dark);
}

.partner__name {
  margin-top: var(--cui-space-2);
  font-family: var(--ams-font-display);
  font-size: 2.2rem;
  font-weight: 650;
  line-height: 1.25;
  color: var(--cui-heading);
}

.partner__place {
  margin-top: var(--cui-space-1);
  font-size: 1.5rem;
  color: var(--cui-text-muted);
}

.partner__text {
  margin-top: var(--cui-space-3);
  font-size: 1.6rem;
  line-height: 1.6;
}

.partner__link {
  margin-top: auto;
  padding-top: var(--cui-space-4);
  font-weight: 600;
  color: var(--ams-red-dark);
  overflow-wrap: anywhere;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
</style>
