export default {
    raiz: (a) => {
        if(a >= 0){
            return Math.sqrt(a);
        }else{
            return `${Math.sqrt(a*(-1))}i` 
        }
    },
    cuadrado: (a) => {
        return Math.pow(a,2);
    },
    absoluto: (a) => {
        return Math.abs(a);
    }
}
