<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import BankDetails from '../components/BankDetails.vue'
import { paypalUrl } from '../content/verein'
</script>

<template>
  <PageHero eyebrow="Unterstützung" title="Geldspenden" text="Ihre finanzielle Unterstützung macht einen direkten Unterschied." />

  <section class="ams-section">
    <div class="cui-container ams-grid ams-grid--aside">
      <div class="ams-prose">
        <p class="ams-lead">
          Jede Spende, egal wie hoch, trägt unmittelbar dazu bei, die Lebensbedingungen und Bildungschancen der Kinder in der Africa Music School zu verbessern.
          Ihre finanzielle Hilfe ermöglicht es uns, Instrumente, Unterrichtsmaterialien und tägliche Mahlzeiten bereitzustellen.
        </p>
        <p>
          Als gemeinnütziger Verein stellen wir sicher, dass Ihre Spende direkt und ohne Abzüge dort ankommt, wo sie am dringendsten benötigt wird. Für Spenden
          erhalten Sie selbstverständlich eine Spendenquittung.
        </p>
        <p>Bei Fragen zu Spenden oder für eine Spendenquittung kontaktieren Sie uns bitte über unsere <RouterLink to="/kontakt">Kontaktseite</RouterLink>.</p>
      </div>
      <div class="ams-grid">
        <BankDetails />
        <div class="ams-card">
          <h3>PayPal Spende</h3>
          <p>
            Für eine schnelle und unkomplizierte Spende können Sie auch PayPal nutzen. Klicken Sie einfach auf den untenstehenden Button, um zu unserem
            PayPal-Spendenformular zu gelangen:
          </p>
          <cui-button variant="accent" :href="paypalUrl" new-tab>Jetzt mit PayPal spenden</cui-button>
        </div>
      </div>
    </div>
  </section>
</template>
