<script setup lang="ts">
import ExampleSlot from '../ExampleSlot.vue';
import { onMounted, ref } from 'vue'
const progress = ref(0);
const progressSpeedMs = 60;
const progressTimer = () => {
  if (progress.value < 100) {
    setTimeout(() => {
      progress.value += 1;
      progressTimer();
    }, progressSpeedMs)
  } else {
    progress.value = 0;
    progressTimer();
  }
}
onMounted(() => {
  progressTimer();
})
</script>

<template>
  <ExampleSlot>
    <span>Progress </span>
    <progress max="100" :value="progress"> </progress>
  </ExampleSlot>
</template>

