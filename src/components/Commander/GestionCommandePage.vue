<template>
    <div class="container">
        <header>
            <h1>Commander la création d'un logo</h1>
            <p>Veuillez choisir ci-dessous</p>
        </header>


        <section>
            <div class="card">
                <h2>Commander un logo</h2>
                <p>Remplir le formulaire de commande</p>
                <button class="orange" @click="commanderHit">Commander Maintenant</button>
            </div>

            <div class="card">
                <h2>Retrouver une commande</h2>
                <p>Retrouver une commande enregistré</p>
                <button class="noir">Retrouver Maintenant</button>
            </div>
        </section>
    </div>
</template>




<script>
export default {
    methods: {
        commanderHit() {
            this.$emit('show-formulaire', true);
        }
    }
}
</script>





<style scoped>
h1 {
    font-family: Araboto-Bold;
    font-size: 1.5rem;
    text-decoration: none;
    margin: 0;
}

h2 {
    font-weight: 900;
    font-size: 1.3rem;
    text-decoration: none;
    color: #878FA0;
    margin: 0;
}

p {
    font-size: 1rem;
    font-weight: 500;
    color: #878FA0;
    margin: 0;
}


header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

section {
    display: flex;
    justify-content: center;
    margin: 2rem;
    gap: 2rem;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    min-width: 300px;
    border-style: solid;
    border-width: 1px;
    border-color: #e4e4e4;
    border-radius: 4px;
    padding: 1rem;
}

button {
    border: none;
    padding: 1rem;
    font-size: 1rem;
    color: #ffffff;
    margin-top: 1rem;
}

.orange {
    background-color: #F7931A;
}

.noir {
    background-color: #343A3E;
}


</style>