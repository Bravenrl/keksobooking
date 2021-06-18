import {getRandomNumberFloat, getRandomNumberInt, getRandomArrayElement, getRandomArrayNonRepeat} from './utils.js';
const OFFER_NIARBY_COUNT = 10;

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'];

const CHECK_IN_OUT = [
  '12:00',
  '13:00',
  '14:00'];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

let avatarImgNumber = 1;

const getImgAvatarNumber = () => (avatarImgNumber<=10) ? `img/avatars/user0${avatarImgNumber++}.png` : ''; //Номер фото

const createOfferNiarby = () => {
  const offerPhoto = new Array(getRandomNumberInt(0,10)).fill(null).map(() => getRandomArrayElement(PHOTOS));
  const author = new Object();
  author.avatar = getImgAvatarNumber();
  const location = new Object();
  location.lat = getRandomNumberFloat(35.65, 35.7, 5);
  location.lng = getRandomNumberFloat(139.7, 139.8, 5);
  const offer = new Object();
  offer.title = 'Лучшее Предложение';
  offer.address = `${location.lat}, ${location.lng}`;
  offer.price = getRandomNumberInt(0,100000);
  offer.type = getRandomArrayElement(TYPE);
  offer.rooms = getRandomNumberInt(1,10);
  offer.guests = getRandomNumberInt(1,50);
  offer.checkin = getRandomArrayElement(CHECK_IN_OUT);
  offer.checkout = getRandomArrayElement(CHECK_IN_OUT);
  offer.features = getRandomArrayNonRepeat(FEATURES);
  offer. description = 'Великолепный выбор';
  offer. photos = offerPhoto;

  return {author, offer, location};
};

const similarOffersNiarby = new Array(OFFER_NIARBY_COUNT).fill(null).map(() => createOfferNiarby()); //создает массив объектов


export {similarOffersNiarby};
