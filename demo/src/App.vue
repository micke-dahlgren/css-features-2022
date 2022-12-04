<script setup lang="ts">
//
</script>

<template>
  <nav>
    <router-link to="/">@Container</router-link>
    <router-link to="/inert">Inert</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss" scoped>
nav {
  gap: 8px;
  display: flex;
  justify-content: center;
  height: 30px;
}

a {
  color: black;
  text-decoration: underline;
}
</style>
