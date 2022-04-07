// todo Метод sort

import { cars } from './cars.js';
console.table(cars);

/*
 * Нехай функція sortByDescendingPrice повертає новий масив автомобілів, відсортований за зменшенням значення якості price.
 */

const sortByDescendingPrice = cars => {
  return [...cars].sort((a, b) => b.price - a.price);
};

console.table(sortByDescendingPrice(cars));
