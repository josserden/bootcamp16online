// todo Сортування масиву із циклом
/*
 * Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.
 */

const langs = [
  'python',
  'web',
  'javascript',
  'c++',
  'haskell',
  'php',
  'abb',
  'ruby',
];

function getMinValue(array) {
  let minElement = array[0];

  for (const item of array) {
    if (minElement > item) {
      minElement = item;
    }
  }

  return minElement;
}

function sortArr(array) {
  const newArr = [];

  for (; array.length; ) {
    newArr.push(array.splice(array.indexOf(getMinValue(array)), 1));
  }

  return newArr;
}

console.log(sortArr(langs));
