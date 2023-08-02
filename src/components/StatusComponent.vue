<script setup lang="ts">
import PrintComponent from "@/components/PrintComponent.vue";
import PreProcessComponent from "@/components/PreProcessComponent.vue";
import TempComponent from "@/components/TempComponent.vue";

</script>

<template>
  <div class="status-container">
    <temp-component></temp-component>
    <pre-process-component></pre-process-component>
    <print-component></print-component>
  </div>
</template>

<style lang="scss" scoped>
.status-container {
  height: 100vh;
  grid-area: 1 / 4 / 2 / 5;
  min-width: 350px;
  background: var(--color-primary);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>