'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const request = new XMLHttpRequest(); //old school way

request.open('GET', 'https://restcountries.eu/rest/v2/name/india');

request.send();
console.log(request.responseText);

request.addEventListener('load', function () {
  console.log(this.responseText);
});
