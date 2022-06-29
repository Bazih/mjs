const Shipyard = function () {
  this.ships = [];
  this.wrongMessage = "Wrong ship type.";

  this.buildShip = function (...args) {
    let ship = {};
    if (this.type === 'motor') {
      ship = new MotorShip(args[0], args[1]);
    } else {
      ship = new SailingShip(args[0], args[1]);
    }
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

    this.ships = this.ships.filter((el) => el.id !== ship.id);

    return this.buildShip(param1, param2);
  };

  this.updateShips = (oldShip, newShip) => {
    this.ships = this.ships.filter((el) => el.id !== oldShip.id);
    this.ships.push(newShip);
    return newShip;
  };

  this.checkType = function (ship) {
    return ship.type === this.type;
  };
};

const MotorShipyard = function () {
  this.type = 'motor';
};
const SailingShipyard = function () {
  this.type = 'sailing';
};

MotorShipyard.prototype = new Shipyard();
SailingShipyard.prototype = new Shipyard();

const Ship = function () {
  this.id;
  this.color = 'white';
  this.isRepaired = false;
  this.genId = () => {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
};

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

MotorShip.prototype = new Ship();
SailingShip.prototype = new Ship();

const motorShipyard = new MotorShipyard();
const sailingShipyard = new SailingShipyard();
const tanker = motorShipyard.buildShip(5000, 'steel');
const tanker2 = motorShipyard.buildShip(4000, 'steel');
const sailingShip1 = sailingShipyard.buildShip(5, 500);
const newColorSailingShip = motorShipyard.repaintShip(sailingShip1, 'green');
const badTanker = motorShipyard.swapShip(sailingShip1, 100, 'aluminum');
const newTanker = motorShipyard.swapShip(tanker, 100, 'aluminum');
const repairedTanker = motorShipyard.repairShip(newTanker);
