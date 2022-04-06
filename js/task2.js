//todo Коллбек функції
/*
 * Додайте об'єкту обліковий запис методами withdraw (amount, onSuccess, onError) і deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий і третій - колбеки.

* Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

* Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.
 */

const TRANSACTION_LIMIT = 1000;

const account = {
  name: 'John',
  balance: 800,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`${amount} перевищує ліміт ${TRANSACTION_LIMIT}`);
    } else if (amount > this.balance) {
      onError(`${amount} перевищує залишок ${this.balance}`);
    } else {
      this.balance -= amount;
      onSuccess(`Операція пройшла успішно. На рахунку - ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`${amount} перевищує ліміт ${TRANSACTION_LIMIT}`);
    } else if (amount <= 0) {
      onError(`${amount} повинен бути більше 0`);
    } else {
      this.balance += amount;
      onSuccess(`Операція пройшла успішно. На рахунку - ${this.balance}`);
    }
  },
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.deposit(1600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
