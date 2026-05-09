<script>
export default {
    name: "Base_custom",
    // props: [
    //     "niveau",
    //     "dilemmes_custom",
    //     "nombre_dilemmes"
    // ],
    // inject:  [
    //     'niveau',
    //     'nombre_dilemmes', 
    //     'dilemmes_custom'
    // ],
  data() {
    return {
      data: {},
      dilemme: {},
    //   nombre_dilemmes: Number(this.nombre_dilemmes),
      description: "",
      error: null,
      clicked: false,
      Détails: "",
      score: 0,
      score_temp: 0,
      ratio: 3, //pour calculer le score selon la difficulté
      étoiles_niveau: 0,
      afficher_étoiles: false,
      fin: false,
      numéro: 1,
      clickBtn1: false,
      clickBtn2: false,
      clickBtn3: false,
      socoupAnimation: false,
      timeoutId: null,
    }
  },
  methods: {
    click1(){
        if (!this.clicked){
            this.clicked = true;
            this.clickBtn1 = true;
            const btn = document.querySelector(".btn-1");
            btn.style.background = "#FEEAFF";
            this.Détails = this.dilemme.Détails;
            //On récupère l'id du setTimeout pour l'annuler si on charge une nouvelle page
            this.timeoutId = setTimeout(function()
            {
            const voie2 = document.querySelectorAll(".voie2");
            voie2.forEach((vie, index) => {
                vie.style.display = "none";
            });
            const train = document.querySelector(".train");
            if(train){
                train.style.display = "none";
            }
            }, 1900);
            
            // if(this.dilemme.bouton1 === this.dilemme.Bon){
            //     this.score += 100
            // }else{
            //     this.score += (100*(1-Math.abs(this.dilemme.M1 - this.dilemme.M)/this.ratio))
            // }
        }
    },
    click2(){
        if (!this.clicked){
            this.clicked = true;
            this.clickBtn2 = true;
            const btn = document.querySelector(".btn-2");
            btn.style.background = "#FEEAFF";
            this.Détails = this.dilemme.Détails;
            //On récupère l'id du setTimeout pour l'annuler si on charge une nouvelle page
            this.timeoutId = setTimeout(function()
            {
            const voie1 = document.querySelectorAll(".voie1");
            voie1.forEach((vie, index) => {
                vie.style.display = "none";
            });
            const train = document.querySelector(".train");
            if(train){
                train.style.display = "none";
            }
            }, 1900);
            
            // if(this.dilemme.bouton2 === this.dilemme.Bon){
            //     this.score += 100
            // }else{
            //     this.score += (100*(1-Math.abs(this.dilemme.M2 - this.dilemme.M)/this.ratio))
            // }
        }
    },
    click3(){
        if (!this.clicked){
            this.clicked = true;
            this.clickBtn3 = true;
            const btn = document.querySelector(".btn-3");
            btn.style.background = "#FEEAFF";
            this.Détails = this.dilemme.Détails;
            
            if(this.dilemme.bouton3 === this.dilemme.Bon){
                this.score += 100
            }else{
                this.score += (100*(1-Math.abs(this.dilemme.M3 - this.dilemme.M)/4))
            }
        }
    },
    chargement(){
        window.scrollTo(0, 0);
        // attendre que le DOM rende les éléments (v-if et v-for)
        this.$nextTick(() => {
            this.description = this.dilemme.description
            // .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            // .replace(/\n/g, '<br>');

            const screenWidth = window.innerWidth;
            const voie1 = document.querySelectorAll(".voie1");
            const voie2 = document.querySelectorAll(".voie2");
    
            if (voie1.length === 0) {
                console.warn("Aucun élément voie1 trouvé après rendu du DOM");
            }
            
            //affichage des personnes (et/ou chiens)
            voie1.forEach((vie, index) => {
                vie.style.display = "block";
                vie.style.position = "absolute";
                vie.style.top = `calc(70% - ${index*7}px)`;
                vie.style.left = `calc(95% - ${index*25}px)`;
                vie.style.transform = "translate(-50%, -50%)";
                if (screenWidth <= 768){
                vie.style.top = `calc(70% - ${index*4}px)`;
                vie.style.left = `calc(95% - ${index*12}px)`;
                }
            });
    
            voie2.forEach((vie, index) => {
                vie.style.display = "block";
                vie.style.position = "absolute";
                vie.style.top = `calc(35% + ${index*2}px)`;
                vie.style.left = `calc(95% - ${index*25}px)`;
                vie.style.transform = "translate(-50%, -50%)";
                if (screenWidth <= 768){
                    vie.style.top = `calc(35% + ${index*1}px)`;
                    vie.style.left = `calc(95% - ${index*12}px)`;
                }
            });
            
            
            
        //suppression des arbres des dilemmes précédents
        const arbreAncien1 = document.querySelector(".arbre1");
        const arbreAncien2 = document.querySelector(".arbre2");
        if(arbreAncien1){
            arbreAncien1.remove();
        }
        if(arbreAncien2){
            arbreAncien2.remove();
        }

        //Affichage de nouveaux arbres si dans le dilemme
        const container = document.querySelector(".plan-container");
        if(this.dilemme.voie1_arbre){
        var arbre1 = document.createElement("img");
        arbre1.className = "arbre1 voie1";
        arbre1.src = "/img/arbre.png";
        arbre1.style.display = "block";
        arbre1.style.position = "absolute";
        arbre1.style.top = `calc(60%)`;
        arbre1.style.left = `calc(70%)`;
        arbre1.style.transform = "translate(-50%, -50%)";
        if (screenWidth <= 768){
            arbre1.style.width = "100px";
            arbre1.style.top = `calc(65%)`;
            arbre1.style.left = `calc(70%)`;
        }
        container.appendChild(arbre1);
    }
    if(this.dilemme.voie2_arbre){
        var arbre2 = document.createElement("img");
        arbre2.className = "arbre2 voie2";
        arbre2.src = "/img/arbre.png";
        arbre2.style.display = "block";
        arbre2.style.position = "absolute";
        arbre2.style.top = `calc(30%)`;
        arbre2.style.left = `calc(70%)`;
        arbre2.style.transform = "translate(-50%, -50%)";
        if (screenWidth <= 768){
        arbre2.style.width = "100px";
        arbre2.style.top = `calc(35%)`;
        arbre2.style.left = `calc(70%)`;
        }
        container.appendChild(arbre2);
    }
    if(this.dilemme.soucoupe){
        this.socoupAnimation = true;
    }
    if(document.querySelector(".train")){
        const train = document.querySelector(".train");
        train.style.display = "block"
    }
            })
    },
    suivant(){
        // annule le timeout si il existe
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        // console.log(this.numéro, this.nombre_dilemmes)
        if(this.numéro == this.nombre_dilemmes){
            this.Détails = "Terminé, pas de score en mode custom";


            let étoiles = localStorage.getItem(`étoiles_${this.niveau}_courrante`) || 0;
            localStorage.setItem(`étoiles_${this.niveau}_courrante`, Math.floor(this.score/100).toString());
            localStorage.setItem(`étoiles_${this.niveau}`, Math.max(Math.floor(this.score/100), étoiles));
            étoiles = localStorage.getItem(`étoiles_${this.niveau}_courrante`) || 0;
            
            this.étoiles_niveau = Number(étoiles);

            const screenWidth = window.innerWidth;
            this.$nextTick(() => {
            if(!this.afficher_étoiles){
                for(let i = 0; i < this.nombre_dilemmes; i++){
                    const e = document.createElement("img");
                    e.className = "étoile";
                    e.loading = "lazy"
                    if (i < this.étoiles_niveau){
                        e.src = "/img/etoile pleine.png"
                    } else{
                        e.src="/img/etoile vide.png"
                    }
                    if (screenWidth <= 768){
                        e.style.width = "25px";
                    }
                    const mode = document.querySelector(".mode");
                    mode.appendChild(e);
                }
                this.afficher_étoiles = true;
                this.fin = true;
            }});

        }else{
            this.numéro++;
            this.dilemme = this.data["dilemme" + (this.numéro).toString()];
            this.clicked = false;
            this.clickBtn1 = false;
            this.clickBtn2 = false;
            this.clickBtn3 = false;
            const btn1 = document.querySelector(".btn-1");
            btn1.style.background = "#FFECB9";
            const btn2 = document.querySelector(".btn-2");
            btn2.style.background = "#FFECB9";
            if(document.querySelector(".btn-3")){
                const btn3 = document.querySelector(".btn-3");
                btn3.style.background = "#FFECB9";
            }

            this.chargement();
        }
        // attendre que le DOM rende les éléments (v-if et v-for)
        const voie1 = document.querySelectorAll(".voie1");
        const voie2 = document.querySelectorAll(".voie2");
        voie1.forEach((vie, index) => {
            vie.style.display = "block";
        })
        voie2.forEach((vie, index) => {
            vie.style.display = "block";
        })

    }
  },
  computed(){
    this.dilemme;
    this.dilemmes_custom;
  },
  // après le chargement du composant
  async created() {
  try {
    // this.nombre_dilemmes = new Number(this.nombre_dilemmes);
    document.querySelectorAll("audio").forEach(e=>{
        e.remove();
    })

      const audio = document.createElement("audio");
      audio.src = `/audio/fond${this.niveau}.mp3`;
      audio.onerror = () => {
        // Si le fichier spécifique n'existe pas, charger le fallback
        audio.src = '/audio/fondNormal.mp3';
      };
      audio.autoplay = true;
      audio.loop = true;
      const body = document.querySelector("body");
      body.appendChild(audio);

      this.data = JSON.parse(localStorage.getItem("dilemmes_custom")) || {}
      console.log(this.data);
    //verifier que data est non-vide
    if(!(Object.getOwnPropertyNames(this.data).length === 0)){
        this.dilemme = this.data.dilemme1;
    }

    this.nombre_dilemmes =  localStorage.getItem("nombre_dilemmes_custom");
    this.niveau = "Custom";
    console.log(this.nombre_dilemmes);

    //pour avoir le CSS au chargement, je reprends la fonction suivante:
    this.chargement();

    // switch(this.niveau){
    //     case "Facile":
    //         this.ratio = 4;
    //         break;
    //     case "Normal":
    //         this.ratio = 1.6;
    //         break;
    //     case "Difficile":
    //         this.ratio = 0.6;
    //         break;
    //     default:
    //         this.ratio = 3;
    // }
    

  } catch (error) {
    this.error = error.message;
    console.error(error);
  }
}
  }

