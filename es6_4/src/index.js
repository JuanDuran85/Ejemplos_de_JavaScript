import '../dist/main/for_anidados.js'

function pruebaLet() {
    let num = 31;
    if (true) {
      let num = 71;
      console.log(num);  // 71
    }
    console.log(num);  // 31
  };
  
  function pruebaConst() {
     const num = 31;
     if (true) {
        const num = 71;
        console.log(num);  // 71
     }
     console.log(num);  // 31
  };
  
  pruebaLet();
  pruebaConst(); 