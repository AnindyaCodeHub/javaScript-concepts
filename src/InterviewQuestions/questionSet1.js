let str1 = "My name is Anindya and I work for Bosch";
let str2 = "Anindya and I work for Bosch My name is";

const findRotation = (str1, str2) => {
  let temp = str1.split(" ");

  for (let i = 0; i < temp.length; i++) {
    let word = temp[0];
    let slicedArray = temp.slice(1);

    modifiedArray = [...slicedArray, word];
    temp = modifiedArray;

    if (modifiedArray.toString().replaceAll(",", " ") === str2) {
      return true;
    }
  }
  return false;
};

console.log(findRotation(str1, str2));

//What correction need to be made here to read the files sequentially one by one.
// async function printFiles() {
//     const files = await getFilePAths()
//                 files.forEach(async (file) => {
//                 const contents = await fs.readFile(file, ‘utf8’)
//                 console.log(constants)
//             }
//         )
//     }

//     printFiles()

//Here, we can see 5 getting printed five times. But the required output is 0, 1, 2, 3, 4. How to achieve this?
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }
//Answer: Need to change var to let.

//Write the output.
// import { EventEmitter } from "events";
// const EventEmitter = require('node:events')
// const eventEmitter = new EventEmitter();

// eventEmitter.on("myEvent", (data) => {
//   console.log(data, "FIRST");
// });

// console.log("Statement A");

// eventEmitter.on("myEvent", (data) => {
//   console.log(data, "SECOND");
// });

// eventEmitter.emit("myEvent", "Emitted Statement");

// console.log("Statement B");
