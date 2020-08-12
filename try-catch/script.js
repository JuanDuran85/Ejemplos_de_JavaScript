const showError = () => {
    try {
    throw 'Las varibales no se encuentran declaradas';
    }
    catch(e) { 
        console.log(e) 
    }
}

showError();