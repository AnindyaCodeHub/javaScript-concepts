const multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

const multiplyByTwo = multiply(2);
multiplyByTwo(5);

const multiplyByThree = multiply(3);
multiplyByThree(10);
