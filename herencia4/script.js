class Pelicula {
    constructor(title){
        this._title = title;
    }
    get title() {
        return this._title;
    }
}

class Largometraje extends Pelicula {
    constructor(title, runtime) {
        super(title);
        this._runtime = runtime;
    }
    get runtime() {
        return this._runtime;
    }
    set runtime(runtime) {
        this._runtime = runtime;
    }
}

class Cortometraje extends Pelicula {
    constructor(title, runtime) {
        super(title);
        this._runtime = runtime;
    }
    get runtime() {
        return this._runtime;
    }
    set runtime(runtime) {
        this._runtime = runtime;
    }
}

class MyApp {
    play(Pelicula) {
        const result = `la película ${Pelicula.title} se está reproduciendo...tiene una duración de ${Pelicula.runtime}`;
        return result;
    }
}

const largometraje = new Largometraje('Sin City', '105min');
const cortometraje = new Cortometraje('Hulk vs Wolverine', '20min');
const myApp1 = new MyApp();
const playing = myApp1.play(largometraje);
const playing2 = myApp1.play(cortometraje);

tipoPelicula.addEventListener('change',function() {
    console.log(tipoPelicula.value);
    if (tipoPelicula.value == "cortometraje") {
        resultado.innerHTML = playing2;
    } else if(tipoPelicula.value == "largometraje"){
        resultado.innerHTML = playing;
    } else {
        resultado.innerHTML = "Debe seleccionar una de las dos opciones"
    }
})