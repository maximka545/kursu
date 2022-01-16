let numberOfMounths = parseInt(prompt('Enter number of Mounths:'));
let years = Math.floor(numberOfMounths/12);
let mounths = numberOfMounths - (years*12);

document.write(`${years}'years'-${mounths}'mounths'`);
