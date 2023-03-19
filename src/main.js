import {createRouter, createWebHistory} from 'vue-router';
import { createApp } from 'vue'
import App from './App.vue'
import FormulairePage from './components/Formulaire/FormulairePage.vue'
import bandeauAccueil from "./components/bandeau-accueil.vue";
import footerAccueil from "@/components/footer-accueil.vue";
import contenuChoix from "@/components/contenu-choix.vue";
import choixFormule from "@/components/ChoixFormule.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: []
})

const app = createApp(App)

app.component('FormulairePage', FormulairePage);
app.component('bandeauAccueil', bandeauAccueil);
app.component('footerAccueil', footerAccueil);
app.component('contenuChoix', contenuChoix);
app.component('choixFormule', choixFormule);

app.use(router);
app.mount('#app');
