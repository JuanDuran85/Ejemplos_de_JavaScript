function mesDeLaSemana( mes, idioma ){
    let mesEnCastellano = [ 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre' ];
    let mesEnIngles  = [ 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'octuber', 'november', 'december' ];
    let mesEnItaliano  = [ 'gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre' ];

if(mes >= 1 && mes <= 12){
   if (idioma == 'ingles' || idioma == 'Ingles' || idioma == 'INGLES' || idioma == 'Inglés' || idioma == 'inglés') {
        return mesEnIngles[ mes - 1 ];
   } else if (idioma == 'castellano' || idioma == 'Español' || idioma == 'CASTELLANO' || idioma == 'ESPAÑOL' || idioma == 'español') {
        return mesEnCastellano[ mes - 1 ];
   } else if (idioma == 'italiano' || idioma == 'Italiano' || idioma == 'ITALIANO'){
        return mesEnItaliano[ mes - 1 ];
   } else {
      return "El idioma debe ser Castellano / Español, Inglés o Italiano"
   }
}else{
   return "Debe ingresar un número adecuado (del 1 al 12)"
};
};

console.log(mesDeLaSemana(7,'italiano'));
