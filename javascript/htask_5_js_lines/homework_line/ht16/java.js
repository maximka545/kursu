let phrase = prompt('Enter word:');
let codePhrase = '';

for (var i = 0; i < phrase.length; i++) {
  shift = +3
  code = phrase[i].charCodeAt();
  newCode = (code - 65 + shift) % 26 + 65;
  codePhrase = codePhrase + String.fromCodePoint(newCode);
}

alert('Your coded phrase is'+ codePhrase)

// var symbol = prompt("Symbol", "");
//  var shift =  +prompt("shift","2");
//  var code = symbol.charCodeAt(0);
//  var newCode = (code - 65 + shift) % 26 + 65;
//  var newSymbol = String.fromCharCode(newCode);
//  document.write("New symbol = " + newSymbol);
