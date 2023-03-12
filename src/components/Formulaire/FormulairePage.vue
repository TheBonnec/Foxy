<template>
    <div id="formulaire">
        <h2>Rédigez le brief afin d'orienter le graphiste</h2>


        <form @submit.prevent>
            <div class="horizontal">
                <div class="form-section">
                    <p>Votre nom</p>
                    <input id="lastname" name="lastname" type="text" placeholder="Votre nom"/>
                </div>
                <div class="form-section">
                    <p>Votre prénom</p>
                    <input id="firstname" name="firstname" type="text" placeholder="Votre prénom"/>
                </div>
            </div>

            <div class="form-section">
                <p>Nom de votre société</p>
                <input id="company" name="company" type="text" placeholder="Nom de votre société"/>
            </div>

            <div class="form-section">
                <p>Adresse *</p>
                <input id="adress" name="adress" type="text" placeholder="Adresse"/>
            </div>

            <div class="horizontal">
                <div class="form-section">
                    <p>СР *</p>
                    <input id="postal-code" name="postal-code" type="text" placeholder="Votre code postal"/>
                </div>
                <div class="form-section">
                    <p>Ville *</p>
                    <input id="city" name="city" type="text" placeholder="Ville"/>
                </div>
            </div>

            <div class="horizontal">
                <div class="form-section">
                    <p>Email *</p>
                    <input id="email" name="email" type="text" placeholder="Votre adresse mail"/>
                </div>
                <div class="form-section">
                    <p>Téléphone *</p>
                    <input id="phone" name="phone" type="text" placeholder="Votre N° de Téléphone"/>
                </div>
            </div>

            <div class="form-section">
                <p>Avez-vous un site internet ? Si oui, merci de nous indiquer son URL</p>
                <input id="website" name="website" type="text" placeholder="URL de votre site"/>
            </div>

            <button>Envoyer le brief</button>

        </form>
    </div>
</template>





<script>
export default {
    
}
</script>





<style scoped>
#formulaire {
    border-style: solid;
    border-width: 1px;
    border-color: #e4e4e4;
    border-radius: 4px;

    padding: 1rem;
}

h2 {
    font-family: Araboto-Bold;
    font-weight: normal;
    margin-top: 0px;
    margin-bottom: 1rem;
}

p {
    font-family: Araboto-Bold;
    font-weight: normal;
    font-size: 1rem;
    margin: 0px;

    color: #6a6a6a;
}

input {
    box-sizing: border-box;
    font-family: Araboto;
    font-size: 1rem;
    width: 100%;
    margin-right: auto;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    padding: 0.5rem 0.8rem 0.5rem 0.8rem;
}

::placeholder {
    font-family: Araboto;
    font-size: 1rem;
}


.form-section {
    margin-bottom: 1rem;
    width: 100%;
}

.horizontal {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    gap: 1rem;
}

button {
    height: 2.5rem;
    width: 100%;
    font-family: Araboto-Bold;
    font-size: 1rem;
    background-color: #F7931A;
    color: #ffffff;
    border: none;
    border-radius: 4px;
}

button:hover {
    background-color: #f7941ab4;
}

button:active {
    background-color: #ffffff;
    color: #F7931A;
}

</style>