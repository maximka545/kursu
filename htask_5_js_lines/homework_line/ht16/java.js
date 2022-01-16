let phrase = parseInt(prompt('Enter word:'));
let codePhrase = '';

for (var i = 0; i < phrase.length; i++) {
  codePhrase = codePhrase + String.fromCodePoint(phrase[i].charCodeAt() + 3);
}

alert('Your coded phrase is'+ codePhrase)

// var symbol = prompt("Symbol", "");
//  var shift =  +prompt("shift","2");
//  var code = symbol.charCodeAt(0);
//  var newCode = (code - 65 + shift) % 26 + 65;
//  var newSymbol = String.fromCharCode(newCode);
//  document.write("New symbol = " + newSymbol);
