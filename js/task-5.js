'use strict';

let cost;
let destination;

let input = prompt('Укажите страну доставки:');

if (input === null) {
  console.log(`Отменено пользователем!`);
} else {
  // ? закоментировал более длинный код:
  // let lower = input.toLowerCase();
  // let firstLetter = lower.slice(0, 1);
  // destination = lower.replace(firstLetter, firstLetter.toUpperCase());

  destination = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

  switch (destination) {
    case 'Китай':
      cost = 100;
      console.log(`Доставка в ${destination} будет стоить ${cost} кредитов.`);
      break;

    case 'Чили':
      cost = 250;
      console.log(`Доставка в ${destination} будет стоить ${cost} кредитов.`);
      break;

    case 'Австралия':
      cost = 170;
      console.log(`Доставка в ${destination} будет стоить ${cost} кредитов.`);
      break;

    case 'Индия':
      cost = 80;
      console.log(`Доставка в ${destination} будет стоить ${cost} кредитов.`);
      break;

    case 'Ямайка':
      cost = 120;
      console.log(`Доставка в ${destination} будет стоить ${cost} кредитов.`);
      break;

    default:
      console.log('В вашей стране доставка не доступна');
  }
}
