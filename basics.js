/**
 * Helper function to print some data to browser page
 * It will be ends up in html body as a html sring.
 */
function writeLn(data) {
  console.log(data);
}

// ---------------------------
// SIMPLE TYPES (Primitive)
// ---------------------------
// undefined
// null <-- special primitive
// bool
// number
// string

// ---------------------------
// STRUCTURAL TYPES
// ---------------------------
// Object
// Function
// Array

let a = null;

let b = 1;

let c = "This is a string";

let d = ["This", "Is", "array", 1, 2, 3, "asaSA", [], {}, a];

writeLn(typeof a); // object (thats the reason of this is special)
writeLn(typeof b); // number
writeLn(typeof c); // string
writeLn(typeof d); // object (every structural type basically an object)
writeLn(d instanceof Array); // true

// Structural type instalnce
// This is an object.
// You can access properties
// with . (dot) operator
const adam = {
  name: "Metal",
  age: 29,
};

writeLn(typeof adam.age); // number
writeLn(adam.age); // 29

/**
 * Function declaration. Its create a named function.
 * You cal call it like: hello('arg').
 * Same in python:
 * def hello(n):
 *  name = n
 *  print('Hello ' + name + '!!')
 */
function hello(n) {
  var name = n; // local variable
  writeLn(`Hello ${name}!!`);
}

// Function call
hello("Metal");

// -------------------------------------+
// Difference between var, let and const|
// -------------------------------------+

function varTest() {
  var x = 1;
  {
    var x = 2; // same variable!
    writeLn(x); // 2
  }
  writeLn(x); // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2; // different variable
    writeLn(x); // 2
  }
  writeLn(x); // 1
}

function constTest() {
  const x = 1;
  {
    const x = 2; // different variable
    writeLn(x); // 2
  }
  writeLn(x); // 1
}

writeLn("var test");
varTest();

writeLn("let test");
letTest();

writeLn("const test");
constTest();
