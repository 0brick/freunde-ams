<script setup lang="ts">
import { computed, ref } from 'vue'
import Lightbox from './Lightbox.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps<{ src: string; alt: string; thumb?: string }>()

const lightbox = ref<InstanceType<typeof Lightbox> | null>(null)
const images = computed(() => [{ src: props.src, alt: props.alt }])
</script>

<template>
  <button type="button" class="zoom" :aria-label="`${alt} vergrössern`" @click="lightbox?.open()">
    <img :src="thumb ?? src" :alt="alt" loading="lazy" decoding="async" v-bind="$attrs" />
  </button>
  <Lightbox ref="lightbox" :images="images" />
</template>

<style scoped>
.zoom {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  cursor: zoom-in;
  border-radius: var(--cui-radius-lg);
}

.zoom img {
  display: block;
  transition: filter var(--cui-duration-slow) var(--cui-ease);
}

.zoom:hover img {
  filter: brightness(1.06);
}

.zoom:focus-visible {
  outline: 3px solid var(--cui-focus-ring);
  outline-offset: 3px;
}
</style>
