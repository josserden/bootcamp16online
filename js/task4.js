// todo Стрілочні функції

/*
 * Виконайте рефакторинг коду за допомогою стрілочних функцій. */

const createProduct = (object, callback) => {
  callback({ id: Date.now(), ...object });
};

const logProduct = product => console.log(product);

const logTotalPrice = product => console.log(product.price * product.quantity);

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
