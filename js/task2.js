//todo Коллбек функції
/*
 * Додайте об'єкту обліковий запис методами withdraw (натисканням, onSuccess, onError) і deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий і третій - колбеки.

* Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

* Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.
 */

const account = {
  name: 'John',
  balance: 0,
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}

function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
