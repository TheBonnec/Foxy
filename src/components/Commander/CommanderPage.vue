<template>
    <FormulairePage v-if="showFormulaire" @come-back="toggleShowFormulaire"></FormulairePage>
    <GestionCommandePage v-else @show-formulaire="toggleShowFormulaire"></GestionCommandePage>
</template>




<script>
import GestionCommandePage from "./GestionCommandePage.vue"
import FormulairePage from "./FormulairePage.vue"

export default {
    components: {
        GestionCommandePage,
        FormulairePage
    },

    data() {
        return {
            showFormulaire: false
        };
    },

    methods: {
        toggleShowFormulaire() {
            this.showFormulaire = !this.showFormulaire;
        }
    }
}


</script>