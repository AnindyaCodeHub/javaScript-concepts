//You have a funciton called sum as follows: sum(1)(2)(3)(4)...() and the output would be 10

//Solution
const sum = (a) => {
  return (b) => {
    if (b !== undefined) {
      return sum(a + b);
    }
    return a;
  };
};

//The above solution can also be written like this
// const sum = (a) => (b) => b !== undefined ? sum(a + b) : a;

console.log(sum(1)(2)(3)(4)());
