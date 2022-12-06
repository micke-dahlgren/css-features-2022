<script setup lang="ts">
import { ref } from 'vue';

const buttonCounter = ref(0);

const showModal = ref(false);
</script>

<template>
  <main :inert="showModal">
    <h1>Inert</h1>
    <div class="container">
      <div class="clicker">
        <button @click="buttonCounter++">click me</button>
        <span class="clickerNumer">{{ buttonCounter }}</span>
      </div>
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
  gap: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ff885d;
  padding: 20px;
  text-align: center;
  display: block;
  border: 1px solid black;
  border-radius: 8px;
}

.clicker {
  display: flex;
  gap: 8px;
}

.clickerNumer {
  font-size: 36px;
}
</style>
