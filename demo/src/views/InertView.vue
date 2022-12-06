<script setup lang="ts">
import { ref } from 'vue';

const buttonCounter = ref(0);

const showModal = ref(false);
</script>

<template>
  <main :inert="showModal">
    <h1>Inert</h1>
    <div class="container">
      <button @click="buttonCounter++">click me</button>
      <h3>{{ buttonCounter }}</h3>
      <input type="date" name="dateinput" id="" />
      <input type="text" value="tjena" />
      <button @click="showModal = true">⚠️Activate modal!⚠️</button>
    </div>
  </main>
  <div v-if="showModal" class="modal">
    <h2>Modal</h2>
    <button @click="showModal = false">Close modal!</button>
  </div>
</template>

<style scoped>
main {
  display: grid;
  grid-template-rows: 50px auto;
  grid-gap: 8px;
  height: calc(100% - 30px);
  position: relative;
}

.container {
  background: #fff;
  border: 1px solid black;
  gap: 8px;
  padding: 24px;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #ff885d;
  padding: 20px;
  text-align: center;
  display: block;
  border: 1px solid black;
  border-radius: 8px;
}
</style>
