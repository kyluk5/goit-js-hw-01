
let input;
let total = 0;

do {
    input = prompt('Введите число');
    if (input === null) {
        alert('Отменено пользователем')
        break;
    }
    input = Number(input);
    total += input;
    // console.log(total);
} while (true);


alert(`Общая сумма чисел равна ${total}`)





