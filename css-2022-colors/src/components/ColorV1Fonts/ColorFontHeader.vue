
<script setup lang="ts">
import {ref} from 'vue';
const palette = ref('')
const palettes =  ref(['--palette-1','--palette-2', '--palette-3','--palette-4','--palette-5','--palette-6','--custom']);
const setPalette = (i:number) => {
  palette.value = palettes.value[i];
}
</script>


<template>
  <h1 class="purples">Color fonts</h1>
  <div class="flex-row">
  <button v-for="(palette, i) in palettes" @click="setPalette(i)">{{palette.replace('--', '')}}</button>
</div>

</template>

<style scoped>
@font-face {
  font-family: 'Rocher';
  src: url(https://assets.codepen.io/9632/RocherColorGX.woff2);
}
h1{
  font-family: 'Rocher';
  font-size: 5rem;
}
button{
  cursor: pointer;
}
@font-palette-values --palette-1 {
  font-family: Rocher;
  base-palette: 1;
}
@font-palette-values --palette-2 {
  font-family: Rocher;
  base-palette: 2;
}
@font-palette-values --palette-3 {
  font-family: Rocher;
  base-palette: 3;
}
@font-palette-values --palette-4 {
  font-family: Rocher;
  base-palette: 4;
}
@font-palette-values --palette-5 {
  font-family: Rocher;
  base-palette: 5;
}
@font-palette-values --palette-6 {
  font-family: Rocher;
  base-palette: 6;
}
@font-palette-values --custom {
  font-family: Rocher;
  override-colors:
    0 #551111,
    1 #ff3a92,
    2 #ff2216
}

.purples {
  font-palette: v-bind(palette);
}

</style>