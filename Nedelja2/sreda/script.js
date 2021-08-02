"use strict";

// Zadatak 1

let visinaDrveta = 59; // cm
const predjenoPoDanu = 5; // cm po danu
let ukupnoPredjeno = 0; // cm

while (visinaDrveta > ukupnoPredjeno) {
  ukupnoPredjeno += predjenoPoDanu; // cm
  visinaDrveta++; // cm

  // Puz moze maksimalno da predje do vrha drveta
  console.log(
    `Dan ${ukupnoPredjeno / predjenoPoDanu}: Puz je presao ${
      ukupnoPredjeno > visinaDrveta ? visinaDrveta : ukupnoPredjeno
    }cm, visina drveta ${visinaDrveta}cm`
  );
}

console.log(`Puz se popeo na drvo za ${ukupnoPredjeno / predjenoPoDanu} dana.`);

// Zadatak 2

const osnovica = 11000;
const tipKupca = "penzioner";

let popust, dodatniPopust;

switch (tipKupca) {
  case "zaposlen":
    popust = osnovica > 5000 ? osnovica * 0.05 : 0;
    break;
  case "student":
    popust = osnovica > 3000 ? osnovica * 0.2 : 0;
    break;
  case "penzioner":
    popust = osnovica > 2000 ? osnovica * 0.3 : 0;
    break;
  case "firma":
    popust = osnovica > 10000 ? osnovica * 0.1 : 0;
    break;
  default:
    popust = 0;
}

const dan = "subota";

switch (dan) {
  case "subota":
  case "nedelja":
    dodatniPopust = (osnovica - popust) * 0.05;
    break;
  default:
    dodatniPopust = 0;
}

// Alternativan nacin:
// switch (new Date().getDay()) {
//   // Subota
//   case 6:
//   // Nedelja
//   case 0:
//     dodatniPopust = (osnovica - popust) * 0.05;
//     break;
//   default:
//     dodatniPopust = 0;
// }

console.log(`Ukupan popust iznosi: ${popust + dodatniPopust} dinara.`);
