<script setup lang="ts">
import { downloads } from "./downloads";
import DownloadItem from "./DownloadItem.vue";
</script>

<template>
  <section id="downloads">
    <h2 class="border-b border-line">Downloads</h2>
    <ul class="divide-y divide-line">
      <li v-for="download in downloads">
        <DownloadItem :item="download" />
      </li>
    </ul>
  </section>
</template>
