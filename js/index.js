import { account } from './account.js';
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const form = document.querySelector('.form');
const totalDeposit = document.querySelector('.total-deposit');
const totalWithdraw = document.querySelector('.total-withdraw');
const list = document.querySelector('.list');

form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();

  const description = form.elements.description.value.trim();
  const amount = parseInt(form.elements.amount.value);

  if (!description || !amount)
    return alert('Форма повинна бути заповнена повністю');

  // if (amount < 0) {
  //   account.withdraw({ amount, description });
  // } else {
  //   account.deposit({ description, amount });
  // }

  amount < 0
    ? account.withdraw({ amount, description })
    : account.deposit({ description, amount });

  totalWithdraw.textContent = account.getTransactionTotal(Transaction.WITHDRAW);
  totalDeposit.textContent = account.getTransactionTotal(Transaction.DEPOSIT);

  renderMarkup();
  form.reset();
}

function renderMarkup() {
  list.innerHTML = '';

  const markup = account.transactions
    .map(
      ({ description, amount }) =>
        `<li class="item ${amount < 0 ? 'item-minus' : 'item-plus'}">
        <p>${description}</p>
        <p>${amount}</p>
      </li>`,
    )
    .join('');

  list.insertAdjacentHTML('beforeend', markup);
}
