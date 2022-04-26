import comments from '../data/comments.json';
import { dateFormat } from './helpers/dateFormat';
import { getRefs } from './getRefs';
import { renderMarkup } from './helpers/renderMarkup';
const { list } = getRefs();

const markup = ({ author, content, createdAt }) => `
        <div class="card">
          <div class="card-body">
            <span class="text-muted">Author</span>
            <h5 class="card-title">${author}</h5>
            <p class="card-text">${content}</p>
          </div>
          <div class="card-footer text-muted">posted at ${dateFormat(
            createdAt,
          )}</div>
        </div>`;

renderMarkup(markup, comments, list);
