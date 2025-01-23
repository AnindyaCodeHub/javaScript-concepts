const myObj = {
  firstName: "Anindyasundar",
  lastName: "Jana",
};

const getDetails = function (homeTown, favFood) {
  console.log(
    `My name is ${this.firstName} ${this.lastName}. I am from ${homeTown}. I like ${favFood}`
  );
};

const personObj = {
  firstName: "Himanshu",
  lastName: "Kumar",
};

const myFunc = getDetails.bind(myObj, "Belda"); // Typical bind method
myFunc("Biriyani");

// Now the goal is to achieve the similar behaviour using our own custom bind method (myBind in this case).

Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const myFuncNew = getDetails.myBind(myObj, "Belda");
myFuncNew("Biriyani");
