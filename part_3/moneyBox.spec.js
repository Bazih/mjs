import { MoneyBox } from './MoneyBox.js';

describe('MoneyBox::', () => {
  let box;

  beforeEach(() => {
    box = new MoneyBox();
  });

  it('without calling the addCoins method, you cannot add a coin', () => {
    box.coins = 5;
    expect(box.getAmount()).toEqual(0);
  });

  it('When created, there are no coins in the MoneyBox', () => {
    expect(box.getAmount()).toEqual(0);
  });

  it('should added a new coin to box by calling addCoin method', () => {
    box.addCoin();
    expect(box.getAmount()).toEqual(1);
  });

  it('should return amount coins by by calling getAmount method', () => {
    box.addCoin();
    expect(box.getAmount()).toEqual(1);
  });
});
