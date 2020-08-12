const getDogPhoto = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    
    try {
        const response = await fetch(url);   
        const photo = await response.json();
        console.log(photo.message);
    } catch (err) {
        console.log(err);
    }
}

getDogPhoto();