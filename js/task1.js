//todo Коллбек функції
/*
 * Напишіть такі функції:

* createProduct(obj, callback) - приймає об'єкт товару без ID, а також коллбек. Функція створює об'єкт товару, додаючи унікальний ідентифікатор у властивість id і викликає коллбек передаючи йому створений об'єкт.
* logProduct(product) - коллбек, що приймає об'єкт продукту і логує його в консоль
* logTotalPrice(product) - коллбек, що приймає об'єкт продукту і логує загальну вартість товару в консоль
 */

function createProduct(object, callback) {
  const product = {
    ...object,
    id: Date.now(),
  };

  return callback(product);
}

function logProduct(product) {
  console.log(product);
}

function logTotalPrice({ price, quantity }) {
  console.log(price * quantity);
}

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
