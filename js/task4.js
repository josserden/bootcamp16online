// todo bind(), call()

// function counter() {
//   return function () {
//     this.count += 1;

//     return this.count;
//   };
// }

// const first = counter().bind({ count: 10 });
// const second = counter().bind({ count: 100 });

// console.log(first());
// console.log(second());

// const guests = ['Mango', 'Poly', 'Ajax'];

// const place1 = {
//   house: '1',
// };

// const place2 = {
//   house: '2',
// };

// function hostGuest(...currentGuests) {
//   return `House ${this.house} with ${currentGuests.join(', ')}`;
// }

// console.log(hostGuest.call(place1, ...guests));
// console.log(hostGuest.call(place2, 'Chelsey', 'Kostya'));
// console.log(hostGuest.call(place2, ...guests, 'Chelsey', 'Kostya'));
