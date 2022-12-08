<script setup lang="ts">
import { ref } from 'vue';
import EmojiColorv1 from '../components/ColorV1Emojis/EmojiColorv1.vue';
import EmojiBitmap from '../components/ColorV1Emojis/EmojiBitmap.vue';
const emojis = ref(['🛳', '🏞️', '🔮', '🧭', '🥝', '🦌', '😍']);
const emojiIndex = ref(0);
const cycleEmoji = () => {
  emojiIndex.value = emojiIndex.value >= emojis.value.length - 1 ? 0 : emojiIndex.value + 1;
}
</script>

<template>

  <div class="page center-child-vertically">
    <div>
      <h1 class="spacing-md center-text">Emojis</h1>
      <div class="space-evenly">
        <EmojiBitmap :emoji="emojis[emojiIndex]" @cycle-emoji="cycleEmoji" />
        <EmojiColorv1 :emoji="emojis[emojiIndex]" @cycle-emoji="cycleEmoji" />
      </div>
    </div>
  </div>

</template>


