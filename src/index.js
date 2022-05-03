import 'material-icons/iconfont/material-icons.css';
import './sass/main.scss';
import * as ContactService from './js/service/contacts-service';

import { getRefs } from './js/getRefs';
import { renderMarkup } from './js/renderMarkup';
const { form, searchForm, contactsContainer } = getRefs();

refetch();

contactsContainer.addEventListener('click', deleteContact);
form.addEventListener('submit', createContact);

async function refetch() {
  try {
    const contacts = await ContactService.fetchContacts();

    if (contacts.length === 0) return;

    renderMarkup(contacts);
  } catch (error) {
    console.error(error.message);
  }
}

async function createContact(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const contact = {};

  formData.forEach((value, key) => {
    contact[key] = value;
  });

  try {
    await ContactService.createContact(contact);
    refetch();
    form.reset();
  } catch (error) {
    console.error(error.message);
  }
}

async function deleteContact(event) {
  const index = event.target.dataset.id;
  if (!index) return;

  try {
    await ContactService.deleteContact(index);

    event.target.parentNode.parentNode.remove();

    refetch();
  } catch (error) {
    console.error(error.message);
  }
}
