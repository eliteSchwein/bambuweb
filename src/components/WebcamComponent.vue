<script setup lang="ts">
  import { inject } from 'vue'
  const config = inject('config')
  const type = config["webcam"]["type"]
  const url = config["webcam"]["url"]
</script>

<template>
  <div class="webcam-container">
    <img v-if="type === 'mjpg'" :src="url">
  </div>
</template>

<style scoped>
.webcam-container {
  grid-area: 1 / 1 / 2 / 4;
}
.webcam-container img {
  height: 100vh;
  width: 100%;
  object-fit: cover;
}
</style>