import {MANIFESTO_DONT, MANIFESTO_FOR} from './const.js';

const form = document.querySelector(`form`);
const result = document.querySelector(`.result`);
const MANIFESTO_DONT_MAX = MANIFESTO_DONT.length;
const MANIFESTO_FOR_MAX = MANIFESTO_FOR.length;

form.addEventListener(`submit`, (evt) => {
  evt.preventDefault();

  const number1 = Number(form.querySelector(`#number-1`).value);
  const result1 = result.querySelector(`#result-1`);
  result1.textContent = MANIFESTO_DONT[number1 - 1];

  const number2 = Number(form.querySelector(`#number-2`).value);
  const result2 = result.querySelector(`#result-2`);
  result2.textContent = MANIFESTO_FOR[number2 - 1];
});

form.addEventListener(`reset`, () => {
  const results = Array.from(result.children);
  results.forEach((result) => {
    result.textContent = ``;
  })
});

const randomValueButton = form.querySelector(`#random-value`);
randomValueButton.addEventListener(`click`, () => {
  form.querySelector(`#number-1`).value = Math.floor(Math.random() * MANIFESTO_DONT_MAX) + 1;
  form.querySelector(`#number-2`).value = Math.floor(Math.random() * MANIFESTO_FOR_MAX) + 1;
})
