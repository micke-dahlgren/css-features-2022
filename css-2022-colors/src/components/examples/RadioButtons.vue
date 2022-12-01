<script setup lang="ts">
  import { ref } from 'vue'
  const radio = ref(false);
</script>

<template>
  <div class="spacing-sm outlined space-between">
    <span>Radio </span>
    <span>
      <input type="radio" v-model="radio" value="true" />
      <input type="radio" v-model="radio" value="false" />
    </span>
  </div>
</template>