// todo Метод filter

import { cars } from './cars.js';
console.table(cars);

/*
 * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша за значення параметра threshold.
 */

const filterByPrice = (cars, threshold) => {
  return cars.filter(car => car.price < threshold);
};

// const filterByPrice = (cars, threshold) =>
//   cars.filter(({ price }) => price < threshold);

console.table(filterByPrice(cars, 30000));
console.table(filterByPrice(cars, 25000));
