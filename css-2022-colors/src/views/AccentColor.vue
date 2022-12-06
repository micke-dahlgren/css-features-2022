<script setup lang="ts">
  import {ref} from 'vue';
  import ProgressBar from '../components/AccentColor/ProgressBar.vue';
  import Slider from '../components/AccentColor/Slider.vue';
  import RadioButtons from '../components/AccentColor/RadioButtons.vue';
  import Checkbox from '../components/AccentColor/Checkbox.vue';

  const accentColor = ref('#fcba03');
</script>

<template>
  <div class="page">
  <h1 class="spacing-md"><span>Accent</span> Color</h1>

  <Checkbox />
  <ProgressBar />
  <Slider />
  <RadioButtons />

  <div class="spacing-lg outlined space-between">
    <span>Color</span><input type="color" v-model="accentColor">
  </div>
</div>
  
</template>

<style scoped>

  /* Live demo */
  h1 > span {
    color: v-bind(accentColor);
  }

  *{
    accent-color:  v-bind(accentColor);
  }

</style>
