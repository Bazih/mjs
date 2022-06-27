Array.prototype.shuffle = function () {
  return this.sort(() => 0.5 - Math.random());
};

const numbers = [-20, -10, 0, 10, 20, 30];
console.log(numbers.shuffle());
console.log(numbers.shuffle());
