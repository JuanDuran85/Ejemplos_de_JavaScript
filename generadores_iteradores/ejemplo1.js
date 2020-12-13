function myIterator(start, finish) {  
    let index = start;
    let count = 0;

    return {
        next() {
            let result;
            if (index < finish) {
                result = {value: index, done: false}
                index += 1;
                count++;
                return result;
            }
            return {
                value: count,
                done: true
            }
        }
    }
}

const it = myIterator(0,10);
let response = it.next();
while (!response.done) {
    console.log(response.value);
    response = it.next();
}

//------------------------------------------------------------------

const arr = [0,3,4,6];

const it2 = arr[Symbol.iterator]();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

// ----------------------------------------------------

const map = new Map();
map.set('key1', 'valor 1');
map.set('key2', 'valor 2');
const mapIterator = map[Symbol.iterator]();
console.log(mapIterator.next().value);
console.log(mapIterator.next().value);
console.log(mapIterator.next().value); // undefined

for (const [key, value] of map) {
    console.log(`${key} and ${value}`);
}

//------------------------------------------------

const mySet = new Set();
mySet.add('uno');
mySet.add('dos');
mySet.add('tres');

const setIterator = mySet[Symbol.iterator]();
console.log(setIterator.next());
console.log(setIterator.next());
console.log(setIterator.next());
console.log(setIterator.next());

for (const value of mySet) {
    console.log(value);
}

//---------------------------------------