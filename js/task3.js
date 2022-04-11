// todo Калькулятор

/*
 * Створіть об'єкт calculator із трьома методами:

* read(firstValue, secondValue)- приймає два значення та зберігає їх як властивості об'єкта.
* add() - повертає суму збережених значень.
* mult() - перемножує збережені значення та повертає результат.
 */

const calculator = {
  firstValue: 0,
  secondValue: 0,

  read(a, b) {
    this.firstValue = a;
    this.secondValue = b;
  },

  add() {
    return this.firstValue + this.secondValue;
  },

  mult() {
    return this.firstValue * this.secondValue;
  },
};

calculator.read(10, 20);
console.log(calculator.add());
console.log(calculator.mult());

calculator.read(50, 30);
console.log(calculator.add());
console.log(calculator.mult());
