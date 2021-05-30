const getRandomNumberInt = function (min, max) {
  if (max <= min) {
    return 'Ошибка: максимальное значениение больше или равно минимальному.';
  }
  if (min < 0) {
    return 'Ошибка: минимальное значение меньше ноля.';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // алгоритм функции взял тут: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
};

getRandomNumberInt(10, 100);

const getRandomNumberFloat = function (min, max, float) {
  float = float || 0;
  // Если принимаем параметры от пользователя - я бы написал так, чтобы понятнее было в чем ошибка;
  /* if (max <= min) {
  //   return 'Ошибка: максимальное значениение больше или равно минимальному.';
  // }
  // if (min < 0) {
  //   return 'Ошибка: минимальное значение меньше ноля.';
      } */
  if ((max <= min) || (min < 0)) { return 'Ошибка: недопустимый диапазон';
  }// условие, если принимаем параметры независимо от пользователя, просто чтобы было сообщение об ошибке;
  const result = Math.random() * (max - min + Math.pow(10, -float)) + min;
  return Math.floor(result * Math.pow(10, float)) / Math.pow(10, float);
  //return +result.toFixed(float); Изначально хотел применить данный метод, но браузер округлял результат.
  //и в принимаемых ниже параметрах результат мог получиться 1.192.
  //-------------------------------------------------------------------------------------------------------
  // const result = Math.random() * (max - min + Math.pow(10, -float)) + min;
  // return ((max <= min) || (min < 0))
  //   ? 'Ошибка: недопустимый диапазон'
  //   : Math.floor(result * Math.pow(10, float)) / Math.pow(10, float);
  // Можно так было бы избавиться от оператора if, заменив его тернальным оператором,
  // но при этом вычисления начинаются уже до проверки условия и лишний раз будут нагружать железо.
  // при этом в критерии Д17 требуется по возможности использовать тернальный оператор.
  // Не подскажешь, как правильно сделать?
};

getRandomNumberFloat(1.19, 1.191, 3);

