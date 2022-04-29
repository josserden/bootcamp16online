const BASE_URL = 'https://624dade777abd9e37c7c8930.mockapi.io/';

let page = 1;
const totalComment = 100;
const limit = 50;
const totalPages = Math.ceil(totalComment / limit);

const url = `${BASE_URL}/comments?page=${page}&limit=${limit}`;

export function getComments() {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.statusText}`);
      }
      return response.json();
    })
    .then(comments => {
      page += 1;

      return {
        comments,
        hasNextPage: page > totalPages,
      };
    });
}
