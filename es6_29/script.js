const miEspacio = (() => {
    let miVariablePrivada, miMetodoPrivado;
  
    // Una variable privada
    miVariablePrivada = 0;
 
    // Una función privada que muestra algo, al recibir un parámetro
    miMetodoPrivado = ( valor1 ) => {
        console.log( valor1 );
    };
 
    return {
      // Una variable pública
      miVariablePublica: "hola",
 
      // Una función pública que utiliza los elementos privados
      miFuncionPublica: ( valor2 ) => {
        miVariablePrivada++;
        miMetodoPrivado( valor2 );
      }
    }
 })();

 miEspacio.miFuncionPublica("saludos");