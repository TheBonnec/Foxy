<template>
  <bandeau-accueil></bandeau-accueil>
  <contenu-choix></contenu-choix>
  <footer-accueil></footer-accueil>
</template>



<script>
export default {
  name: 'App'
}
</script>



<style>
@font-face {
    font-family: Araboto-Bold;
    src: url("./assets/fonts/Araboto/Araboto\ Bold\ 400.ttf");
}

@font-face {
    font-family: Araboto;
    src: url("./assets/fonts/Araboto/Araboto\ Normal\ 400.ttf");
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
}
</style>
