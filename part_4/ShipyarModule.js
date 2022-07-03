module.exports.Shipyard = (function () {
  const wrongMessage = "Wrong ship type.";
  let ships = [];

  function Shipyard() {
    this.type = '';
    this.buildShip = function (ship) {
      ships.push(ship);
      return ship;
    };
    this.repairShip = function (ship) {
      if (!this.checkType(ship)) {
        return wrongMessage;
      }

      ship.isRepaired = true;
      return ship;
    };
    this.repaintShip = function(ship, color) {
      ship.color = color;
      return ship;
    };
    this.swapShip = function(ship, param1, param2) {
      if (!this.checkType(ship)) {
        return wrongMessage;
      }

      this.filterShips(ship);

      return this.buildShip(param1, param2);
    };
    this.filterShips = (ship) => {
      ships = ships.filter((el) => el.id !== ship.id);
    };
    this.checkType = function (ship) {
      return ship.type === this.type;
    };
  }

  return {
    shipyard: function() {return new Shipyard()},
  };
}())
