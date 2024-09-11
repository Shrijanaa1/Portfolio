<template>
  <Menubar :model="items" class="menubar"></Menubar>

<!--    <template #end>-->
<!--    <div style="margin-top: 40px;">-->
<!--      <Button icon="fa fa-palette" class="p-button-outlined switch-theme-button" @click="switchTheme">Switch Theme</Button>-->
<!--    </div>-->
<!--  </template>-->
</template>

<script setup>
import { useRouter } from 'vue-router';
import 'primeicons/primeicons.css';
import { inject } from 'vue';  // Injects the provided value (Allows the component to access dependencies provided by a parent or globally provided variables.)
import Aura from "@primevue/themes/aura";
import Lara from "@primevue/themes/lara";

const router = useRouter();

const items = [
  { label: 'Home', icon: 'pi pi-fw pi-home', command: () => router.push('/') },
  { label: 'About', icon: 'pi pi-fw pi-info-circle', command: () => router.push('/about') },
  { label: 'Experience', icon: 'pi pi-fw pi-briefcase', command: () => router.push('/experience') },
  { label: 'Projects', icon: 'pi pi-fw pi-folder', command: () => router.push('/projects') },
  { label: 'Contact', icon: 'pi pi-fw pi-phone', command: () => router.push('/contact') }
];


// Inject the reactive currentTheme(globally provided by main.js) provided by the main app
const currentTheme = inject('currentTheme');

// Function to switch theme
const switchTheme = () => {
  currentTheme.theme = currentTheme.theme === Aura ? Lara : Aura; // Toggle between themes

  // Update PrimeVue theme configuration dynamically by setting it in the document(updated data theme attribute in the documents html tag)
  document.documentElement.setAttribute('data-theme', currentTheme.value);
};

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

