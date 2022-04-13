const amountOfMonths = parseInt(prompt('Enter how many months going courses'));
const hoursOfCourses = parseInt(prompt('Enter how much hours in week'));
const amountOfWeeks = amountOfMonths*7;
const totalHoursOfCourses = amountOfWeeks*hoursOfCourses;

document.write(`'totalHoursOfCourses${totalHoursOfCourses}'`)
