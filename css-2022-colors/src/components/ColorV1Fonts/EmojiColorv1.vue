
<script setup lang="ts">

  defineProps<{emoji:string}>();
</script>
<template>
  <div>
    <h2>COLRv1 Emoji</h2>
    <button class="outlined remove-button-styling" @click="$emit('cycleEmoji')">
      <div class="vector-emoji">
        {{ emoji }}
      </div>
    </button>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css2?family=Noto+Colr+Emoji+Glyf);

.vector-emoji {
  line-height: 1.2;
  font-size: min(12rem, 17vw);
  font-family: "Noto Colr Emoji Glyf";
}
</style>