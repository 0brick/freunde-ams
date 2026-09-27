<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import ContactPerson from '../components/ContactPerson.vue'
</script>

<template>
  <PageHero eyebrow="Unterstützung" title="Patenschaften" text="Unterstützen Sie ein Kind direkt auf seinem Bildungsweg." />

  <section class="ams-section">
    <div class="cui-container ams-grid ams-grid--aside">
      <div class="ams-prose">
        <p class="ams-lead">
          Wenn Sie Interesse an der Übernahme einer Patenschaft haben, nehmen Sie bitte Kontakt auf mit Sara Gmeinwieser. Sie betreut im Verein „Freunde der AMS
          Uganda“ die Patenschaften.
        </p>

        <RouterLink to="/unterstuetzung/patenschaften/nazifah" class="story">
          <span class="ams-kicker">Patenschafts-Geschichte</span>
          <h2 class="story__title">Nazifah, 7 Jahre</h2>
          <p class="story__meta">Instrument: Klavier</p>
          <p>
            Nazifah lebt in einer Blechhütte am Rande von Kampala. Ihre Geschichte zeigt, wie eine Patenschaft nicht nur Bildung, sondern auch Lebensfreude und
            Selbstvertrauen schenken kann.
          </p>
          <span class="story__more">Lesen Sie Nazifahs Geschichte <span aria-hidden="true">→</span></span>
        </RouterLink>
      </div>
      <ContactPerson
        name="Sara Gmeinwieser"
        role="Kontakt für Patenschaften"
        email="sara.gmeinwieser@gmail.com"
        phone="0049 175 2153824"
        phone-href="tel:+491752153824"
      />
    </div>
  </section>
</template>

<style scoped>
.story {
  display: block;
  margin-top: var(--cui-space-6);
  padding: clamp(2.4rem, 3vw, 4rem);
  background: var(--ams-ink-surface);
  color: #e9e2d8;
  border-radius: var(--cui-radius-lg);
  text-decoration: none;
  transition: transform var(--cui-duration-slow) var(--cui-ease);
}

.story:hover {
  transform: translateY(-4px);
  color: #e9e2d8;
}

.story .ams-kicker {
  color: var(--ams-gold);
}

.story__title {
  color: #fff;
  margin-bottom: var(--cui-space-1);
}

.story__meta {
  color: var(--ams-gold);
  font-weight: 600;
}

.story p {
  color: inherit;
}

.story__more {
  font-weight: 600;
  color: #fff;
}
</style>
