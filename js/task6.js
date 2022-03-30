// todo Масиви та рядки
/*
 * Напиши скрипт, який «розвертає» рядок (зворотний порядок літер) і виводить його в консоль.
 */

const string = 'Welcome to the future';

const arr = string.split('');
const reversedArr = arr.reverse();
const convertToStr = reversedArr.join('');

// const arr = string.split('').reverse().join('');

console.log(convertToStr);
