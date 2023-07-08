// Consider these two simple functions:
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?

bar(foo()); // "no"

// The value returned from the foo function is "yes" , and "yes" === "no" will be false.

