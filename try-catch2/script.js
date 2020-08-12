const json = {
    "persona": [{
      "id": "1",
      "nombre": "Juan",
      "apellido": "Romero."
    }, {
      "id": "2",
      "nombre": "Jocelyn",
      "apellido": "Perez."
    }]
};

try {
    console.log(`El nombre de la persona ${json.persona[0].id} es: ${json.persona[0].nombre}`);
    console.log(`El nombre de la persona ${json.persona[1].id} es: ${json.persona[1].nombre}`);
    console.log(`El nombre de la persona ${json.persona[2].id} es: ${json.persona[2].nombre}`);
}catch(e) {
    console.log('Errores');
    console.log(e.name, e.message);
}finally {
    console.log('Finalizado el try...catch. Este mensaje aparece siempre.');
}

