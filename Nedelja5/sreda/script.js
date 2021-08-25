"use strict";

const password = document.getElementById("password");
const password2 = document.getElementById("password-conf");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const checkboxContainer = document.getElementById("checkbox-container");
const form = document.getElementById("form-container");
const city = document.getElementById("cities");
const createdBox = document.getElementById("user-created-msg");
const defaultCity = document.getElementById("default");
const usersContainer = document.getElementById("users-list");

const users = [];

const resetInput = () => {
  firstName.value = lastName.value = password.value = password2.value = "";
  const maleRadio = document.querySelector("#male");
  maleRadio.checked = true;
  const courses = document.querySelectorAll('input[type="checkbox"]:checked');
  [...courses].forEach((course) => (course.checked = false));
  defaultCity.selected = true;
};

const isTrimmed = (txt) => {
  const trimmed = txt.trim().toLowerCase();
  return trimmed[0].toUpperCase() + trimmed.slice(1);
};

const displayUserCreatedMsg = (user) => {
  createdBox.classList.remove("hidden");
  createdBox.innerText = "";
  createdBox.innerText = `User ${user} has been succesfully created.`;
  setTimeout(() => createdBox.classList.add("hidden"), 1500);
};

const displayErrorMsg = (element, txt) => {
  const box = element.parentElement.querySelector("div.box");
  box.classList.add("alert", "alert-warning");
  box.innerText = "";
  box.innerText = txt;
};

const renderUser = (user) => {
  usersContainer.insertAdjacentHTML(
    "beforeend",
    `<li  class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${user.firstName} ${user.lastName}</h5>
    </div>
    <p class="mb-1">Course: ${user.course}</p>
    </li>`
  );
};

const cleanMsg = (element) => {
  const box = element.parentElement.querySelector("div.box");
  box.innerText = "";
  box.classList.remove("alert", "alert-warning");
};

const isFilled = (element) => {
  const trimmed = element.value.trim();
  if (!trimmed) {
    displayErrorMsg(element, "Please fill out this field.");
    return false;
  }
  return true;
};

const isCourseChecked = () => {
  const courses = document.querySelectorAll('input[type="checkbox"]:checked');
  if (!courses.length) {
    displayErrorMsg(checkboxContainer, "You must choose course.");
    return false;
  }
  cleanMsg(checkboxContainer);
  return true;
};

const isValid = () => {
  let result = isFilled(firstName) && firstNameValidation(firstName);
  result = isFilled(lastName) && lastNameValidation(lastName) && result;
  result =
    isFilled(password) &&
    passwordValidation(password) &&
    passwordConfValidation(password, password2) &&
    result;
  result = isCourseChecked() && result;
  return result;
};

const createUser = (event) => {
  const courses = document.querySelectorAll('input[type="checkbox"]:checked');
  const gender = document.querySelector("input[type='radio']:checked");
  const firstNameTrimmed = isTrimmed(firstName.value);

  event.preventDefault();
  if (isValid()) {
    const user = {
      firstName: firstNameTrimmed,
      lastName: isTrimmed(lastName.value),
      course: [...courses].map((course) => course.value).join(", "),
      city: city.value,
      gender: gender.value,
      password: password.value,
    };
    users.push(user);
    console.log(user);
    renderUser(user);
    displayUserCreatedMsg(firstNameTrimmed);
    resetInput();
  }
};

form.addEventListener("submit", createUser);

const firstNameValidation = (fName) => {
  const fNameValidator = /\w{5,15}/;
  const isValid = fNameValidator.test(fName.value);
  if (!isValid) {
    displayErrorMsg(
      fName,
      "Length of the first name has to be between 5 and 15 characters."
    );
    return false;
  }
  cleanMsg(fName);
  return true;
};

const lastNameValidation = (lName) => {
  const lNameValidator = /\w{5,20}/;
  const isValid = lNameValidator.test(lName.value);
  if (!isValid) {
    displayErrorMsg(
      lName,
      "Length of the last name has to be between 5 and 20 characters."
    );
    return false;
  }
  cleanMsg(lName);
  return true;
};

const passwordValidation = (pwd) => {
  const passwordValidator = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const isValid = passwordValidator.test(password.value);
  if (!isValid) {
    displayErrorMsg(
      pwd,
      "Password has to contain minimum of 8 characters, including uppercase letter and a number."
    );
    return false;
  }
  cleanMsg(pwd);
  return true;
};

const passwordConfValidation = (pwd1, pwd2) => {
  if (!pwd2.value === pwd1.value) {
    displayErrorMsg(pwd2, "No match.");
    return false;
  }
  cleanMsg(pwd2);
  return true;
};
