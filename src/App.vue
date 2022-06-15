<script setup lang="ts">
import MainHeader from "./components/MainHeader.vue";
import ContentContainer from "./components/ContentContainer.vue";
import MainFooter from "./components/MainFooter.vue";
import ImageViewer from "./components/ImageViewer.vue";
</script>

<template>
  <div class="bg-bg min-h-screen text-text-light">
    <ImageViewer>
      <MainHeader />
      <ContentContainer />
      <MainFooter />
    </ImageViewer>
  </div>
</template>
