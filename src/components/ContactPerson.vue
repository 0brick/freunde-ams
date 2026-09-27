<script setup lang="ts">
defineProps({
  name: { type: String, required: true },
  role: { type: String, default: '' },
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  phoneHref: { type: String, default: '' }
})
</script>

<template>
  <div class="ams-card person">
    <p v-if="role" class="person__role">{{ role }}</p>
    <p class="person__name">{{ name }}</p>
    <dl class="ams-facts">
      <template v-if="email">
        <dt>E-Mail</dt>
        <dd><a :href="`mailto:${email}`">{{ email }}</a></dd>
      </template>
      <template v-if="phone">
        <dt>Telefon</dt>
        <dd><a :href="phoneHref">{{ phone }}</a></dd>
      </template>
    </dl>
  </div>
</template>

<style scoped>
.person__role {
  margin: 0 0 var(--cui-space-1);
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ams-red-dark);
}

.person__name {
  font-family: var(--ams-font-display);
  font-size: 2.6rem;
  font-weight: 600;
  color: var(--cui-heading);
  margin-bottom: var(--cui-space-4);
}

.ams-facts dd {
  overflow-wrap: anywhere;
}
</style>
