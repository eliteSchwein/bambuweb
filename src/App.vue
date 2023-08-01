<script setup lang="ts">
import WebcamComponent from './components/WebcamComponent.vue'
import StatusComponent from './components/StatusComponent.vue'
import { inject } from 'vue'
import {storage} from "@/main";
const bambuClient = inject('bambuClient')

bambuClient.connect()

setInterval(() => {
  console.log(storage)
},1000)
</script>

<template>
  <div class="wrapper">
    <webcam-component></webcam-component>
    <status-component></status-component>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
</style>
