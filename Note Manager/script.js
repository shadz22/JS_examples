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
