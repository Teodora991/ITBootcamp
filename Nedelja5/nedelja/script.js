import services from "./service.js";

const todoInput = document.getElementById("todo-input");
const form = document.getElementById("form");
const todoContainer = document.querySelector(".todo-container");

const renderItem = (element) => {
  const label = document.createElement("label");
  label.classList.add("container");
  label.innerText = element.desc;
  label.setAttribute("data-id", element.id);
  label.insertAdjacentHTML(
    "beforeend",
    `<input type="checkbox"/>
    <span class="checkmark"></span>`
  );
  const buttonDel = document.createElement("button");
  buttonDel.classList.add("delete-btn");
  buttonDel.setAttribute("title", "Delete");
  buttonDel.innerHTML = '<i class="fas fa-times icon"></i>';
  label.append(buttonDel);
  todoContainer.append(label);

  buttonDel.addEventListener("click", removeItem);
};

const addItem = (event) => {
  event.preventDefault();
  const newItem = {
    desc: todoInput.value,
    done: false,
  };
  const id = services.add(newItem);
  renderItem({ ...newItem, id });
  todoInput.value = "";
};

const removeItem = (event) => {
  const parent = event.target.closest("label");
  services.deleteById(parent.dataset.id);
  parent.remove();
};

todoContainer.addEventListener("change", function (event) {
  const currentItem = event.target;
  const parent = currentItem.closest("label");
  parent.classList.toggle("underlined");
  [services.data.filter((el) => el.id === parent.dataset.id - 1)].done =
    currentItem.checked;
});

form.addEventListener("submit", addItem);
