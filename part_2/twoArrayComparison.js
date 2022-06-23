function isEqualArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let isEqual = false;

  for (let i = 0; i < arr1.length; i++) {
    isEqual = arr1[i] === arr2[i];
    if (!isEqual) break;
  }

  return isEqual;
};

const numbers1 = [-20, -10, 0, 10, 20, 30];
const numbers2 = [-20, -10, 0, 10, 20, 30];

console.log(isEqualArrays(numbers1, numbers2));
