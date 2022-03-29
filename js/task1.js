// todo Відображення часу (if...else)
/*
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 год. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 год.", без хвилин.
 */

const hours = 14;
const minutes = 24;

if (minutes === 0) {
  console.log(`${hours} ч.`);
} else {
  console.log(`${hours} ч. : ${minutes} хв.`);
}

// function logTime(hours, minutes) {
//   if (minutes === 0) {
//     console.log(`${hours} ч.`);
//   } else {
//     console.log(`${hours} ч. : ${minutes} хв.`);
//   }
// }

// logTime(14, 24);
// logTime(14, 0);
// logTime(13, 59);
// logTime(11, 20);
