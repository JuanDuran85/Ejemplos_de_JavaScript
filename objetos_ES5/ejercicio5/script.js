/*  
10) Reescribe el siguiente código utilizando prototipos para evitar definir múltiples veces el método agregarPuntos

function Jugador(nombre){
  this.nombre = nombre;
  this.puntos = 0;
}

var jugador1 = new Jugador('Francisca');
jugador1.agregarPuntos = function(){
  this.puntos = this.puntos + 100;
}

jugador2 = new Jugador('Camilo');
jugador2.agregarPuntos = function(){
  this.puntos + 100;
}

jugador1.agregarPuntos();
jugador2.agregarPuntos();
console.log(jugador1);
console.log(jugador2);

*/

function Jugador(nombre){
    this.nombre = nombre;
    this.puntos = 0;
}

Jugador.prototype.agregarPuntos = function () {
    this.puntos = this.puntos + 100;
}

var jugador1 = new Jugador('Francisca');
var jugador2 = new Jugador('Camilo');
jugador1.agregarPuntos();
jugador2.agregarPuntos();
console.log(jugador1);
console.log(jugador2);




