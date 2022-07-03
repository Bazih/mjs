const shipyardAndShipModule = (function () {
  function Shipyard() {
    this.ships = [];
    this.type = '';
    this.wrongMessage = "Wrong ship type.";
    this.buildShip = function (ship) {
      this.ships.push(ship);
      return ship;
    };
    this.repairShip = function (ship) {
      if (!this.checkType(ship)) {
        return this.wrongMessage;
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
        return this.wrongMessage;
      }

      this.filterShips(ship);

      return this.buildShip(param1, param2);
    };
    this.filterShips = (ship) => {
      this.ships = this.ships.filter((el) => el.id !== ship.id);
      return this.ships;
    };
    this.checkType = function (ship) {
      return ship.type === this.type;
    };
  };

  function Ship () {
    this.id;
    this.color = 'white';
    this.isRepaired = false;
    this.genId = () => {
      const min = 100000;
      const max = 999999;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  };

  return {
    shipyard: function() {return new Shipyard()},
    ship: function() {return new Ship()},
  };
}());

const MotorShipyard = function () {
  this.type = 'motor';
  this.buildShip = function (enginePower, caseMaterial) {
    const ship = new MotorShip(enginePower, caseMaterial);
    return Object.getPrototypeOf(this).buildShip(ship);
  };
};
const SailingShipyard = function () {
  this.type = 'sailing';
  this.buildShip = function (numberMasts, totalSailArea) {
    const ship = new SailingShip(numberMasts, totalSailArea);
    return Object.getPrototypeOf(this).buildShip(ship);
  };
};

MotorShipyard.prototype = shipyardAndShipModule.shipyard();
SailingShipyard.prototype = shipyardAndShipModule.shipyard();

const MotorShip = function (enginePower, caseMaterial) {
  this.id = this.genId();
  this.type = 'motor';
  this.enginePower = enginePower;
  this.caseMaterial = caseMaterial;
};

const SailingShip = function (numberMasts, totalSailArea) {
  this.id = this.genId();
  this.type = 'sailing';
  this.numberMasts = numberMasts;
  this.totalSailArea = totalSailArea;
};

MotorShip.prototype = shipyardAndShipModule.ship();
SailingShip.prototype = shipyardAndShipModule.ship();

const motorShipyard = new MotorShipyard();
const sailingShipyard = new SailingShipyard();
const tanker = motorShipyard.buildShip(5000, 'steel');
const tanker2 = motorShipyard.buildShip(4000, 'steel');
const sailingShip1 = sailingShipyard.buildShip(5, 500);
const newColorSailingShip = motorShipyard.repaintShip(sailingShip1, 'green');
const badTanker = motorShipyard.swapShip(sailingShip1, 100, 'aluminum');
const newTanker = motorShipyard.swapShip(tanker, 100, 'aluminum');
const repairedTanker = motorShipyard.repairShip(newTanker);
