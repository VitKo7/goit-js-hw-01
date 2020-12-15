'use strict';

let credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice;

let order = prompt('Какое количество дроидов Вы хотите приобрести?');

if (order === null) {
  message = `Отменено пользователем!`;
} else if (order <= 0) {
  message = 'Вы не верно указали количество дроидов';
} else {
  totalPrice = pricePerDroid * order;
  if (totalPrice <= credits) {
    credits -= totalPrice;
    message = `Вы купили ${order} дроидов, на счету осталось ${credits} кредитов.`;
  } else {
    message = `Недостаточно средств на счету!`;
  }
}

alert(message);
