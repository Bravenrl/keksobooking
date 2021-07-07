import './map.js';
import {getData} from './api.js';
import {showAlert} from './utils.js';
import {setOfferFormSubmit} from './form-action.js';
import {makeFilterFormActive} from './form-active.js';
import { setFilterForm, showSimilarOffers } from './map-filter.js';
import { debounce } from './utils/debounce.js';

const RERENDER_DELAY = 500;

//отрисовывает полученные данные на карте или окно с ошибкой
getData(
  (similarOffers) => {
    showSimilarOffers(similarOffers);
    setFilterForm(debounce(()=>showSimilarOffers(similarOffers),
      RERENDER_DELAY,
    ));
    makeFilterFormActive();
  },
  (message) => {
    message = 'При загрузке данных произошла ошибка';
    showAlert(message);
  });

setOfferFormSubmit();
