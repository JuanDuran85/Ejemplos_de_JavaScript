// los metodos estaticos no necesitan de un objeto para ser ejecutado, no necesitan instancia para funcionar

class Usuario {
    constructor(permisos = "lectura") {
        this._permisos = permisos;
    }

    get permiso(){
        return this._permisos;
    }

    set permiso(permiso){
        this._permisos = permisos;
    }

    static creandoAdmin(){
        let userAdmin = new Usuario("administrador");
        return userAdmin;
    }
}

let admin = Usuario.creandoAdmin();
console.log(admin._permisos)