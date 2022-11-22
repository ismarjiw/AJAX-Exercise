'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  fetch('/fortune')
  .then((response) => response.json())
  .then((responseData) => {
    document.querySelector('#fortune-text').innerText = responseData;
  });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();
  
  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info

  const queryString = new URLSearchParams({zipcode:zipcode}).toString();
  const url = `/weather.json?${queryString}`;

  // don't know how to isolate forecast from dictionary

  fetch(url)
    .then((response) => response.text())
    .then((weatherData) => {
      document.querySelector('#weather-form').innerHTML = weatherData;
      });
    }
document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

  const formInputs = {
    melon_type: document.querySelector('#melon-type-field').value,
    qty: document.querySelector('#qty-field').value,
  };

  fetch('/order-melons.json', {
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      document.querySelector('#order-status').innerText = JSON.stringify(responseJson);
    });
};

document.querySelector('#order-form').addEventListener('submit', orderMelons);
