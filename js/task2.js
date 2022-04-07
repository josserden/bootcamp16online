//todo Метод map

import { cars } from './cars.js';
console.table(cars);
/*
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.
 */

const makeCarsWithDiscount = (cars, discount) => {
  return cars.map(car => ({
    ...car,
    price: car.price - car.price * discount,
  }));
};

console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.4));
