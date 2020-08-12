let form = document.getElementById( "form" );

form.addEventListener( "submit", function ( event ) {
   event.preventDefault();
   limpiarErrores();
   let textNombre = document.querySelector(".textNombre").value;
   let textTelefono = document.querySelector(".textTelefono").value;
   let textEmail = document.querySelector(".textEmail").value;
   let textApellido = document.querySelector(".textApellido").value;
   let textEdad = document.querySelector(".textEdad").value;

   let resultado = validar(textNombre,textTelefono,textEmail,textApellido, textEdad);

   if(resultado == true) {
     exito();
   };
});

function validar(nombre,telefono,email,apellido,edad) {

    let pasamosValidacion = true;  
    let validacionNombre = /[a-zA-Z]/gim;
    
    if (validacionNombre.test(nombre) == false) {        
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido."
        pasamosValidacion = false;
    };

    let validacionApellido = /[a-zA-Z]/gim;
    
    if (validacionApellido.test(apellido) == false) {        
        document.querySelector(".errorApellido").innerHTML = "Ingrese un apellido válido."
        pasamosValidacion = false;
    };

    let validacionTelefono = /\d/gim;

    if (validacionTelefono.test(telefono) == false) {        
        document.querySelector(".errorTelefono").innerHTML = "Ingrese un teléfono válido(sólo números)."
        pasamosValidacion = false;
    };

    let validacionEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.[A-Z]/gim;
    
    if (validacionEmail.test(email) == false ) {        
        document.querySelector(".errorEmail").innerHTML = "Ingrese un correo válido."
        pasamosValidacion = false;
    };

    let validacionEdad = /^[0-9]\d/gm;
    
    if (validacionEdad.test(edad) == false ) {        
        document.querySelector(".errorEdad").innerHTML = "Ingrese solo números."
        pasamosValidacion = false;
    };

    return pasamosValidacion;
};

function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorTelefono").innerHTML = "";
    document.querySelector(".errorEmail").innerHTML = "";
    document.querySelector(".errorEdad").innerHTML = "";
    document.querySelector(".errorApellido").innerHTML = "";
};

function exito() {
    document.querySelector(".resultado").innerHTML = "Formulario paso la válidación";
};
