const readline = require('readline-sync');

let monthlyPayment;
let standardIntRate;
let promoAnswer;
let promoMonthlyPayment;
let promoRate;
let promoDurationMonths;

let invalidNumberMsg = 'Please enter a positive number greater than zero.';
let invalidAnswerWarning = 'Invalid Answer.';
let invalidAnswerMsg = `Enter 'y' for yes and 'n' for no.`;
let interestRateMsg = 'If 5% write 5, if 10%, write 10';
let oneOrGreaterMsg = 'Please enter a positive number of 1 or greater';

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

function invalidAnswer(answer) {
  return answer !== 'y' && answer !== 'n';
}

while (true) {
  console.log('Welcome to the Mortgage Calculator');

  console.log('How much is your loan?');
  let loanAmount = readline.prompt();

  while (invalidNumber(loanAmount)) {
    console.log(invalidNumberMsg);
    loanAmount = readline.prompt();
  }

  console.log('What is the duration of your loan in MONTHS?');
  let monthDuration = readline.prompt();

  while (invalidNumber(monthDuration)) {
    console.log(invalidNumberMsg);
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
    validatePromoDuration(monthDuration);
    getInterestRate();
    calcInterest(loanAmount, monthDuration);
    calcPromo(loanAmount, monthDuration);
    displayMonthlyPromoPayment();
    displayMonthlyPayAfterPromo(monthDuration);
  }

  console.log('\nWould you like to make another loan calculation?');
  console.log(invalidAnswerMsg);
  let runAgainAnswer = readline.prompt().toLowerCase();

  while (invalidAnswer(runAgainAnswer)) {
    console.log(`${invalidAnswerWarning} ${invalidAnswerMsg}`);
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
  console.log(invalidAnswerMsg);
  promoAnswer = readline.prompt().toLowerCase();

  validatePromo();
}

function validatePromo() {
  while (invalidAnswer(promoAnswer)) {
    console.log(`${invalidAnswerWarning} ${invalidAnswerMsg}`);
    promoAnswer = readline.prompt().toLowerCase();
  }
}

function getInterestRate() {
  console.log('What is your standard interest rate?');
  console.log(interestRateMsg);
  standardIntRate = readline.prompt();
  validateStandardInt();
}

function validateStandardInt() {
  while (invalidIntRate(standardIntRate)) {
    console.log(invalidNumberMsg);
    standardIntRate = readline.prompt();
  }
}

function calcInterest(loan, months) {
  let annualIntRate = Number(standardIntRate) / 100;
  let monthlyIntRate = annualIntRate / 12;

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
  console.log(interestRateMsg);
  promoRate = readline.prompt();
  validatePromoRate();
}

function validatePromoRate() {
  while (invalidIntRate(promoRate)) {
    console.log(invalidNumberMsg);
    promoRate = readline.prompt();
  }
}

function getPromoDuration() {
  console.log('What is the length of the promotional period in MONTHS?');
  promoDurationMonths = readline.prompt();
}

function validatePromoDuration(totalMonthDuration) {
  while (invalidNumber(promoDurationMonths)) {
    console.log(oneOrGreaterMsg);
    promoDurationMonths = readline.prompt();
  }

  while (Number(promoDurationMonths) >= totalMonthDuration) {
    console.log('Promo duration length must be less than the total loan duration.');
    console.log(`${oneOrGreaterMsg} (but less than the full loan duration).`);
    promoDurationMonths = readline.prompt();
  }
}

function calcPromo(loan, months) {
  let promoAnnualIntRate = Number(promoRate) / 100;
  let promoMonthlyIntRate = promoAnnualIntRate / 12;

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
// is displayMonthlyPayAfterPromo() correct? does it need to be adjusted to reflect the amount paid during the promo period?