<script setup lang="ts">
import { inject } from "vue";
import type { DownloadableItem, Image } from "../types";
import type { ImageViewProps } from "./ImageViewer.vue";
interface Props {
  item: DownloadableItem;
}

const props = defineProps<Props>();
const imageView = inject<ImageViewProps>("view");

const showImage = (image: Image) => {
  imageView?.setImage(image);
};
</script>

<template>
  <div class="flex justify-between py-4">
    <h3 class="text-2xl">{{ props.item.title }}</h3>
    <a :href="props.item.downloadLink" class="button">Download</a>
  </div>
  <p>
    {{ props.item.description }}
  </p>
  <div class="py-4 flex flex-col gap-4">
    <div v-for="image in props.item.images" class="overflow-hidden rounded">
      <img
        class="w-full cursor-pointer"
        :src="image.src"
        :alt="image.alt"
        @click="() => showImage(image)"
      />
    </div>
  </div>
</template>
