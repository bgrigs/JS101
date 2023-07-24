const readline = require('readline-sync');

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
  invalidInterest: 'Please enter a positive number. If 5% write 5, if 10%, write 10',
  oneOrGreater: 'Please enter a positive number of 1 or greater',
  anotherCalc: 'Would you like to make another loan calculation?'
};

while (true) {
  console.log(MESSAGES['welcome']);

  let loanAmount = getLoanAmount();

  let loanDuration = getLoanDuration();

  let standardIntRate = getInterestRate();

  let standardPayment = calcPayment(loanAmount, loanDuration, standardIntRate);

  let promoAnswer = askPromo();

  if (promoAnswer === 'n') {
    displayPayment(standardPayment, loanDuration);
  } else if (promoAnswer === 'y') {
    let promoRate = getPromoRate();
    let promoDuration = getPromoDuration(loanDuration);
    let promoPayment = calcPromoPayment(loanAmount, loanDuration, promoRate, promoDuration);
    displayPromoPayment(promoDuration, promoPayment);
    displayPaymentAfterPromo(standardPayment, loanDuration, promoDuration);
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

function getLoanAmount() {
  console.log(MESSAGES['loanAmountRequest']);
  let loanAmount = readline.prompt();

  while (invalidNumber(loanAmount)) {
    console.log(MESSAGES['invalidNum']);
    loanAmount = readline.prompt();
  }

  return loanAmount;
}

function getLoanDuration() {
  console.log(MESSAGES['loanDurationRequest']);
  let loanDuration = readline.prompt();

  while (invalidNumber(loanDuration)) {
    console.log(MESSAGES['invalidNum']);
    loanDuration = readline.prompt();
  }

  return Number(loanDuration);
}

function askPromo() {
  console.log(MESSAGES['promoRequest']);
  console.log(MESSAGES['yesOrNo']);
  let promoAnswer = readline.prompt().toLowerCase();

  while (invalidAnswer(promoAnswer)) {
    console.log(`${MESSAGES['invalidAnswerWarning']} ${MESSAGES['yesOrNo']}`);
    promoAnswer = readline.prompt().toLowerCase();
  }

  return promoAnswer;
}

function getInterestRate() {
  console.log(MESSAGES['standardIntRequest']);
  console.log(MESSAGES['interestRateFormat']);
  let standardIntRate = readline.prompt();

  while (invalidIntRate(standardIntRate)) {
    console.log(MESSAGES['invalidInterest']);
    standardIntRate = readline.prompt();
  }

  return standardIntRate;
}


function calcPayment(loan, months, intRate) {
  let annualIntRate = Number(intRate) / 100;
  let monthlyIntRate = annualIntRate / 12;
  let payment;

  if (Number(intRate) === 0) {
    payment = loan / months;
  } else {
    payment = loan * (monthlyIntRate /
    (1 - Math.pow((1 + monthlyIntRate), (-months))));
  }

  return payment;
}

function displayPayment(payment, duration) {
  console.log(`You will owe $${payment.toFixed(2)} for ${duration} month(s).`);
}

function getPromoRate() {
  console.log(MESSAGES['promoRateRequest']);
  console.log(MESSAGES['interestRateFormat']);
  let promoRate = readline.prompt();

  while (invalidIntRate(promoRate)) {
    console.log(MESSAGES['invalidNum']);
    promoRate = readline.prompt();
  }

  return promoRate;
}

function getPromoDuration(totalDuration) {
  console.log(MESSAGES['promoPeriodRequest']);
  let promoDuration = readline.prompt();

  while (invalidNumber(promoDuration)) {
    console.log(MESSAGES['oneOrGreater']);
    promoDuration = readline.prompt();
  }

  while (Number(promoDuration) >= totalDuration) {
    console.log(MESSAGES['invalidPromoPeriod']);
    promoDuration = readline.prompt();
  }

  return promoDuration;
}

function calcPromoPayment(loan, totalMonths, intRate, promoMonths) {
  let promoAnnualIntRate = Number(intRate) / 100;
  let promoMonthlyIntRate = promoAnnualIntRate / 12;
  let promoLoanAmount = (loan / totalMonths) * Number(promoMonths);
  let promoPayment;

  if (Number(intRate) === 0) {
    promoPayment = Number(promoLoanAmount) / Number(promoMonths);
  } else {
    promoPayment = Number(promoLoanAmount) * (promoMonthlyIntRate /
  (1 - Math.pow((1 + promoMonthlyIntRate), (-promoMonths))));
  }

  return promoPayment;
}

function displayPromoPayment(promoMonths, payment) {
  console.log(`During your promotional period, you will owe $${payment.toFixed(2)} for ${promoMonths} month(s).`);
}

function displayPaymentAfterPromo(payment, totalMonths, promoMonths) {
  console.log(`After the promotional period, you will owe $${payment.toFixed(2)} for ${totalMonths - promoMonths} month(s).`);
}

// Questions/Ideas
// is displayPaymentAfterPromo() mathmatically correct? does it need to be adjusted to reflect the amount paid during the promo period?
// make it so that the standard int rate has to be greater than 0?
