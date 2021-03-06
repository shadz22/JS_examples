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



// //Function Constructor
// var person1 = {};
// person1.firstname = 'John';
// person1.lastname = 'Smith';

// var person2 = {};
// person2.firstname = 'Nick';
// person2.lastname = 'Doe';

// function createPerson(firstname, lastname) {
//   var newPerson = {};
//   newPerson.firstname = firstname;
//   newPerson.lastname = lastname;
//   return newPerson;
// }

// function Person(firstname, lastname) {
  
//   this.firstname = firstname;
//   this.lastname = lastname;
  
// }

// var person3 = new Person('Bob', 'Brown');
// var person4 = new Person('Mary', 'James');

// // console.log(this);
// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log(person4);

// var strObj = new String('Hello');
// console.log(strObj);
// console.log(typeof strObj);


// //Prototype - Object Function
/*
var a = {};
var b = new Object();

console.log(a);
console.log(b);
console.log(Object);
console.log(Object.prototype);

Object.prototype.greet = 'Hello';
console.log(Object.prototype);
*/

// Function Constructors And Prototypes
/*
function a() {}

console.log(a.prototype);
console.log(a.prototype.__proto__);

var b = {};

function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  // this.getFullName = function() {
  //   return this.firstname + ' ' + this.lastname;
  // }      //the better way of doing this would be to use prototype as per below:
}

Person.prototype.getFullName = function() {
  return this.firstname + ' ' + this.lastname;
}

Person.prototype.greet = 'Hello from prototype object';

var person1 = new Person('John', 'Smith');
person1.greet = 'Hello from person1 object';
console.log(person1.greet);
var person2 = new Person('Nick', 'Doe');

console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person1.greet);
*/

// Object.create()
/*
function Person() {
  this.name = "John";
}

Person.prototype.greet = "Hello";

var person1 = new Person();
var person2 = Object.create(Person.prototype);

console.log(person1);
console.log(person2);

var firstProto = {
  sayHello: function() {
    return "Hello " + this.name;
  }
}

var john = Object.create(firstProto, {
  name: {
    value: "John"
  }
})
console.log(john);

var secondProto = Object.create(firstProto, {
  sayHi: {
    value: function() {
      return "Hi " + this.name;
    }
  }
})
console.log(secondProto);

var bob = Object.create(secondProto, {
  name: {
    value: "Bob"
  }
})
console.log(bob);

var obj = Object.create(null);
console.log(obj);
*/


// First-Class Functions
var a = function() {
  console.log('Hello');
}

a();

function sum(num1, num2, fn) {
  console.log(num1 + num2);
  console.log(fn());
}

function done() {
  return 'Function is executed'
}

sum(5, 10, done);
sum(5, 10, function() {
  return 'Function is executed'
});

var scores = [55, 35, 87, 45];

function checkResult(arr, fn) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

function passOrFail(score) {
  return score >= 51;
}

function calcDifference(score) {
  return score - 51;
}

console.log(checkResult(scores, passOrFail));
console.log(checkResult(scores, calcDifference));

















