import { nanoid } from 'nanoid';
import 'material-icons/iconfont/material-icons.css';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import lodash from 'lodash.throttle';
import './sass/main.scss';

import { getRefs } from './js/getRefs';
import { renderMarkup } from './js/renderMarkup';
import * as Storage from './js/storage';

const LS_KEY = 'contacts';
const { formSearch, modalForm, contactsList } = getRefs();
const notyf = new Notyf();

init();

modalForm.addEventListener('submit', onSubmit);
formSearch.addEventListener('input', lodash(onSearch, 500));
contactsList.addEventListener('click', onDelete);

function onDelete(e) {
  const currentIndex = e.target.dataset.id;
  const contacts = Storage.load(LS_KEY);
  if (!currentIndex) return;

  if (contacts) {
    const updatedContacts = contacts.filter(
      contact => contact.id !== currentIndex,
    );

    Storage.save(LS_KEY, [...updatedContacts]);
    renderMarkup(updatedContacts, contactsList);
  }
}
function onSearch(e) {
  const searchValue = e.target.value.toLowerCase();

  const contacts = Storage.load(LS_KEY);
  if (contacts) {
    const parsedContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchValue),
    );
    Storage.save(LS_KEY, [...parsedContacts]);
    renderMarkup(parsedContacts, contactsList);
  }
}
function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(modalForm);

  const name = formData.get('name').trim();
  const phone = formData.get('phone').trim();
  const email = formData.get('email').trim();

  if (!name || !phone || !email) return notyf.error('Заполните все поля');

  const newContact = {
    id: nanoid(),
    name,
    phone,
    email,
  };

  const contacts = Storage.load(LS_KEY) ?? [];
  Storage.save(LS_KEY, [...contacts, newContact]);

  contacts.push(newContact);
  renderMarkup(contacts, contactsList);

  modalForm.reset();
}
function init() {
  const contactsFromLS = Storage.load(LS_KEY);

  if (contactsFromLS) {
    renderMarkup(contactsFromLS, contactsList);
  }
}
