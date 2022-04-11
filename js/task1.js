// todo Майстерня коштовностей

/*
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю та розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.
 */

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],

  calcTotalPrice(stoneName) {
    const findElement = this.stones.find(({ name }) => name === stoneName);

    // if (!findElement) return 'Not found!!!';

    // return findElement.price * findElement.quantity;

    return findElement
      ? findElement.price * findElement.quantity
      : 'Not found!!!';
  },
};

// console.log(chopShop.calcTotalPrice('Emerald'));
// console.log(chopShop.calcTotalPrice('Diamond'));
// console.log(chopShop.calcTotalPrice('Sapphire'));
// console.log(chopShop.calcTotalPrice('Ruby'));
// console.log(chopShop.calcTotalPrice('Graphite'));

// C - create
// R - read
// U - update
// D - delete
