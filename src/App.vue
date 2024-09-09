<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/NavbarView.vue';
import FooterView from "@/components/FooterView.vue";  // Import the Navbar component
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <FooterView />
  </footer>
</template>

<style scoped>
</style>

