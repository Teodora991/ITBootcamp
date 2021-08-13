const pokemons = [
  {
    name: "Charizard",
    species: "Flame Pokémon",
    powers: ["Blaze", "Solar Power", "Flight"],
    characteristics: {
      attack: 84,
      defense: 78,
      speed: 100,
    },
  },
  {
    name: "Pikachu",
    species: "Mouse Pokémon",
    powers: ["Skull Bash", "Thunder Jolt", "Sweet Kiss"],
    characteristics: {
      attack: 55,
      defense: 40,
      speed: 90,
    },
  },
  {
    name: "Arceus",
    species: "Normal-type Pokémon",
    powers: ["Multitype"],
    characteristics: {
      attack: 120,
      defense: 120,
      speed: 120,
    },
  },
  {
    name: "Bulbasaur",
    species: "Seed Pokémon",
    powers: ["Overgrow", "Chlorophyll"],
    characteristics: {
      attack: 49,
      defense: 49,
      speed: 45,
    },
  },
];

// Sortirati pokemone po brzini, rastuće.

const sortBySpeed = (pokemons) => {
  // no side-effects
  const pokemonsCopy = JSON.parse(JSON.stringify(pokemons));

  return pokemonsCopy.sort(
    (p1, p2) => p1.characteristics.speed - p2.characteristics.speed
  );
};

console.log(sortBySpeed(pokemons));

// Napraviti funkciju koja prima niz pokemona, poredi pokemone po jačini i vraća kao pobednika onog koji
//  ima najveću jačinu napada.

const returnStrongest = (pokemons) => {
  return pokemons.reduce(
    (acc, el) =>
      el.characteristics.attack > acc.characteristics.attack ? el : acc,
    pokemons[0]
  );
};

console.log(returnStrongest(pokemons));
