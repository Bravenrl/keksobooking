const getRandomNumberInt = function (value1, value2) {
  const low = Math.ceil(Math.min(Math.abs(value1), Math.abs(value2)));
  const hight = Math.floor(Math.max(Math.abs(value1), Math.abs(value2)));
  return Math.floor(Math.random() * (hight - low + 1)) + low;
  // алгоритм функции взял тут: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
};


const getRandomNumberFloat = function (value1, value2, float = 1) {
  const low = Math.min(Math.abs(value1), Math.abs(value2));
  const hight = Math.max(Math.abs(value1), Math.abs(value2));
  const result = Math.random() * (hight - low) + low;
  return +result.toFixed(float);
};

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

const getRandomArrayElement = (elements) => elements[getRandomNumberInt(0,elements.length-1)];  //Случайные элементы из массива

const getRandomArrayNonRepeat = (elements) => {                                                    //Массив случайной длины с неповторяющимися элементами
  const arrayNonRepeat = new Array(getRandomNumberInt(0,elements.length-1)).fill(null);            // Как-то кривоватое исполнение, но только так придумал.
  const sortArrayNonRepeat = new Array();  // тут объявлал через let, но линт ругается, хотя вроде массив мы меняем потом.
  for (let i=0; i<=arrayNonRepeat.length-1; i++) {
    const random = getRandomArrayElement(elements);
    arrayNonRepeat[i] = (arrayNonRepeat.every((value) => value!==random)) ? random : 0;
  }
  for (let j=0; j<=arrayNonRepeat.length-1; j++) {
    if (arrayNonRepeat[j]!==0) {
      sortArrayNonRepeat.push(arrayNonRepeat[j]);
    }
  }
  return sortArrayNonRepeat;
};

const getImgAvatarNumber = () => (avatarImgNumber<=8) ? `img/avatars/user0${avatarImgNumber++}.png` : ''; //Номер фото

const offerPhoto = new Array(getRandomNumberInt(0,10)).fill(null).map(() => getRandomArrayElement(PHOTOS)); // в ТЗ массив случайной длинны, но поставил до 10. больше как-то многовато

const createOfferNiarby = () => {
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

const similarOfferNiarby = new Array(OFFER_NIARBY_COUNT).fill(null).map(() => createOfferNiarby()); //создает массив объектов

similarOfferNiarby;

