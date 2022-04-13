const compNum = Math.floor(Math.random()*9+1);
const userNum1 = parseInt(prompt('Enter 1-10:'))
const userNum2 = parseInt(prompt('Enter 1-10:'))
 document.write (`${compNum}`);

if (userNum1 === compNum && userNum1 > userNum2) {
  alert ('Win userNum1')
} else if (userNum2 === compNum && userNum2 > userNum1) {
  alert ('Win userNum2')
} else {
  alert ('Loose everybody')
}
