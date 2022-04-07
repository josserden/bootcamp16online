// todo Ланцюги методів

import { cars } from './cars.js';
console.table(cars);

/*
 * Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (властивість onSale), відсортованих за зростанням ціни.
 */

const getSortedCarsOnSale = cars => {
  return cars
    .filter(car => car.onSale)
    .sort((a, b) => {
      return a.price - b.price;
    });
};

// const getSortedCarsOnSale = cars =>
//   cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);

console.table(getSortedCarsOnSale(cars));
