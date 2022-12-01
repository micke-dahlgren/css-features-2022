<script setup lang="ts">
  import ProgressBar from './examples/ProgressBar.vue';
  import Slider from './examples/Slider.vue';
  import RadioButtons from './examples/RadioButtons.vue';
  import Checkbox from './examples/Checkbox.vue';
  defineProps<{accentColor:string}>();
</script>

<template>
  <Checkbox />
  <RadioButtons />
  <Slider />
  <ProgressBar />
</template>

<style scoped>

  *{
    accent-color: v-bind(accentColor);
  }

</style>
