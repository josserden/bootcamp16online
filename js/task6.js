// todo Метод find

import { cars } from './cars.js';
console.table(cars);

const getCarByModel = (cars, model) => cars.find(car => car.model === model);

// const getCarByModel = (cars, model) => cars.filter(car => car.model === model);

console.log(getCarByModel(cars, 'F-150'));
console.log(getCarByModel(cars, 'CX-9'));
