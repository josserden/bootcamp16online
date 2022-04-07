// todo Метод map

import { cars } from './cars.js';
console.table(cars);

/*
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */

const getModels = cars => cars.map(car => car.model);
console.log(getModels(cars));
