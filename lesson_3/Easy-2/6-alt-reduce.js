let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);

console.log(flintstones);