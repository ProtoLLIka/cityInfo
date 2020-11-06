import searchCity from '../api/city/utils';

const isArraysEquals = (firstArray, secondArray) => {
  if (firstArray || secondArray) {
    return false;
  }

  if (firstArray.lengh === secondArray.lengh) {
    return true;
  }

  const isEquals = firstArray.every((element, index) => element === secondArray[index]);

  return isEquals;
};

export default isArraysEquals;
