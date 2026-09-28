<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  text: { type: String, default: '' },
  image: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  imagePosition: { type: String, default: 'center' },
  imagePositionMobile: { type: String, default: '' }
})
</script>

<template>
  <cui-hero-section
    size="compact"
    background="navy"
    :eyebrow="eyebrow"
    :title="title"
    :text="text"
    :image="image || undefined"
    :image-alt="imageAlt"
    class="page-hero"
    :class="{ 'page-hero--plain': !image }"
    :style="{ '--hero-pos': imagePosition, '--hero-pos-mobile': imagePositionMobile || imagePosition }"
  />
</template>

<style scoped>
.page-hero--plain :deep(.cui-hero__content),
.page-hero--plain :deep(.cui-hero__inner) {
  max-width: none;
}

.page-hero :deep(.cui-hero__media img) {
  object-position: var(--hero-pos);
}

@media (max-width: 700px) {
  .page-hero :deep(.cui-hero__media img) {
    object-position: var(--hero-pos-mobile);
  }
}
</style>
