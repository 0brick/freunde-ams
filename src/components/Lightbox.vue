<script setup lang="ts">
import { computed, ref, onBeforeUnmount } from 'vue'

export interface LightboxImage {
  src: string
  alt: string
  thumb?: string
}

const props = defineProps<{ images: LightboxImage[] }>()

const dialog = ref<HTMLDialogElement | null>(null)
const index = ref(0)
const current = computed(() => props.images[index.value])
const multiple = computed(() => props.images.length > 1)

function open(i = 0) {
  index.value = i
  dialog.value?.showModal()
}

function step(delta: number) {
  index.value = (index.value + delta + props.images.length) % props.images.length
}

function onKey(event: KeyboardEvent) {
  if (!multiple.value) return
  if (event.key === 'ArrowRight') step(1)
  if (event.key === 'ArrowLeft') step(-1)
}

function onBackdrop(event: MouseEvent) {
  if (event.target === dialog.value) dialog.value?.close()
}

onBeforeUnmount(() => dialog.value?.open && dialog.value.close())

defineExpose({ open })
</script>

<template>
  <dialog ref="dialog" class="lightbox" aria-label="Bildansicht" @keydown="onKey" @click="onBackdrop">
    <figure v-if="current" class="lightbox__figure">
      <img :key="current.src" :src="current.src" :alt="current.alt" decoding="async" />
      <figcaption v-if="multiple">{{ index + 1 }} / {{ images.length }}</figcaption>
    </figure>
    <button type="button" class="lightbox__btn lightbox__btn--close" aria-label="Schliessen" @click="dialog?.close()">✕</button>
    <template v-if="multiple">
      <button type="button" class="lightbox__btn lightbox__btn--prev" aria-label="Vorheriges Bild" @click="step(-1)">‹</button>
      <button type="button" class="lightbox__btn lightbox__btn--next" aria-label="Nächstes Bild" @click="step(1)">›</button>
    </template>
  </dialog>
</template>

<style scoped>
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

.lightbox__btn:focus-visible {
  outline: 3px solid var(--cui-focus-ring);
  outline-offset: 3px;
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

@media (max-width: 600px) {
  .lightbox__figure {
    padding: 7rem 1.6rem 4rem;
  }

  .lightbox__btn--prev,
  .lightbox__btn--next {
    top: auto;
    bottom: 1.6rem;
    transform: none;
  }
}
</style>
