<template>
  <body>
    <div id="pseudo_titre">
      <h3>Commander la création d'un logo</h3>
      <p id="sous_titre">Veuillez choisir ci-dessous</p>
    </div>
    <div class="box">
      <div class="sub_box">
        <h4>Commander un logo</h4>
        <p>Remplir le formulaire de commande</p>
        <br/>
        <button id="orange_button" @click="getNext()">Commander Maintenant</button>
      </div>
      <div class="sub_box">
        <h4>Retrouver une commande</h4>
        <p>Retrouver une commande enregistré</p>
        <br/>
        <button class="black_button" @click="getNext()">Retrouver maintenant</button>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "contenu-choix"
}
</script>

<style scoped>

.box{
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  /*margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 70px;*/
  width: 100%;
  padding-bottom: 100px;
}

.sub_box{
  color:#878FA0;
  border: 1px solid #F1F1F1;
  top: 100px;
  margin: 0 0 0 50px;
  align-items: flex-end;
  padding: 0 10px 0 10px;
}

#pseudo_titre{
  width: 100%;
  align-self: center;
  margin: 105px 30px 0 200px;
  font-size: 18px;
}

#sous_titre{
  margin-left: 50px;
  color:#878FA0;

}

body{
  max-width: 800px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

h4{
  margin: 10px;
  font-size: 19px;
  align-self: center;
}

p{
  display: inline;
  text-align: center;
}

#orange_button{
  background-color: #F8931F;
  color: white;
  margin: 10px;
  align-self: center;
  height: 55px;
  width: 235px;
  border: none;
  font-size: 15px;
}

.black_button{
  background-color: #343A3E;
  color: white;
  margin: 10px;
  align-self: center;
  height: 55px;
  width: 235px;
  border: none;
  font-size: 15px;
}

</style>