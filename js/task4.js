// todo Нотатки

/*
 * Напиши клас Notes, який управляє колекцією нотаток у властивості items. Нотатка -  це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якій зберігатиметься об'єкт із пріоритетами.
{
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high'
}
 */

/*
 * Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).
 */

class Notes {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
  };

  constructor(items = []) {
    this.items = items;
  }

  findElement(element) {
    return this.items.find(item => item.text === element);
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    const element = this.findElement(text);
    if (!element) return console.log('Not found text!!!');

    this.items = this.items.filter(element => element.text !== text);
  }

  updatePriority(text, newPriority) {
    const element = this.findElement(text);
    if (element) {
      element.priority = newPriority;
    }
  }
}

const myNotes = new Notes();

myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });

myNotes.addNote({
  text: 'Моя вторая заметка',
  priority: Notes.Priority.NORMAL,
});

myNotes.removeNote('Моя первая заметка');
myNotes.removeNote('hahaha');

myNotes.updatePriority('Моя вторая заметка', Notes.Priority.HIGH);
console.table(myNotes.items);
