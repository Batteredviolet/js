//Más métodos de arrays

const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio'
];

meses.forEach((mes, indice) => {
    if(mes === 'Enero'){
        console.log('Enero existe y existe en la posición ' + indice);
    }
});

const res = meses.includes('Enero');
console.log(res);

const numeros = [1, 22, 33, 54, 12];
console.log(numeros.some(num => num > 10));
console.log(numeros.findIndex(num => num > 10));

/////////////////////////////////////////////////

const users = [
    {nombre: 'Pepe', apellido: 'Calvo'},
    {nombre: 'Luis', apellido: 'Garcia'},
    {nombre: 'Carmen', apellido: 'Exposito'},
    {nombre: 'Roberto', apellido: 'Sanchez'},
    {nombre: 'Angel', apellido: 'Moragues'},
    {nombre: 'Clara', apellido: 'Moral'}
];

function getNombreCompleto (user){
    return `user ${user.nombre} ${user.apellido}`
};
const nombres = users.map(getNombreCompleto);
console.log(nombres);


const mapVersion = (arreglo, callback) => {
    const salida = [];
        for(let item of arreglo){
            const value  = callback(item);
            salida.push(value);
        }
    return salida;
}
const nom = mapVersion(users, (user) => {
    return `user ${user.nombre} ${user.apellido}`
});
console.log(nom);