const multiply = function (x, y) {
  console.log(x * y);
};

const multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

// The below two way also it will work.
// const multiplyByTwo = multiply.bind(this, 2, 5);
// multiplyByTwo();

// const multiplyByTwo = multiply.bind(this);
// multiplyByTwo(2, 5);

const multiplyByThree = multiply.bind(this, 3);
multiplyByThree(10);
