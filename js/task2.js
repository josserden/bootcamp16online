// todo Менше з чисел
/*
 * Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
 */

function min(a, b) {
  // return Math.min(a, b);

  if (a < b) {
    return a;
  }

  return b;

  // return a < b ? a : b;
}

console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1
