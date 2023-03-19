<template>
    <div id="footer_gris">
        <div class="container">
            <p id="text_footer">Confiez la création de votre logo à notre graphiste et professionnalisez votre communication</p>
            <button class="black_button">Contactez-nous</button>
        </div>
    </div>


    <div id="footer_noir">
    </div>
</template>




<style scoped>

.container {
    display: flex;
    margin-top: 5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    justify-content: center;
}

p {
  font-weight: bolder;
  color: #878FA0;
  margin: auto 2rem auto 0;
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

#footer_gris{
  align-self: flex-end;
  background-color: #F7F8FC;
  width: 100%;
  bottom: 10px;
  text-align: center;
}

#footer_noir{
  height: 60px;
  width: 100%;
  background-color: #222325;
}
</style>