// show two different ways to put the expected "Four score and " in front of the string.

let famousWords = "seven years ago...";
// let fullQuote = `Four score and ${famousWords}`;

// let fullQuote = "Four score and ".concat(famousWords);

let addedWords = "Four score and ";

// let fullQuote = addedWords + famousWords;

let fullQuote = [addedWords, famousWords].join("");

console.log(fullQuote);

