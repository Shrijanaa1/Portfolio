import { createApp } from 'vue'
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
app.component('Tag', Tag)
app.component('Card', Card)

app.mount('#app')
