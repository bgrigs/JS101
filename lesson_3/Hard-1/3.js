// Given the following similar sets of code, what will each code snippet print?

// A)

// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // one is one
// console.log(`two is: ${two}`); // two is two
// console.log(`three is: ${three}`); // three is three

//  Due to variable shadowing, local version of one two and three are created. When they are reassigned, there is no effect on the global variables

// B)

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // one is one
// console.log(`two is: ${two}`); // two is two
// console.log(`three is: ${three}`); // three is three

// As with the first snippet, this version of messWithVars has three parameters that shadow their global counterparts.
// Likewise, it only performs reassignments to local variables so that the values that are logged are the values of the global one, two and three variables.

// Though this detail has no outcome on the final output, it's important to note that the local variables of one, two and three are being reassigned to brand new arrays.
// AKA They don't use any of the references that were passed to the function when it was invoked on line 11.


// C

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is two
console.log(`two is: ${two}`); // two is three
console.log(`three is: ${three}`); // three is one

// As with the first two snippets, this version of messWithVars has three parameters that shadow their global counterparts.
// Unlike the other two snippets, this version invokes the splice method on each of its arguments.
// splice is a destructive operation and will mutate the arrays that are being passed into messWithVars.

// Because arrays are passed by reference, when the messWithVars function executes splice, the changes to each array will be seen outside of the function's invocation.
// So, when the values for the one, two and three global variables are logged on lines 13 to 15, the mutated arrays are what get printed.

// Each splice invocation deletes the first element in the array that it's called on and inserts a new string value in its place.

