import './sass/main.scss';

fetch('https://httpstat.us/503')
  .then(function (response) {
    console.log('200 - ok');
  })
  .catch(function (error) {
    console.log('Error : ' + error);
  });
