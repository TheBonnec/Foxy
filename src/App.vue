<template>
  <div id="page-content">
    <TopBar></TopBar>
    <TabBar :selected-tab="selectedTab" @update-selected-tab="updateSelectedTab"></TabBar>
  
    <CommanderPage v-if="selectedTab == 'COMMANDER'"></CommanderPage>
    <p style="justify-content: center;" v-else>Page en construction</p>
  </div>

  <FooterBar></FooterBar>
</template>





<script>
import TabBar from "@/components/General/TabBar.vue";
import TopBar from "@/components/General/TopBar.vue";
import FooterBar from "@/components/General/FooterBar.vue";
import CommanderPage from "@/components/Commander/CommanderPage.vue";


export default {
  components: {
    TabBar,
    TopBar,
    FooterBar,
    CommanderPage
},
  name: 'App',

  data() {
    return {
      selectedTab: "COMMANDER"
    };
  },

  methods: {
    updateSelectedTab(tabName) {
      this.selectedTab = tabName;
    },

    isSelectedTabEqualTo(value) {
      return this.selectedTab === value;
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

#page-content {
  min-height: 50vw;
}


.container {
  max-width: 1000px;
  margin: auto;
}

</style>
