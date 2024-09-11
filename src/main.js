import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
// import '@/assets/styles/global.css'; // Import global CSS

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
import Lara from '@primevue/themes/lara';

const app = createApp(App)

app.use(router)

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

// Use PrimeVue with the Aura theme preset
// app.use(PrimeVue, {
//     theme: {
//         preset: Aura
//     }
// })

// Register PrimeVue components globally
app.component('Menubar', Menubar)
app.component('Button', Button)
app.component('Tag', Tag)
app.component('Card', Card)

// Mount the app
app.mount('#app')
