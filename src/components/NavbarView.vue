<script setup>
import { useRouter } from 'vue-router';
import 'primeicons/primeicons.css';

const router = useRouter();

const items = [
  { label: 'Home', icon: 'pi pi-fw pi-home', command: () => router.push('/') },
  { label: 'About', icon: 'pi pi-fw pi-info-circle', command: () => router.push('/about') },
  { label: 'Experience', icon: 'pi pi-fw pi-briefcase', command: () => router.push('/experience') },
  { label: 'Projects', icon: 'pi pi-fw pi-folder', command: () => router.push('/projects') },
];
</script>

<template>
  <Menubar :model="items" class="menubar"></Menubar>
</template>

<style scoped>
.menubar {
  margin-bottom: 2rem;
}
</style>
