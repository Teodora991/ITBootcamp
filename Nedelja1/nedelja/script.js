// 1) На основу количине и цене артикла, исписати укупну цену
// ● Количина је задата у грамима
// ● Цена је задата по килограму

// const quantity = 'Hello';
const quantity = 10; // gr

// const price = -10;
const price = 100; // kg

let totalPrice;

if (
  Number.isFinite(quantity) &&
  Number.isFinite(price) &&
  quantity > 0 &&
  price > 0
) {
  totalPrice = (price / 1000) * quantity;
}

console.log(totalPrice ?? "Wrong input");

// 2) Допунити 4. задатак количином новца, и исписати рачун (ако нема довољно новца, исписати поруку)

// const money = 'Hello';
// const money = -10;
// const money = 10;
const money = 100;

let change;

if (!Number.isFinite(money) || money < 0 || !totalPrice) {
  console.log("Something went wrong. Check your input.");
} else if (money < totalPrice) {
  console.log("Sorry, you don't have enough money");
} else {
  change = money - totalPrice;
  console.log(
    `Thank you for shopping.${change === 0 ? "" : ` Your change is $${change}`}`
  );
}

// Data su 4 stringa.
let string1 = "neki prvi string";
let string2 = "neki drugi string koji je i duzi string";
let string3 = "neki treci string koji je dugacak";
let string4 = "neki cetvrti";

//1. Proveriti koji je string najduzi i ispisati samo njega

let longestString = string1;

if (string2.length > longestString.length) {
  longestString = string2;
}

if (string3.length > longestString.length) {
  longestString = string3;
}

if (string4.length > longestString.length) {
  longestString = string4;
}

console.log(longestString);

//2. Ispisati najkraci string koji sadrzi rec "string"

let shortestString;

if (string1.includes("string")) {
  shortestString = string1;
}

if (string2.includes("string") && string2.length < shortestString) {
  shortestString = string2;
}

if (string3.includes("string") && string3.length < shortestString) {
  shortestString = string3;
}

if (string4.includes("string") && string4.length < shortestString) {
  shortestString = string4;
}

console.log(shortestString);

//3. sastaviti sve stringove bez prve reci "neki" osim ako string sadrzi deo recenice "string koji je", takve stringove izostaviti

// NAPOMENA: iskljucila sam samo rec 'neki', ne i space koji sledi nakon ove reci jer je tako trazeno u zadatku
let finalString = "";

if (!string1.includes("string koji je")) {
  finalString += string1.substring(4);
}

if (!string2.includes("string koji je")) {
  finalString += string2.substring(4);
}
if (!string3.includes("string koji je")) {
  finalString += string3.substring(4);
}
if (!string4.includes("string koji je")) {
  finalString += string4.substring(4);
}
console.log(finalString);
