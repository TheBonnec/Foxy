<template>
    <div class="container">
        <div id="telephone" class="content-group">
            <img alt="Logo telephone" src="../../assets/tel.png">
            <p>+33 (0)5 35 54 64 96 - +33 (0)7 80 91 95 10</p>
        </div>
        
        <div id="right-div">
            <div class="content-group">
                <img alt="Logo connexion" src="../../assets/connexion.png">
                <p>Connexion</p>
            </div>
            <div class="content-group">
                <img alt="Logo inscription" src="../../assets/inscription.png">
                <p>Inscription</p>
            </div>
            <div class="content-group">
                <img alt="Logo avis client" src="../../assets/avis_clients.png">
                <p>Avis client</p>
            </div>
        </div>
    </div>
    <hr />
</template>




<style scoped>
img {
    max-width: 20px;
    max-height: 20px;
}

.container {
    display: flex;
    align-items: center;
}

.content-group {
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

#telephone {
    order: 1;
}

#right-div {
    order: 2;
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    gap: 0.8rem;
}

hr {
    border-style: solid;
    border-width: 0.01rem;
    border-color: #f2f2f2;
    margin: 0;
}

</style>