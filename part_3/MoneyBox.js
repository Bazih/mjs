const MoneyBox = function () {
  let coins = 0;
  this.addCoin = () => {
    coins += 1;
  };

  this.getAmount = () => {
    return coins;
  }
}

const box = new MoneyBox();

console.log(box.getAmount()); // 0
box.addCoin();
box.addCoin();
console.log(box.getAmount()); // 2
box.coins = 25;
console.log(box.getAmount()); // 2
