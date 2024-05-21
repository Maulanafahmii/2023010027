// Global Execution Context
var a = 10;

function foo() {
  // Function Execution Context (foo)
  var b = 20;

  function bar() {
    // Function Execution Context (bar)
    var c = 30;
    console.log(a, b, c); // Output: 10 20 30
  }

  bar();
}

foo();
