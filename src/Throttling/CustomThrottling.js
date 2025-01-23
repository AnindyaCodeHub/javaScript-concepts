let count = 0;
const getData = () => {
  //Mocking an API call
  console.log(`Fetching dta....${count++}`);
};

const throttlingMethod = (fn, delay) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const throttledGetData = throttlingMethod(getData, 300);
