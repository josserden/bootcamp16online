import 'material-icons/iconfont/material-icons.css';
import './sass/main.scss';
import * as ContactService from './js/service/contacts-service';

// GET => /contacts
// ContactService.fetchContacts()
//   .then(res => console.log(res.data))
//   .catch(error => console.error(error));

// GET -> /contacts/:id
// ContactService.getContact(16)
//   .then(res => console.log(res.data))
//   .catch(error => console.error(error));

// POST -> /contacts
// const contact = {
//   name: 'Jimmy',
//   email: 'jimmy@mail.com',
//   number: '987-654-4444',
// };

// ContactService.createContact(contact)
//   .then(res => console.log(res))
//   .catch(error => console.error(error));

// PUT -> /contacts/:id
// const contact = {
//   name: 'Maria',
//   email: 'maria@mail.com',
//   number: '987-654-9999',
// };

// ContactService.updateContact(32, contact)
//   .then(res => console.log(res.data))
//   .catch(error => console.error(error));

// DELETE -> /contacts/:id
// ContactService.deleteContact(26);
