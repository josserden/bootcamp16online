import { contacts } from './data/contacts.js';
const notyf = new Notyf({
  duration: 3000,
  position: {
    x: 'center',
    y: 'top',
  },
});

const input = document.querySelector('.input');
const contactsList = document.querySelector('.contacts-list');

input.addEventListener('input', _.throttle(onInput, 300));
renderContacts(contacts);

function onInput(e) {
  const value = e.target.value.toLowerCase().trim();

  if (!value) return;

  const filteredContacts = contacts.filter(contact =>
    contact.toLowerCase().includes(value),
  );

  renderContacts(filteredContacts);

  if (filteredContacts.length === 0) {
    notyf.error('Нічого не знайдено');
  }

  if (filteredContacts.length === 1) {
    notyf.success('Круто! Ви знайшли мене');
  }
}

function renderContacts(array) {
  contactsList.innerHTML = '';

  const markup = array.reduce(
    (acc, contact) => acc + `<li>${contact}</li>`,
    '',
  );

  // const markup = array
  //   .map(
  //     contact => `
  // <li>${contact}</li>
  // `,
  //   )
  //   .join('');

  contactsList.insertAdjacentHTML('beforeend', markup);
}
