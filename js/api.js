const GET_SERVER_ADDRESS = 'https://23.javascript.pages.academy/keksobooking/data';
const POST_SERVER_ADDRESS = 'https://23.javascript.pages.academy/keksobooking';

//Получает данные
const getData = (onSuccess, onError) => {
  fetch (GET_SERVER_ADDRESS)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error;
    })
    .then((offers) => {
      onSuccess(offers);
    })
    .catch ((err) => {
      onError(err);
    });
};

//Отправляет данные
const sendData = (body, onSuccess, onFail) => {
  fetch(POST_SERVER_ADDRESS, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};


export {getData, sendData};
