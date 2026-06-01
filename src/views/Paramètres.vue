<script>
    export default{
        data(){
            return{
                malvoyant: JSON.parse(localStorage.getItem("malvoyant")) || false,
            }
        },
        methods:{
            setPolice(){
                const police = this.malvoyant ? "Arial" : "Luciole";
                localStorage.setItem("font", police);
                localStorage.setItem("malvoyant", JSON.stringify(this.malvoyant));
                //prévenir l'application que la police a changé (optionnel)
                window.dispatchEvent(new CustomEvent("font-changed", { detail: { police } }));
            },
            reset(){
                // Affiche une boîte de confirmation
                let reponse = confirm("Voulez-vous vraiment recommencer à 0 étoiles ?");
                
                if (reponse) {
                    alert("Action confirmée !");;
                    localStorage.setItem("étoiles_Facile", 0)
                    localStorage.setItem("étoiles_Normal", 0);
                    localStorage.setItem("étoiles_Difficile", 0);
                    localStorage.setItem("étoiles_Classique", 0);
                    localStorage.setItem("étoiles_Bonus", 0);
                    localStorage.setItem("étoiles_Fun", 0);
                    localStorage.setItem("étoiles_Aléatoire", 0);
                    localStorage.setItem("étoiles_Caché", 0);
                    localStorage.setItem("étoiles_Enfoui", 0);
                    localStorage.setItem("étoiles_Pilules", 0);

                    localStorage.setItem("étoiles_Facile_courrante", 0)
                    localStorage.setItem("étoiles_Normal_courrante", 0);
                    localStorage.setItem("étoiles_Difficile_courrante", 0);
                    localStorage.setItem("étoiles_Classique_courrante", 0);
                    localStorage.setItem("étoiles_Bonus_courrante", 0);
                    localStorage.setItem("étoiles_Fun_courrante", 0);
                    localStorage.setItem("étoiles_Aléatoire_courrante", 0);
                    localStorage.setItem("étoiles_Caché_courrante", 0);
                    localStorage.setItem("étoiles_Enfoui_courrante", 0);
                    localStorage.setItem("étoiles_Pilules_courrante", 0);
                } else {
                    alert("Action annulée.");
                }
            }
        },
            mounted(){
            //optionnel
            this.setPolice()
        }
    }
</script>

<template>
    <main class="vh">
        <h2>Paramètres</h2>
    
        <div class="center colonne malvoyant">
            <div class="check">
                <label for="malvoyant">malvoyant</label>
                <input type="checkbox" name="malvoyant" id="malvoyant" v-model="malvoyant" @change="setPolice">
            </div>
            <p>Actualisez ensuite pour voir le changement de police</p>
            <button class="btn" @click="reset">Recommencer à 0</button>

        </div>
    </main>

</template>

<style scoped>

.mode:hover{
  background-color: #C400CF !important;
}

.btn:hover{
  background-color:#993F00 !important;
  color: white;
}

.colonne{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.check{
    display: flex;
    align-items: center;
}

.check *{
    margin-right: 10px;
    margin-bottom: 5px;
}

.malvoyant{
    font-size: 1.2rem;
}

#malvoyant{
    width: 25px;
    height: 25px;
}

.mode{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    color: white;
    background-color: #4B0082;
    width: 520px;
    height: 100px;
    font-size: 24px;
    margin: 25px;
    border-radius: 20px;
}

.btn{
    background-color: #FA6700;
    padding: 10px 30px;
    margin: 30px;
    border-radius: 20px;
}

.vh{ 
    /* pour que le footer se mette en bas de l'écran */
    /* min-height: calc(100vh - 15vh - 12vh - 40px); */
    min-height: calc(100vh - 15vh - 12vh - 20px - 70px - 18px);
}

</style>
