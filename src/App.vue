<script setup lang="ts">
import Navbar from "./components/shared/Navbar.vue";
</script>

<template>
  <navbar />
  <main class="container mt-6">
    <router-view />
  </main>
</template>
