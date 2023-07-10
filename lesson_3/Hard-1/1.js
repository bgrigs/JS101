// Will the following functions return the same results? Try to answer without running the code or looking at the solution.

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// These functions don't return the same thing. first() returns prop1: "hi there" while second() returns undefined.
// This is because semicolons in JavaScript are technically optional. However, when they're ommitted, JS will insert them where it thinks we need them.
// In second(), JS inserts a semicolon after the word return and that function returns undefined.

// Some developers rely on this behavior and write JavaScript code without semicolons.
// However, most developers consider it poor practice since you're relying on the engine to make decisions for you, and those decisions may not be what you intended.

