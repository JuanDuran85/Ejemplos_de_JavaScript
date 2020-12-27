let miColores = ['verde', 'amarillo'];
let colores = new Set(miColores);
console.log(colores);

colores.add("Azul");
colores.add("Blanco");
colores.add("Negro");

console.log(colores);

for (const color of colores) {
    console.log(color);
};

console.log(colores.size);
console.log(colores.delete('Negro'));
console.log(colores.size);
console.log(colores.has('verde'));
console.log(colores.has('dorado'));
colores.clear();
console.log(colores);

//---------------------------------------------------------------------------

let texto = "Usando Set en JavaScript ES6";
console.log(texto.length);
console.log(new Set(texto).size);
console.log(new Set(texto).values());

//---------------------------------------------------------------------------

let usuarios = ["Juan", "Jose", "Maria", "Elio", "Yecenia", "Elena"];

let usuariosVisita = new Set();

function visitas() {
    let usuarioIndex = Math.floor(Math.random() * usuarios.length);
    let usuario = usuarios[usuarioIndex];
    console.log(usuario, usuarioIndex);
    if (usuariosVisita.has(usuario)) {
        console.log(`El usuario ${usuario} ya visito esta pagina`);
    } else {
        usuariosVisita.add(usuario);   
    }
    console.log(usuariosVisita);

    if (usuariosVisita.size === usuarios.length) {
        console.log("Todos los usuarios ya visitaron la pagina");
        clearInterval(intervalo);
        usuariosVisita.clear();
    }
}

let intervalo = setInterval(visitas, 500);