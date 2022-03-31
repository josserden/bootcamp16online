// todo Колекція курсів (includes, indexOf, push тощо)

/*
 * Напишіть функції для роботи з колекцією навчальних курсів courses:

* addCourse(name) - додає курс до кінця колекції
* removeCourse(name) - видаляє курс із колекції
* updateCourse(oldName, newName) - змінює ім'я на нове
 */

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(course) {
  if (!courses.includes(course)) {
    courses.push(course);
    return;
  }

  return console.log('У вас уже есть такой курс');
}

function removeCourse(course) {
  const arr = [];

  if (!courses.includes(course))
    return console.log('Курс с таким именем не найден');

  for (const item of courses) {
    if (item === course) continue;

    arr.push(item);
  }

  return arr;

  // return courses.filter(item => item !== course);
}

function updateCourse() {
  // body
}

addCourse('Express');
// ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'

console.log(removeCourse('React'));
// ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс с таким именем не найден'

updateCourse('Express', 'NestJS');
// console.table(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
