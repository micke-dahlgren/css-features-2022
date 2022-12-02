/*


Traditional usage of color fonts:
  - Colorize text from an outline font
  - Displaying Emojis

COLORv1 fonts use cases:
  - More space efficient (> 2Mb compared to traditional 9Mb+ size for Bitmap emojipack)
  - seamless scalability without bitmap artifact
  - animatable color glyphs on the web
*/
<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import EmojiColorv1 from '../components/ColorV1Fonts/EmojiColorv1.vue';
import EmojiBitmap from '../components/ColorV1Fonts/EmojiBitmap.vue';
import ColorFontHeader from '../components/ColorV1Fonts/ColorFontHeader.vue';
const emojis: Ref<string[]> = ref(['🛳', '🏞️', '🔮', '🧭', '🥝', '🦌', '😍']);
const emojiIndex = ref(0);
const cycleEmoji = () => {
  emojiIndex.value = emojiIndex.value >= emojis.value.length - 1 ? 0 : emojiIndex.value + 1;
}
</script>
<template>
  <div class="page">

    <ColorFontHeader />
    <div class="flex-row">
      <EmojiBitmap :emoji="emojis[emojiIndex]" @cycle-emoji="cycleEmoji" />
      <EmojiColorv1 :emoji="emojis[emojiIndex]" @cycle-emoji="cycleEmoji" />
    </div>
  </div>

</template>

<style>

</style>