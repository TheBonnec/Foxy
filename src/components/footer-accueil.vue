<template>
  <footer>
    <div id="footer_gris">
      <p id="text_footer">Confiez la création de votre logo à notre graphiste et professionnalisez votre communication</p>
      <button class="black_button">Contactez-nous</button>
    </div>
    <div id="footer_noir">
      <p>ceci est un test</p>
    </div>

  </footer>
</template>

<script>
export default {
  name: "footer-accueil"
}
</script>

<style scoped>

p{
  display: inline;
  text-align: center;
}

footer{
  display: flex;
  flex-direction: column;
  bottom: -1px;
  position: sticky;
}

#footer_noir{
  height: 60px;
  width: 100%;
  background-color: #222325;
}

#text_footer{
  font-weight: bolder;
  color: #878FA0;
  margin: 40px 20px 30px 0;
  align-self: center;
}

#footer_gris{
  align-self: flex-end;
  background-color: #F7F8FC;
  width: 100%;
  bottom: 10px;
  text-align: center;
  height: 120px;
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