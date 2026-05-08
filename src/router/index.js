import { createRouter, createWebHashHistory } from "vue-router";

import Accueil from "../views/Accueil.vue";
import Modes from "../views/Modes.vue";
import Facile from "../views/Facile.vue";
import Paramètres from "../views/Paramètres.vue";
import Difficile from "../views/Difficile.vue";
import Aléatoire from "../views/Aléatoire.vue";
import Custom from "../views/Custom.vue";
import Normal from "../views/Normal.vue";
import Classique from "../views/Classique.vue";
import Fun from "@/views/Fun.vue";
import Bonus from "@/views/Bonus.vue";
import Base_custom from "@/views/Base_custom.vue";
import Bonus2 from "@/views/Bonus2.vue";

//définir les routes

const roads = [
    {
        path: "/",
        name: "Accueil",
        component: Accueil
    },
    {
        path: "/modes",
        name: "Modes",
        component: Modes
    },
    {
        path: "/facile",
        name: "Facile",
        component: Facile
    },
    {
        path: "/normal",
        name: "Normal",
        component: Normal
    },
    {
        path: "/difficile",
        name: "Difficile",
        component: Difficile
    },
    {
        path: "/classique",
        name: "Classique",
        component: Classique
    },
    {
        path: "/aleatoire",
        name: "Aléatoire",
        component: Aléatoire
    },
    {
        path: "/custom",
        name: "Custom",
        component: Custom
    },
    {
        path: "/custom/play",
        name: "Play Custom",
        component: Base_custom
    },
    {
        path: "/fun",
        name: "Fun",
        component: Fun
    },
    {
        path: "/bonus",
        name: "Bonus",
        component: Bonus
    },
    {
        path: "/bonus2",
        name: "Bonus2",
        component: Bonus2
    },
    {
        path: "/parametres",
        name: "Paramètres",
        component: Paramètres
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: roads
})


export default router
