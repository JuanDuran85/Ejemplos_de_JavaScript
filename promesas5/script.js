const randomNumber = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
 }
 
 const suma = (num1,num2) => new Promise((resolve, reject) => {
    setTimeout(() => {
        let sumaNum = `La suma es: ${num1+num2}`;
        resolve(sumaNum)
    }, randomNumber(500, 2000));
 });
 const resta = (num1,num2) =>new Promise((resolve, reject) => {
    setTimeout(() => {
        let restaNum = `La resta es: ${num1-num2}`;
        resolve(restaNum)
    }, randomNumber(500, 2000));
 });
 const multiplica = (num1,num2) =>new Promise((resolve, reject) => {
    setTimeout(() => {
        let multiplicaNum = `La multiplicacion es: ${num1*num2}`;
        resolve(multiplicaNum)
    }, randomNumber(500, 2000));
 });
 const divide = (num1,num2) =>new Promise((resolve, reject) => {
    setTimeout(() => {
        let divideNum = `La division es: ${num1/num2}`;
        resolve(divideNum)
    }, randomNumber(500, 2000));
 });
 
 Promise.race([suma(5,2), resta(5,2), multiplica(5,2), divide(5,2)]).then(response => {
    console.log(`Operacion Ganadora=> ${response}`);
 }); 
