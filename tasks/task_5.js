'use strict';

const КИТАЙ = 100;
const ЧИЛИ = 250;
const АВСТРАЛИЯ = 170;
const ИНДИЯ = 80;
const ЯМАЙКА = 120;

let input = prompt('В какую страну хотите отправить посылку?');
let inUpperCase = input.toUpperCase();

let message;

switch (inUpperCase) {

    case 'КИТАЙ':
        message = prompt(`Доставка в ${inUpperCase} будет стоить ${КИТАЙ} кредитов`);
        break;

    case 'ЧИЛИ':
        message = prompt(`Доставка в ${inUpperCase} будет стоить ${ЧИЛИ} кредитов`);
        break;

    case 'АВСТРАЛИЯ':
        message = prompt(`Доставка в ${inUpperCase} будет стоить ${АВСТРАЛИЯ} кредитов`);
        break;

    case 'ИНДИЯ':
        message = prompt(`Доставка в ${inUpperCase} будет стоить ${ИНДИЯ} кредитов`);
        break;

    case 'ЯМАЙКА':
        message = prompt(`Доставка в ${inUpperCase} будет стоить ${ЯМАЙКА} кредитов`);
        break;


}

alert('В вашей стране доставка не доступна');

