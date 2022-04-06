// todo Метод forEach

/*
 * Виконайте рефакторинг коду, використовуючи метод дляEach і стрілочні функції.
 */

const calculateAverage = (...args) => {
  let total = 0;

  args.forEach(arg => {
    total += arg;
  });

  return total / args.length;
};

console.log(calculateAverage(1, 2, 3, 4));
console.log(calculateAverage(14, 8, 2));
console.log(calculateAverage(27, 43, 2, 8, 36));
