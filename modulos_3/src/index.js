import capitalizar from './capitalizar.js';
let _ = require('lodash');


resultado.innerHTML = capitalizar("juan");
console.log(capitalizar("juan"));
console.log(_.capitalize('utilizando libreria lodash'));
resultado.innerHTML += "<br>"+_.capitalize('utilizando libreria lodash');
resultado.innerHTML += "<br>"+_.camelCase('utilizando libreria lodash');
resultado.innerHTML += "<br>"+_.toLower('utilizando libreria lodash');
resultado.innerHTML += "<br>"+_.toUpper('utilizando libreria lodash');