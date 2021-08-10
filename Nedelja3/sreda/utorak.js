// Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz

const addSumAndProduct = (arr) => {
  let sum = 0;
  let product = 1;
  for (el of arr) {
    sum += el;
    product *= el;
  }
  arr.unshift(sum, product);
  return arr;
};

console.log(addSumAndProduct([1, 2, 3, 4, 5, 6, 7]));

//  Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...

const removeFalsyValues = (arr) => {
  let truthy = [];
  for (el of arr) {
    Boolean(el) !== false && truthy.push(el);
  }
  return truthy;
};

// console.log(
//   removeFalsyValues(["Teodora", 0, NaN, undefined, null, 100, -2, "", false])
// );

//  Izvrsiti inverziju brojeva bez pomocne promenljive.
//  Pr: x = 5 y = 9
//  Resenje: x = 9 y = 5
//  pom = "ne mozete koristiti"

// #1

{
  let x = 5;
  let y = 9;

  y = x + y;
  x = y - x;
  y = y - x;

  console.log(x, y);
}

// #2: Array Destructuring

{
  let x = 5;
  let y = 9;

  [y, x] = [x, y];

  console.log(x, y);
}

// За првих 100 бројева исписати:
//     ако је дељив са 3  Fizz, са 5  Buzz, и са оба  FizzBuzz, у супротном Broj
//     Ако је дељив са 3,5,7 - FizzBuzzZazz
//       3,5 - FizzBuzz
//       3,7 - FizzZazz
//       5,7 - BuzzZazz

const fizzBuzz = (min, max) => {
  for (let i = min; i < max; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(0, 100);

const fizzBuzzZazz = (min, max) => {
  for (let i = min; i < max; i++) {
    if (i % 105 === 0) {
      console.log("FizzBuzzZazz");
    } else if (i % 35 === 0) {
      console.log("BuzzZazz");
    } else if (i % 21 === 0) {
      console.log("FizzZazz");
    } else if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzzZazz(0, 100);
