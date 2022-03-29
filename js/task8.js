// todo Дедлайн здачі проекту (switch)
/*
 * Виконай рефакторинг коду задачі номер 6, використовуючи switch.
 */

const daysUntilDeadline = 0;
let message;

switch (daysUntilDeadline) {
  case 0:
    message = 'Сьогодні';
    break;
  case 1:
    message = 'Завтра';
    break;
  case 2:
    message = 'Післязавтра';
    break;
  default:
    message = 'Дата в майбутньому';
}

console.log(message);
