let elpokemonList = document.querySelector(".pokemon-list");

for (let pokemon of pokemons) {
  console.log(pokemon);
  let elpokemonItem = document.createElement("li");
  let elpokemonName = document.createElement("h3");
  let elpokemonNumber = document.createElement("p");
  let elpokemonType = document.createElement("span")
  let elpokemonImg = document.createElement("img");
  elpokemonItem.classList.add("pokemon-item");
  
  elpokemonName.textContent = pokemon.name;
  elpokemonNumber.textContent = pokemon.num;
  elpokemonType.textContent = pokemon.type;
  elpokemonImg.src = pokemon.img;
  
  
  elpokemonItem.appendChild(elpokemonName);
  elpokemonItem.appendChild(elpokemonNumber);
  elpokemonItem.appendChild(elpokemonType);
  elpokemonItem.appendChild(elpokemonImg);
  
  elpokemonList.appendChild(elpokemonItem);
}