import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import Tag from 'primevue/tag'
import Card from 'primevue/card'

// FontAwesome imports
import '@fortawesome/fontawesome-free/css/all.css';

//PrimeVue themes
import Aura from '@primevue/themes/aura';

const app = createApp(App) //initialize Vue app

app.use(router) //register router

// Initialize the theme as a reactive ref
const currentTheme = ref(Aura);

// Configure PrimeVue and bind the current theme
app.use(PrimeVue, {
    theme: {
        preset: currentTheme.value
    }
});

// Provide the current theme globally
app.provide('currentTheme', currentTheme);

// Register PrimeVue components globally
app.component('Menubar', Menubar)
app.component('Button', Button)
app.component('Tag', Tag)
app.component('Card', Card)

// Mount the app
app.mount('#app')
