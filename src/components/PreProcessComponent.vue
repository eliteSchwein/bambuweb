<script setup lang="ts">

</script>

<template>
  <div class="pre-process-container">
    <h2>Pre Process</h2>
    <div class="pre-process-item pre-process-done">
      <v-icon icon="mdi-circle"></v-icon>
      <span>test</span>
    </div>
    <div class="pre-process-item pre-process-done">
      <v-icon icon="mdi-circle"></v-icon>
      <span>test</span>
    </div>
    <div class="pre-process-item pre-process-current">
      <v-icon icon="mdi-loading" class="rotate"></v-icon>
      <span>test</span>
    </div>
    <div class="pre-process-item">
      <v-icon icon="mdi-circle"></v-icon>
      <span>test</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pre-process-container {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0px auto 20px auto;
  padding: 20px;
  border-radius: var(--border-radius);
  background: var(--color-secondary);

  .pre-process-item {
    margin-top: 2px;
    margin-bottom: 2px;

    i {
      color: var(--color-primary);
    }

    span::before {
      vertical-align: middle;
      display: inline-block;
      background-color: var(--color-secondary-darker);
      height: 2px;
      width: 10px;
      content: "      ";
      margin-right: 3px;
    }

    &.pre-process-done,
    &.pre-process-current {
      i {
        color: var(--color-accent);
      }
    }
  }
}
</style>