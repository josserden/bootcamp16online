import { images } from './data/images.js';

const gallery = document.querySelector('.image-gallery');

renderGallery(images);

function renderGallery(array) {
  const markup = array.reduce(
    (acc, image) =>
      acc +
      `<li>
          <img
            class="lazyload"
            src="../images/lqip-image.jpeg"
            data-src="../images/${image}"
            alt="cat"
            width="900"
            height="800"
          />
      </li>`,
    '',
  );

  gallery.insertAdjacentHTML('beforeend', markup);
}
