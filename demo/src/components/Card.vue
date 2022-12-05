<script setup lang="ts">
import { ref } from 'vue';

interface Dog {
  img: string;
  summary: string;
  main: string;
}

const dogs: Dog[] = [
  { img: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg', summary: 'En fin hund.', main: 'En mycket fin hund faktiskt' },
  {
    img: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d',
    summary: 'En ledsen hund.',
    main: 'Ser ledsen ut.',
  },
  {
    img: 'https://www.thesprucepets.com/thmb/7TDhfkK5CAKBWEaJfez6607J48Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg',
    summary: 'Pug',
    main: 'Också gullig',
  },
];

const random = ref(Math.floor(Math.random() * dogs.length - 1) + 1);
</script>

<template>
  <div class="wrapper">
    <img class="img" :src="dogs[random].img" alt="dog" />
    <span class="summary">{{ dogs[random].summary }}</span>
    <span class="main">{{ dogs[random].main }}</span>
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
  font-size: 16px;
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
