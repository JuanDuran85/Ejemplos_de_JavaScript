const notas = (nota1,nota2,callback)=>{
    let total = nota1 + nota2;
    callback(total);
};

const evaluando = (total) => {
    if (total > 5) {
        console.log(`El alumno supero la prueba con: ${total} puntos`);
    } else {
        console.log(`El alumno no supero la prueba. Total puntos alcanzados: ${total}`);
    }
};

notas(3,1,evaluando);