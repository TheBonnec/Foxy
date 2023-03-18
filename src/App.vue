<template>
  <TopBar></TopBar>
  <TabBar :selected-tab="selectedTab" @update-selected-tab="updateSelectedTab"></TabBar>
  
  <FormulairePage></FormulairePage>
</template>





<script>
import TabBar from "@/components/TabBar.vue";
import TopBar from "@/components/TopBar.vue";
import FormulairePage from "@/components/Formulaire/FormulairePage.vue"


export default {
  components: {
    TabBar,
    TopBar,
    FormulairePage
  },
  name: 'App',

  data() {
    return {
      selectedTab: null
    };
  },

  methods: {
    updateSelectedTab(tabName) {
      this.selectedTab = tabName;
    }
  }
}
</script>





<style>
@font-face {
    font-family: Araboto-Bold;
    src: url("./assets/fonts/Araboto/Araboto\ Bold\ 400.ttf");
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: Araboto;
    src: url("./assets/fonts/Araboto/Araboto\ Normal\ 400.ttf");
    font-weight: 300;
    font-style: normal;
}


body {
  margin: 0;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
}


.container {
  max-width: 1000px;
  margin: auto;
}

</style>
