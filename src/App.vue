<script setup>
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router';

import 'primeicons/primeicons.css'

const router = useRouter();

const items = [
  { label: 'Home', icon: 'pi pi-fw pi-home', command: () => router.push('/') },
  { label: 'About', icon: 'pi pi-fw pi-info-circle', command: () => router.push('/about') },
  { label: 'Experience', icon: 'pi pi-fw pi-briefcase', command: () => router.push('/experience') },
  { label: 'Projects', icon: 'pi pi-fw pi-folder', command: () => router.push('/projects') },
];

</script>

<template>
  <header>
    <Menubar :model="items" class="menubar"></Menubar>
  </header>

  <main>
    <RouterView />
  </main>

  <footer class="footer">
    <p>&copy; 2024 Shrijana Karki. All Rights Reserved.</p>
  </footer>
</template>

<style scoped>

.menubar {
  margin-bottom: 2rem;
}

.footer{
  text-align: center;
}

</style>

