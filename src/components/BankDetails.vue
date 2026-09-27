<script setup lang="ts">
import { bank } from '../content/verein'
</script>

<template>
  <div class="ams-card bank">
    <h3>Spendenkonto Deutschland</h3>
    <p>Wir freuen uns über Ihre Spende, die Sie gerne auf folgendes Konto überweisen können:</p>
    <dl class="ams-facts">
      <dt>Name</dt>
      <dd>{{ bank.name }}</dd>
      <dt>IBAN</dt>
      <dd class="bank__iban">{{ bank.iban }}</dd>
      <dt>BIC</dt>
      <dd>{{ bank.bic }}</dd>
      <dt>Bank</dt>
      <dd>{{ bank.bank }}</dd>
    </dl>
  </div>
</template>

<style scoped>
.bank {
  border-top: 4px solid var(--ams-gold);
}

.bank .ams-facts {
  grid-template-columns: 1fr;
  gap: 0;
}

.bank .ams-facts dt {
  font-size: 1.3rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.bank .ams-facts dd {
  margin-bottom: var(--cui-space-3);
}

.bank__iban {
  font-size: clamp(1.7rem, 4.4vw, 2rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--cui-heading);
}
</style>
