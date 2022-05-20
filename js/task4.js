// todo bind()

/*
 * Створіть метод counter який буде з this брати "i" і збільшувати його на одиницю. Після повертати "i".
 * Використовуйте замикання та bind, щоб встановити змінній "i" різні значення
 * Виведіть результат у консоль
 */

function counter() {
  return function () {
    this.i += 1;

    return this.i;
  };
}

const counter1 = counter().bind({ i: 0 });
const counter2 = counter().bind({ i: 10 });

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());
