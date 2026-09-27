<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  text: { type: String, default: '' },
  image: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
  eyebrow: { type: String, default: '' }
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
  />
</template>

<style scoped>
.page-hero--plain :deep(.cui-hero__content),
.page-hero--plain :deep(.cui-hero__inner) {
  max-width: none;
}
</style>
