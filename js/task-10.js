// todo Example 10 - Оператор % та методи рядків
/*
 * Напиши скрипт який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM.

* 70 покаже 01:10
* 450 покаже 07:30
*1440 покаже 24:01
 */

const totalMinutes = 59;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);

const result = `${doubleDigitHours}:${doubleDigitMinutes} `;
console.log(result);
