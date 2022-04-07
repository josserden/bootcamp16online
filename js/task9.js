// todo Метод sort

import { cars } from './cars.js';
console.table(cars);

/*
 * Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, залежно від значення параметра order.
 */

const sortByModel = (cars, order) => {
  return [...cars].sort((a, b) => {
    if (order === 'asc') {
      return a.model.localeCompare(b.model);
    }

    if (order === 'desc') {
      return b.model.localeCompare(a.model);
    }

    // return order === 'asc'
    //   ? a.model.localeCompare(b.model)
    //   : b.model.localeCompare(a.model);
  });
};

console.table(sortByModel(cars, 'asc'));
console.table(sortByModel(cars, 'desc'));
