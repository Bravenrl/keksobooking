// const getRandomNumberInt = function (value1, value2) {
//   const low = Math.ceil(Math.min(Math.abs(value1), Math.abs(value2)));
//   const hight = Math.floor(Math.min(Math.abs(value1), Math.abs(value2)));
//   return Math.floor(Math.random() * (hight - low + 1)) + low;
//   // алгоритм функции взял тут: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// };

// getRandomNumberInt(10, 100);

// const getRandomNumberFloat = function (value1, value2, float = 0) {
//   const low = Math.min(Math.abs(value1), Math.abs(value2)));
//   const hight = Math.min(Math.abs(value1), Math.abs(value2)));
//   const result = Math.random() * (hight - low + Math.pow(10, -float)) + low;
//   return Math.floor(result * Math.pow(10, float)) / Math.pow(10, float);
// };

// getRandomNumberFloat(2,1,5);

function getRandomPositiveFloat (a, b, digits = 1) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower) + lower;

  // И в конце с помощью метода toFixed любого числа в JavaScript
  // указать требуемое количество знаков после точки
  return result.toFixed(digits);
}
console.log(getRandomPositiveFloat(1.9, 1.91, 6));
