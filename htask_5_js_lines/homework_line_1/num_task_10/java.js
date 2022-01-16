const seriesLength = parseInt(prompt('Enter how many minutes goes one series'));
const seriesNum = parseInt(prompt('Enter num of Series'));
const lengthHoursOfSeries = Math.floor((seriesLength*seriesNum)/60);

document.write(`'You will need ${lengthHoursOfSeries} hours'`)
