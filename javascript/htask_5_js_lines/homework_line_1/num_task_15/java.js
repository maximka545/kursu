const lengthOfWall = parseInt(prompt("Enter length of wall"));
const higthOfWall = parseFloat(prompt("Enter higth of wall"));
const lengthOfWindow = parseInt(prompt("Enter length of window"));
const higthOfWindow = parseInt(prompt("Enter higth of window"));
const sOfWindow2 = (lengthOfWindow * higthOfWindow) * 2;
const sOfPaper = Math.ceil((lengthOfWall*higthOfWall) - sOfWindow2);

document.write(`'You will need ${sOfPaper} M2'`)
