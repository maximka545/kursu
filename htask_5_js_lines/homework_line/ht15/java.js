let currentMounths = parseInt(prompt('Enter Num o f mounth:'));
let changeMounthsNum = parseInt(prompt('Enter num of n: '))
let whatNumOfMounth = (currentMounths - 1 + changeMounthsNum)%12+1;

document.write(`'res'${whatNumOfMounth}`)
