<script setup lang="ts">
import InstallInstructions from "./components/InstallInstructions.vue";
import SocialLinks from "./SocialLinks.vue";
import DownloadContainer from "./DownloadContainer.vue";
</script>

<template>
  <div class="flex justify-center px-4">
    <div class="w-full max-w-content flex flex-col gap-16">
      <SocialLinks />
      <InstallInstructions />
      <DownloadContainer />
    </div>
  </div>
</template>
