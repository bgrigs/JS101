const readline = require('readline-sync');

let monthlyPayment;
let standardIntRate;
let promoAnswer;
let promoMonthlyPayment;
let promoRate;
let promoDurationMonths;

const MESSAGES = {
  welcome: 'Welcome to the Mortgage Calculator',
  loanAmountRequest: 'How much is your loan?',
  loanDurationRequest: 'What is the duration of your loan in MONTHS?',
  invalidNum: 'Please enter a positive number greater than zero.',
  promoRequest: 'Does your loan include a promotional interest period?',
  promoRateRequest: 'What is the promotional rate?',
  promoPeriodRequest: 'What is the length of the promotional period in MONTHS?',
  invalidPromoPeriod: 'Promo duration length must be less than the total loan duration.',
  invalidAnswerWarning: 'Invalid Answer.',
  yesOrNo: `Enter 'y' for yes and 'n' for no.`,
  standardIntRequest: 'What is your standard interest rate?',
  interestRateFormat: 'If 5% write 5, if 10%, write 10',
  oneOrGreater: 'Please enter a positive number of 1 or greater',
  anotherCalc: 'Would you like to make another loan calculation?'
};

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
  console.log(MESSAGES['welcome']);

  console.log(MESSAGES['loanAmountRequest']);
  let loanAmount = readline.prompt();

  while (invalidNumber(loanAmount)) {
    console.log(MESSAGES['invalidNum']);
    loanAmount = readline.prompt();
  }

  console.log(MESSAGES['loanDurationRequest']);
  let monthDuration = readline.prompt();

  while (invalidNumber(monthDuration)) {
    console.log(MESSAGES['invalidNum']);
    monthDuration = readline.prompt();
  }

  askPromo();
  validatePromo();

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

  console.log('\n' + MESSAGES['anotherCalc']);
  console.log(MESSAGES['yesOrNo']);
  let runAgain = readline.prompt().toLowerCase();

  while (invalidAnswer(runAgain)) {
    console.log(`${MESSAGES['invalidAnswerWarning']} ${MESSAGES['yesOrNo']}`);
    runAgain = readline.prompt().toLowerCase();
  }

  if (runAgain === 'n') {
    break;
  } else {
    console.clear();
  }
}

function askPromo() {
  console.log(MESSAGES['promoRequest']);
  console.log(MESSAGES['yesOrNo']);
  promoAnswer = readline.prompt().toLowerCase();
}

function validatePromo() {
  while (invalidAnswer(promoAnswer)) {
    console.log(`${MESSAGES['invalidAnswerWarning']} ${MESSAGES['yesOrNo']}`);
    promoAnswer = readline.prompt().toLowerCase();
  }
}

function getInterestRate() {
  console.log(MESSAGES['standardIntRequest']);
  console.log(MESSAGES['interestRateFormat']);
  standardIntRate = readline.prompt();
  validateStandardInt();
}

function validateStandardInt() {
  while (invalidIntRate(standardIntRate)) {
    console.log(MESSAGES['invalidNum']);
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
  console.log(MESSAGES['promoRateRequest']);
  console.log(MESSAGES['interestRateFormat']);
  promoRate = readline.prompt();
  validatePromoRate();
}

function validatePromoRate() {
  while (invalidIntRate(promoRate)) {
    console.log(MESSAGES['invalidNum']);
    promoRate = readline.prompt();
  }
}

function getPromoDuration() {
  console.log(MESSAGES['promoPeriodRequest']);
  promoDurationMonths = readline.prompt();
}

function validatePromoDuration(totalMonthDuration) {
  while (invalidNumber(promoDurationMonths)) {
    console.log(MESSAGES['oneOrGreater']);
    promoDurationMonths = readline.prompt();
  }

  while (Number(promoDurationMonths) >= totalMonthDuration) {
    console.log(MESSAGES['invalidPromoPeriod']);
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
// after re-reading meterial: while it's usually good for functions to either have side effects OR return a value, when gettings user input it's okay for a function to do both