let amountOfRentInMonth = parseInt(prompt('Enter amount of Rent in Month:'));
let amountOfMoney = parseInt(prompt('Enter amount of Money you have:'));
let monthsYouCanRent = amountOfMoney/amountOfRentInMonth;
let years = Math.floor(monthsYouCanRent/12);
let months = monthsYouCanRent - years*12;

document.write(`'Mounthes${monthsYouCanRent}','years${years}','mounts${months}'`)
