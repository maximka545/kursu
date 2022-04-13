const compNumber = Math.floor(Math.random()*4+1);
let userNum = parseInt(prompt('Enter 1-5 :'));
let tries = 2;

while (tries > 0) {
  if (userNum === compNumber) {

    document.write(`Win`);
    break;
  } else {
    tries--;
      document.write(`You have + ${tries} + tries`);
      userNum = parseInt(prompt('Enter 1- 5:'));
      if (userNum === compNumber) {
        tries--;
      document.write(`Win`)
      break;
      }
    }
  document.write(`Loose`);
  break;
}
