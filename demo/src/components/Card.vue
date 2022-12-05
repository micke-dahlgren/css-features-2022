<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <img class="img" src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445" alt="dog" />
    <span class="summary">tjena hejsan</span>
    <span class="main">tjo man</span>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: grid;
  min-width: 100px;
  grid-gap: 8px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  grid-template-areas:
    'img summary'
    'main main';
  background-color: #fff;
  color: #444;
  background: #fff;
  border: 2px solid black;
  padding: 12px;
  border-radius: 20px;
  max-width: 300px;
  width: calc(100% - 24px);

  container-type: inline-size;
}

.summary {
  grid-area: summary;
  font-size: 30px;
}

.main {
  grid-area: main;
  font-size: 12px;
}

.img {
  grid-area: img;
  max-width: 100%;
  max-height: 100%;
}

@container (max-width: 250px) {
  .summary {
    font-size: 20px;
  }
}

@container (max-width: 200px) {
  .wrapper {
    display: flex;
    grid-template-columns: 120px;
    grid-template-rows: 120px 120px 120px;
    grid-template-areas:
      'img'
      'summary'
      'main';
    flex-direction: column;
    align-items: center;
  }
}
</style>
