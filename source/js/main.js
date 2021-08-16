import {MANIFESTO_YA, MANIFESTO_DONT, MANIFESTO_FOR, MANIFESTO_EXCLAMATION, MANIFESTO_QUESTION} from './const.js';

const form = document.querySelector(`form`);
const resultScreen = document.querySelector(`.result`);
const MANIFESTS = [
  MANIFESTO_YA,
  MANIFESTO_DONT,
  MANIFESTO_FOR,
  MANIFESTO_EXCLAMATION,
  MANIFESTO_QUESTION
];

const header = document.querySelector(`.page-main__header`);
const BOOK_IMAGES_NUMBER = 5;
const randomNumber = Math.floor(Math.random() * BOOK_IMAGES_NUMBER) + 1;
header.style.backgroundImage = `url('./img/book-${randomNumber}.jpg')`;

form.addEventListener(`submit`, (evt) => {
  evt.preventDefault();

  for (let i = 1; i <= 5; i++) {
    const number = Number(form.querySelector(`#number-${i}`).value);
    const result = resultScreen.querySelector(`#result-${i}`);
    const hint = resultScreen.querySelector(`#result-${i} + .result__hint`);

    result.textContent = number ? MANIFESTS[i - 1][number - 1].text : ``;
    hint.textContent = number ? MANIFESTS[i - 1][number - 1].source : ``;

    // if (i < 4) {
    //   console.log(result.textContent.split(' ')[0])
    // } else {
    //   console.log(result.textContent.slice(-1))
    // }
  }
});

form.addEventListener(`reset`, () => {
  const results = Array.from(resultScreen.querySelectorAll(`.result__block`));
  results.forEach((result) => {
    const blocks = Array.from(result.children);
    blocks.forEach((block) => block.textContent = ``);
  });
});

const randomValueButton = form.querySelector(`#random-value`);
randomValueButton.addEventListener(`click`, () => {
  for (let i = 1; i <=5; i++) {
    form.querySelector(`#number-${i}`).value = Math.floor(Math.random() * MANIFESTS[i - 1].length + 1);
  }
})

const modal = document.querySelector('.modal');
const openButton = document.querySelector('.js-open-modal');
const closeButton = modal.querySelector('.close');

openButton.addEventListener('click', () => {
  modal.classList.add('opened');
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('opened');
});
