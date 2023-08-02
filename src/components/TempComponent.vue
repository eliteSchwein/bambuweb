<script setup lang="ts">

</script>

<template>
  <div class="temp-container">
    <div class="temp-item">
      <v-icon icon="mdi-printer-3d-nozzle"></v-icon>
      <span class="temp-target">270°C</span>
      <span>270°C</span>
    </div>
    <div class="temp-item">
      <v-icon icon="mdi-radiator"></v-icon>
      <span class="temp-target">110°C</span>
      <span>110°C</span>
    </div>
    <div class="temp-item">
      <v-icon icon="mdi-heat-wave"></v-icon>
      <span class="temp-target"></span>
      <span class="temp-target invisible">110°C</span>
      <span>50°C</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .temp-container {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 20px auto;

    .temp-item {
      padding: 15px 20px 10px 20px;
      border-radius: var(--border-radius);
      background: var(--color-secondary);
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 85px;

      i {
        margin-bottom: 10px;
        font-size: 35px;
      }

      .temp-target {
        font-size: 12px;
        align-self: self-start;
      }
    }
  }
</style>