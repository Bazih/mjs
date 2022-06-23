const numbers = [-20, -10, 0, 10, 20, 30];

function randomSort(array) {
  return array.sort(() => 0.5 - Math.random());
};

console.log(randomSort(numbers));