</script>

<template>
  <h2>{{ niveau }} {{ numéro }}</h2>
    <div class="center">
        <!-- v-html pour appliquer des effets au texte (mettre en gras) -->
        <p class="p-description">{{ description }}</p>
    </div>

    <div class="center colonne">
        <div class="plan-container">
            <a ><img :src="dilemme.src_plan" class="img-rails" alt="fond" title="made at imgflip.com" loading="lazy">
                <!-- train -->
                <div v-if="dilemme.voie1 > 0">
                    <img :class="{animation1: clickBtn1 && !socoupAnimation, animation2: clickBtn2}" src="/img/train.png" alt="train" class="train">
                </div>
                <!-- soucoupe -->
                <a v-if="dilemme.soucoupe" >
                <img src="/img/soucoupeFaite.png" title="made at imgflip.com" class="soucoupe"/></a>
                <!-- voie 1 -->
                <div v-if="dilemme.voie1 > 0" v-for="n in dilemme.voie1">
                    <img :key="n" v-if="dilemme.voie1_type === 'chien'" src="/img/chien.png" alt="" loading="lazy" :class="dilemme.voie1_type"  class="voie1" >
                    <img :key="n" v-if="dilemme.voie1_type === 'person'" src="/img/personneHD1.png" alt="" loading="lazy" :class="dilemme.voie1_type" class="voie1">
                    <img :key="n" v-if="dilemme.voie1_type === 'voluntary person'" src="/img/VolontaireAtttaché.png" alt="" loading="lazy" class="Vperson voie1">
                </div>
                <!-- voie 2 -->
            <div v-if="dilemme.voie2 > 0" v-for="n in dilemme.voie2">
                <img :key="n" v-if="dilemme.voie2_type === 'chien'" src="/img/chien.png" alt="" loading="lazy" :class="dilemme.voie2_type" class="voie2">
                <img :key="n" v-if="dilemme.voie2_type === 'person'" src="/img/personneHD1.png" alt="" loading="lazy" :class="dilemme.voie2_type" class="voie2">
                <img :key="n" v-if="dilemme.voie2_type === 'voluntary person'" src="/img/VolontaireAtttaché.png" alt="" loading="lazy" class="Vperson voie2">
            </div>
            </a>
        </div>

        <!-- <div><a href="https://imgflip.com/memegenerator" class="lien">from Imgflip Meme Generator</a></div> -->
        <!-- <div v-if="dilemme.href_dog"><a :href="dilemme.href_dog" class="lien">dog modified image from Imgflip Meme Generator</a></div> -->
        <div v-if="dilemme.href"><a :href="dilemme.href" class="lien">Décorts inspirés de Imgflip Meme Generator</a></div>
        <div v-if="dilemme.href_person"><a :href="dilemme.href_person" class="lien">personnage inspiré de Imgflip Meme Generator</a></div>
        <div v-if="dilemme.href_soucoupe"><a :href="dilemme.href_soucoupe" class="lien">soucoup inspiré de Imgflip Meme Generator</a></div>
    </div>

    <div class="center">
        <button class="btn btn-1" @click="click1">{{ dilemme.bouton1 }}</button>
        <button class="btn btn-2" @click="click2">{{ dilemme.bouton2 }}</button>
        <button class="btn btn-3" @click="click3" v-if="dilemme.bouton3">{{ dilemme.bouton3 }}</button>
    </div>

    <div class="center colonne">
    <p class="score">Score total: {{ Math.floor(score) }}</p>
    <p class="détails" v-if="clicked" >{{ Détails }}</p>
        <!-- étoiles -->
    <button class="mode" :class="{hidden: !fin}">
        {{ niveau }} 
        <!-- img d'étoiles en js cette fois ci -->
    </button>
    </div>
    <div class="center wrap">
        <button class="btn suivant" v-if="clicked && !fin" @click="suivant">Suivant</button>
        <router-link to="/" class="router-link" v-if="fin">
                <button class="btn accueil" v-if="fin">Accueil</button>
        </router-link>
        <router-link to="/modes">
            <button class="btn jouer" v-if="fin">Jouer</button>
        </router-link>
    </div>

  <div v-if="error" style="color:red">
    Erreur : {{ error }}
  </div>
  
