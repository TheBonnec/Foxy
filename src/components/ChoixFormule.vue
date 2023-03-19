<template>
  <img id="front_image" alt="Confiez la création de votre logo sur mesure à un graphiste professionnel !" src="../assets/image_personne_longue.png">
  <table>
    <tbody>
      <tr>
        <td class="large_column">
          <img class="image_hauteur" alt="formule petit budget" src="../assets/formule_limit.png">
        </td>
        <td id="case_milieu">
          <img id="image_longeur_petite" alt="formule classic" src="../assets/formule_classic.png">
          <br/>
          <img id="image_longeur_petite" alt="formule classic" src="../assets/formule_classic.png">
        </td>
        <td class="large_column">
          <img class="image_hauteur" alt="formule zen théoriquement" src="../assets/formule_limit.png">
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ChoixFormule"
}
</script>

<style scoped>

table{
  border-collapse: collapse;
  max-width: 1200px;
  margin: auto;
}

.image_hauteur{
  max-width: 90%;
  margin: auto;
  display: flex;
}

#front_image{
  text-align: center;
  display: flex;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  max-height: 270px;
}

#image_longeur_petite{
  display: flex;
  max-width: 74%;
  margin: auto;

}
#case_milieu{
  width: 370px;
}
</style>