let amountOfMoneyUser = parseInt(prompt('Enter your how much money you have:'));
let priceOfProduct = parseInt(prompt('Enter price of product:'));
let missingOfMoney = priceOfProduct - amountOfMoneyUser;

if (amountOfMoneyUser === priceOfProduct) {
  document.write(`'You can buy this product'`)
} else {
  if (amountOfMoneyUser !== priceOfProduct) {
    document.write(`You have missing ${missingOfMoney} to buy this product`)
    }
}
