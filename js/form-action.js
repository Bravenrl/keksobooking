import { sendData } from './api.js';
import { setDefaultValues } from './form-validation.js';
import { resetMainPinMarker } from './map.js';
import { isEscEvent } from './utils.js';

const body = document.querySelector('body');
const offerForm = document.querySelector('.ad-form');
const successTamplate = document.querySelector('#success').content.querySelector('.success');
const errorTamplate = document.querySelector('#error').content.querySelector('.error');
const resetButton = document.querySelector('.ad-form__reset');
const mapForm = document.querySelector('.map__filters');


//Сбрасывает значения страницы
const resetAll = () => {
  offerForm.reset();
  setDefaultValues();
  mapForm.reset();
  resetMainPinMarker();
};

//действия для события Esc
const onShowMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeMessageWindow();
  }
};

//удаляет форму
function closeMessageWindow () {
  const message = body.querySelector('.success');
  body.lastChild.remove();
  document.removeEventListener('keydown', onShowMessageEscKeydown);
  document.removeEventListener('click', closeMessageWindow);
  if (message) {
    resetAll();
  }
}

//показывает ообщение об успешном создании объявления или об ошибке
function showMessageWindow (tamplate) {
  const message = body.appendChild(tamplate);
  document.addEventListener('keydown', onShowMessageEscKeydown);
  document.addEventListener('click', closeMessageWindow);
  if (message.className==='error') {
    message.querySelector('.error__button').addEventListener('click', closeMessageWindow);
  }
}

//делает кнопку которая сбрасывает значения страницы
const makeResetAllButton = () => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetAll();
  });
};

//обрабатывет submit формы и отправляет данные
const setOfferFormSubmit = () => {
  offerForm.addEventListener ('submit', (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    sendData (
      data,
      () => showMessageWindow(successTamplate),
      () => showMessageWindow(errorTamplate),
    );
  });
};

export {setOfferFormSubmit, makeResetAllButton};


