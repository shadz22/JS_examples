// let johnScore = 80;
// let nickScore = 45;
// const lowerLimit = 51;

// if(johnScore >= lowerLimit) {
//   console.log("John has passed the exam by scoring " + johnScore)
// } else if(nickScore >= lowerLimit) {
//   console.log("Nick has passed the exam by scoring " + nickScore)
// } else {
//   console.log("Both students failed the exam")
// }

// loops
// let arr = ["John", "Mary", "Jo", "Nick"]
// for(var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//break
// let arr = ["John", "Mary", "Bob", "Jo", "Nick"]
// for(var i = 0; i < arr.length; i++) {
//   if(arr[i] === "Bob") {
//     console.log(arr[i] + " is my brother");
//     break
//   }
//   console.log(arr[i]);
// }

//while loop
// let colors = ["blue", "green", "yellow", "pink"]
// var i = 0;
// while(i < colors.length) {
//   console.log(colors[i]);
//   i++
// }

//do while loop
// let colors = ["blue", "green", "yellow", "pink"]
// var i = 0;
// do {
//   console.log(colors[i]);
//   i++;
// } while(i < colors.length);


// Hoisting
// var a = 10;
//  function b() {
//    return 20;
//  }
//  console.log(a);
//  console.log(b());
//  // the above will print 10, then 20 on the console but if we move the console.log to the top the result will change

//  console.log(c);
//  console.log(d());
//  var c = 30;
//  function d() {
//    return 40;
//  }
//  // if we run this then we will get undefined, followed by 40

//  console.log(e);
//  console.log(f());
//  var e = 50;
//  var f = function() {
//    return 60;
//  }
 //the above code will return undefined, followed by the error "f is not a function"


 //this

// function a() {
//   console.log(this);
//   console.log(this === window);

//   function b() {
//     console.log(this);
//     console.log(this === window);
//   }

//   b();

// }

// a();


// var firstname = 'Bob';

// var per = {
//   firstname: 'John',
//   lastname: 'Smith',
//   getFullName: function() {
//     var that = this;
//     // console.log(this === per);
//     // return per.firstname + ' ' + per.lastname;
//     // return this.firstname + ' ' + this.lastname;
//     console.log(this.firstname + ' ' + this.lastname);

//     function greet() {
//       console.log('Hi ' + that.firstname);
//     }
//     greet();
//   }
// };

// var per1 = {
//   firstname: 'Nick',
//   lastname: 'Doe'
// };

// per1.getFullName = per.getFullName;

// per.getFullName();
// per1.getFullName();


// // Everything is an object
// var arr = [1, 2, 3];
// arr[3] = 4;

// arr.prop = 'Hello';

// console.log(arr);
// console.log(arr.prop);

// function a() {
//   console.log('Hello');
// }

// a['prop'] = 'Hi';

// a.obj = {
//   greet: 'Hey'
// };

// a.myFunc = function() {
//   console.log('Hola');
// }

// console.log(window);



//Function Constructor
var person1 = {};
person1.firstname = 'John';
person1.lastname = 'Smith';

var person2 = {};
person2.firstname = 'Nick';
person2.lastname = 'Doe';

function createPerson(firstname, lastname) {
  var newPerson = {};
  newPerson.firstname = firstname;
  newPerson.lastname = lastname;
  return newPerson;
}

function Person(firstname, lastname) {
  
  this.firstname = firstname;
  this.lastname = lastname;
  
}

var person3 = new Person('Bob', 'Brown');
var person4 = new Person('Mary', 'James');

// console.log(this);
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

var strObj = new String('Hello');
console.log(strObj);
console.log(typeof strObj);


