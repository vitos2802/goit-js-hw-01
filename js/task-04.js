let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const numberOfDroids = prompt("Сколько дроидов вы хотите приобрести?");

if (numberOfDroids !== null) {
  totalPrice = pricePerDroid * numberOfDroids;
  if (totalPrice <= credits) {
    credits -= totalPrice;
    alert(
      `Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits} кредитов`
    );
  } else {
    console.log("Недостаточно средств на счету!");
  }
} else {
  console.log("Отменено пользователем!");
}
