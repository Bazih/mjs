const Square = function (width, height) {
  this.width = width;
  this.height = height;

  this.getArea = function () {
    return this.width * this.height;
  };

  this.getPerimeter = function () {
    return 2 * (this.width + this.height);
  };
};

const Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype = new Square();

const square = new Square(2, 2);
console.log(square.getPerimeter());
console.log(square.getArea());

const rect = new Rectangle(2, 5);
console.log(rect.getPerimeter());
console.log((rect.getArea()));
