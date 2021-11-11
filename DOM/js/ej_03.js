//selectores múltiples

/* const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);

items[0].style.color = 'red';
items[1].style.color = 'green';
items[1].textContent = 'green'; */

/* const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems); */

/* let list = document.getElementsByTagName('li');
list = Array.from(list);
list.reverse(); */
// console.log(list);

const items = document.querySelectorAll('ul.collection li.collection-item')
items.forEach(function(item, index){
    item.textContent = `${index}: holaaa`
})

console.log(items);

const listOdd = document.querySelectorAll('li:nth-child(odd)');
const listEven = document.querySelectorAll('li:nth-child(even)');

listOdd.forEach((li) => (li.style.background = '#ccc'));
listEven.forEach((li) => (li.style.background = 'red'));
