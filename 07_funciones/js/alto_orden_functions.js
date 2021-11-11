// Foreach y Map con arrow functions

const users = [
    {nombre: 'Juan', email:'1'},
    {nombre: 'Paco', email:'2'},
    {nombre: 'Pedro', email:'3'},
    {nombre: 'Jaime', email:'4'},
    {nombre: 'Rosa', email:'5'},
    {nombre: 'Ana', email:'6'}
]

const nuevoArray = users.forEach((user, indice) => console.log(`El email de ${user.nombre} es ${user.email}, ${indice}`)); 

//////////////////////////////////////////////////

const nuevoArray2 = users.map(user => `El email de ${user.nombre} es ${user.email}`);
console.log(nuevoArray2);

///////////////////////////////////////////////
//Las funciones flechas no guardan el ámbito

const player = {
    name: 'Mario',
    age: 56,
    infoFlecha: () => console.log(this),
    info: function(){
        console.log(this);
    }
}
player.infoFlecha();
player.info();                          