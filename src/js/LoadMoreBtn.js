export class LoadMoreBtn {
  #selector;
  #className;
  #onClick;

  constructor({ selector, className, onClick = () => null, isHide = false }) {
    this.#selector = document.querySelector(selector);
    this.#className = className;
    this.#onClick = onClick;

    if (isHide) this.hide();

    this.#bindEvents();
  }

  show() {
    this.#selector.classList.remove(this.#className);
  }

  hide() {
    this.#selector.classList.add(this.#className);
  }

  #bindEvents() {
    this.#selector.addEventListener('click', this.#onClick);
  }
}
