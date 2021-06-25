import {makesFormInactive, makesFormActive} from './form-active.js';
import {similarOffersNiarby} from './data.js';
import {createPopupOffer} from './popup.js';

const TOKYO = {
  lat: 35.691102,
  lng: 139.706763};

const addressInput=document.querySelector('#address');

makesFormInactive();

const map = L.map('map-canvas').on('load', () => {
  makesFormActive();
}).setView(TOKYO,10);


L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

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

//coздает обычные метки
const createUsualMarker = ((element) => {
  const usualPinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const usualPinMarker = L.marker(
    element.location,
    {
      icon: usualPinIcon,
    },
  ).addTo(map)
    .bindPopup(createPopupOffer(element),
      {keepInView: true,
      });
  return usualPinMarker;
});

similarOffersNiarby.forEach((similarOffer)=>{
  createUsualMarker(similarOffer);
});

