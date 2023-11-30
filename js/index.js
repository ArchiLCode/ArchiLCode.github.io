const burgerToggle = document.getElementById("burger-toggle");
const burgerNavigation = document.getElementById("burger-nav");
const burgerToggleTop = document.getElementById("toggle-line-top");
const burgerToggleCenter = document.getElementById("toggle-line-center");
const burgerToggleBottom = document.getElementById("toggle-line-bottom");
const closeLoginBtn = document.getElementById("close-login-btn");
const closeSingUpBtn = document.getElementById("close-singup-btn");
const loginBtn = document.getElementById("login");
const singUpBtn = document.getElementById("sing-up");
const visiblePasswordBtn = document.querySelectorAll(".visible-password-btn");
const passwords = document.querySelectorAll(".password");
const userBtn = document.querySelector(".fa-user-circle");
const orderForm = document.getElementById("order-form");
const users = [];

// Состояние бургера
var burgerOpened = false;

function openBurger() {
  burgerOpened = true;
  burgerToggleCenter.style.visibility = "hidden";
  burgerToggleTop.style.transform = "translateY(10px) rotate(-45deg)";
  burgerToggleBottom.style.transform = "translateY(-10px) rotate(45deg)";
  burgerNavigation.style.height = "256.7px";
}

function closeBurger() {
  burgerOpened = false;
  burgerToggleTop.style.transform = "translateY(0px) rotate(0deg)";
  burgerToggleBottom.style.transform = "translateY(0px) rotate(0deg)";
  burgerToggleCenter.style.visibility = "visible";
  burgerNavigation.style.height = "0";
}

function openSingUpForm() {
  document.querySelector(".singup-window").style.visibility = "visible";
  document.querySelector(".singup-window").style.opacity = "1";
  document.querySelector(".singup-body").style.transform = "translateY(0)";
  document.body.style.overflow = "hidden";
}

function openOrderForm() {
  document.querySelector(".order-window").style.visibility = "visible";
  document.querySelector(".order-window").style.opacity = "1";
  document.querySelector(".order-body").style.transform = "translateY(0)";
  if (currentUser.email != "") {
    orderForm.name.value = currentUser.name;
    orderForm.tel.value = currentUser.tel;
    orderForm.email.value = currentUser.email;
  }
  document.body.style.overflow = "hidden";
}

function openLoginForm() {
  document.querySelector(".login-window").style.visibility = "visible";
  document.querySelector(".login-window").style.opacity = "1";
  document.querySelector(".login-body").style.transform = "translateY(0)";
  if (currentUser.email != "" && currentUser.password != "") {
    loginForm.email.value = currentUser.email;
    loginForm.password.value = currentUser.password;
  }
  document.body.style.overflow = "hidden";
}

// Открытие и закрытие бургера по клику
burgerToggle.addEventListener("click", () => {
  if (burgerOpened === false) {
    openBurger();
    return;
  }
  closeBurger();
});

function changePasswordVisibility(n) {
  if (passwords[0].type === "password" || passwords[1].type === "password") {
    passwords[0].type = "text";
    passwords[1].type = "text";
    visiblePasswordBtn[n].style.opacity = "1";
  } else {
    passwords[0].type = "password";
    passwords[1].type = "password";
    visiblePasswordBtn[n].style.opacity = "0.3";
  }
}

// Переключение видимости пароля
visiblePasswordBtn[0].addEventListener("click", () => {
  changePasswordVisibility(0);
});

visiblePasswordBtn[1].addEventListener("click", () => {
  changePasswordVisibility(1);
});

function closeLoginForm() {
  document.querySelector(".login-window").style.opacity = "0";
  document.querySelector(".login-window").style.visibility = "hidden";
  document.querySelector(".login-body").style.transform = "translateY(200px)";
  document.body.style.overflow = "visible";
}
function closeSingUpForm() {
  document.querySelector(".singup-window").style.opacity = "0";
  document.querySelector(".singup-window").style.visibility = "hidden";
  document.querySelector(".singup-body").style.transform = "translateY(200px)";
  document.body.style.overflow = "visible";
}
function closeOrderForm() {
  document.querySelector(".order-window").style.opacity = "0";
  document.querySelector(".order-window").style.visibility = "hidden";
  document.querySelector(".order-body").style.transform = "translateY(200px)";
  document.body.style.overflow = "visible";
}

// Закрытие окна формы
closeLoginBtn.addEventListener("click", () => {
  closeLoginForm();
});

closeSingUpBtn.addEventListener("click", () => {
  closeSingUpForm();
});

// Открытие окна формы логин
loginBtn.addEventListener("click", () => {
  openLoginForm();
});
userBtn.addEventListener("click", () => {
  openLoginForm();
});
// Открытие окна формы регистрации
singUpBtn.addEventListener("click", () => {
  openSingUpForm();
});

window.onload = () => {
  // Плавное появление контента в #main
  main.style.opacity = "1";
};

class User {
  constructor(name, tel, email, password) {
    this.name = name;
    this.tel = tel;
    this.email = email;
    this.password = password;
  }
}

function addUser(name, tel, email, password) {
  users.push(new User(name, tel, email, password));
}

function checkUserExist(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) return i;
  }
  return false;
}

function serializeForm(formNode) {
  return new FormData(formNode);
}

function handleSingUpFormSubmit(event) {
  event.preventDefault();
  data = Array.from(serializeForm(singUpForm));
  addUser(data[0][1], data[1][1], data[2][1], data[3][1]);
  loggedIn = true;
  currentUser = users[0];
  alert("Вы зарегестрировались");
  closeSingUpForm();
}
function handleLoginFormSubmit(event) {
  event.preventDefault();
  data = Array.from(serializeForm(loginForm));
  if (checkUserExist(data[0][1], data[1][1]) !== false) {
    loggedIn = true;
    currentUser = users[checkUserExist(data[0][1], data[1][1])];
    alert("Вы успешно вошли в систему");
    closeLoginForm();
  } else alert("Неверная почта или пароль!");
}

const singUpForm = document.getElementById("singup-form");
singUpForm.addEventListener("submit", handleSingUpFormSubmit);

var loggedIn = false;
var currentUser = new User("", "", "", "");
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", handleLoginFormSubmit);
