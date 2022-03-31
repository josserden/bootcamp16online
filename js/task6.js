// todo Пошук найбільшого елемента
/*
 * Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.
 */

function findLargestNumber(numbers) {
  // let maxNumber = numbers[0];

  // for (const number of numbers) {
  //   if (number > maxNumber) {
  //     maxNumber = number;
  //   }
  // }

  // return maxNumber;

  return Math.max(...numbers);
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
