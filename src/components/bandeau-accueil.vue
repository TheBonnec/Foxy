<template>
  <header>
    <div id="bandeau">
      <div id="bandeau_left">
        <img alt="Logo telephone" src="../assets/tel.png"><p>+33(0)1 23 45 67 89</p>
      </div>
      <div id="bandeau_right">
        <img alt="Logo connexion" src="../assets/connexion.png"><p>Connexion</p>
        <img alt="Logo inscription" src="../assets/inscription.png"><p>Inscription</p>
        <img alt="Logo avis client" src="../assets/avis_clients.png"><p>Avis client</p>
      </div>
    </div>
  </header>
  <div id="text_right">
    <p><a class="orange_word">COMMANDER</a>  NOTRE ÉQUIPE NOS RÉALISATIONS TARIFS BLOGS CONTACT <a class="orange_word">ÊTRE RAPPELÉ</a></p>
  </div>

</template>



<script>
export default {
  data() {
    return {
      next: "",
    };
  },
  methods: {
    getNext() {
      this.next = "commande"
    },
  }
}
</script>

<style scoped>
header{
  background-color: yellow;
  position: sticky;
}
#bandeau{
  position: sticky;
  border-bottom: 1px solid #F1F1F1;
  border-collapse: separate;
  top: 0;

}

#bandeau_left{
  position: fixed;
  top: 5px;
  left: 30px;
  box-sizing: inherit;
}

#bandeau_right{
  position: fixed;
  right: 30px;
  top: 5px;
}

img{
  display: inline;
  height: 40px;
  width: 40px;
}

p{
  display: inline;
  text-align: center;
}

#text_right{
  font-size: 14px;
  margin: 10px 10px 0 680px;
  font-weight: bold;
}

.orange_word{
  color: #F8931F;
}
</style>