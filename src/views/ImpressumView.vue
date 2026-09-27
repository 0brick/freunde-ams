<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import { verein } from '../content/verein'
</script>

<template>
  <PageHero title="Impressum" />

  <section class="ams-section">
    <div class="cui-container ams-prose">
      <h2>Angaben gemäss § 5 DDG</h2>
      <p>
        {{ verein.name }}<br />
        <template v-for="line in verein.address" :key="line">{{ line }}<br /></template>
      </p>

      <h3>Vertreten durch den Vorstand</h3>
      <ul>
        <li v-for="member in verein.board" :key="member.name">{{ member.name }} ({{ member.role.split(',')[0] }})</li>
      </ul>

      <h3>Kontakt</h3>
      <p>
        Telefon: <a :href="verein.phoneHref">{{ verein.phone }}</a><br />
        E-Mail: <a :href="`mailto:${verein.email}`">{{ verein.email }}</a>
      </p>

      <h3>Registereintrag</h3>
      <p>
        Eingetragen im Vereinsregister<br />
        Registergericht: {{ verein.register.court }}<br />
        Registernummer: {{ verein.register.number }}
      </p>
    </div>
  </section>
</template>
