const ALERT_SHOW_TIME = 5000;
const ROOMS = ['комнат', 'комнаты', 'комната'];
const GUESTS = ['гостей', 'гостя'];


//падежи комнат
const getRoomEnding = (numberOfRoom) => {
  const number = numberOfRoom%10;
  if ((number>=5) || (number===0) || (numberOfRoom>=11&&numberOfRoom<=20)) {
    return ROOMS[0];
  }
  if (number > 1 && number < 5) {
    return ROOMS[1];
  }
  if (number===1) {
    return ROOMS[2];
  }
};

//падежи гостей
const getGuestEnding = (numberOfItem) => {
  const number = numberOfItem%10;
  if (number===1) {
    return GUESTS[1];
  } else {
    return GUESTS[0];
  }
};

//Показывает сообщение об ошибке запроса
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 200;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '10%';
  alertContainer.style.top = '0%';
  alertContainer.style.right = '10%';
  alertContainer.style.height = '100px';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.lineHeight = '100px';
  alertContainer.style.backgroundColor = 'orange';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

//
const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {getGuestEnding, getRoomEnding, showAlert, isEscEvent};
