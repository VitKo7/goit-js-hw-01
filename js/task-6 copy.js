'use strict';
let input;
let total = 0;

do {
  let input = prompt('Введите число:');

  if (input === null) {
    alert('Отменено пользователем!');
    break;
  }

  input = Number(input);
  const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert('Вы ввели не число!');
    continue;
  }

  total += input;
} while (true);

alert(`Сумма введеных чисел равна: ${total}`);

// todo:
// ? запустить цикл до нажатия Cancel => вывести результат;
// ! выполнить проверку на число: не 0, не null, не текст, не символ

// ! Вариант-1:

// var total = 0;
// var input = +prompt();
// while (input) {
//   total += input;
//   input = +prompt();
// }
// alert('Общая сумма чисел равна [' + total + ']');

// ! Вариант-2 с do...while:

// var total = 0;
// do {
//   var input = +prompt();
//   total += input;
// } while (input);
// alert('Общая сумма чисел равна [' + total + ']');
