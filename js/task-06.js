"use strict";
let input;
let total = 0;

do {
  input = prompt("Введите число");
  // const notAnumber = Number.isNaN(input);
  if (isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  } else {
    total += +input;
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
