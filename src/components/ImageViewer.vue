<script setup lang="ts">
import { ref, provide } from "vue";
import type { Image } from "../types";

export interface ImageViewProps {
  setImage: (image: Image) => void;
}

const image = ref<Image | null>(null);

provide<ImageViewProps>("view", {
  setImage: (newImage: Image) => {
    image.value = newImage;
  },
});

const closeImageViewer = () => {
  image.value = null;
};
</script>

<template>
  <div v-if="image" @click="closeImageViewer">
    <div class="inset-0 fixed bg-bg-dark opacity-80 z-10"></div>
    <div class="inset-0 fixed p-16 z-10">
      <div class="relative w-full h-full flex justify-center items-center">
        <img
          class="max-h-full object-contain"
          :src="image?.src"
          :alt="image?.alt"
          @click.stop
        />
        <div
          class="absolute top-0 right-0 text-xl cursor-pointer hover:text-text-light-hover text-glow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            viewBox="0 0 18 18"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <slot />
</template>
