let title = "Flintstone Family Members";

let titleLength = title.length;

let flintTableChar = 40;

let padding = Math.floor((flintTableChar - titleLength) / 2);

let centeredTitle = title.padStart(padding + titleLength);

console.log(centeredTitle);

