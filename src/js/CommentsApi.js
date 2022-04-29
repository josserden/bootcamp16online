const BASE_URL = 'https://624dade777abd9e37c7c8930.mockapi.io/';

const totalComment = 100;
const limit = 25;
const totalPages = Math.ceil(totalComment / limit);
let page = 1;

export function getComments() {
  const params = new URLSearchParams({
    page,
    limit,
  });

  const url = `${BASE_URL}/comments?${params}`;

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
