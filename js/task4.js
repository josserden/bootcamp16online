// todo Нотатки

/*
 * Напиши клас Notes, який управляє колекцією нотаток у властивості items. Нотатка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якій зберігатиметься об'єкт із пріоритетами.
{
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high'
}
 */

/*
 * Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).
 */

const myNotes = new Notes([]);

myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: 'Моя вторая заметка',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote('Моя первая заметка');
console.log(myNotes.items);

myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
console.log(myNotes.items);
