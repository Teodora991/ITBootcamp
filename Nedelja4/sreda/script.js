import { pokemons } from "./pokemons.js";

const ballBtns = document.querySelectorAll(".ball-btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

const hideDetails = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const addPokemonDetailsIntoModal = (pokemon) => {
  modal.innerHTML = "";
  modal.insertAdjacentHTML(
    "afterbegin",
    `<img src=${pokemon.img}>
        <br>
        <h2>${pokemon.name}</h2>
        <table>
        <tr>
        <th>Species:</th><td>${pokemon.species}</td>
        </tr>
        <tr>
        <th>Powers:</th><td>${pokemon.powers.join(" / ")}</td>
        </tr>
        <tr>
        <th>Characteristics:</th>
        <td>
        <ul>
        <li>Attact: ${pokemon.characteristics.attack}</li>
        <li>Defense: ${pokemon.characteristics.defense}</li>
        <li>Speed: ${pokemon.characteristics.speed}</li>
        </ul>
        </td>
        </tr>
        </table>`
  );
};

const displayPokemon = (location, pokemon, player) => {
  location.insertAdjacentHTML(
    "beforeend",
    `<div class='pokemon-container'>
          <img class='icon-img' src=${pokemon.img} id=${pokemon.name} data-player="${player}">
          <p>${pokemon.name}</p>
          </div>`
  );
};

const displayPokemons = (event) => {
  const content = event.target.closest(".content");
  content.classList.remove("center");
  const player = event.target.parentElement.id;
  pokemons[player].forEach((pokemon) => {
    displayPokemon(content, pokemon, player);
  });
  event.target.parentElement.classList.add("hidden");

  const pokemonImages = document.querySelectorAll(".pokemon-container img");
  pokemonImages.forEach((pokemon) => {
    pokemon.addEventListener("click", displayDetails);
  });
};

const displayDetails = (event) => {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
  const player = event.target.dataset.player;
  const [pokemon] = pokemons[player].filter(
    (pokemon) => pokemon.name === event.target.id
  );
  addPokemonDetailsIntoModal(pokemon);
};

ballBtns.forEach((btn) => btn.addEventListener("click", displayPokemons));

overlay.addEventListener("click", hideDetails);
