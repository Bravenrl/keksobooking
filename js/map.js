import {makeAllFormUnactive, makeOfferFormActive} from './form-active.js';
import { setFormValidation } from './form-validation.js';
import {createPopupOffer} from './popup.js';

const TOKYO = {
  lat: 35.691102,
  lng: 139.706763};

const addressInput=document.querySelector('#address');

makeAllFormUnactive();

const map = L.map('map-canvas')
  .on('load', () => {
    makeOfferFormActive();
    setFormValidation();
  })
  .setView(TOKYO,10);


L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  })
  .addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  TOKYO,
  {
    draggable: true,
    icon: mainPinIcon,
  },
).addTo(map);

// задает адресс по умолчанию и обработчик события
const defaultAddress = mainPinMarker.getLatLng();
addressInput.value=`${defaultAddress.lat.toFixed(5)}, ${defaultAddress.lng.toFixed(5)}`;
mainPinMarker.on('move', (evt) => {
  const newAddress = evt.target.getLatLng();
  addressInput.value=`${newAddress.lat.toFixed(5)}, ${newAddress.lng.toFixed(5)}`;
});

const resetMainPinMarker = () => {
  mainPinMarker.setLatLng(TOKYO);
};

// coздает обычные метки
const createSimpleMarker = ((element) => {
  const simplePinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const simplePinMarker = L.marker(
    element.location,
    {
      icon: simplePinIcon,
    },
  ).addTo(map)
    .bindPopup(createPopupOffer(element),
      {keepInView: true,
      });
  return simplePinMarker;
});


export {createSimpleMarker, resetMainPinMarker};

