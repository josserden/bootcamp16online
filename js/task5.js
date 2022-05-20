// todo call() apply()

/*
 * Створіть функцію hostGuests яка поверне ім'я будинку та гостей у ньому
 * Викличте її за допомогою call і apply поставивши контекст і гостей як аргумент
 */

const guests = ['Anna', 'Jack', 'Jimmy'];

const place1 = {
  house: 'Palace',
};
const place2 = {
  house: 'Barn',
};

function hostGuests(...currentGuests) {
  console.log(`${currentGuests.join(', ')} are staying in ${this.house}`);
}

hostGuests.apply(place1, [...guests, 'John']);
// Anna, Jack, Jimmy, John are staying in Palace
