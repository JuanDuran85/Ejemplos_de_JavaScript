function getUserData(id,name, callback){
    setTimeout(() => {
        
        let data = {}
 
        if(id === 2356256 && name == 'Juan'){
            data = {id: 2356256, name: 'Juan', lastName: 'Duran', age: 35}
        } else if(id === 27564512 && name == 'Manuel'){
            data = {id: 27564512, name: 'Manuel', lastName: 'Perez', age: 31}
        } else if(id === 17658624 && name == 'Jocelyn'){
            data = {id: 17658624, name: 'Jocelyn', lastName: 'Rodriguez', age: 30}
        } else if(id === 12345678 && name == 'Maria'){
            data = {id: 12345678, name: 'Maria', lastName: 'Garrido', age: 30}
        } else {
            data = 'El usuario no existe';
        }

        callback(data)
    }, 1000)
}

getUserData(17658624, 'Jocelyn', user => console.log(user));