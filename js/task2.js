//todo Сховище

/*
 * Напиши клас Storage, який створює об'єкти для управління складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.

* Додай методи класу:

* getItems() - повертає масив товарів.
* addItem(item) - отримує новий товар та додає його до поточних.
* removeItem(item) - отримує товар і, якщо є, видаляє його з поточних.
 */

class Storage {
  constructor(items = []) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const findElement = this.items.find(element => element === item);

    if (!findElement) return console.log('Not found! ');

    this.items = this.items.filter(element => element !== item);
  }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

const items = storage.getItems();

storage.addItem('🍌');
storage.removeItem('🍋');
storage.removeItem('🔆');
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
