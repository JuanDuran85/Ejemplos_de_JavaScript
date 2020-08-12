let ask = () => {
    let num1 = parseInt(prompt('Ingresa el primer numero'));
    let num2 = parseInt(prompt('Ingresa el segundo numero'));
    
    try {
        if (num1 && num2) {
            return num1 + num2;
        } else {
            throw new Error('No se puede realizar la suma');
        }
    } catch (error) {
        return error;
    }
}

console.log(ask());