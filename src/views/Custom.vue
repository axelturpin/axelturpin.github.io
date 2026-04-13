<script>
import Base_custom from './Base_custom.vue';

export default {
    name: 'Facile',
    components: {
    Base_custom
  },
  data(){
    return{
        nb: localStorage.getItem("nb_custom") || 0,
        ajout: false,
        vies_voie1: 0,
        vies_voie2: 0,
        type_voie1: "person", // chien / person / Vperson
        type_voie2: "person",
        dilemme: {},
        dilemmes: JSON.parse(localStorage.getItem("dilemmes_custom")) || {},
        description: "description non modifié",
        Détails: "Détails non modifié",
        PasEncoreValider: false
    }
    },
    // provide() {
    // return {
    //     niveau: "Custom" ,
    //     nombre_dilemmes: this.nb, 
    //     dilemmes_custom: this.dilemmes
    // }
    // },
  methods:{
    click(){
        this.ajout = true;
        this.PasEncoreValider = true;
    },
    setVoie1(){
        this.vies_voie1 = this.input_vies_voie1
        this.type_voie1 = this.input_type_voie1
    },
    setVoie2(){
        this.vies_voie2 = this.input_vies_voie2
        this.type_voie2 = this.input_type_voie2
    },
    valider(){
        //localstorage
        this.nb++
        this.dilemme[`dilemme${this.nb}`] = {
                niveau: "Custom",
                description: this.description,
                Détails: this.Détails,
                src_plan: "./img/rails.png",
                href: "https://imgflip.com/i/al62xe",
                bouton1: this.bouton1,
                bouton2: this.bouton2,
                voie1: this.input_vies_voie1,
                voie2: this.input_vies_voie2,
                voie1_type: this.input_type_voie1,
                voie2_type: this.input_type_voie2,
                voie1_arbre: this.voie1_arbre,
                voie2_arbre: this.voie2_arbre
        }

        // const dilemmes_custom = JSON.parse(localStorage.getItem("dilemmes_custom")) || {}
        this.dilemmes[`dilemme${this.nb}`] = this.dilemme[`dilemme${this.nb}`]
        localStorage.setItem("nb_custom", this.nb);
        this.PasEncoreValider = false;
        console.log(this.dilemmes);
        //Enregistrer la liste des dilemmes
        localStorage.setItem("dilemmes_custom", JSON.stringify(this.dilemmes));
        localStorage.setItem("nombre_dilemmes_custom", this.nb);
    },
    supprimer(index){
        // décaler tous les numéros de dilemme:
        for (let i = 0; i < this.nombre_dilemmes; i++){
            if (i >= index){
                for (let j = 0; j < this.nombre_dilemmes + index; j++){
                    this.dilemmes[`dilemme${index + j}`] = this.dilemmes[`dilemme${index + j + 1}`]
                }
            }
        }
        //Enregistrer la liste des dilemmes
        localStorage.setItem("dilemmes_custom", JSON.stringify(this.dilemmes));
        if(localStorage.getItem("nb_custom") > 0){
            localStorage.setItem("nb_custom", localStorage.getItem("nb_custom") - 1);
        }
    },
    tousSupprimer(){
        localStorage.setItem("dilemmes_custom", "{}");
        localStorage.setItem("nb_custom", 0);
    }
    },
    computed(){
        this.dilemmes
    }

  }

</script>

<template>
    <button class="btn" @click="click">Ajouter ou supprimer un dilemme</button>
    <div v-if="ajout && PasEncoreValider">
        <form action="" class="form">
            description:
            <textarea name="description" id="description" placeholder="Description du dilemme" v-model="description"></textarea>
            Solution:
            <textarea name="détails" id="détails" placeholder="Description de la solution" v-model="Détails"></textarea>

            <div class="check">
                <label for="arbre">Arbre voie 1 ?</label>
                <input type="checkbox" name="" id="arbre" v-model="voie1_arbre">
            </div>
            <label for="nb-person-voie1">Nombre de vies sur la première voie</label>
            <input type="number" id="nb-person-voie1" v-model="input_vies_voie1">
            <label for="type-person-voie1">type de vies sur la première voie</label>
            <select type="text" id="type-person-voie1" v-model="input_type_voie1">
                <option value="chien">chien</option>
                <option value="person">personne</option>
                <option value="voluntary person">personne volontaire</option>
            </select>

            <div class="check">
                <label for="arbre2">Arbre voie 2 ?</label>
                <input type="checkbox" name="" id="arbre2" v-model="voie2_arbre">
            </div>
            <label for="nb-person-voie2">Nombre de vies sur la deuxième voie</label>
            <input type="number" id="nb-person-voie2" @change="setVoie2" v-model="input_vies_voie2">
            <label for="type-person-voie2">type de vies sur la deuxième voie</label>
            <select type="text" id="type-person-voie2" @change="setVoie2" v-model="input_type_voie2">
                <option value="chien">chien</option>
                <option value="person">person</option>
                <option value="voluntary person">personne volontaire</option>
            </select>

            <label for="btn-1">nom bouton1</label>
            <input type="text" id="btn-1" v-model="bouton1">
            <label for="btn-2">nom bouton2</label>
            <input type="text" id="btn-2" v-model="bouton2">
        </form>
        <div class="center colonne">
            <button class="btn" @click="valider">valider un dilemme</button>
        </div>
        <form action="" class="center colonne">
            <label for="supprimer 1">supprimer le dilemme n°</label>
            <input type="number" @change="supprimer(e.target.value)" id="supprimer 1">
            <label for="supprimer tout">Supprimer tous les dilemmes:</label>
            <button class="btn" @click="tousSupprimer()" id="supprimer tout">Tout supprimer</button>
        </form>
    </div>
    <router-link to="/custom/play" class="none center">
        <button class="mode">Jouer au custom</button>
    </router-link>

  <!-- <Base_custom niveau="Custom" :nombre_dilemmes="nb" :dilemmes_custom="dilemmes"></Base_custom> -->
</template>

<style scoped>
.form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}
textarea{
    width: 60vw;
    height: 20vh;
}
.colonne{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
}
.colonne *{
    width: calc(20vw, 20vw, 20vw);
    margin: 5px;
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

.btn{
    background-color: #FFECB9;
    padding: 10px 30px;
    margin: 30px;
    border-radius: 20px;
}

.check{
    display: flex;
    align-items: center;
}

.check *{
    margin-right: 10px;
    margin-bottom: 5px;
}

#arbre, #arbre2{
    width: 25px;
    height: 25px;
}

</style>