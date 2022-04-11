//todo Сховище

/*
 * Напиши клас Storage, який створює об'єкти для управління складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.

* Додай методи класу:

* getItems() - повертає масив товарів.
* addItem(item) - отримує новий товар та додає його до поточних.
* removeItem(item) - отримує товар і, якщо є, видаляє його з поточних.
 */

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
