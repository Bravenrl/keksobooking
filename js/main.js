import {setFormValidation} from './form-validation.js';
import {createUsualMarker} from './map.js';
import {getData} from './api.js';
import {showAlert} from './utils.js';
import {setOfferFormSubmit } from './form-action.js';

const SIMILAR_OFFERS_COUNT = 10;


setFormValidation();

//отрисовывает полученные данные на карте или окно с ошибкой
getData(
  (similarOffers) => {
    similarOffers.slice(0, SIMILAR_OFFERS_COUNT)
      .forEach((offer) => {
        createUsualMarker(offer);
      });
  },
  (message) => {
    message = 'При загрузке данных произошла ошибка';
    showAlert(message);
  });


setOfferFormSubmit();
