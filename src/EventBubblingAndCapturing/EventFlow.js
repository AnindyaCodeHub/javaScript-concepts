// Here we are adding event listener to all the divs, i.e Grand parent, Parent and Child divs and trying to check the flow of event.
// NOTE: As a third argument to addEventListener() method, we can pass a boolean flag (useCapture -> remember this name for reference) to
// dictate the event flow i.e it should be event capturing a.k.a trickling or event bubbling. If we don's pass this flag explicitely then
// by default it get's passed as false.

// NOTE: Actually event flows like a circle, at first event flows up -> down i.e event capturing or trickling then it goes from down -> up
// i.e event bubbling.

//Below code from line number 10 to 20 will perform event bubbling.
// document.querySelector("#grandparent").addEventListener("click", () => {
//   console.log("Grand parent clicked!!");
// });

// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("Parent clicked!!");
// });

// document.querySelector("#child").addEventListener("click", () => {
//   console.log("Child clicked!!");
// });

//Below code from line number 23 to 45 will perform event capturing or trickling.
// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("Grand parent clicked!!");
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent clicked!!");
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child clicked!!");
//   },
//   true
// );

// NOTE: By passing a combination of true and false to these 3 addEventListener() methods we can optimize the performance (We can control
// the flow of event, i.e we can decide which event should trigger first then what should be triggered and so on) or stop event propagation.
// For example check the code from line number 50 to 73.
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grand parent clicked!!");
  },
  true
); // capturing

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked!!");
  },
  false
); // bubbling

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child clicked!!");
    // e.stopPropagation(); // We can use this syntax to stop the event propagation.
  },
  false
); // bubbling
