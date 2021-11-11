//Las funciones que están en un objeto son métodos

const reproductor = {
    color: 'lila',
    reproduciendo: false,
    play: function(id) {
        console.log('Reproduciendo la pista ' + id);
    },
    pausar: function(id){
        console.log('Pausando la pista ' + id);
    },
    siguiente: function(id){
        console.log('Next song');
    },
    anterior: function(id){
        console.log('Pista anterior');
    },
    cambiarColor: function(nuevoColor){
        this.color = nuevoColor; //this hace referencia y se refiere al propio objeto / ámbito
    },
    imprimeThis: function(){

        console.log(this);
    }
}
reproductor.play(1);
console.log(reproductor.color);
reproductor.cambiarColor('verde');
console.log(reproductor.color);
reproductor.imprimeThis();
console.log(this); //hace referencia a window, al principal de Chrome



