export const renderMarkup = (markup, array, container) => {
  const data = array.map(markup).join('');

  container.insertAdjacentHTML('beforeend', data);
};
