// .textContent
// console.log(document.getElementById('list'));

// var el = document.getElementById('list');
// console.log(el);
// console.log(typeof el);

// console.log(el.textContent);
// console.log(el.textContent = 'Hello');

// var heading = document.getElementById('heading').textContent;
// console.log(heading);

// var ulElement = document.getElementById('list');
// console.log(ulElement.textContent = heading);


/*
var el = document.querySelector('ul');
console.log(el);
console.log(el.textContent = 'Hello World');

var el = document.querySelector('#search-note');
console.log(el);

var el = document.querySelector('ul li');
console.log(el);

var el = document.querySelector('ul li:nth-child(2)');
console.log(el);

console.log(el.querySelector('p .fa-times'));
*/

// var icons = document.getElementsByClassName('fa');
// console.log(icons);
// console.log(icons[0]);
// console.log(icons[1]);

// for(var i = 0; i < icons.length; i++) {
//     console.log(icons[i]);
// }

// // icons.push('Hello');
//  var iconsArr = Array.from(icons);
//  console.log(iconsArr);
//  console.log(icons);

// iconsArr.push("Hello");
// console.log(iconsArr);


// //getElementsByClassName
// var icons = document.getElementsByClassName('fa'); //returns a html collection
// Array.from(icons).forEach(function(icon, index, arr) { // Array.from() will turn the Html collection into an array
//   console.log(icon, index, arr);
// });

//querySelectorAll
var lis = document.querySelectorAll('li, h2, #hide-list');
Array.from(lis).forEach(function(li) {
  li.textContent = "Hello world";
});