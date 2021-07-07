import { createSimpleMarker} from './map.js';

const createdOffers = new Array;
const filterForm = document.querySelector('.map__filters');
const housingTypeSelect = filterForm.querySelector('#housing-type');
const housingPriceSelect = filterForm.querySelector('#housing-price');
const housingRoomsSelect = filterForm.querySelector('#housing-rooms');
const housingGuestsSelect = filterForm.querySelector('#housing-guests');
const housingFeaturesFieldset = filterForm.querySelector('#housing-features');
const featuresInputs = housingFeaturesFieldset.querySelectorAll('input');

//устанавливает обработчик на форму
const setFilterForm = (showOffers) => {
  filterForm.addEventListener ('change', () => {
    showOffers();
  });
};

//устанавливает систему рейтинга для удобств
const getOfferFeauturesRank = (element) => {
  let rank = 0;
  featuresInputs.forEach((input) => {
    if ((input.checked)&&
    (element.offer.features)&&
    (element.offer.features.includes(input.value))) {
      rank+=1;
    }
  });
  return rank;
};

//сравнение объявлений по удобствам
const compareOfferFeautures = (offerA, offerB) => {
  const rankA = getOfferFeauturesRank(offerA);
  const rankB = getOfferFeauturesRank(offerB);
  return rankB - rankA;
};

// фильтрация для типа жилья
const makeFilterType = (element) => (element.offer.type === housingTypeSelect.value)||
(housingTypeSelect.value==='any');


// фильтрация для цены
const makeFiterPrice = (element) => {
  const price = element.offer.price;
  return ((housingPriceSelect.value==='middle')&&(price>=10000)&&(price<=50000))||
  ((housingPriceSelect.value==='low')&&(price<10000))||
  ((housingPriceSelect.value==='high')&&(price>50000))||
  (housingPriceSelect.value==='any');
};

// фильтрация для комнат
const makeFilterRoom = (element) => (+housingRoomsSelect.value === element.offer.rooms)||
(housingRoomsSelect.value==='any');

// фильтрация для гостей
const makeFilterGuest = (element) => (+housingGuestsSelect.value === element.offer.guests)||
(housingGuestsSelect.value==='any');

// фильтрация для всех поляй
const filterAll = (element) => makeFilterType(element)&&
makeFiterPrice(element)&&
makeFilterRoom(element)&&
makeFilterGuest(element);


// Показзывает объявлеиня по заданному фильтру
const showSimilarOffers = (similarOffers) => {
  createdOffers.forEach((offer)=>{offer.remove();
  });
  createdOffers.length = 0;

  similarOffers
    .slice()
    .sort(compareOfferFeautures)
    .filter(filterAll)
    .slice(0, 10)
    .forEach((offer) => {
      createdOffers.push(createSimpleMarker(offer));
    });
};


export {showSimilarOffers, setFilterForm};

