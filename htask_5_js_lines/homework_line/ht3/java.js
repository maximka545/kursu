const tovar1 = parseInt(prompt('Enter tovar1:'));
const amountOfTovar1 = parseInt(prompt('Enter amount tovar1:'));
const priceTovar1 = tovar1 * amountOfTovar1;

const tovar2 = parseInt(prompt('Enter tovar2:'));
const amountOfTovar2 = parseInt(prompt('Enter amount tovar2:'));
const priceTovar2 = tovar2 * amountOfTovar2;

document.write(`'Tovar1:'${priceTovar1}, 'Tovar2:'${priceTovar2},'Total:'${priceTovar1+priceTovar2}`)
