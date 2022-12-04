<script setup lang="ts">
//
</script>

<template>
  <main>
    <h1>@Container</h1>
    <div class="container"></div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-rows: 50px auto;
  grid-gap: 8px;
  height: calc(100% - 30px);
}

.container {
  background: #fff;
  border: 1px solid black;
}
</style>
