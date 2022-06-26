const TicketWindow = function () {
  this.cashBox = 0;
  this.soldTickets = [];

  const genId = () => {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  this.createEvent = (eventName, costTicket) => {
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
    const findeddId = this.soldTickets.find((x) => x === Number(id));
    if (findeddId) {
      this.soldTickets = this.soldTickets.filter((x) => x === Number(id));
      this.cashBox -= this.cost;
    }

    console.log('Ticket not found.');
  };
};

const ticketWindow = new TicketWindow();

ticketWindow.createEvent('Concert', 500);
console.log(ticketWindow);
const id = ticketWindow.buyTicket('Concert');
console.log(ticketWindow);
ticketWindow.buyTicket('Concert');
console.log(ticketWindow);
ticketWindow.returnTicket(id);
console.log('remove ticket');
console.log(ticketWindow);
