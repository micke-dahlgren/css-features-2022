  <script setup lang="ts">
import { ref } from 'vue'
import AccentColorExamples from './components/AccentColorExamples.vue'
const accentColor = ref('#fcba03');
</script>

<template>
  <h1 class="spacing-md"><span>Accent</span> Color</h1>
  <AccentColorExamples :accent-color="accentColor"/>
  <div class="spacing-lg outlined space-between">
    <span>Color</span><input type="color" v-model="accentColor">
  </div>
</template>

<style scoped>
  h1 > span {
    color:v-bind(accentColor);
  }
</style>
