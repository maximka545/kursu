let a = parseInt(prompt('Enter number a:'));
let b = parseInt(prompt('Enter number b:'));
let prevA = a;
let c = prevA;


a = b;
b = c;
c = prevA;

document.write (`'c:'${c}`);
