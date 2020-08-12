const opera = (num1,num2,callback)=>{
    if (num1 > num2 && num2 != 0){
        return callback(num1,num2);
    }else {
        return 'Los numeros no estan permitidos';
    }
};

const sumar = (num1,num2) => {
    return num1+num2;
};
const resta = (num1,num2) => {
    return num1-num2;
};
const multiplica = (num1,num2) => {
    return num1*num2;
};
const divide = (num1,num2) => {
    return num1/num2;
};

console.log(opera(3,0,resta));