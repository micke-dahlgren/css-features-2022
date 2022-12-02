<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
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

const clearAllTimeouts = ():void => {
  const highestId = window.setTimeout(() => {
    for (let i = highestId; i >= 0; i--) {
      window.clearInterval(i);
    }
  }, 0);
}

onMounted(() => {
  progressTimer();
})

onBeforeUnmount(() => {
  clearAllTimeouts();
})
</script>

<template>
  <div class="spacing-sm outlined space-between">
    <span>Progress </span>
    <progress max="100" :value="progress"> </progress>
  </div>

</template>

