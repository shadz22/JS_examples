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

// //querySelectorAll
// var lis = document.querySelectorAll('li, h2, #hide-list');
// Array.from(lis).forEach(function(li) {
//   li.textContent = "Hello world";
// });

// //style
// var h2 = document.querySelector('header h2');
// h2.style.color = "red";
// h2.style.backgroundColor = "yellow";

// var lis = document.querySelectorAll('ul li');
// lis[1].style.backgroundColor = "blue";

// for(var i = 0; i < lis.length; i++) {
//   lis[i].style.color = "green"
// }

// //using cssText
// lis[0].style.cssText = "background-color: pink; font-size: 25px;"

// // Events
// var h2 = document.querySelector('header h2');
// h2.onclick = function() {
//   console.log("Clicked");
// }

// h2.onmouseover = function() {
//   console.log("hovering");
// }

// //addEventListner
// var h2 = document.querySelector('header h2');
// h2.addEventListener('click', function() {
//   console.log('clicked');
// })

// //another way of doing the above is to create the function outside of the eventListener
// h2.addEventListener('click', a);

// function a() {
//   console.log('clicked');
// }


//Attributes
var div = document.querySelector('div.wrapper');

div.getAttribute('class'); // will retirn 'wrapper' as it's the name of the class
div.setAttribute('style', 'background: yellow'); //will create a new attribute fo rthe div element called 'style' witht the value of 'background: yellow'
div.removeAttribute('style'); //removes the attribute
div.hasAttribute('style'); //checks if it has it and returns a boolean value