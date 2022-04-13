// todo Toggle

/*
 * Напишіть клас Toggle, який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчанням значення властивості on має бути false.
 */

class Toggle {
  constructor({ isOpen = false } = {}) {
    this.on = isOpen;
  }

  toggle() {
    this.on = !this.on;
  }
}

const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

const firstBtn = document.querySelector('.first-btn');

firstBtn.addEventListener('click', event => {
  firstToggle.toggle();

  event.currentTarget.textContent = firstToggle.on ? 'відкрити' : 'закрити';
});

const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

const secondBtn = document.querySelector('.second-btn');

secondBtn.addEventListener('click', event => {
  secondToggle.toggle();

  event.currentTarget.textContent = secondToggle.on ? 'відкрити' : 'закрити';
});
