/* setTimeout(() => {
    console.log('después de 2 segundos!')
}, 2000);
 
setTimeout(() => {
    console.log('después de 3 segundos!')
}, 3000);
 
setTimeout(() => {
    console.log('después de 1 segundos!')
}, 1000); */

/* function getUserData(id, callback){
    setTimeout(() => {
 
        let data = {}
 
        if(id === 1){
            data = {
                id: 1,
                name: 'John',
                lastName: 'Doe',
                age: 24
            }
        }
 
        if(id === 2){
            data = {
                id: 2,
                name: 'Jane',
                lastName: 'Smith',
                age: 19
            }
        }
       
        callback(data)
    }, 1000)
}

getUserData(1, user => console.log(user));
getUserData(2, user => console.log(user)); */

/* const promise1 = 1;
const promise2 = Promise.resolve(2);
const promise3 = new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve(3)
   }, 1000);
});

Promise.all([promise1, promise2, promise3]).then(response => {
   console.log(response); // [1, 2, 3]
}); */


/* function ready() {
    return new Promise(function(resolve, reject) {
        // Resuelve la promesa cuando el DOM está listo
        document.addEventListener('readystatechange', function() {
            if(document.readyState !== 'loading') {
                resolve()
            }
        })
    })
}
  
ready().then(function() {
// Aquí podemos hacer cosas con el DOM
console.log("Ya el documento esta listo");
})   */