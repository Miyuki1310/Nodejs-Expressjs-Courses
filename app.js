var time = 60;
function functionTest() {
  function increase() {
    return ++time;
  }
  return increase;
}

const result = functionTest();
console.log(result());
console.log(result());
console.log(result());
