//проверяет валидность формы
const setFormValidation = () => {
  const MIN_TITLE_LENGTH = 30;
  const MAX_TITLE_LENGTH = 100;
  const MAX_PRICE_VALUE = 1000000;
  const titleInput = document.querySelector('#title');
  const priceInput = document.querySelector('#price');
  const typeInput = document.querySelector('#type');
  const roomsInput = document.querySelector('#room_number');
  const guestsInput = document.querySelector('#capacity');
  const timeInInput = document.querySelector('#timein');
  const timeOutInput = document.querySelector('#timeout');
  const timeInOptions = timeInInput.querySelectorAll('option');
  const timeOutOptions = timeOutInput.querySelectorAll('option');

  // получает минимальную цену в зависимости от типа жилья
  const getTypePrice = (type) => {
    switch(type) {
      case 'palace' : return '10000';
      case 'flat' : return '1000';
      case 'house' : return '5000';
      case  'bungalow' : return '0';
      case  'hotel' : return '3000';
    }
  };

  //проверка соответствия количества гостей и комнат
  const isGuestValidity = () => {
    const rooms = roomsInput.value;
    const guests = guestsInput.value;
    if ( guests>rooms&&guests!=='0'&&rooms!=='100') {guestsInput.setCustomValidity(`Не более ${rooms} гостя`);
    } else if (rooms === '100' && guests !=='0') {guestsInput.setCustomValidity('Это не для гостей');
    } else if (rooms !=='100' && guests === '0') {guestsInput.setCustomValidity('Нужно 100 комнат');
    } else { guestsInput.setCustomValidity('');
    }
    guestsInput.reportValidity();
  };

  titleInput.setAttribute('minlength',`${MIN_TITLE_LENGTH}`);
  titleInput.setAttribute('maxlength',`${MAX_TITLE_LENGTH}`);
  priceInput.setAttribute('max', `${MAX_PRICE_VALUE}`);
  priceInput.setAttribute('min', `${getTypePrice(typeInput.value)}`);
  priceInput.placeholder = getTypePrice(typeInput.value);

  //меняет плэйсхолдер и мин границу у поля ввода цены
  typeInput.addEventListener('change', () => {
    priceInput.setAttribute('min', `${getTypePrice(typeInput.value)}`);
    priceInput.placeholder = getTypePrice(typeInput.value);
  });

  //кастомная валидация поля описание объявления
  titleInput.addEventListener('input', () => {
    const valueLength = titleInput.value.length;
    if (valueLength < MIN_TITLE_LENGTH) {
      titleInput.setCustomValidity(`Введите ещё ${MIN_TITLE_LENGTH - valueLength } симв.`);
    } else if (valueLength > MAX_TITLE_LENGTH) {
      titleInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`);
    } else {
      titleInput.setCustomValidity('');
    }
    titleInput.reportValidity();
  });

  //кастомная валидация поля ввода цены
  priceInput.addEventListener('input', () => {
    const minPriceValue = getTypePrice(typeInput.value);
    const priceValue = priceInput.value;
    if (priceValue < minPriceValue) {
      priceInput.setCustomValidity(`Минимальная цена ${minPriceValue} руб.`);
    } else if (priceValue > MAX_PRICE_VALUE) {
      priceInput.setCustomValidity(`Максимальная цена ${MAX_PRICE_VALUE} руб.`);
    } else {
      priceInput.setCustomValidity('');
    }
    priceInput.reportValidity();
  });

  //валидация полей rooms & guests
  guestsInput.value = '1';
  guestsInput.addEventListener('change',isGuestValidity);
  roomsInput.addEventListener('change',isGuestValidity);

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

export {setFormValidation};
