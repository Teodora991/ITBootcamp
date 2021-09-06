let movements = {
  income: [],
  expense: [],
};

const setLocalStorage = () => {
  localStorage.setItem("movements", JSON.stringify(movements));
};

const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("movements"));
  if (!data) return;
  movements = data;
};

const getPercentage = (num, total) => {
  const percentage = (num / total) * 100;
  if (isFinite(percentage)) return percentage.toFixed(1);
  return 0;
};

const getSum = (lst) => {
  return lst.reduce((acc, el) => acc + el.amount, 0);
};

const deleteItem = (item) => {
  movements[item.type] = movements[item.type].filter((el) => el.id !== item.id);
  setLocalStorage();
};

const addItem = (item) => {
  const id = (+new Date()).toString();
  let movement;
  if (item.type === "income") {
    movement = { id, ...item };
    movements.income.push(movement);
  } else if (item.type === "expense") {
    const percentage = getPercentage(item.amount, getSum(movements.income));
    movement = { id, ...item, percentage };
    movements.expense.push(movement);
  }
  setLocalStorage();
  return movement;
};

export {
  movements,
  deleteItem,
  addItem,
  getPercentage,
  getSum,
  getLocalStorage,
};
