import { createSimpleMarker} from './map.js';

const OFFER_QUANTITY = 10;

const createdOffers = new Array;
const filterForm = document.querySelector('.map__filters');
const housingTypeSelect = filterForm.querySelector('#housing-type');
const housingPriceSelect = filterForm.querySelector('#housing-price');
const housingRoomsSelect = filterForm.querySelector('#housing-rooms');
const housingGuestsSelect = filterForm.querySelector('#housing-guests');
const housingFeaturesFieldset = filterForm.querySelector('#housing-features');

//устанавливает обработчик на форму
const onChangeFilterForm = (showOffers) => filterForm.addEventListener ('change', showOffers);


// фильтрация для типа жилья
const checkFilterType = (element) => (element.offer.type === housingTypeSelect.value)||
(housingTypeSelect.value==='any');


// фильтрация для цены
const checkFiterPrice = (element) => {
  const price = element.offer.price;
  return ((housingPriceSelect.value==='middle')&&(price>=10000)&&(price<=50000))||
  ((housingPriceSelect.value==='low')&&(price<10000))||
  ((housingPriceSelect.value==='high')&&(price>50000))||
  (housingPriceSelect.value==='any');
};

// фильтрация для комнат
const checkFilterRoom = (element) => (+housingRoomsSelect.value === element.offer.rooms)||
(housingRoomsSelect.value==='any');

// фильтрация для гостей
const checkFilterGuest = (element) => (+housingGuestsSelect.value === element.offer.guests)||
(housingGuestsSelect.value==='any');

// фильтрация для удобств
const checkFilterFeatures = (element) => {
  const featuresInputs = housingFeaturesFieldset.querySelectorAll('.map__checkbox:checked');
  let result = false;
  let counter = 0;

  if (featuresInputs.length===0) {
    result=true;
  } else if (element.offer.features) {
    featuresInputs.forEach((imput) => {
      (element.offer.features.includes(imput.value))?counter++ : counter;
    });
    result = (counter===featuresInputs.length);
  }
  return result;
};

// фильтрация для всех полей
const filterAll = (element) => checkFilterType(element)&&
checkFiterPrice(element)&&
checkFilterRoom(element)&&
checkFilterGuest(element)&&
checkFilterFeatures(element);


// Показзывает объявлеиня по заданному фильтру
const showSimilarOffers = (similarOffers) => {
  createdOffers.forEach((offer) => {
    offer.remove();
  });
  createdOffers.length = 0;

  similarOffers
    .filter(filterAll)
    .slice(0, OFFER_QUANTITY)
    .forEach((offer) => {
      createdOffers.push(createSimpleMarker(offer));
    });
};


export {showSimilarOffers, onChangeFilterForm};

