export const TicketWindow = function () {
  this.cashBox = 0;
  this.soldTickets = [];

  const genId = () => {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  this.createEvent = (eventName, costTicket) => {
    if (eventName === undefined || costTicket === undefined) {
      throw new Error('There should be the name of the event and the cost of one ticket');
    }
    this.name = eventName;
    this.cost = 500;
    this.cashBox = 0;
    this.soldTickets = [];
  };

  this.buyTicket = (eventName) => {
    this.cashBox += this.cost;
    const id = genId();
    this.soldTickets.push(id);
    return id;
  };

  this.returnTicket = (id) => {
    const foundId = this.soldTickets.find((x) => x === Number(id));
    if (foundId) {
      this.soldTickets = this.soldTickets.filter((x) => x !== Number(id));
      this.cashBox -= this.cost;
    }

    return 'Ticket not found.';
  };
};
