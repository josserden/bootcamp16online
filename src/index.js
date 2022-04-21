import './sass/main.scss';
import * as Storage from './js/storage';

const form = document.querySelector('.form');
getFromLS();

form.addEventListener('reset', () => {
  Storage.remove('selects');
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  formData.forEach((key, value) => console.log(`${value}-${key}`));
  Storage.remove('selects');
});

form.addEventListener('change', event => {
  let saveData = Storage.load('selects') ?? {};

  saveData[event.target.name] = event.target.value;
  Storage.save('selects', saveData);
});

function getFromLS() {
  let saveData = Storage.load('selects');

  if (saveData) {
    Object.entries(saveData).forEach(
      ([name, value]) => (form.elements[name].value = value),
    );
  }
}
