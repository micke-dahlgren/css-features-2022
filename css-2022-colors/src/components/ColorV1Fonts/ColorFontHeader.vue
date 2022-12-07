
<script setup lang="ts">
import { ref } from 'vue';

const bevel = ref(50);
const shadow = ref(50);
const customColor = ref({
  shadow: "#0F0F0F",
  fill: "#e3c9a5",
  bevel1: "#d18181",
  bevel2: "#dea92d"
});

const getFontPaletteValues = (): string => {
  return `
    @font-palette-values --custom {
      font-family: Rocher;
      override-colors:
        0 ${customColor.value.shadow},
        1 ${customColor.value.fill},
        2 ${customColor.value.bevel1},
        3 ${customColor.value.bevel2}
    }

    @font-palette-values --custom2 {
      font-family: Nabla;
      override-colors:
        0 ${customColor.value.bevel2},
        1 ${customColor.value.bevel1},
        2 black,
        3 ${customColor.value.bevel2},
        4 ${customColor.value.bevel1},
        5 ${customColor.value.bevel1},
        6 ${customColor.value.shadow},
        7 ${customColor.value.fill},
        8 ${customColor.value.bevel2},
        9 ${customColor.value.bevel2} 
    }
    `
};

const updateStyleSheet = (styles: string) => {
  let elementId = 'custom-font-colors';
  const oldStyleSheet = document.getElementById(elementId);
  let newStyleSheet = document.createElement("style");
  newStyleSheet.setAttribute('id', elementId);
  newStyleSheet.innerText = styles;

  if (oldStyleSheet) {
    console.log(oldStyleSheet);
    document.head.replaceChild(newStyleSheet, oldStyleSheet);
    return;
  }

  newStyleSheet.setAttribute('id', elementId);
  newStyleSheet.innerText = styles;
  document.head.appendChild(newStyleSheet);
}
const applyColor = () => {
  let fontPaletteStyles = getFontPaletteValues();
  updateStyleSheet(fontPaletteStyles); /* TO DO: Rewriting DOM on every change. This should get debounced */
}

const useNamblaFont = ref(false);
const switchFont = () => {
  useNamblaFont.value = !useNamblaFont.value;
}
</script>


<template>
<div>
    <button class="header-button" @click="switchFont">
      <h1 class="example-text" :class="useNamblaFont && 'nabla'">Click me!</h1>
    </button>
    <div class="sliders" :class="useNamblaFont && 'disabled'">
      <div class="slider">
        <span>Bevel: </span>
        <input type="range" min="0" max="100" v-model="bevel" class="slider" id="myRange">
      </div>
      <div class="slider">
        <span>Shadow: </span>
        <input type="range" min="0" max="100" v-model="shadow" class="slider" id="myRange">
      </div>
    </div>
    <div class="flex-center-col">
      <div class="color-input-group">
        <div><span>Shadow: </span><input type="color" v-model="customColor.shadow" @input="applyColor"></div>
        <div><span>Fill color: </span><input type="color" v-model="customColor.fill" @input="applyColor"></div>
      </div>
      <div class="color-input-group ">
        <div><span>Bevel 1: </span><input type="color" v-model="customColor.bevel1" @input="applyColor"></div>
        <div><span>Bevel 2: </span><input type="color" v-model="customColor.bevel2" @input="applyColor"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../styles/colorFontHeader.css';
/* non-colorv1font css */


@import url(https://fonts.googleapis.com/css2?family=Nabla);

@font-face {
  font-family: 'Rocher';
  src: url(https://assets.codepen.io/9632/RocherColorGX.woff2);
}

.example-text {
  font-family: Rocher;
  font-variation-settings: "BVEL" v-bind(bevel), "SHDW" v-bind(shadow);
  text-align: center;
  font-palette: --custom;
}

.nabla {
  font-family: "Nabla";
  font-palette: --custom2;
}

@font-palette-values --custom {
  font-family: Rocher;
  base-palette: 1;
}

@font-palette-values --custom2 {
  font-family: "Nabla";
  base-palette: 1;
}
</style>