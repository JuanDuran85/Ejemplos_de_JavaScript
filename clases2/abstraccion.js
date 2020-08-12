// abstracción

// la importancia de la abstracción es: hacer objetos eficientes y seguros, ocultando detalles que no son relevantes y ofrecer únicamente aquello que otros objetos necesitan para interactuar. La estrategia de abstracción es el encapsulamiento. Donde los objetos ocultan su estado del exterior y únicamente ofrecen un proceso de interacción con el estado a través de métodos. Es mejor utilizar métodos que las propiedades mismas.

class Usuario {
    constructor(nombre){
        this.nombre = nombre;
    }
}

let usuario1 = new Usuario("Juan");
console.log(usuario1.nombre);

usuario1.nombre = "Duran"; // mal ejemplo, ya que interactua directamente con la propiedad nombre, violando el principio de encapsulamiento
console.log(usuario1.nombre);

class User {
    constructor(nombre){
        this.nombre = nombre;
    }

    get name(){
        return this.nombre.charAt(0).toUpperCase()+this.nombre.slice(1);
    }

    set name(nombre){
        this.nombre = nombre;
    }
}

let usuer1 = new User('juan');
console.log(usuer1.name)
usuer1.name = "duran";
console.log(usuer1.name)