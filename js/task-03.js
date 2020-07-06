"use strict";
const ADMIN_PASSWORD = "jqueryismyjam";
const password = prompt("Please enter password:");
let message;

switch (password) {
  case "jqueryismyjam":
    message = "Добро пожаловать!";
    break;
  case null:
    message = "Отменено пользователем!";
    break;
  default:
    message = "Доступ запрещен, неверный пароль!";
}

alert(message);
