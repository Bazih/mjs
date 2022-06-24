function filterByLength(array, start, end) {
  return array.filter((el) => el.length >= start && el.length <= end);
};

const fruits = ['orange', 'apple', 'banana', ''];

console.log(filterByLength(fruits, 0, 5));
console.log(filterByLength(fruits, 6, 6));
