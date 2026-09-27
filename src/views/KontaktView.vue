<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import BankDetails from '../components/BankDetails.vue'
import { verein } from '../content/verein'
</script>

<template>
  <PageHero title="Kontakt" text="Wir freuen uns, von Ihnen zu hören. Nehmen Sie Kontakt mit uns auf." />

  <section class="ams-section">
    <div class="cui-container ams-grid ams-grid--2">
      <div class="ams-card">
        <h2>Kontaktinformationen</h2>
        <p class="ams-lead">Verein „{{ verein.name }}“</p>
        <div class="contact">
          <div>
            <h3>Sitz des Vereins</h3>
            <p><template v-for="line in verein.address" :key="line">{{ line }}<br /></template></p>
          </div>
          <div>
            <h3>E-Mail</h3>
            <p><a :href="`mailto:${verein.email}`">{{ verein.email }}</a></p>
          </div>
          <div>
            <h3>Telefon</h3>
            <p><a :href="verein.phoneHref">{{ verein.phone }}</a></p>
          </div>
        </div>
      </div>
      <div>
        <h2 class="bank-title">Bankverbindung</h2>
        <BankDetails />
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  display: grid;
  gap: var(--cui-space-4);
}

.contact h3 {
  margin: 0 0 var(--cui-space-1);
  font-family: var(--cui-font-sans);
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ams-red-dark);
}

.contact p {
  margin: 0;
  overflow-wrap: anywhere;
}

.bank-title {
  margin-top: clamp(2.4rem, 3vw, 3.6rem);
}
</style>
