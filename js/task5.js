// todo Метод filter

import { cars } from './cars.js';
console.table(cars);

/*
 * Нехай функція getCarsWithType повертає масив автомобілів, тип яких збігається зі значенням параметра type.
 */

const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

console.table(getCarsWithType(cars, 'suv'));
console.table(getCarsWithType(cars, 'sedan'));
