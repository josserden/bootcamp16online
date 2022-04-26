import users from '../data/employees.json';
import { getRefs } from './getRefs';
import { calculateAge } from '../js/helpers/calculateAge';
import { isBirthday } from './helpers/isBirthday';
import { renderMarkup } from './helpers/renderMarkup';
const { table } = getRefs();

const markup = ({ username, birthDay }, index) => `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${username}</td>
          <td>${calculateAge(birthDay)}</td>
          <td>${isBirthday(birthDay) ? 'Yes' : 'No'}</td>
        </tr>`;

const options = {
  markup,
  array: users,
  container: table,
};

renderMarkup(options);
