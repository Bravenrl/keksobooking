const ALERT_SHOW_TIME = 5000;
const ROOMS_DECLEN = ['комнат', 'комнаты', 'комната'];
const GUESTS_DECLEN = ['гостей', 'гостя'];

const AlertStyle = {
  zIndex: 200,
  position: 'absolute',
  left: '10%',
  top: '0%',
  right: '10%',
  height: '100px',
  padding: '10px 3px',
  fontSize: '30px',
  textAlign: 'center',
  lineHeight: '100px',
  backgroundColor: 'orange',
};

//падежи комнат
const getRoomEnding = (numberOfRoom) => {
  const number = numberOfRoom%10;
  if ((number===0) || (numberOfRoom>=5&&numberOfRoom<=20)) {
    return ROOMS_DECLEN[0];
  }
  if (number > 1 && number < 5) {
    return ROOMS_DECLEN[1];
  }
  if (number===1) {
    return ROOMS_DECLEN[2];
  }
};

//падежи гостей
const getGuestEnding = (numberOfItem) => {
  const number = numberOfItem%10;
  if (number===1) {
    return GUESTS_DECLEN[1];
  }
  return GUESTS_DECLEN[0];
};

//Показывает сообщение об ошибке запроса
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = AlertStyle.zIndex;
  alertContainer.style.position = AlertStyle.position;
  alertContainer.style.left = AlertStyle.left;
  alertContainer.style.top = AlertStyle.top;
  alertContainer.style.right = AlertStyle.right;
  alertContainer.style.height = AlertStyle.height;
  alertContainer.style.padding = AlertStyle.padding;
  alertContainer.style.fontSize = AlertStyle.fontSize;
  alertContainer.style.textAlign = AlertStyle.textAlign;
  alertContainer.style.lineHeight = AlertStyle.lineHeight;
  alertContainer.style.backgroundColor = AlertStyle.backgroundColor;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

//
const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {getGuestEnding, getRoomEnding, showAlert, isEscEvent};
