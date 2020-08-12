const verify = (a,b) => new Promise ((resolve, reject) => {
    if (a > b) {
        resolve(Math.pow(a,b));
    } else {
        reject('La operacion no es permitida');
    }
});

verify(5,2).then(res => console.log(res));
