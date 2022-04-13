let amountOfCoins = parseInt(prompt('Enter amount of coins you have'));
let coins5 = parseInt(prompt('Enter amount of coins you have by 5'));
let coins25 = parseInt(prompt('Enter amount of coins you have by 25'));
let coins50 = parseInt(prompt('Enter amount of coins you have by 50'));

let amountOfAllCoins = (coins5*5) + (coins25*25) + (coins50*50);
let hryvnja = Math.floor(amountOfAllCoins/100);
let coins = amountOfAllCoins - hryvnja*100;

document.write(`'amountOfAllCoins ${amountOfAllCoins}'- 'hryvnja${hryvnja}, coins${coins}'`)
