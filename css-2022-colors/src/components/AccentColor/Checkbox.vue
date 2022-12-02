<script setup lang="ts">
import { ref } from 'vue'
import ExampleSlot from '../ExampleSlot.vue';
const checkbox = ref(true);
</script>

<template>
  <ExampleSlot>
    <span> Checkbox </span>
    <input type="checkbox" v-model="checkbox" />
  </ExampleSlot>
</template>
