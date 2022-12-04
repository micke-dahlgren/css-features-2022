<script setup lang="ts">
//
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/@container">@Container</router-link>
    <router-link to="/inert">Inert</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss" scoped>
nav {
  gap: 8px;
  display: flex;
  justify-content: center;
}

a {
  color: black;
  text-decoration: underline;
}
</style>
