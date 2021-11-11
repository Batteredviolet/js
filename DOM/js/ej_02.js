//SELECTORES

//selectores únicos
/* console.log(document.getElementById('task-title'));
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title'); */

//cambiar estilos
/* taskTitle.style.backgroundColor = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px'; */
// taskTitle.style.display = 'none';


//cambiar contenido
/* taskTitle.textContent = 'Lista de tareas';
taskTitle.innerText = 'Mis tareas';
taskTitle.innerHTML = '<h2>Hola</h2>'; */ //si lo llamas, te devuelve todo incluido etiquetas

console.log(document.querySelector('#task-title')); //devuelve lo mismo que getElementById
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red'; //solo cambia el primero
document.querySelector('ul li').style.color = 'blue'; //solo cambia el primero
document.querySelector('li:last-child').style.color = 'red'; //solo cambia el primero
document.querySelector('li:nth-child(3)').style.color = 'green'; //solo cambia el primero
