let array = [12, 3, 4, 78, 12, 3, 4,];
let is78
let result = 0;

for (var i = 0; i < array.length; i++) {
  if (array[i] === 78) {
    is78 = i;
  }
  if (i > 78) {
    result += array[i]
  }
};

    document.write(`${result}`)
