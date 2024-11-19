function convertPokemonToDetails(pokemonDetalhado) {
   return `
<div class="pokeDetail ${pokemonDetalhado.type}">
   <span id="nomePokeDetail" class="texts"> ${pokemonDetalhado.name} </span>
   <div>
      <div id="contTypeDetails">
         <ul id="typeDetails">
            ${pokemonDetalhado.types.map((type) => `
            <li class="typess ${type}">${type}</li>
            `).join('')}
         </ul>
         <span id="numberDetail" class="texts"> #${pokemonDetalhado.number} </span>
      </div>
   </div>
   <img id="imgDetailPoke" src="${pokemonDetalhado.photo}">
</div>
<div class="tags"> 
   <span id="about"> About </span>
   <span id="baseStats"> Base Stats </span>
   <span id="evolution"> Evolution </span>
   <span id="movies"> Movies </span>
</div>


<div class="divHeight"> 
   <span id="heightText"> Height: </span>
   <span id ="heightResponse" class="texts"> ${pokemonDetalhado.height} </span>
</div>
<div class="divWeight"> 
   <span id="weightText"> Weight: </span> 
   <span id="weightResponse" class="texts"> ${pokemonDetalhado.weight} </span>
</div>
<div class="divAbilities">
   <ul id="abilitiesDetails">
      <span id="abilityText"> Abilities:
      </span> 
      ${pokemonDetalhado.abilities.map((ability) => `
      <li>${ability}</li>
      `).join(',')}
   </ul>
</div>
`;

}

document.addEventListener("DOMContentLoaded", async () => {
   const urlParams = new URLSearchParams(window.location.search);
   const pokemonId = urlParams.get('pokemonId');
   if (pokemonId) {
      const poke = await pokeApi.getPokemonDetails(pokemonId);
      const pokemonDetailHtml = convertPokemonToDetails(poke);
      document.getElementById('cardPokemon').innerHTML = pokemonDetailHtml;
   }
})