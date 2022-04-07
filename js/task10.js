// todo Метод reduce

import { cars } from './cars.js';
console.table(cars);

/*
 * Нехай функція getTotalAmount повертає загальну кількість автомобілів(значення властивостей amount).
 */

const getTotalAmount = cars => {
  return cars.reduce((acc, car) => {
    return (acc += car.amount);
  }, 0);
};

// const getTotalAmount = cars =>
//   cars.reduce((acc, car) => (acc += car.amount), 100);

// const getTotalAmount = cars => {
//   return cars.reduce((acc, car) => {
//     acc.push(car.amount);

//     return acc;
//   }, []);
// };

console.log(getTotalAmount(cars));
