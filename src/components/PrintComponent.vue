<script setup lang="ts">

</script>

<template>
  <div class="print-button-container">
    <button><v-icon icon="mdi-play-circle-outline"></v-icon>resume</button>
    <button><v-icon icon="mdi-stop-circle-outline"></v-icon>stop</button>
  </div>
</template>

<style lang="scss" scoped>
.print-button-container {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0px auto 20px auto;

  button{
    padding: var(--padding-button);
    border-radius: var(--border-radius);
    background: var(--color-secondary);

    i{
      margin-right: 10px;
    }
  }
}
</style>