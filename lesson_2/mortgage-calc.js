const readline = require('readline-sync');

let monthlyPayment;
let standardIntRate;
let annualIntRate;
let monthlyIntRate;

let promoAnswer;
let promoMonthlyPayment;
let promoRate;
let promoAnnualIntRate;
let promoMonthlyIntRate;
let promoDurationMonths;

function invalidNumber(num) {
  return num.trimStart() === '' ||
  Number.isNaN(Number(num)) ||
  Number(num) <= 0;
}

function invalidIntRate(num) {
  return num.trimStart() === '' ||
  Number.isNaN(Number(num)) ||
  Number(num) < 0;
}

let invalidNumberMessage = 'Please enter a positive number greater than zero.';
let invalidAnswerMessage = `Invalid Answer. Enter 'y' for yes and 'n' for no.`;

function invalidAnswer(answer) {
  return answer !== 'y' && answer !== 'n';
}

while (true) {
  console.log('Welcome to the Mortgage Calculator');

  console.log('How much is your loan?');
  let loanAmount = readline.prompt();

  while (invalidNumber(loanAmount)) {
    console.log(invalidNumberMessage);
    loanAmount = readline.prompt();
  }

  console.log('What is the duration of your loan in MONTHS?');
  let monthDuration = readline.prompt();

  while (invalidNumber(monthDuration)) {
    console.log(invalidNumberMessage);
    monthDuration = readline.prompt();
  }

  askPromo();

  if (promoAnswer === 'n') {
    getInterestRate();
    calcInterest(loanAmount, monthDuration);
    displayMonthlyIntPayment(monthDuration);
  } else if (promoAnswer === 'y') {
    getPromoRate();
    getPromoDuration();
    getInterestRate();
    calcInterest(loanAmount, monthDuration);
    calcPromo(loanAmount, monthDuration);
    displayMonthlyPromoPayment();
    displayMonthlyPayAfterPromo(monthDuration);
  }

  console.log('\nWould you like to make another loan calculation?');
  console.log(`Enter 'y' for yes and 'n' for no.`);
  let runAgainAnswer = readline.prompt().toLowerCase();

  while (invalidAnswer(runAgainAnswer)) {
    console.log(invalidAnswerMessage);
    runAgainAnswer = readline.prompt().toLowerCase();
  }

  if (runAgainAnswer === 'n') {
    break;
  } else {
    console.clear();
  }
}

function askPromo() {
  console.log('Does your loan include a promotional interest period? ');
  console.log(`Enter 'y' for yes and 'n' for no.`);
  promoAnswer = readline.prompt().toLowerCase();

  while (invalidAnswer(promoAnswer)) {
    console.log(invalidAnswerMessage);
    promoAnswer = readline.prompt().toLowerCase();
  }
}

function getInterestRate() {
  console.log('What is your standard interest rate?');
  console.log('If 5% write 5, if 10%, write 10');
  standardIntRate = readline.prompt();
  validateStandardInt();
}

function validateStandardInt() {
  while (invalidIntRate(standardIntRate)) {
    console.log(invalidNumberMessage);
    standardIntRate = readline.prompt();
  }
}

function calcInterest(loan, months) {
  annualIntRate = Number(standardIntRate) / 100;
  monthlyIntRate = annualIntRate / 12;

  if (Number(standardIntRate) === 0) {
    monthlyPayment = Number(loan) / Number(months);
  } else {
    monthlyPayment = Number(loan) * (monthlyIntRate /
    (1 - Math.pow((1 + monthlyIntRate), (-Number(months)))));
  }
}

function displayMonthlyIntPayment(duration) {
  console.log(`You will owe $${monthlyPayment.toFixed(2)} for ${duration} months.`);
}

function getPromoRate() {
  console.log('What is the promotional rate?');
  console.log('If 5% write 5, if 10%, write 10');
  promoRate = readline.prompt();
  validatePromoRate();
}

function validatePromoRate() {
  while (invalidIntRate(promoRate)) {
    console.log(invalidNumberMessage);
    promoRate = readline.prompt();
  }
}

function getPromoDuration() {
  console.log('What is the length of the promotional period in MONTHS?');
  promoDurationMonths = readline.prompt();

  validatePromoDuration();
}

function validatePromoDuration() {
  while (invalidNumber(promoDurationMonths)) {
    console.log('Please enter a positive number of 1 or greater.');
    promoDurationMonths = readline.prompt();
  }
}

function calcPromo(loan, months) {
  promoAnnualIntRate = Number(promoRate) / 100;
  promoMonthlyIntRate = promoAnnualIntRate / 12;

  let promoLoanAmount = (Number(loan) / Number(months)) * Number(promoDurationMonths);

  if (Number(promoRate) === 0) {
    promoMonthlyPayment = Number(promoLoanAmount) / Number(promoDurationMonths);
  } else {
    promoMonthlyPayment = Number(promoLoanAmount) * (promoMonthlyIntRate /
  (1 - Math.pow((1 + promoMonthlyIntRate), (-promoDurationMonths))));
  }
}

function displayMonthlyPromoPayment() {
  console.log(`During your promotional period, you will owe $${promoMonthlyPayment.toFixed(2)} for ${promoDurationMonths} months.`);
}

function displayMonthlyPayAfterPromo(months) {
  console.log(`After the promotional period, you will owe $${monthlyPayment.toFixed(2)} for ${Number(months) - promoDurationMonths} months.`);
}

// Ideas for improvement:
// refactor, reduce # of global variables, etc
