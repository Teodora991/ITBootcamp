import {
  movements,
  deleteItem,
  addItem,
  getPercentage,
  getSum,
  getLocalStorage,
} from "./actions.js";

const totalIncomeAmount = document.querySelector(".total-incomes .amount");
const totalExpenseAmount = document.querySelector(".total-expenses .amount");
const totalBudgetAmount = document.querySelector(".budget");
const form = document.getElementById("form");
const selected_type = document.getElementById("movement-type");
const selected_amount = document.getElementById("movement-amount");
const selected_description = document.getElementById("movement-description");
const percentEl = document.querySelector("header .percent");

const formatBudget = (value) => {
  let sign;
  if (value === 0) sign = "";
  if (value > 0) sign = "+";
  if (value < 0) sign = "-";
  return `${sign} ${Math.abs(value).toLocaleString()}`;
};

const formatMovement = (value, isIncome) => {
  let sign;
  if (isIncome) sign = "+";
  if (!isIncome) sign = "-";
  if (value === 0) sign = "";
  return `${sign} ${value.toLocaleString()}`;
};

const updateHeader = () => {
  const totalIncome = getSum(movements.income);
  const totalExpense = getSum(movements.expense);
  const budget = totalIncome - totalExpense;
  totalIncomeAmount.innerText = formatMovement(totalIncome, true);
  totalExpenseAmount.innerText = formatMovement(totalExpense, false);
  totalBudgetAmount.innerText = formatBudget(budget);
  percentEl.innerText = `${getPercentage(
    getSum(movements.expense),
    getSum(movements.income)
  )} %`;
};

const showMsg = (el, msg) => {
  const msgBox = el.parentElement.querySelector(".error-msg");
  msgBox.innerText = "";
  const p = document.createElement("p");
  p.innerText = msg;
  msgBox.append(p);
  setTimeout(() => p.remove(), 2500);
};

const isValidDescription = (el) => {
  const value = el.value;
  if (value.trim()) return value;
  showMsg(el, "Ovo polje je obavezno.");
  return false;
};

const isValidAmount = (el) => {
  const amount = +el.value;
  if (isFinite(amount) && amount > 0) return amount;
  showMsg(el, "Unesite pozitivan broj.");
  return false;
};

const toggleBtn = (btn) => {
  btn.classList.toggle("visible");
};

const showPercentage = (item) => {
  return item.hasOwnProperty("percentage")
    ? `<div class="percent">${item.percentage} %</div>`
    : "";
};

const renderItem = (item) => {
  const lst = document.querySelector(`.${item.type}-list`);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

  const row = document.createElement("tr");
  row.classList.add("record");
  row.insertAdjacentHTML(
    "afterbegin",
    `
  <td class='description'>${item.description}</td>
  <td class='amount'>${formatMovement(item.amount, item.type === "income")}</td>
  <td>${showPercentage(item)}</td>
  `
  );

  row.insertAdjacentElement("beforeend", deleteBtn);
  lst.append(row);

  row.addEventListener("mouseover", () => toggleBtn(deleteBtn));
  row.addEventListener("mouseout", () => toggleBtn(deleteBtn));

  deleteBtn.addEventListener("click", () => {
    deleteItem(item);
    row.remove();
    updateHeader();
  });
};

const onSubmit = (event) => {
  event.preventDefault();
  const type = selected_type.value;
  const description = type && isValidDescription(selected_description);
  const amount = description && isValidAmount(selected_amount);
  if (type && description && amount) {
    const item = { type, description, amount };
    const addedItem = addItem(item);
    renderItem(addedItem);
    form.reset();
    updateHeader();
  }
};

form.addEventListener("submit", onSubmit);
updateHeader();

window.onload = () => {
  getLocalStorage();
  [...movements.income, ...movements.expense].forEach((item) =>
    renderItem(item)
  );
  updateHeader();
};
