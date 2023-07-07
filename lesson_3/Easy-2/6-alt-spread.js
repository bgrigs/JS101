let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// flintstones = [].concat(...flintstones);

let newFlint = [];

newFlint = newFlint.concat(...flintstones);

console.log(newFlint);

