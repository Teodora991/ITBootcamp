//1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5

const divisibleBy5 = (arr) => {
  for (const el of arr) {
    el % 5 === 0 && console.log(el);
  }
};

divisibleBy5([3, 5, 6, 7, 8, 9, 2, 15, 10, 20, 45, 23, 123, 23513465]);

//2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// * Ime
// * Vrsta
// * Sposobnosti (niz sposobnosti pokemona)
// * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

//(Napraviti niz od ovih objekata)

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

//3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona

const returnPowers = (arr) => {
  const powers = [];
  for (const pokemon of arr) {
    powers.push(...pokemon.powers);
  }
  return powers;
};

console.log(returnPowers(pokemons));
