//Here instead of adding event listeners to each li item, we are adding a single event listener to the parent div element (having id #category).
//This is possible beacuse of event bubbling.
//Example 1
document.querySelector("#category").addEventListener("click", (e) => {
  console.log("category parent clicked!!");
  console.log(e.target.id);
});

//Example 2: Here the use case is, when user types something in the input field (In Name input field), we should convert that to uppercase
// automatically.
document.querySelector("#form").addEventListener("keyup", (e) => {
  if (e.target.dataset.uppercase !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
