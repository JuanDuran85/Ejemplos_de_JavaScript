/* function* timestampGenerator() {
    console.log(Date.now());
    yield;
    console.log('execution continued');
}

const it = timestampGenerator();
it.next(); // primer console
it.next(); // segundo console */

/*for (const iterator of it) {
    console.log(iterator);
} */

//--------------------------------------------------------------------

function* timestampGenerator() {
    let ts = Date.now();
    console.log("original ts: "+ ts);
    yield ts;
    var additionalTime = yield;
    console.log('additionalTime: ' + additionalTime);
    if(additionalTime){
        ts = ts + additionalTime;
    }
    console.log('update ts: ' + ts);
}

const it = timestampGenerator();
const originalTimestamp = it.next();
console.log(originalTimestamp);
it.next(); // primer console
it.next(60000); // segundo console

//-----------------------------------------------------------------------------

function* randomNum() {
    while (true) {
        yield Math.floor(Math.random() * 100);
    }
};

const it = randomNum();
function getRandomNum() {
    return it.next().value;
};
console.log(getRandomNum());