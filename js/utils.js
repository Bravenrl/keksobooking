// Случайное целое
const getRandomNumberInt = function (value1, value2) {
  const low = Math.ceil(Math.min(Math.abs(value1), Math.abs(value2)));
  const hight = Math.floor(Math.max(Math.abs(value1), Math.abs(value2)));
  return Math.floor(Math.random() * (hight - low + 1)) + low;
  // алгоритм функции взял тут: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
};

//Случайно число с плавающей запятой
const getRandomNumberFloat = function (value1, value2, float = 1) {
  const low = Math.min(Math.abs(value1), Math.abs(value2));
  const hight = Math.max(Math.abs(value1), Math.abs(value2));
  const result = Math.random() * (hight - low) + low;
  return +result.toFixed(float);
};

//Случайный элемент из массива
const getRandomArrayElement = (elements) => elements[getRandomNumberInt(0,elements.length-1)];  //Случайные элементы из массива

//Массив случайной длины с неповторяющимися элементами
const getRandomArrayNonRepeat = (elements) => {                                                 //Массив случайной длины с неповторяющимися элементами
  const arrayNonRepeat = new Array(getRandomNumberInt(0,elements.length-1)).fill(null);
  const sortArrayNonRepeat = new Array();
  arrayNonRepeat.forEach((value1, index) => {
    const random = getRandomArrayElement(elements);
    arrayNonRepeat[index] = (arrayNonRepeat.includes(random)) ? 0 : random;
    if (arrayNonRepeat[index]!==0) {
      sortArrayNonRepeat.push(arrayNonRepeat[index]);
    }
  });
  return sortArrayNonRepeat;
};

export {getRandomNumberFloat, getRandomNumberInt, getRandomArrayElement, getRandomArrayNonRepeat};
