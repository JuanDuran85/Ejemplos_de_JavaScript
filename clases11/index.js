class Tareas {
    constructor(titulo){
        if (!titulo) throw new Error('Es necesario agregar un titulo');
        this.titulo = titulo;
        this.completo = false;
    }
}

let tarea1 = new Tareas("Aprender JS");
console.log(tarea1);
// la instanacia es una hija o es parte de una clases
console.log(tarea1 instanceof Tareas);

//----------------------------------------------------------------------

let ListaTareas = class {
    constructor(){
        this.tareas = [
            {titulo: "Aprender JS", completado: false},
            {titulo: "Aprender Vue JS", completado: true},
            {titulo: "Aprender React JS", completado: false},
            {titulo: "Aprender HTML", completado: true},
        ]
    }

    get completadas(){
        return this.tareas.filter(result => result.completado);
    }

    get inCompletas(){
        return [...this.tareas].filter(res => !res.completado);
    }

    set addTarea(tarea){
        this.tareas.push(tarea);
    }

    buscando(query){
        return this.tareas.find(res => res.titulo.includes(query));
    }

    eliminar(index){
        this.tareas.splice(index, 1);
    }

    static normalizandoTarea(titulo){
        titulo = titulo.trim();
        return titulo.charAt(0).toUpperCase() + titulo.substring(1);
    }
}

let tareaLista = new ListaTareas();
console.log(tareaLista.completadas);
console.log(tareaLista.inCompletas);
console.log(tareaLista.tareas);

let tarea2 = new Tareas("Aprender C++");
tareaLista.addTarea = {...tarea2};
console.log(tareaLista.tareas);
console.log(tareaLista.buscando("C++"));

console.log(ListaTareas.normalizandoTarea("     nueva tarea para agregar        "));
console.log(tareaLista.constructor.normalizandoTarea("     nueva tarea para agregar        "));

//-------------------------------------------------------------------------------

