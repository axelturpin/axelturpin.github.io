<script>

export default{
    name: "ModesDilemmes",
    data(){
        return{
            étoilesFacile: Number(localStorage.getItem("étoiles_Facile")) || 0,
            étoilesNormal: Number(localStorage.getItem("étoiles_Normal")) || 0,
            étoilesDifficile: Number(localStorage.getItem("étoiles_Difficile")) || 0,
            étoilesClassique: Number(localStorage.getItem("étoiles_Classique")) || 0,
            étoilesBonus: Number(localStorage.getItem("étoiles_Bonus")) || 0,
            étoilesCache: Number(localStorage.getItem("étoiles_Caché")) || 0,
            étoilesFun: Number(localStorage.getItem("étoiles_Fun")) || 0,
            étoilesAléatoire: Number(localStorage.getItem("étoiles_Aléatoire")) || 0,
            étoilesPilules: Number(localStorage.getItem("étoiles_Pilules")) || 0,
            étoilesEnfoui: Number(localStorage.getItem("étoiles_Enfoui")) || 0,
            étoilesTotal: 0,
            n_fun: 3,
        }
    },
    created(){
        this.étoilesTotal = this.étoilesFacile + this.étoilesNormal + this.étoilesDifficile + this.étoilesClassique + this.étoilesBonus + this.étoilesCache + this.étoilesFun + this.étoilesAléatoire + this.étoilesPilules + this.étoilesEnfoui;
        localStorage.setItem("étoiles_Total", this.étoilesTotal);
    }
}
</script>

<template>
<div class="vh">
    <h2>Modes de jeu</h2>
    <h3 class="total">étoiles: {{ étoilesTotal }}/48</h3>
    <div class="modes">
        <div class="niveaux">
            <span class="center taille">Niveaux</span>
            <router-link to="/facile" class="none mode">
                Facile 
                <img src="/img/etoile pleine.png" v-for="n in étoilesFacile" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5-étoilesFacile)"  class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <router-link to="/normal" class="none mode">
                Normal
                <img src="/img/etoile pleine.png" v-for="n in étoilesNormal" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5-étoilesNormal)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <router-link to="/difficile" class="none mode">
                Difficile
                <img src="/img/etoile pleine.png" v-for="n in étoilesDifficile" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5-étoilesDifficile)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <router-link to="/bonus" class="none mode">
                Bonus
                <img src="/img/etoile pleine.png" v-for="n in étoilesBonus" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5-étoilesBonus)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <button class="mode" v-if="this.étoilesTotal < 10">{{ this.étoilesTotal }}/10 étoiles</button>
            <router-link to="/cache" class="none mode" v-if="this.étoilesTotal >= 10">
                Caché
                <img src="/img/etoile pleine.png" v-for="n in étoilesCache" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5-étoilesCache)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <button class="mode" v-if="this.étoilesTotal < 15">{{ this.étoilesTotal }}/15 étoiles</button>
            <router-link to="/enfoui" class="none mode" v-if="this.étoilesTotal >= 15">
                Enfoui
                <img src="/img/etoile pleine.png" v-for="n in étoilesEnfoui" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5-étoilesEnfoui)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>

        </div>
        <div class="autre">
            <span class="center taille">Autre</span>
            <router-link to="/classique" class="none mode">
                Classique
                <img src="/img/etoile pleine.png" v-for="n in étoilesClassique" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5-étoilesClassique)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <router-link to="/aleatoire" class="none mode">
                Aléatoire
                <img src="/img/etoile pleine.png" v-for="n in étoilesAléatoire" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5-étoilesAléatoire)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <router-link to="/fun" class="none mode">
                Fun
                <img src="/img/etoile pleine.png" v-for="n in étoilesFun" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (n_fun - étoilesFun)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <button class="mode" v-if="this.étoilesTotal < 20">{{ this.étoilesTotal }}/20 étoiles</button>
            <router-link to="/pilules" class="none mode" v-if="this.étoilesTotal >= 20">
                Pilules
                <img src="/img/etoile pleine.png" v-for="n in étoilesPilules" class="étoile" loading="lazy" :key="n" alt="étoile pleine">
                <img src="/img/etoile vide.png" v-for="n in (5 - étoilesPilules)" class="étoile" loading="lazy" :key="n" alt="étoile vide">
            </router-link>
            <router-link to="/custom" class="none mode">
                Custom
            </router-link>
            <a href="https://www.youtube.com/playlist?list=PLMeUWXGHPb9A" class="none mode">
                Vidéos
            </a>
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
    h2{
        font-size: 2rem;
    }
}
</style>