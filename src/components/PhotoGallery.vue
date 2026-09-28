<script setup lang="ts">
import { ref } from 'vue'
import Lightbox, { type LightboxImage } from './Lightbox.vue'

withDefaults(defineProps<{ images: LightboxImage[]; ratio?: string; minWidth?: string }>(), {
  ratio: '1',
  minWidth: '22rem'
})

const lightbox = ref<InstanceType<typeof Lightbox> | null>(null)
</script>

<template>
  <div class="gallery-wrap">
    <ul class="gallery" :style="{ '--gallery-ratio': ratio, '--gallery-min': minWidth }">
      <li v-for="(image, i) in images" :key="image.src">
        <button type="button" class="gallery__item" :aria-label="`${image.alt} vergrössern`" @click="lightbox?.open(i)">
          <img :src="image.thumb ?? image.src" :alt="image.alt" loading="lazy" decoding="async" />
        </button>
      </li>
    </ul>
    <Lightbox ref="lightbox" :images="images" />
  </div>
</template>

<style scoped>
.gallery {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, var(--gallery-min)), 1fr));
  gap: var(--cui-space-3);
}

.gallery__item {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  cursor: zoom-in;
  border-radius: var(--cui-radius-md);
  overflow: hidden;
}

.gallery__item img {
  width: 100%;
  aspect-ratio: var(--gallery-ratio);
  object-fit: cover;
  transition: transform var(--cui-duration-slow) var(--cui-ease);
}

.gallery__item:hover img {
  transform: scale(1.03);
}

.gallery__item:focus-visible {
  outline: 3px solid var(--cui-focus-ring);
  outline-offset: 3px;
}
</style>
