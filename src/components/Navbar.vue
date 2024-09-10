<template>
  <Menubar :model="items" class="menubar"></Menubar>
</template>

<script setup>
import { useRouter } from 'vue-router';
import 'primeicons/primeicons.css';

const router = useRouter();

const items = [
  { label: 'Home', icon: 'pi pi-fw pi-home', command: () => router.push('/') },
  { label: 'About', icon: 'pi pi-fw pi-info-circle', command: () => router.push('/about') },
  { label: 'Experience', icon: 'pi pi-fw pi-briefcase', command: () => router.push('/experience') },
  { label: 'Projects', icon: 'pi pi-fw pi-folder', command: () => router.push('/projects') },
  { label: 'Contact', icon: 'pi pi-fw pi-phone', command: () => router.push('/contact') }
];
</script>

<style scoped>
.menubar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensures the navbar stays on top */
  font-size: 1rem;
}
</style>
