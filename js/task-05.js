"use strict";

const selectCountry = prompt("Введите страну");
const china = "китай";
const chile = "чили";
const australia = "австралия";
const india = "индия";
const jamaica = "ямайка";
const chinaPrice = 100;
const chilePrice = 250;
const australiaPrice = 170;
const indiaPrice = 80;
const jamaicaPrice = 120;

if (selectCountry !== null) {
  switch (selectCountry.toLowerCase()) {
    case china:
      alert(`Доставка в ${china} будет стоить ${chinaPrice} кредитов`);
      break;
    case chile:
      alert(`Доставка в ${chile} будет стоить ${chilePrice} кредитов`);
      break;
    case australia:
      alert(`Доставка в ${australia} будет стоить ${australiaPrice} кредитов`);
      break;
    case india:
      alert(`Доставка в ${india} будет стоить ${indiaPrice} кредитов`);
      break;
    case jamaica:
      alert(`Доставка в ${jamaica} будет стоить ${jamaicaPrice} кредитов`);
    default:
      alert(`В вашей стране доставка не доступна`);
  }
}
