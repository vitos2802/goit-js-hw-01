"use strict";
let input;
let total = 0;

do {
  input = prompt("Введите число");
  if (isNaN(parseFloat(input)) && !isFinite(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  } else if (input !== null) {
    total += +input;
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
