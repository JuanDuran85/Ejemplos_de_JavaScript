// Herencia en clases con ES6

// En las siguientes clases, se puede observar como es viable aplicar la herencia debido a que los metodos implementados en cada una de ellas son iguales.

/* class Vimeo {
    play(){
        this.video.play();
    }
    duration(){
        return this.video.duration/100;
    }
    open(){
        this.redirectToVimeo(this.video);
    }
}

class Youtube {
    play(){
        this.video.play();
    }
    duration(){
        return this.video.duration/100;
    }
    open(){
        this.redirectToYoutube(this.video);
    }
} */

// como las dos clases anteriores tienen metodos iguales, entonces apliquemos herencia creando una clase padre. Cuando se hereda de una clase padre, los hijos heredan todos los metodos que tiene la clase padre.

class Player {
    play(){
        this.video.play();
    }
    duration(){
        return this.video.duration/100;
    }
}

class Vimeo extends Player{
    open(){
        this.redirectToVimeo(this.video);
    }
}

class Youtube extends Player {
    open(){
        this.redirectToYoutube(this.video);
    }
}