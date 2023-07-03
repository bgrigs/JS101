// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino');

console.log(flintstones);

// Alternate Solutions
flintstones = flintstones.concat('Big Dino');

console.log(flintstones);

flintstones[flintstones.length] = "Baby Dino";

console.log(flintstones);


