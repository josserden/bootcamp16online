import { courses } from './courses.js';

const buttonsContainer = document.querySelector('.buttons-container');
const coursesContainer = document.querySelector('.courses-container');

// const filters = courses
//   .flatMap(course => course.tags)
//   .filter((item, index, array) => array.indexOf(item) === index);

const filters = [...new Set(courses.flatMap(course => course.tags))];

renderFilters(filters);
renderCourses(courses);

buttonsContainer.addEventListener('click', event => {
  const element = event.target;
  const elementValue = event.target.dataset.value;
  const activeElement = document.querySelector('.is-active');

  if (!elementValue) return;
  if (activeElement) {
    activeElement.classList.remove('is-active');
  }
  if (element === activeElement) {
    return renderCourses(courses);
  }

  element.classList.add('is-active');

  const filteredCourses = courses.filter(course =>
    course.tags.includes(elementValue),
  );

  renderCourses(filteredCourses);
});

function renderFilters(array) {
  const markup = array
    .map(
      course => `
  <button class="button" type="button" data-value="${course}">${course}</button>
  `,
    )
    .join('');

  buttonsContainer.insertAdjacentHTML('beforeend', markup);
}

function renderCourses(array) {
  coursesContainer.innerHTML = '';

  const markup = array
    .map(
      (course, index) => `
  <div>${index + 1}. ${course.name} - ${course.prices} </div>
  `,
    )
    .join('');

  coursesContainer.insertAdjacentHTML('beforeend', markup);
}
