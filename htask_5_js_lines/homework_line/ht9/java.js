let currentSeconds = parseInt(prompt('Enter seconds:'));
let currentHours = Math.floor(currentSeconds/3600);
let currentMinutes = Math.floor((currentSeconds%3600)/60);
let secondsNumber = currentSeconds%60;

document.write(`${currentHours},${currentMinutes},${secondsNumber}`)
