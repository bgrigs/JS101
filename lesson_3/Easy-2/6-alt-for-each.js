let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let newFlint = [];

flintstones.forEach(element => {
  newFlint = newFlint.concat(element);
});

console.log(newFlint);