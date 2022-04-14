const form = document.querySelector('.form');
const list = document.querySelector('.list');
const totalAmount = document.querySelector('.total-amount');

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  getBalance() {
    return this.balance;
  },

  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      type,
      amount,
    };
  },

  deposit(amount) {
    this.balance += amount;

    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);

    this.transactions.push(newTransaction);
  },
};

form.addEventListener('submit', event => {
  event.preventDefault();

  let inputValue = parseInt(form.elements.amount.value);

  if (!inputValue) return console.log('empty input');

  account.deposit(inputValue);
  totalAmount.textContent = account.getBalance();

  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = inputValue;

  list.append(item);

  form.reset();
});
