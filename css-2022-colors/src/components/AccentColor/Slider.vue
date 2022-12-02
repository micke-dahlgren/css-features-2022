<script setup lang="ts">
import ExampleSlot from '../ExampleSlot.vue';
</script>
<template>
  <ExampleSlot>
    <span>Slider </span>
    <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
  </ExampleSlot>
</template>

