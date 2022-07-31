export const MoneyBox = function () {
  let coins = 0;
  this.addCoin = () => {
    coins += 1;
  };

  this.getAmount = () => {
    return coins;
  }
}
