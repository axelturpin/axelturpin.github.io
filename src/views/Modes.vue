<script>

export default{
    name: "Modes",
    data(){
        return{
            étoiles_facile: Number(localStorage.getItem("étoiles_Facile")) || 0,
            étoiles_normal: Number(localStorage.getItem("étoiles_Normal")) || 0,
            étoiles_difficile: Number(localStorage.getItem("étoiles_Difficile")) || 0,
            étoiles_classique: Number(localStorage.getItem("étoiles_Classique")) || 0,
            étoiles_bonus: Number(localStorage.getItem("étoiles_Bonus")) || 0,
            étoiles_cache: Number(localStorage.getItem("étoiles_Caché")) || 0,
            étoiles_fun: Number(localStorage.getItem("étoiles_Fun")) || 0,
            étoiles_aléatoire: Number(localStorage.getItem("étoiles_Aléatoire")) || 0,
            étoiles_pilules: Number(localStorage.getItem("étoiles_Pilules")) || 0,
            étoiles_enfoui: Number(localStorage.getItem("étoiles_Enfoui")) || 0,
            étoiles_total: 0,
            n_fun: 3,
        }
    },
    created(){
        this.étoiles_total = this.étoiles_facile + this.étoiles_normal + this.étoiles_difficile + this.étoiles_classique + this.étoiles_bonus + this.étoiles_cache + this.étoiles_fun + this.étoiles_aléatoire + this.étoiles_pilules + this.étoiles_enfoui;
    }
}
</script>

<template>
<div class="vh">
    <h2>Modes de jeu</h2>
    <h3 class="total">étoiles: {{ étoiles_total }}/48</h3>
    <div class="modes">
        <div class="niveaux">
            <span class="center taille">Niveaux</span>
            <router-link to="/facile" class="none mode">
                Facile 
                <img src="/img/etoile pleine.png" v-for="n in étoiles_facile" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5-étoiles_facile)"  class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <router-link to="/normal" class="none mode">
                Normal
                <img src="/img/etoile pleine.png" v-for="n in étoiles_normal" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5-étoiles_normal)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <router-link to="/difficile" class="none mode">
                Difficile
                <img src="/img/etoile pleine.png" v-for="n in étoiles_difficile" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5-étoiles_difficile)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <router-link to="/bonus" class="none mode">
                Bonus
                <img src="/img/etoile pleine.png" v-for="n in étoiles_bonus" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5-étoiles_bonus)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <button class="mode" v-if="this.étoiles_total < 10">{{ this.étoiles_total }}/10 étoiles</button>
            <router-link to="/cache" class="none mode" v-if="this.étoiles_total >= 10">
                Caché
                <img src="/img/etoile pleine.png" v-for="n in étoiles_cache" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5-étoiles_cache)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <button class="mode" v-if="this.étoiles_total < 15">{{ this.étoiles_total }}/15 étoiles</button>
            <router-link to="/enfoui" class="none mode" v-if="this.étoiles_total >= 15">
                Enfoui
                <img src="/img/etoile pleine.png" v-for="n in étoiles_enfoui" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5-étoiles_enfoui)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>

        </div>
        <div class="autre">
            <span class="center taille">Autre</span>
            <router-link to="/classique" class="none mode">
                Classique
                <img src="/img/etoile pleine.png" v-for="n in étoiles_classique" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5-étoiles_classique)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <router-link to="/aleatoire" class="none mode">
                Aléatoire
                <img src="/img/etoile pleine.png" v-for="n in étoiles_aléatoire" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5-étoiles_aléatoire)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <router-link to="/fun" class="none mode">
                Fun
                <img src="/img/etoile pleine.png" v-for="n in étoiles_fun" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (n_fun - étoiles_fun)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <button class="mode" v-if="this.étoiles_total < 20">{{ this.étoiles_total }}/20 étoiles</button>
            <router-link to="/pilules" class="none mode" v-if="this.étoiles_total >= 20">
                Pilules
                <img src="/img/etoile pleine.png" v-for="n in étoiles_pilules" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5 - étoiles_pilules)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <router-link to="/custom" class="none mode">
                Custom
            </router-link>
        </div>
    </div>
</div>
</template>


<style scoped>

.total{
    text-align: center;
}

.modes{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    cursor: auto;
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

.mode:hover{
  background-color: #C400CF !important;
}

.niveaux, .autre{
    display: flex;
    flex-direction: column;
    border: 1.5px solid black;
    border-radius: 20px;
}

.taille{
    font-size: 1.8rem;
}

.vh{ 
    /* pour que le footer se mette en bas de l'écran */
    min-height: calc(100vh - 15vh - 12vh - 20px);
}

@media (max-width: 768px) {
    .mode{
        width: 330px;
        height: 62px;
        font-size: 16px;
    }
    .étoile{
        width: 25px;
    }
    h2{
        font-size: 2rem;
    }
}
</style>