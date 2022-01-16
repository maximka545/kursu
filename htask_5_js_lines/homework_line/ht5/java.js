const currentSalary = parseInt(prompt('Enter your salary without Tax:'));
const TAX = 20/100;
const salaryWithTax = currentSalary - (currentSalary*TAX);

document.write (`'salaryWithTax:'${salaryWithTax}`);
