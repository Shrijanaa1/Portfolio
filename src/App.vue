<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';
import FooterView from "@/components/Footer.vue";  // Import the Navbar component
</script>

<template>
    <header>
      <Navbar />
    </header>

  <main >
    <RouterView />
  </main>

  <footer>
    <FooterView />
  </footer>

</template>


<style scoped>

</style>