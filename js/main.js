const getRandomNumberInt = function (value1, value2) {
  const low = Math.ceil(Math.min(Math.abs(value1), Math.abs(value2)));
  const hight = Math.floor(Math.max(Math.abs(value1), Math.abs(value2)));
  return Math.floor(Math.random() * (hight - low + 1)) + low;
  // алгоритм функции взял тут: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
};

getRandomNumberInt(10, 100);

const getRandomNumberFloat = function (value1, value2, float = 1) {
  const low = Math.min(Math.abs(value1), Math.abs(value2));
  const hight = Math.max(Math.abs(value1), Math.abs(value2));
  const result = Math.random() * (hight - low) + low;
  return +result.toFixed(float);
};

getRandomNumberFloat(1.19, 1.191);
