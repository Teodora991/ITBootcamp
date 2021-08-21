"use strict";

const addBtn = document.querySelector(".add-btn");
const table = document.querySelector("table");
const firstNumInput = document.querySelector("#number-1");
const secondNumInput = document.querySelector("#number-2");
const calcBtn = document.querySelector(".calc-btn");
const resultBox = document.querySelector(".result");
const checkbox = document.querySelector('input[type="checkbox"]');
const calculator = document.querySelector(".calculator-container");

// 1. Napisati funkciju koja na klik dodaje jedan red u tabeli. HTML kreirati
// proizvoljno.
const addRow = () => {
  table.insertAdjacentHTML(
    "beforeend",
    `
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    `
  );
};
addBtn.addEventListener("click", addRow);

// 2. Napisati funkciju koja na klik dugmeta vrsi sabiranje 2 broja iz input
// polja i zbir ispisati na ekranu. HTML kreirati proizvoljno.

const displayResult = () => {
  const num1 = +firstNumInput.value;
  const num2 = +secondNumInput.value;

  const message =
    Number.isFinite(num1) && Number.isFinite(num2)
      ? `<p>${num1} + ${num2} = ${num1 + num2}</p>`
      : `<p>Invalid input.</p>`;

  resultBox.innerHTML = message;
};

calcBtn.addEventListener("click", displayResult);

// 3. Nadovezivanje na predhodni zadatak. Dodati checkbox polje koje kada je
// selektovano prikazuje se kalkulator a obrnuto se skloni sa ekrana.

const displayCalculator = (event) => {
  event.target.checked && calculator.classList.remove("hidden");
  !event.target.checked && calculator.classList.add("hidden");
};

checkbox.addEventListener("change", displayCalculator);
