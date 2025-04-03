import './bootstrap';

import Alpine from 'alpinejs';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Notiflix from "notiflix";


Notiflix.Notify.init({
    position: "center-top",
    timeout: 3000,
});


window.Alpine = Alpine;
Alpine.start();

const app = createApp(App);
app.use(router);
app.mount('#app');
