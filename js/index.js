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

  createTransaction(amount, type, description) {
    return {
      id: generateId(),
      type,
      amount,
      description,
    };
  },

  deposit(amount, description) {
    this.balance += amount;
    const newTransaction = this.createTransaction(
      amount,
      Transaction.DEPOSIT,
      description,
    );

    this.transactions.push(newTransaction);
  },

  withdraw(amount, description) {
    this.balance -= amount;
    const newTransaction = this.createTransaction(
      amount,
      Transaction.WITHDRAW,
      description,
    );

    this.transactions.push(newTransaction);
  },

  getTransactionTotal(type) {},
};

function generateId() {
  return (
    String.fromCharCode(Math.floor(Math.random() * 26) + 97) +
    Math.random().toString(16).slice(2) +
    Date.now().toString(16).slice(4)
  );
}
