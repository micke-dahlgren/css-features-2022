<script setup lang="ts">
import { ref } from "vue";
import { useElementSize } from "@vueuse/core";
import Card from "../components/Card.vue";

const cards = ref(1);

const containerRef = ref(null);

const { width } = useElementSize(containerRef);
</script>

<template>
  <main>
    <div class="top">
      <h1>@Container</h1>
      <h3>{{ Math.trunc(width) }}</h3>
    </div>
    <button class="btn" @click="cards++">add cards</button>
    <div class="container" ref="containerRef">
      <!-- example 1 -->
      <div class="card" v-for="(card, index) in cards" :key="index">
        {{ index }}
      </div>

      <!-- example 3 -->
      <!-- <Card v-for="(card, index) in cards" :key="index" /> -->
    </div>
    <div class="sidepanel">
      <!-- example 2 -->
      <!-- <div class="card"></div> -->
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  grid-template-rows: 50px auto;
  grid-template-columns: 3fr 1fr;

  grid-gap: 8px;
  height: calc(100% - 30px);
}

.top {
  grid-column: 1 / 3;
  grid-row: 1;
  display: flex;
  gap: 16px;
  align-items: center;
}

.sidepanel {
  grid-column: 2;
  grid-row: 2;
  padding: 24px;
  border: lightcoral dotted 2px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 16px;

  // container-type: inline-size;
  // container-name: sidepanel;
}

.container {
  background: #fff;
  border: 2px solid black;
  padding: 24px;
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  overflow: hidden;

  // container-type: inline-size;
  // container-name: main;
}

.card {
  background-color: red;
  height: 140px;
  width: 120px;
  gap: 8px;
  padding: 12px;
  border-radius: 20px;
}

.btn {
  grid-column: 2;
  grid-row: 1;
}

// @container main (max-width: 400px) {
//   .card {
//     background-color: blue;
//   }
// }

// @container sidepanel (max-width: 400px) {
//   .card {
//     background-color: green;
//   }
// }
</style>
