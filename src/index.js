import throttle from 'lodash.throttle';
import 'material-icons/iconfont/material-icons.css';
import './sass/main.scss';

import * as CommentsApi from './js/CommentsApi';
import { renderComments } from './js/renderComments';
import { LoadMoreBtn } from './js/LoadMoreBtn';
import { getRefs } from './js/getRefs';
const { backToTopBtn } = getRefs();

const loadMoreBtn = new LoadMoreBtn({
  selector: '.load-more-btn',
  className: 'd-none',
  onClick: () => loadComments().catch(err => console.log(err)),
  isHide: true,
});

window.addEventListener('scroll', throttle(showBackToTopBtn, 500));

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

function loadComments() {
  return CommentsApi.getComments().then(({ comments, hasNextPage }) => {
    renderComments(comments);

    if (hasNextPage) {
      loadMoreBtn.hide();
    }
  });
}

loadComments()
  .then(() => {
    loadMoreBtn.show();
  })
  .catch(err => console.log(err));

function showBackToTopBtn() {
  const { scrollY } = window;

  if (scrollY > 1000) {
    backToTopBtn.classList.remove('d-none');
  } else {
    backToTopBtn.classList.add('d-none');
  }
}
