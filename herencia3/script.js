class Persona {
    constructor() {
        let edad = 35;
        Object.defineProperty(this,"edad",{value: edad});
        Object.freeze(this.edad);
    }
 };

 const persona1 = new Persona();
 persona1.edad = 20;
 console.log(persona1.edad)