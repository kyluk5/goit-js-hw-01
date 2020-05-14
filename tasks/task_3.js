
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt('Введите пароль');

if (message === ADMIN_PASSWORD)
    message = prompt('Добро пожаловать!');

else if (message === null)
    message = ('Отменено пользователем!');

else if (message != ADMIN_PASSWORD)
    message = prompt('Доступ запрещен, неверный пароль!')

alert(message);
