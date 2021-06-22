//проверяет валидность формы
const setFormValidation = () => {
  const MIN_TITLE_LENGTH = 30;
  const MAX_TITLE_LENGTH = 100;
  const MAX_PRICE_VALUE = 1000000;
  const titleInput = document.querySelector('#title');
  const priceInput = document.querySelector('#price');
  const roomsInput = document.querySelector('#room_number');
  const guestsInput = document.querySelector('#capacity');

  //проверка соответствия количества гостей и комнат
  const isGuestValidity = (rooms, guests) => {
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


  //валидация полей rooms & guests
  guestsInput.value = '1';
  guestsInput.addEventListener('change', () => {isGuestValidity(roomsInput.value, guestsInput.value);});
  roomsInput.addEventListener('change', () => {isGuestValidity(roomsInput.value, guestsInput.value);});


};

export {setFormValidation};
