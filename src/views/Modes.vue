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
            étoiles_fun: Number(localStorage.getItem("étoiles_Fun")) || 0,
            étoiles_aléatoire: Number(localStorage.getItem("étoiles_Aléatoire")) || 0,
            étoiles_total: 0,
            n_fun: 2,
        }
    },
    created(){
        this.étoiles_total = this.étoiles_facile + this.étoiles_normal + this.étoiles_difficile + this.étoiles_classique + this.étoiles_bonus + this.étoiles_fun + this.étoiles_aléatoire;
    }
}
</script>


<template>
<div class="vh">
    <h2>Modes de jeu</h2>
    <h3 class="total">étoiles: {{ étoiles_total }}/32</h3>
    <div class="modes">
        <div class="niveaux">
            <router-link to="/facile" class="none">
                <button class="mode">
                    Facile 
                    <img src="/img/etoile pleine.png" v-for="n in étoiles_facile" class="étoile" loading="lazy" :key="n">
                    <img src="/img/etoile vide.png" v-for="n in (5-étoiles_facile)"  class="étoile" loading="lazy" :key="n">
                </button>
            </router-link>
            <router-link to="/normal" class="none">
                <button class="mode">
                    Normal
                    <img src="/img/etoile pleine.png" v-for="n in étoiles_normal" class="étoile" loading="lazy" :key="n">
                    <img src="/img/etoile vide.png" v-for="n in (5-étoiles_normal)" class="étoile" loading="lazy" :key="n">
                </button>
            </router-link>
            <router-link to="/difficile" class="none">
                <button class="mode">
                    Difficile
                    <img src="/img/etoile pleine.png" v-for="n in étoiles_difficile" class="étoile" loading="lazy" :key="n">
                    <img src="/img/etoile vide.png" v-for="n in (5-étoiles_difficile)" class="étoile" loading="lazy" :key="n">
                </button>
            </router-link>
            <router-link to="/bonus" class="none">
                <button class="mode">
                    Bonus
                    <img src="/img/etoile pleine.png" v-for="n in étoiles_bonus" class="étoile" loading="lazy" :key="n">
                    <img src="/img/etoile vide.png" v-for="n in (5-étoiles_bonus)" class="étoile" loading="lazy" :key="n">
                </button>
            </router-link>

        </div>
        <div class="autre">
            <router-link to="/classique" class="none">
                <button class="mode">
                    Classique
                    <img src="/img/etoile pleine.png" v-for="n in étoiles_classique" class="étoile" loading="lazy" :key="n">
                    <img src="/img/etoile vide.png" v-for="n in (5-étoiles_classique)" class="étoile" loading="lazy" :key="n">
                </button>
            </router-link>
            <router-link to="/aleatoire" class="none">
                <button class="mode">
                    Aléatoire
                    <img src="/img/etoile pleine.png" v-for="n in étoiles_aléatoire" class="étoile" loading="lazy" :key="n">
                    <img src="/img/etoile vide.png" v-for="n in (5-étoiles_aléatoire)" class="étoile" loading="lazy" :key="n">
                </button>
            </router-link>
            <router-link to="/fun" class="none">
                <button class="mode">
                    Fun
                    <img src="/img/etoile pleine.png" v-for="n in étoiles_fun" class="étoile" loading="lazy" :key="n">
                    <img src="/img/etoile vide.png" v-for="n in (n_fun - étoiles_fun)" class="étoile" loading="lazy" :key="n">
                </button>
            </router-link>
            <router-link to="/custom" class="none">
                <button class="mode">Custom</button>
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
}

.mode{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    background-color: #FEEAFF;
    width: 520px;
    height: 100px;
    font-size: 24px;
    margin: 25px;
    border-radius: 20px;
}

.niveaux, .autre{
    display: flex;
    flex-direction: column;
}

.vh{ 
    /* pour que le footer se mette en bas de l'écran */
    min-height: calc(100vh - 15vh - 12vh - 20px - 52px);
}

@media (max-width: 768px) {
    .mode{
        width: 320px;
        height: 60px;
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