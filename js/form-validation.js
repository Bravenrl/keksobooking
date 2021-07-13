//проверяет валидность формы
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;
const GUEST_DEFAULT_VAL = 1;

const HousingPrice = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
  hotel: 3000,
};

const Range = {
  minGuest: 0,
  maxRooms: 100,
};

const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const typeInput = document.querySelector('#type');
const roomsInput = document.querySelector('#room_number');
const guestsInput = document.querySelector('#capacity');
const timeInInput = document.querySelector('#timein');
const timeOutInput = document.querySelector('#timeout');
const timeInOptions = timeInInput.querySelectorAll('option');
const timeOutOptions = timeOutInput.querySelectorAll('option');

//валидация количества гостей и комнат
const onGuestChange = () => {
  const rooms = +roomsInput.value;
  const guests = +guestsInput.value;
  if ( guests>rooms&&guests!==Range.minGuest&&rooms!== Range.maxRooms) {
    guestsInput.style.borderColor = 'red';
    guestsInput.setCustomValidity(`Не более ${rooms} гостя`);
  } else if (rooms === Range.maxRooms && guests !== Range.minGuest) {
    guestsInput.style.borderColor = 'red';
    guestsInput.setCustomValidity('Это не для гостей');
  } else if (rooms !== Range.maxRooms && guests === Range.minGuest) {
    guestsInput.style.borderColor = 'red';
    guestsInput.setCustomValidity('Нужно 100 комнат');
  } else {
    guestsInput.style.borderColor = 'white';
    guestsInput.setCustomValidity('');
  }
  guestsInput.reportValidity();
};

//кастомная валидация поля ввода цены
const onPriceValid = () => {
  const minPriceValue = HousingPrice[typeInput.value];
  const priceValue = +priceInput.value;
  if (priceValue < minPriceValue) {
    priceInput.style.borderColor = 'red';
    priceInput.setCustomValidity(`Минимальная цена ${minPriceValue} руб.`);
  } else if (priceValue > MAX_PRICE_VALUE) {
    priceInput.style.borderColor = 'red';
    priceInput.setCustomValidity(`Максимальная цена ${MAX_PRICE_VALUE} руб.`);
  } else {
    priceInput.style.borderColor = 'white';
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
};

//кастомная валидация поля описание объявления
const onTitleInput = () => {
  const valueLength = titleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.style.borderColor = 'red';
    titleInput.setCustomValidity(`Введите ещё ${MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.style.borderColor = 'red';
    titleInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    titleInput.style.borderColor = 'white';
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
};
//установка значений по-умолчанию
const setDefaultValues = () => {
  priceInput.placeholder = HousingPrice[typeInput.value];
  guestsInput.value = GUEST_DEFAULT_VAL;
};

//валидация формы
const setFormValidation = () => {
  setDefaultValues();
  //валидация поля заголовка
  titleInput.addEventListener('input', onTitleInput);

  //валидация поля ввода цены
  priceInput.addEventListener('input', onPriceValid);
  typeInput.addEventListener('change', () => {
    onPriceValid();
    priceInput.placeholder = HousingPrice[typeInput.value];
  });

  //валидация полей rooms & guests
  guestsInput.addEventListener('change',onGuestChange);
  roomsInput.addEventListener('change',onGuestChange);

  //валидация времени заезда-выезда
  timeInInput.addEventListener('change', () => {
    timeOutOptions.forEach((option) => {
      (option.value===timeInInput.value)? option.selected = true : option.selected = false;
    });
  });
  timeOutInput.addEventListener('change', () => {
    timeInOptions.forEach((option) => {
      (option.value===timeOutInput.value)? option.selected = true : option.selected = false;
    });
  });
};

export {setFormValidation, setDefaultValues};
