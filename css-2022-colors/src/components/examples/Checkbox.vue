<script setup lang="ts">
  import { ref } from 'vue'
  const checkbox = ref(true);
</script>

<template>
  <div class="spacing-sm outlined space-between">
    <span> Checkbox </span>
    <input type="checkbox" v-model="checkbox" />
  </div>
</template>
