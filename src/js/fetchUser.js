const BASE_URL = 'https://api.github.com';

export const fetchUser = user => {
  return fetch(`${BASE_URL}/users/${user}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
};
