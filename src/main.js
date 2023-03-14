import {createRouter, createWebHistory} from 'vue-router';
import { createApp } from 'vue'
import App from './App.vue'
import FormulairePage from './components/Formulaire/FormulairePage.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: []
})

const app = createApp(App)

app.component('FormulairePage', FormulairePage);

app.use(router);
app.mount('#app');
