import { makeResetAllButton } from './form-action.js';

const form = document.querySelector('.ad-form');
const fieldsetForms = form.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapSelects = mapFilter.querySelectorAll('select');
const mapFieldset = mapFilter.querySelector('fieldset');

// делает неактивными все формы
const makeAllFormUnactive = () => {
  form.classList.add('ad-form--disabled');
  fieldsetForms.forEach((item) => {
    item.disabled = true;
  });
  mapFilter.classList.add('ad-form--disabled');
  mapSelects.forEach((select) => {
    select.disabled = true;
  });
  mapFieldset.disabled = true;
};


// делает активную форму подачи объявлений
const makeOfferFormActive = () => {
  form.classList.remove('ad-form--disabled');
  fieldsetForms.forEach((item) => {
    item.disabled = false;
  });
  makeResetAllButton();
};

// делает активную форму фильтрации меток карты
const makeFilterFormActive = () => {
  mapFilter.classList.remove('ad-form--disabled');
  mapSelects.forEach((select) => {
    select.disabled = false;
  });
  mapFieldset.disabled = false;
};


export {makeAllFormUnactive, makeOfferFormActive, makeFilterFormActive};
