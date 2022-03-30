// todo Масиви та рядки
/*
 * Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.
 */

const values = '8 11';
const numbers = values.split(' ');

const a = Number(numbers[0]);
const b = Number(numbers[1]);
const square = a * b;

console.log(square);

// let counter = 1;
// console.log(numbers);

// for (let i = 0; i < numbers.length; i += 1) {
//   const element = numbers[i];

//   console.log(element);

//   console.log((counter = counter * element));
// }
