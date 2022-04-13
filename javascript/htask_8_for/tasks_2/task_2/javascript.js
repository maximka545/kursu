let countFrom = parseInt(prompt("Enter first number"))
let countTo = parseInt(prompt("Enter last number"))

for (let i = 0; i < countTo; i = countFrom + 2 ) {
     if(countFrom % 2 === 1 ) {
         console.log(i);
     }
   }
