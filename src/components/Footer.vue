<script>
export default{
    name: "Footer"
}
</script>


<template>
<footer>
    <!-- Crédits icônes -->
    <div>
        <a target="_blank" href="https://icons8.com/icon/62923/train" class="lien">Train icon</a> by
        <a target="_blank" href="https://icons8.com" class="lien">Icons8</a>
    </div>
    <div>
        <a target="_blank" href="https://icons8.com/icon/59996/settings" class="lien">Settings icon</a> by
        <a target="_blank" href="https://icons8.com" class="lien">Icons8</a>
    </div>
    <div>
        <a href="https://www.flaticon.com/fr/icones-gratuites/etoile" class="lien" title="Étoile icônes">Étoile icon</a> by Pixel Perfect - Flaticon
    </div>

    <!-- Inspirations de contenu -->
    <div>
         Dilemmes + dessins Inspiré de :
        <a href="https://imgflip.com/memegenerator" class="lien">Imgflip Meme Generator</a> et
        <a href="https://neal.fun/absurd-trolley-problems/" class="lien">"Absurd Trolley Problems" par Neal Agarwal</a>.
    </div>

    <!-- Dilemmes et sources philosophiques/scientifiques -->
    <div>
        Dilemmes inspirés et scénarios adaptés/reformulés :<br>
        1. <strong>Trolley problem</strong> de <strong>Philippa Foot</strong> (1967), *"The Problem of Abortion and the Doctrine of the Double Effect"* (*Oxford Review*, n°5).<br>
        2. Variante du pont avec l’homme obèse de <strong>Judith Jarvis Thomson</strong> (1976), *"Killing, Letting Die, and the Trolley Problem"* (*The Monist*, 59(2), 204–217).<br>
        3. Dilemme adapté de l’étude : <strong>Spranca, Minsk & Baron (1991)</strong>, *"Omission and commission in judgment and choice"*, *Journal of Experimental Social Psychology*, 27(1), 76–105.<br>
        4. Dilemmes des pilules, inspirés de la vidéo *"Le dilemme des pilules"* de <strong>Mr Phi</strong> (<a href="https://www.youtube.com/watch?v=lo7iJnq_U9M" class="lien">YouTube</a>, (2025)).<br>
        5. Machine à expérience de <strong>Robert Nozick</strong> (1974), *"Anarchy, State, and Utopia"* (Chapitre 3).
    </div>
</footer>
</template>

<style scoped>
*{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #FEEAFF;
    height: auto;
    padding: 10px;
}
</style>