
<script setup lang="ts">

  defineProps<{emoji:string}>();
</script>
<template>
  <div>
    <h2>Bitmap Emoji</h2>
    <button class="outlined remove-button-styling" @click="$emit('cycleEmoji')">
      <div class="bitmap-emoji">
        {{ emoji }}
      </div>
    </button>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css2?family=Noto+Color+Emoji+Compat);


.bitmap-emoji {
  --font-size: 160px;
  line-height: 1.2;
  font-size: var(--font-size);
  font-family: "Noto Color Emoji Compat";
}
</style>