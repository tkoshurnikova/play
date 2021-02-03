import {MANIFESTO_YA, MANIFESTO_FOR, MANIFESTO_DONT, MANIFESTO_EXCLAMATION, MANIFESTO_QUESTION} from './const.js';

const form = document.querySelector(`form`);
const result = document.querySelector(`.result`);
const MANIFESTO_YA_MAX = MANIFESTO_YA.length;
const MANIFESTO_DONT_MAX = MANIFESTO_DONT.length;
const MANIFESTO_FOR_MAX = MANIFESTO_FOR.length;
const MANIFESTO_EXCLAMATION_MAX = MANIFESTO_EXCLAMATION.length;
const MANIFESTO_QUESTION_MAX = MANIFESTO_QUESTION.length;

const header = document.querySelector(`.page-main__header`);
const BOOK_IMAGES_NUMBER = 5;
const randomNumber = Math.floor(Math.random() * BOOK_IMAGES_NUMBER) + 1;
header.style.backgroundImage = `url('./img/book-${randomNumber}.jpg')`;

form.addEventListener(`submit`, (evt) => {
  evt.preventDefault();

  const number1 = Number(form.querySelector(`#number-1`).value);
  const result1 = result.querySelector(`#result-1`);
  result1.textContent = number1 ? MANIFESTO_YA[number1 - 1].text : ``;

  const number2 = Number(form.querySelector(`#number-2`).value);
  const result2 = result.querySelector(`#result-2`);
  result2.textContent = number2 ? MANIFESTO_DONT[number2 - 1].text : ``;

  const number3 = Number(form.querySelector(`#number-3`).value);
  const result3 = result.querySelector(`#result-3`);
  result3.textContent = number3 ? MANIFESTO_FOR[number3 - 1].text : ``;

  const number4 = Number(form.querySelector(`#number-4`).value);
  const result4 = result.querySelector(`#result-4`);
  result4.textContent = number4 ? MANIFESTO_EXCLAMATION[number4 - 1].text : ``;

  const number5 = Number(form.querySelector(`#number-5`).value);
  const result5 = result.querySelector(`#result-5`);
  result5.textContent = number5 ? MANIFESTO_QUESTION[number5 - 1].text : ``;

  result.scrollIntoView({
    behavior: 'smooth'
  });
});

form.addEventListener(`reset`, () => {
  const results = Array.from(result.children);
  results.forEach((result) => {
    result.textContent = ``;
  })
});

const randomValueButton = form.querySelector(`#random-value`);
randomValueButton.addEventListener(`click`, () => {
  form.querySelector(`#number-1`).value = Math.floor(Math.random() * MANIFESTO_YA_MAX) + 1;
  form.querySelector(`#number-2`).value = Math.floor(Math.random() * MANIFESTO_DONT_MAX) + 1;
  form.querySelector(`#number-3`).value = Math.floor(Math.random() * MANIFESTO_FOR_MAX) + 1;
  form.querySelector(`#number-4`).value = Math.floor(Math.random() * MANIFESTO_EXCLAMATION_MAX) + 1;
  form.querySelector(`#number-5`).value = Math.floor(Math.random() * MANIFESTO_QUESTION_MAX) + 1;
})
