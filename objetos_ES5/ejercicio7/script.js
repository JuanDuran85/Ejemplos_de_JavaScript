/*  
13) Crea una función constructora denominada “Usuario”, la cual, reciba como parámetro el tipo de usuario que ingresa a un sistema, es decir, si es Administrador, Invitado o Cliente, esté propiedad debe llevar el nombre de “tipo”. Luego crea un método que permita acceder y modificar la propiedad. Posteriormente instancia el nuevo objeto con el valor de “Administrador” y modifica mediante el método creado la propiedad existente con un nuevo valor, ejemplo “Invitado”, muestra en la consola el nuevo valor y verifica que realmente surtió efecto el cambio.
*/

function Usuario(tipo){
    this.tipo = tipo;
}

Usuario.prototype.setTipoUsuario = function (nuevo_tipo){
    this.tipo = nuevo_tipo;
}

var usuario1 = new Usuario('Administrador');
console.log(usuario1.tipo);
usuario1.setTipoUsuario("Invitado");
console.log(usuario1.tipo);

//-------------------------------------------------------------------------

/*  
14) A partir del siguiente código mostrado a continuación, crea un método getter y uno setter para las propiedades de número y pinta que permitan visualizar y modificar cada uno de ellos.

function Carta(numero, pinta){
  this.numero = numero;
  this.pinta = pinta;
}

c1 = new Carta(2, 'Corazón');
c2 = new Carta(4, 'Espadas');
*/

function Carta(numero, pinta){
    this._numero = function () {  
        return numero;
    }
    this._pinta = function () {  
        return pinta;
    }
}

Carta.prototype.getNumero = function () {  
    return this._numero();
}
Carta.prototype.setNumero = function (numero) {  
    this._numero = function () {  
        return numero;
    }
}

Carta.prototype.getPinta = function () {  
    return this._pinta();
}
Carta.prototype.setPinta = function (pinta) {  
    this._pinta = function () {  
        return pinta;
    }
}

c1 = new Carta(2, 'Corazón');
c2 = new Carta(4, 'Espadas');

console.log(c1);
console.log(c1.getNumero());
c1.setNumero(5);
console.log(c1.getNumero());