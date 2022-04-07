// todo Ланцюги методів

import { cars } from './cars.js';
console.table(cars);

/*
 * Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, що зараз на розпродажі.
 */

const getModelsOnSale = cars => {
  return cars.filter(car => car.onSale === true).map(car => car.model);
};

// const getModelsOnSale = cars =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);

console.table(getModelsOnSale(cars));
