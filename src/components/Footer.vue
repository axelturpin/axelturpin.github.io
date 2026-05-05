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
        Inspiré de : 
        <a href="https://imgflip.com/memegenerator" class="lien">Imgflip Meme Generator</a> et 
        <a href="https://neal.fun/absurd-trolley-problems/" class="lien">Neal.fun ("absurd-trolley-problems" de Neal Agarwal)</a>
    </div>

    <!-- Dilemmes et sources philosophiques/scientifiques -->
    <div>
        Dilemmes inspirés et scénarios adaptés/reformulés :<br>
        1. <strong>Trolley problem</strong> de Philippa Foot (1967)<br>
        2. Variante du pont avec l’homme obèse de <strong>Judith Jarvis Thomson</strong> (1976)<br>
        3. Étude de <strong>Spranca, Minsk & Baron</strong> (1991)<br>
        4. Dilemmes des pilules, descriptions de <strong>Mr Phi</strong> sur YouTube (2025)<br>
        5. Machine à expérience de <strong>Nozick</strong> (1974)
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