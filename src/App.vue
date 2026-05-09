<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
export default{
  components:{
    Header,
    Footer
  },
  data(){
    return{
      police: localStorage.getItem("font") || "Arial",
    }
  },
  mounted() {

  }
}


</script>

<template :style="{ '--police': police }">
  <Header></Header>
  <router-view/>
  <p>Musique : "Infos Tapis", "Alice", "Luiz" – Copyright © Hicham Chahidi, utilisé avec permission via MusicScreen (musique libre de droits).</p>
  <Footer></Footer>
</template>

<!-- pas scoped donc s'applique a tous les composants -->
<style>
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: v-bind(police);
}

body{
  background-color: #FEFFE9;
}

@font-face {
font-family: "Luciole";
    src: url("/fonts/Luciole/Luciole-Regular.ttf") format("truetype");
}

h2{
    text-align: center;
    font-size: 36px;
    margin: 20px;
}

.lien{
  color: #0300C4
}

.center {
    display: flex;
    justify-content: center;
}

.wrap{
  display: flex;
  flex-wrap: wrap;
}

.none{
    text-decoration: none;
}

.étoile{
    width: 50px;
}
</style>