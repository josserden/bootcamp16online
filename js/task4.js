// todo  Метод filter

import { cars } from './cars.js';
console.table(cars);

/*
 * Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
 */

const getCarsWithDiscount = cars => {
  return cars.filter(car => car.onSale === true);
};

// const getCarsWithDiscount = cars => cars.filter(({ onSale }) => !onSale);

console.table(getCarsWithDiscount(cars));
