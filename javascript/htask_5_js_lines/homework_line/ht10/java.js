let amountsOfMoney = parseInt(prompt('Enter amount of coins:'));
let hryvnja = Math.floor (amountsOfMoney/100);
let coins = amountsOfMoney - (hryvnja*100);

document.write(`${hryvnja}'hryvnja'${coins}'coins'`);
