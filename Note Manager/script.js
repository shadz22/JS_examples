// .textContent
console.log(document.getElementById('list'));

var el = document.getElementById('list');
console.log(el);
console.log(typeof el);

// var el = document.getElementById('LIST');
// console.log(el);

console.log(el.textContent);
console.log(el.textContent = 'Hello');

var heading = document.getElementById('heading').textContent;
console.log(heading);

var ulElement = document.getElementById('list');
console.log(ulElement.textContent = heading);
