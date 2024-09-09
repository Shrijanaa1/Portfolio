<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/NavbarView.vue';  // Import the Navbar component
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <RouterView />
  </main>

  <footer class="footer">
    <p>&copy; 2024 Shrijana Karki. All Rights Reserved.</p>
  </footer>
</template>

<style scoped>

</style>

