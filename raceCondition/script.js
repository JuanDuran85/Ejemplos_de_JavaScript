const randomNumber = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}

let value = 0;

const runner1 = (time, callback) => {
   setTimeout(() => {
       value += 1;
       callback({ 'runner1': value });
   }, time)
}

const runner2 = (time, callback) => {
    setTimeout(() => {
        value += 2;
        callback({ 'runner2': value });
    }, time)
}

runner1(randomNumber(500, 5000), response => console.log(response));
runner2(randomNumber(500, 5000), response => console.log(response));
runner1(randomNumber(500, 5000), response => console.log(response));
runner2(randomNumber(500, 5000), response => console.log(response));