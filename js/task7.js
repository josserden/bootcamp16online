// todo Метод sort

import { cars } from './cars.js';
console.table(cars);

/*
 * Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за збільшенням значення властивості amount.
 */

const sortByAscendingAmount = cars => {
  return [...cars].sort((a, b) => a.amount - b.amount);
};

// const sortByAscendingAmount = cars => {
//   return [...cars].sort((a, b) => b.price - a.price);
// };

console.table(sortByAscendingAmount(cars));
