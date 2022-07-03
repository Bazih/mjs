module.exports.Ship = (function () {
  function Ship () {
    this.id;
    this.color = 'white';
    this.isRepaired = false;
    this.genId = () => {
      const min = 100000;
      const max = 999999;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  }

  return {
    ship: function() {return new Ship()},
  };
}())
