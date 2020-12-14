/* function* generatorOne() {
    yield 1;
    yield 2;
};

function* generatorTwo() {
    yield* generatorOne();
};

const it = generatorTwo();
console.log(it.next());
console.log(it.next());
console.log(it.next()); */

//------------------------------------------------------------------------------------

/* function* generatorOne() {
    yield 1;
    yield 2;
};

function* generatorTwo() {
    yield* generatorOne();
    yield 3;
};

const it = generatorTwo();
console.log(it.next());
console.log(it.next());
console.log(it.next()); */

//---------------------------------------------------------------------------

/* function* generatorOne() {
    yield 1;
    yield 2;
    return 4;
};

function* generatorTwo() {
    const val = yield* generatorOne();
    yield 3;
    yield val;
};

const it = generatorTwo();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); */

//-------------------------------------------------------------------------

function generatorOne() {
    return ['three', 'six', 'nine'];
};

function* generatorTwo() {
    yield* generatorOne();
};

const it = generatorTwo();
console.log(it.next());
console.log(it.next());
console.log(it.next());

//-------------------------------------------------------------

function* errorHandling() {
    try {
        yield 1;
        yield 2;
        yield 3;
    } catch (error) {
        console.log(error)
    }
};

const errorIt = errorHandling();
console.log(errorIt.next());
errorIt.throw('error message here...');
console.log(errorIt.next());

//-------------------------------------------------------------------

function* errorHandling() {
    try {
        yield 1;
        throw('this is another error...');
        yield 2;
        yield 3;
    } catch (error) {
        console.log(error)
    }
};

const errorIt = errorHandling();
console.log(errorIt.next());
console.log(errorIt.next());
console.log(errorIt.next());

