const colores = ["Azul", "Verde", "Marron", "Gris"];

for (const color of colores) {
    console.log(color);
};

const persona = {
    nombre : "Juan",
    color : "Morado",
    ciudad : "Santiago de Chile",
    lenguaje : "JavaScript",
};

for (const [key,value] of Object.entries(persona)) {
    console.log(key,value);
};

const aprender = {
    vue: ["Vue3","Nuxt","VueRouter"],
    js: ["Node","Express","Testing"],
    css: ["Bootstrap","BEM","Tailwind"],
};

aprender[Symbol.iterator] = function () {
    let indiceKey = 0;
    let indiceValue = 0;
    let valoresObj = Object.values(this);
    return {
        next(){
            const valorObj = valoresObj[indiceKey];

            if (!(indiceValue < valorObj.length)){
                indiceKey++;
                indiceValue = 0;
            };

            if (!(indiceKey < valoresObj.length)){
                return {
                    value: undefined,
                    done: true
                };
            };

            return {
                value: valorObj[indiceValue++],
                done: false
            }
        }
    }
};

console.log(aprender);

for (const valores of aprender) {
    console.log(valores);
};
