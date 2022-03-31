// todo Індекс маси тіла
/*
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.

* Вага та висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

* Індекс маси тіла необхідно округлити до однієї цифри після коми;
 */

function calcBMI(weight, height) {
  const numericWeight = parseFloat(weight.replace(',', '.'));
  const numericHeight = parseFloat(height.replace(',', '.'));

  const result = numericWeight / numericHeight ** 2;

  return result.toFixed(1);
}

const bmi = calcBMI('88,3', '1.75');

console.log(bmi); // 28.8
