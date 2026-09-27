<script setup lang="ts">
import { computed, ref, onBeforeUnmount } from 'vue'

const props = defineProps<{ images: { src: string; alt: string }[] }>()

const dialog = ref<HTMLDialogElement | null>(null)
const index = ref(0)
const current = computed(() => props.images[index.value])

function open(i: number) {
  index.value = i
  dialog.value?.showModal()
}

function step(delta: number) {
  index.value = (index.value + delta + props.images.length) % props.images.length
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'ArrowRight') step(1)
  if (event.key === 'ArrowLeft') step(-1)
}

function onBackdrop(event: MouseEvent) {
  if (event.target === dialog.value) dialog.value?.close()
}

onBeforeUnmount(() => dialog.value?.open && dialog.value.close())
</script>

<template>
  <ul class="gallery">
    <li v-for="(image, i) in images" :key="image.src">
      <button type="button" class="gallery__item" :aria-label="`${image.alt} vergrössern`" @click="open(i)">
        <img :src="image.src" :alt="image.alt" loading="lazy" decoding="async" />
      </button>
    </li>
  </ul>

  <dialog ref="dialog" class="lightbox" aria-label="Bildansicht" @keydown="onKey" @click="onBackdrop">
    <figure v-if="current" class="lightbox__figure">
      <img :src="current.src" :alt="current.alt" />
      <figcaption>{{ index + 1 }} / {{ images.length }}</figcaption>
    </figure>
    <button type="button" class="lightbox__btn lightbox__btn--close" aria-label="Schliessen" @click="dialog?.close()">✕</button>
    <button type="button" class="lightbox__btn lightbox__btn--prev" aria-label="Vorheriges Bild" @click="step(-1)">‹</button>
    <button type="button" class="lightbox__btn lightbox__btn--next" aria-label="Nächstes Bild" @click="step(1)">›</button>
  </dialog>
</template>

<style scoped>
.gallery {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
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
  aspect-ratio: 1;
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

.lightbox {
  width: 100vw;
  height: 100dvh;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 0;
  border: 0;
  background: rgba(16, 12, 9, 0.94);
  color: #fff;
}

.lightbox::backdrop {
  background: transparent;
}

.lightbox__figure {
  display: grid;
  place-items: center;
  height: 100%;
  margin: 0;
  padding: 6rem 7rem 4rem;
  pointer-events: none;
}

.lightbox__figure img {
  max-width: 100%;
  max-height: calc(100dvh - 12rem);
  object-fit: contain;
  border-radius: var(--cui-radius-sm);
}

.lightbox__figure figcaption {
  margin-top: var(--cui-space-3);
  font-size: 1.4rem;
  opacity: 0.75;
}

.lightbox__btn {
  position: absolute;
  display: grid;
  place-items: center;
  width: 4.8rem;
  height: 4.8rem;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 3rem;
  line-height: 1;
  cursor: pointer;
}

.lightbox__btn:hover {
  background: rgba(255, 255, 255, 0.24);
}

.lightbox__btn--close {
  top: 1.6rem;
  right: 1.6rem;
  font-size: 2rem;
}

.lightbox__btn--prev,
.lightbox__btn--next {
  top: 50%;
  transform: translateY(-50%);
}

.lightbox__btn--prev {
  left: 1.2rem;
}

.lightbox__btn--next {
  right: 1.2rem;
}
</style>