</template>

<style scoped>

.p-description {
    /* white-space: pre-line; important : interprète les \n */
    font-size: 20px;
    width: 60vw;
    margin: 20px;
}

.btn{
    background-color: #FFECB9;
    padding: 10px 30px;
    margin: 30px;
    border-radius: 20px;
}

.détails, .score{
    text-align: center;
    white-space: pre-line;
    width: 60vw;
    font-size: 20px;
}

.colonne{
    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-size: 20px;
    margin: 25px;
    gap: 20px;
    border-radius: 20px;
}


/* relative et absolute pour placer les images */
.plan-container {
  position: relative;
}

.train{
    position: absolute;
    z-index: 2;
    top: 12%;
    left: -5%;
}

.chien{
    position: absolute;
    z-index: 1;
    transform: translateX(-50%) translateY(-50%);
}


.soucoupe{
    position: absolute;
    width: 500px;
    top: 160px;
    left: 700px;
    transform: translateX(-50%) translateY(-50%);
}

.animation1{
  animation: animerTrain 2s linear 0s;
}
@keyframes animerTrain {
  0%{
    translate: 0px 0px;
  }
  50%{
    translate: 380px 65px;
  }
  100%{
    translate: 760px -40px;
  }
}
.animation2{
  animation: animerTrain2 2s linear 0s;
}
@keyframes animerTrain2 {
  0%{
    translate: 0px 0px;
  }
  50%{
    translate: 380px 75px;
  }
  100%{
    translate: 760px 150px;
  }
}

.hidden{
    display: none;
}


@media (max-width: 768px) {

.p-description, .détails {
    width: auto;
    font-size: 18px;
}

.img-rails{
    width: 90vw;
}   

.train{
    width: 100px;
    position: absolute;
    top: 15%;
    left: -5%;
}

.voie1{
    width: 50px;
}

.voie2{
    width: 50px;
}

.chien{
    margin-left: 0%;
}

.soucoupe{
    position: absolute;
    width: 300px;
    top: 60px;
    left: 300px;
    transform: translateX(-50%) translateY(-50%);
}

.mode{
    width: 320px;
    height: 60px;
    font-size: 16px;
    gap: 5px;
}

@keyframes animerTrain {
  0%{
    translate: 0px 0px;
  }
  50%{
    translate: 150px 30px;
  }
  100%{
    translate: 300px -20px;
  }
}

@keyframes animerTrain2 {
  0%{
    translate: 0px 0px;
  }
  50%{
    translate: 160px 47px;
  }
  100%{
    translate: 380px 94px;
  }

}
}


@media (max-width: 1024px) {
.p-description {
    width: auto;
    font-size: 18px;
} 

}
</style>