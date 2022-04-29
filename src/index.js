import 'material-icons/iconfont/material-icons.css';
import './sass/main.scss';

import * as CommentsApi from './js/CommentsApi';
import { renderComments } from './js/renderComments';
import { LoadMoreBtn } from './js/LoadMoreBtn';

const loadMoreBtn = new LoadMoreBtn({
  selector: '.load-more-btn',
  className: 'd-none',
  onClick: () => loadComments().catch(err => console.log(err)),
  isHide: true,
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
