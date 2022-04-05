//todo Example 3 - Глибока деструктуризація
/*
 * Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
 */

function getBotReport({ companyName, stock }) {
  let total = 0;

  for (const value of Object.values(stock)) {
    total += value;
  }

  return `${companyName} has ${total} bots in stock`;
}

// Було
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Очікується
console.log(
  getBotReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repair: 150,
      defense: 50,
      key: 78,
    },
  }),
);

console.log(
  getBotReport({
    companyName: 'ATB',
    stock: {
      repair: 50,
      defense: 50,
      key: 578,
      oil: 78,
      bread: 578,
    },
  }),
);
