import { createSimpleMarker} from './map.js';

const OFFER_QUANTITY = 10;
const ANY_VALUE = 'any';

const PriceRange = {
  low: {
    from: 0,
    to: 10000,
  },
  middle: {
    from: 10000,
    to: 50000,
  },
  high: {
    from: 50000,
    to: Infinity,
  },
  any: {
    from: 0,
    to: Infinity,
  },
};

const createdOffers = [];
const filterForm = document.querySelector('.map__filters');
const housingTypeSelect = filterForm.querySelector('#housing-type');
const housingPriceSelect = filterForm.querySelector('#housing-price');
const housingRoomsSelect = filterForm.querySelector('#housing-rooms');
const housingGuestsSelect = filterForm.querySelector('#housing-guests');
const housingFeaturesFieldset = filterForm.querySelector('#housing-features');

//устанавливает обработчик на форму
const onChangeFilterForm = (showOffers) => filterForm.addEventListener ('change', showOffers);


// фильтрация для цены
const checkFilterPrice = (element) => {
  const price = element.offer.price;
  if (PriceRange[housingPriceSelect.value]) {
    return (price>=PriceRange[housingPriceSelect.value].from)&&
    (price<=PriceRange[housingPriceSelect.value].to);
  }
};

// фильтрация для типа жилья
const checkFilterType = (element) => (element.offer.type === housingTypeSelect.value)||
(housingTypeSelect.value===ANY_VALUE);
// фильтрация для комнат
const checkFilterRoom = (element) => (+housingRoomsSelect.value === element.offer.rooms)||
(housingRoomsSelect.value===ANY_VALUE);
// фильтрация для гостей
const checkFilterGuest = (element) => (+housingGuestsSelect.value === element.offer.guests)||
(housingGuestsSelect.value===ANY_VALUE);

//фильтрация для удобств
const checkFilterFeatures = (element) => {
  const featuresInputs = [...housingFeaturesFieldset.querySelectorAll('.map__checkbox:checked')];
  if (featuresInputs.length===0) {
    return true;
  } else if (element.offer.features) {
    return featuresInputs.every((input) => element.offer.features.includes(input.value));
  }
};

// фильтрация для всех полей
const filterAll = (element) => checkFilterType(element)&&
checkFilterPrice(element)&&
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

