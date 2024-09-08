import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';

import Aura from '@primevue/themes/aura';

const app = createApp(App)

app.use(router)

// Use PrimeVue with the Aura theme preset
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})

app.component('Menubar', Menubar)  // Register PrimeVue components globally
app.component('Button', Button)

app.mount('#app')
