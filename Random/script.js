let johnScore = 80;
let nickScore = 45;
const lowerLimit = 51;

if(johnScore >= lowerLimit) {
  console.log("John has passed the exam by scoring " + johnScore)
} else if(nickScore >= lowerLimit) {
  console.log("Nick has passed the exam by scoring " + nickScore)
} else {
  console.log("Both students failed the exam")
}

// loops
// let arr = ["John", "Mary", "Jo", "Nick"]
// for(var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//break
let arr = ["John", "Mary", "Bob", "Jo", "Nick"]
for(var i = 0; i < arr.length; i++) {
  if(arr[i] === "Bob") {
    console.log(arr[i] + " is my brother");
    break
  }
  console.log(arr[i]);
}

//while loop
// let colors = ["blue", "green", "yellow", "pink"]
// var i = 0;
// while(i < colors.length) {
//   console.log(colors[i]);
//   i++
// }

//do while loop
let colors = ["blue", "green", "yellow", "pink"]
var i = 0;
do {
  console.log(colors[i]);
  i++;
} while(i < colors.length);