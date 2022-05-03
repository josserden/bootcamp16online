import { getRefs } from './getRefs';
const { contactsContainer } = getRefs();

export function renderMarkup(contacts) {
  contactsContainer.innerHTML = '';
  const markup = contacts
    .map(
      ({ name, email, number, createdAt, id }) => `
      <div class="col-md-4 rounded-3 js-card">
      <div class="card p-3 mb-2 shadow">
        <div class="d-flex justify-content-between pb-3 border-bottom">
          <div class="d-flex flex-row align-items-center gap-1">
            <div class="icon">
              <span class="material-icons-outlined"> contacts </span>
            </div>
            <div class="ms-2 c-details">
              <h2 class="h5 mb-0 fw-bold">${name}</h2>
              <span>${createdAt}</span>
            </div>
          </div>
          <button type="button" class="btn-close" aria-label="Close" data-id=${id}></button>
        </div>
        <div class="mt-2">
          <ul class="list-group list-group-flush">
            <li class="list-group-item d">
              <a
                href="tel:+${number}"
                class="d-flex align-items-center text-secondary text-decoration-none nav-link"
                ><span class="material-icons-round me-2"> phone</span>${number}</a
              >
            </li>
            <li class="list-group-item">
              <a
                href="mailto:${email}"
                class="d-flex align-items-center text-secondary text-decoration-none nav-link"
                ><span class="material-icons-round me-2">
                  alternate_email
                </span>
                ${email}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    `,
    )
    .join('');

  contactsContainer.insertAdjacentHTML('beforeend', markup);
}
