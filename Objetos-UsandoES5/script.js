function Consultorio(nombre, paciente) {
    this._nombre = function () {
        return nombre;
    }
    this.paciente = paciente || [];
}

Consultorio.prototype.getName = function (){
    return this._nombre();
}
Consultorio.prototype.setName = function (nuevo_nombre) {  
    this._nombre = function () {
        return nuevo_nombre;
    }
}
Consultorio.prototype.agregarPaciente = function (paciente) {
    this.paciente.push(paciente)
}

function Paciente(nombre,edad,rut,diagnostico) {
    this._nombre = function () {
        return nombre;
    }
    this._edad = function () {
        return edad;
    }
    this._rut = function () {
        return rut;
    }
    this._diagnostico = function () {
        return diagnostico;
    }
}

Paciente.prototype.getName = function (){
    return this._nombre();
}
Paciente.prototype.getEdad = function (){
    return this._edad();
}
Paciente.prototype.getRut = function (){
    return this._rut();
}
Paciente.prototype.getRut = function (){
    return this._rut();
}
Paciente.prototype.getDiagnostico = function (){
    return this._diagnostico();
}
Paciente.prototype.setName = function (nuevo_nombre) {  
    this._nombre = function () {
        return nuevo_nombre;
    }
}
Paciente.prototype.setEdad = function (nueva_edad) {  
    this._edad = function () {
        return nueva_edad;
    }
}
Paciente.prototype.setRut = function (nuevo_rut) {  
    this._rut = function () {
        return nuevo_rut;
    }
}
Paciente.prototype.setDiagnostico = function (nuevo_diagnostico) {  
    this._diagnostico = function () {
        return nuevo_diagnostico;
    }
}

var p1 = new Paciente('Juan',35,'1234567-8','Problemas respiratorios');
var p2 = new Paciente('Jocelyn',30,'8765432-1','Problemas en la columna');

var consultario_xyz = new Consultorio('xyz',[p1,p2]);

console.log(p1.getName());
console.log(p2.getEdad());
p2.setDiagnostico("Gripe general");
console.log(p2.getDiagnostico());
console.log(consultario_xyz.getName());