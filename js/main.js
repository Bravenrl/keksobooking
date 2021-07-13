import './map.js';
import './image.js';
import {getData} from './api.js';
import {showAlert} from './utils.js';
import {onSubmitOfferForm} from './form-action.js';
import {makeFilterFormActive} from './form-active.js';
import { onChangeFilterForm, showSimilarOffers } from './map-filter.js';
import { debounce } from './utils/debounce.js';


const RERENDER_DELAY = 500;
const ALERT_MESSAGE = 'При загрузке данных произошла ошибка';

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
    message = ALERT_MESSAGE;
    showAlert(message);
  });

onSubmitOfferForm();


