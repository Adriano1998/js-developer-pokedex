function convertPokemonToDetails(pokemonDetalhado) {
    debugger
    console.log(pokemonDetalhado.photo)
    return `
    <img src="${pokemonDetalhado.photo}">
    <h3>Types</h3>
    <ul id="typeDetails">
        ${pokemonDetalhado.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
    </ul>
    <h3>Abilities</h3>
    <ul id="abilitiesDetails">
        ${pokemonDetalhado.abilities.map((ability) => `<li class="ability">${ability}</li>`).join(',')}
    </ul>
    <div> 
      <span id = "height"> Height: ${pokemonDetalhado.height} </span>
                     <span id = "weight"> Weight: ${pokemonDetalhado.weight} </span>

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