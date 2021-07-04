import { makeRsetAllButton } from './form-action.js';

const form = document.querySelector('.ad-form');
const fieldsetForms = form.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapSelects = mapFilter.querySelectorAll('select');
const mapFieldset = mapFilter.querySelector('fieldset');
const mapFieldsetInputs = mapFieldset.querySelectorAll('input');

// делает неактивную форму
const makesFormUnactive = () => {
  form.classList.add('ad-form--disabled');
  fieldsetForms.forEach((item) => {
    item.setAttribute('disabled','true');
    const fieldInputs = item.querySelectorAll('input');
    fieldInputs.forEach((input)=>{if (input)
    {input.setAttribute('disabled','true');}
    });
    const fieldSelects = item.querySelectorAll('select');
    fieldSelects.forEach((select)=> {if (select)
    {select.setAttribute('disabled','true');}
    });
    const fieldButtons = item.querySelectorAll('button');
    fieldButtons.forEach((button)=> {if (button)
    {button.setAttribute('disabled','true');}
    });
  });
  mapFilter.classList.add('ad-form--disabled');
  mapSelects.forEach((select) => {
    select.setAttribute('disabled','true');
  });
  mapFieldsetInputs.forEach((input) => {
    input.setAttribute('disabled','true');
  });
  mapFieldset.setAttribute('disabled','true');
};


// делает активную форму
const makesFormActive = () => {
  form.classList.remove('ad-form--disabled');
  fieldsetForms.forEach((item) => {
    item.removeAttribute('disabled');
    const fieldInputs = item.querySelectorAll('input');
    fieldInputs.forEach((input)=>{if (input)
    {input.removeAttribute('disabled');}
    });
    const fieldSelects = item.querySelectorAll('select');
    fieldSelects.forEach((select)=> {if (select)
    {select.removeAttribute('disabled');}
    });
    const fieldButtons = item.querySelectorAll('button');
    fieldButtons.forEach((button)=> {if (button)
    {button.removeAttribute('disabled');}
    });
  });
  mapFilter.classList.remove('ad-form--disabled');
  mapSelects.forEach((select) => {
    select.removeAttribute('disabled');
  });
  mapFieldsetInputs.forEach((input) => {
    input.removeAttribute('disabled');
  });
  mapFieldset.removeAttribute('disabled');
  makeRsetAllButton();
};


export {makesFormUnactive, makesFormActive};
