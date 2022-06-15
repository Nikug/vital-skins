<script setup lang="ts">
import { ref, provide } from "vue";
import type { Image } from "../types";
import XIcon from "./XIcon.vue";

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
          <XIcon />
        </div>
      </div>
    </div>
  </div>
  <slot />
</template>
