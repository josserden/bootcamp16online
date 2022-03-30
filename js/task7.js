// todo Сортування масиву із циклом
/*
 * Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.
 */

const langs = ['python', 'javascript', 'papa', 'c++', 'haskell', 'php', 'ruby'];

const sortedArr = langs.sort();

console.log(sortedArr);

// const sortedArr = [];
// let baseElementValue = langs[0].charCodeAt(0);

// for (const lang of langs) {
//   if (baseElementValue > lang.charCodeAt(0)) {
//     baseElementValue = lang.charCodeAt(0);
//   }

//   if (lang.charCodeAt(0) < baseElementValue) {
//     sortedArr.unshift(lang);
//   } else if (lang.charCodeAt(0) === baseElementValue) {
//     sortedArr.push(lang);
//   } else {
//     sortedArr.push(lang);
//   }
// }

// console.log(baseElementValue);
// console.table(sortedArr);
