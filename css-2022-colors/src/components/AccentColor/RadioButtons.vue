<script setup lang="ts">
import ExampleSlot from '../ExampleSlot.vue';
import { ref } from 'vue'
const radio = ref(false);
</script>

<template>
  <ExampleSlot>
    <span>Radio </span>
    <span>
      <input type="radio" v-model="radio" value="true" />
      <input type="radio" v-model="radio" value="false" />
    </span>
  </ExampleSlot>
</template>