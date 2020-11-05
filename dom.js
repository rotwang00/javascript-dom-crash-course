// EXAMINE THE DOCUMENT OBJECT

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "Wow!"
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.links);

// GETELEMENTBYID

//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "Paul Thurmond";
// headerTitle.innerText = "Goodbye";
// 
// header.style.borderBottom = "solid 3px #000000";
// 
// 

// GETELEMENTSBYCLASSNAME
// 
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent = "Hello 2"
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";
// 
// for (var i = 0; i < items.length; i++) {
    // items[i].style.backgroundColor = "#f4f4f4";
// }
// 

// GETELEMENTSBYTAGNAME

// var li = document.getElementsByTagName('li');
// console.log(li);
// li[1].textContent = "Hello 2"
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";
 
// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = "#f4f4f4";
// }
 
// QUERYSELECTOR

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello, world!';

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';

// QUERYSELECTORALL

// var allItems = document.querySelectorAll('.list-group-item');
// allItems.style.color = 'coral';

var titles = document.querySelectorAll('.title');

console.log(titles);

var odd = document.querySelectorAll('li:nth-child(odd)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
}
