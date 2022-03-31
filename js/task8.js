// todo Форматування часу
/*
 * Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.
 */

function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;

  const doubleHours = String(hours).padStart(2, 0);
  const doubleMin = String(min).padStart(2, 0);

  return `${doubleHours}:${doubleMin}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
