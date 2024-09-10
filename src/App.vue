<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';

</script>

<template>
    <header>
      <Navbar />
    </header>

  <main >
    <RouterView />
  </main>

</template>


<style scoped>
main {
  padding-top: 3rem; /* Add some top padding to avoid content being hidden behind the navbar */
}
</style>