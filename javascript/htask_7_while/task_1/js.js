let userNum = parseInt(prompt('Enter your num 3, 4, 5'));
const triangle = 3;
const qoudrangle = 4;
const pentagon = 5;

if (userNum === triangle) {
  document.write('Трикутник')
} else if (userNum === qoudrangle) {
  document.write('Чотирикутник')
} else {
  document.write('Пятикутник')
}
