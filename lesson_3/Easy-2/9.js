// Back in the stone age (before CSS), we used spaces to align things on the screen.
// If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

let title = "Flintstone Family Members";

let titleLength = title.length;

let flintTableChar = 40;

let paddingNumber = Math.floor((flintTableChar - titleLength) / 2);

let padding = "";

for (let i = 1; i <= paddingNumber; i += 1) {
  padding += " ";
}

let centeredTitle = padding + title + padding;

console.log(centeredTitle);
