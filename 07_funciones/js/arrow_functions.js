//Funciones flecha ES6

//LAS VISTAS HASTA AHORA

function nombreDeLaFuncion(parametro1, parametro2){
    //cuerpo de la función
}
nombreDeLaFuncion();

const expresion = function(parametro1, parametro2){
    //cuerpo de la función
}
expresion();

const objeto = {
    propiedad: '1234',
    metodo1: function(){
        console.log('Hola');
        //código del método
    }
};
objeto.metodo1();

(function(){

})();

///////////////////////////////////////////

const imprimir = a => a + 100;
console.log(imprimir(3));

//Si hay más de un parámetro, hay que usar paréntesis

const aprendiendo = (a, b) => a + b;
console.log(aprendiendo(3, 4));