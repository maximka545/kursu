const min = Math.floor(Math.random()*89+1);
const max = min + 10;
let userNum = parseInt(prompt('Enter 1-100:'))
 document.write (`min - ${min} </br> max - ${max}`);

if (userNum >= (min - 10) && userNum <= (max + 10)) {
  alert('Win')
} else {
  alert ('Loose')
}
