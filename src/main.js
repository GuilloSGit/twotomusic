import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import i18n from './i18n'
import router from './Router'


const app = createApp(App);

app
    .use(PrimeVue)
    .use(i18n)
    .use(router)
    .mount('#app')

// import components
import Dialog from 'primevue/dialog';

// register components
app.component('DialogVue', Dialog);
