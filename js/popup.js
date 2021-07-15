import {getGuestEnding, getRoomEnding} from './utils.js';

const HousingType = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup');

const createPopupOffer = (offerElement) => {
  const offer = offerElement.offer;
  const author = offerElement.author;
  const similarOffer = similarOfferTemplate.cloneNode(true);
  const popupFeatures = similarOffer.querySelector('.popup__features');
  const popupPhotos = similarOffer.querySelector('.popup__photos');
  const popupTitle = similarOffer.querySelector('.popup__title');
  const popupAddress = similarOffer.querySelector('.popup__text--address');
  const popupPrice = similarOffer.querySelector('.popup__text--price');
  const popupType = similarOffer.querySelector('.popup__type');
  const popupCapacity = similarOffer.querySelector('.popup__text--capacity');
  const popupTime = similarOffer.querySelector('.popup__text--time');
  const popupDescription = similarOffer.querySelector('.popup__description');
  const popupAvatar = similarOffer.querySelector('.popup__avatar');

  //проверяет наличие данных
  const checkDataAvailability = (feautures, photos) => {
    if (!offer.title) {
      popupTitle.remove();
    } else {
      popupTitle.textContent = offer.title;
    }

    if (!offer.address) {
      popupAddress.remove();
    } else {
      popupAddress.textContent = offer.address;
    }

    if (!offer.price) {
      popupPrice.remove();
    } else {
      popupPrice.textContent = offer.price;
    }

    if (!offer.rooms|| !offer.guests) {
      popupCapacity.remove();
    } else {
      popupCapacity.textContent = `${offer.rooms} ${getRoomEnding(offer.rooms)} для ${offer.guests} ${getGuestEnding(offer.guests)}`;
    }

    if (!offer.checkin || !offer.checkout) {popupTime.remove();
    } else {
      popupTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    }

    if (!offer.description) {popupDescription.remove();
    } else {
      popupDescription.textContent = offer.description;
    }

    if (!author.avatar) {popupAvatar.remove();
    }
    else {
      popupAvatar.src = author.avatar;
    }

    if (!offer.features) {popupFeatures.remove();
    } else {
      feautures(offer.features);
    }

    if (!offer.photos) {
      popupPhotos.remove();
    } else {
      photos(offer.photos);
    }

    if (!offer.type) {
      popupType.remove();
    } else {
      popupType.textContent = HousingType[offer.type];
    }
  };


  //получает все доступные удобства
  const getFeatures = (offerFeatures) => {
    const features = offerFeatures.map((feature) => `popup__feature--${feature}`);
    popupFeatures.querySelectorAll('.popup__feature').
      forEach((item) => {
        const elementClass = item.classList;
        const lastClass = elementClass[elementClass.length-1];
        if (!features.includes(lastClass)) {
          item.remove();
        }
      });
  };

  //получает фото
  const getPhotos = (offerPhotos) => {
    offerPhotos.forEach ((item) => {
      const popupPhoto = popupPhotos.querySelector('.popup__photo').cloneNode(true);
      popupPhoto.src = item;
      popupPhotos.appendChild(popupPhoto);
    });
    popupPhotos.firstElementChild.remove();
  };


  checkDataAvailability(getFeatures, getPhotos);
  return similarOffer;
};

export {createPopupOffer};

