import { getData, sendData } from './api.js';
import { setDefaultValues } from './form-validation.js';
import { resetOfferFreviw } from './image.js';
import { showSimilarOffers } from './map-filter.js';
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
  resetOfferFreviw();
  setDefaultValues();
  mapForm.reset();
  resetMainPinMarker();
  getData((similarOffers) => showSimilarOffers(similarOffers));
};

//действия для события Esc
const onShowMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    onShowMessageClick();
  }
};

//удаляет форму
function onShowMessageClick () {
  const message = body.querySelector('.success');
  body.lastChild.remove();
  document.removeEventListener('keydown', onShowMessageEscKeydown);
  document.removeEventListener('click', onShowMessageClick);
  if (message) {
    resetAll();
  }
}

//показывает ообщение об успешном создании объявления или об ошибке
function showMessageWindow (tamplate) {
  const message = body.appendChild(tamplate);
  document.addEventListener('keydown', onShowMessageEscKeydown);
  document.addEventListener('click', onShowMessageClick);
  if (message.className==='error') {
    message.querySelector('.error__button').addEventListener('click', onShowMessageClick);
  }
}

//делает кнопку которая сбрасывает значения страницы
const onClickResetAllButton = () => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetAll();
  });
};

//обрабатывет submit формы и отправляет данные
const onSubmitOfferForm = () => {
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

export {onSubmitOfferForm, onClickResetAllButton};
