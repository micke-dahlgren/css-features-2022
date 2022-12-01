<script setup lang="ts">
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
  <div class="spacing-sm outlined space-between">
    <span>Progress </span>
    <progress max="100" :value="progress"> </progress>
  </div>

</template>

