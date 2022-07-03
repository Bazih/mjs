const ShipyardModule = require('./ShipyarModule');
const ShipModule = require('./ShipModule');

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

MotorShipyard.prototype = ShipyardModule.Shipyard.shipyard();
SailingShipyard.prototype = ShipyardModule.Shipyard.shipyard();

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

MotorShip.prototype = ShipModule.Ship.ship();
SailingShip.prototype = ShipModule.Ship.ship();

const motorShipyard = new MotorShipyard();
const sailingShipyard = new SailingShipyard();
const tanker = motorShipyard.buildShip(5000, 'steel');
const tanker2 = motorShipyard.buildShip(4000, 'steel');
const sailingShip1 = sailingShipyard.buildShip(5, 500);
const newColorSailingShip = motorShipyard.repaintShip(sailingShip1, 'green');
const badTanker = motorShipyard.swapShip(sailingShip1, 100, 'aluminum');
const newTanker = motorShipyard.swapShip(tanker, 100, 'aluminum');
const repairedTanker = motorShipyard.repairShip(newTanker);
