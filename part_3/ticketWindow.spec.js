import { TicketWindow } from './ticketWindow.js';

describe('TicketWindow', () => {
  let ticketWindow;
  beforeEach(() => {
    ticketWindow = new TicketWindow();
  });

  describe('createEvent', () => {
    it('should return ID new event when arguments valid', () => {
      ticketWindow.createEvent('Concert', 500);
      expect(ticketWindow.name).toMatch('Concert');
      expect(ticketWindow.cost).toEqual(500);
    });

    it('should error if not exists first and second arguments', () => {
      expect(() => ticketWindow.createEvent())
        .toThrow('There should be the name of the event and the cost of one ticket');    
    });
  });

  describe('buyTicket', () => {
    it('should added a new ticket to the box office', () => {
      ticketWindow.createEvent('Concert', 500);

      expect(ticketWindow.soldTickets).toEqual([]);
      expect(ticketWindow.cashBox).toEqual(0);

      const id = ticketWindow.buyTicket('Concert');
      expect(ticketWindow.soldTickets).toContain(id);
      expect(ticketWindow.cashBox).toEqual(500);
    });
  });

  describe('returnTicket', () => {
    it('should remove id from array and subtract the cost of the ticket from the cash box when id exists', () => {
      ticketWindow.createEvent('Concert', 500);
      const id = ticketWindow.buyTicket('Concert');
      expect(ticketWindow.soldTickets).toContain(id);
      expect(ticketWindow.cashBox).toEqual(500);

      ticketWindow.returnTicket(id);
      expect(ticketWindow.soldTickets).toEqual([]);
      expect(ticketWindow.cashBox).toEqual(0);
    });

    it('should info message when id not exists', () => {
      ticketWindow.createEvent('Concert', 500);
      const id = ticketWindow.buyTicket('Concert');
      expect(ticketWindow.soldTickets).toContain(id);
      expect(ticketWindow.cashBox).toEqual(500);

      ticketWindow.returnTicket(210101);
      expect(ticketWindow.soldTickets).toContain(id);
      expect(ticketWindow.cashBox).toEqual(500);
    });
  });
});
