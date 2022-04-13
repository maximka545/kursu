let counter = 0;

for (var i = 0; i < 10; i++) {
  const word = prompt('Write words');
  if (word[0] === word[word.length - 1]) {
    counter++
  }
};

document.write(`counter`)
