let count = 0;
const getData = () => {
  //Mocking an API call
  console.log(`Fetching dta....${count++}`);
};

const debouncingMethod = (fn, delay) => {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const debouncedGetData = debouncingMethod(getData, 300);
