function foo() {

}

const bar = () => {

}

function adder(base) {
  return function(num) {
    return base + num;
  }
}

function callMeLater(callback) {
  setTimeout(callback, 1000);
}

const store = foo;


