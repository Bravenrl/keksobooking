import './map.js';
import {getData} from './api.js';
import {showAlert} from './utils.js';
import {onSubmitOfferForm} from './form-action.js';
import {makeFilterFormActive} from './form-active.js';
import { onChangeFilterForm, showSimilarOffers } from './map-filter.js';
import { debounce } from './utils/debounce.js';

const RERENDER_DELAY = 500;

//отрисовывает полученные данные на карте или окно с ошибкой
getData(
  (similarOffers) => {
    showSimilarOffers(similarOffers);
    onChangeFilterForm(debounce(()=>showSimilarOffers(similarOffers),
      RERENDER_DELAY,
    ));
    makeFilterFormActive();
  },
  (message) => {
    message = 'При загрузке данных произошла ошибка';
    showAlert(message);
  });

onSubmitOfferForm();

