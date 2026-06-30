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
}


</script>

<template>
  <div :style="{ '--police': police }">
    <Header></Header>
    <main>
      <router-view/>
      <p>Musique : "Infos Tapis", "Alice", "Luiz" – Copyright © Hicham Chahidi, utilisé avec permission via MusicScreen (musique libre de droits).</p>
    </main>
    <Footer></Footer>
  </div>
</template>

<!-- pas scoped donc s'applique a tous les composants -->
<style>
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: v-bind(police);
}

@font-face {
font-family: "Luciole";
    src: url("./fonts/Luciole/Luciole-Regular.ttf") format("truetype");
}

h2{
    text-align: center;
    font-size: 36px;
    margin: 20px;
}

.lien{
  color: #03009E
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

.btn{
    background-color: #FA6700;
    padding: 10px 30px;
    margin: 30px;
    border-radius: 20px;
    font-size: large;
    border: 3px solid black;
    font-weight: bold;
    cursor: pointer;
}

.mode{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 24px;
    color: white;
    background-color: #4B0082;
    width: 500px;
    height: 100px;
    margin: 20px;
    border-radius: 20px;
    cursor: pointer;
}


.audio{
    margin: 5px;
}

@media (max-width: 768px) {
    .mode{
        width: 330px;
        height: 62px;
        gap: 5px;
        font-size: 16px;
        margin-left: clamp(2px, calc((100vw - 330px - 2px)/2), 100vw);
        margin-right: clamp(2px, calc((100vw - 330px - 2px)/2), 100vw);
    }
    .étoile{
        width: 25px;
    }
    .btn{
      font-size: 1rem;
    }
  }

</style>