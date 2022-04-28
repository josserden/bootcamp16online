import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import './sass/main.scss';

import { fetchUser } from './js/fetchUser';
import { formatDate } from './js/helpers/formatDate';

const searchForm = document.querySelector('.js-search-form');
const profileContainer = document.querySelector('.js-profile-container');

const notyf = new Notyf({
  duration: 3000,
  position: {
    x: 'right',
    y: 'top',
  },
});

searchForm.addEventListener('submit', onSearchUser);

function onSearchUser(event) {
  event.preventDefault();

  const inputValue = searchForm.elements.name.value.trim();

  if (!inputValue) return notyf.error('Please enter a username');

  fetchUser(inputValue)
    .then(user => {
      renderUser(user);
      notyf.success(`User ${user.name ? user.name : 'BLA BLA'} found!`);
    })
    .catch(error => {
      notyf.error('User not found');
      console.error(error);
    });

  searchForm.reset();
}

function renderUser({
  avatar_url,
  name,
  location,
  bio,
  public_repos,
  created_at,
  updated_at,
  followers,
  html_url,
}) {
  profileContainer.innerHTML = '';

  const markup = `
  <div class="card mx-auto shadow-sm" style="width: 18rem">
    <img
      src="${avatar_url}"
      class="card-img-top rounded"
      alt="avatar"
    />
    <div class="card-body">

      ${name ? `<h4 class="card-title">${name}</h4>` : ''}
      ${location ? `<p class="card-text">${location}</p>` : ''}
      ${bio ? `<p class="card-text">${bio}</p>` : ''}

      <ul class="list-group mb-4">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Followers
          <span class="badge bg-secondary rounded-pill">${followers}</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Public repos
          <span class="badge bg-secondary rounded-pill">${public_repos}</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Likes
          <span class="badge bg-secondary rounded-pill js-badge-likes">0</span>
        </li>
      </ul>
      <p class="fw-lighter mb-1">created ${formatDate(created_at)}</p>
      <p class=" fw-lighter mb-4">update ${formatDate(updated_at)}</p>
      <a
        href="${html_url}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-secondary"
        >Go to profile</a
      >
    </div>
  </div>`;

  profileContainer.innerHTML = markup;
}
