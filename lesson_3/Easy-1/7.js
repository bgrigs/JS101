// Determine whether the name Dino appears in the strings below -- check each string separately:

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

// Alternate Solutions
console.log(str1.match('Dino') !== null);
console.log(str2.match('Dino') !== null);

console.log(str1.indexOf('Dino') > -1);
console.log(str2.indexOf('Dino') > -1);

