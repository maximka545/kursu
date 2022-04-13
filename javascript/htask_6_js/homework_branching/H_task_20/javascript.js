let cellNumber = parseInt(prompt("Cell number:"));
let userShot = parseInt(prompt('Enter your random in case of cellNumber'));
let comShipPosition = Math.floor(Math.random()*(cellNumber));

if (userShot === comShipPosition) {
  document.write('You win!')
  } else {
    document.write('Another time you will win!')
  }
