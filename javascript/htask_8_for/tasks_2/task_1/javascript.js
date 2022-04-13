let startCode = "A".charCodeAt(0)

for (let i = 0; i < 5; i++) {
  startCode = 'A'.charCodeAt() + i;
  var row = String.fromCharCode(startCode)

  for (let j = 0; j < 5; j++) {
    startCode += 1
    row += `${String.fromCharCode(startCode)}`
  }
  document.write(`${row}</br>`);
}
