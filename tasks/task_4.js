
let credits = 23580;
const pricePerDroid = 3000;

let input;
input = Number(input);
input = prompt('Сколько дроидов вы хотите купить?');

let totalPrice = (input * pricePerDroid);

let rest = (credits - totalPrice);
rest = Number(rest);

if (input === null) {
    console.log('Отменено пользователем!');
}
else if (input * pricePerDroid > credits) {
    console.log('Недостаточно средств на счету!');
}
else if (totalPrice <= credits) {
    input = prompt(`Вы купили ${input} дроидов, на счету осталось ${rest} кредитов.`);
}
