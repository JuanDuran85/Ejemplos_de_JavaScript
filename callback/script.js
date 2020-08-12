const getSquare = (number, callback) => callback(number * number);
 
getSquare(4, result => console.log(result))
getSquare(2, result => console.log(result))
getSquare(5, result => console.log(result))
getSquare(12, result => console.log(result))

const A = (number) => {
    const double = number * 2
    B(double, square => {
            C(square, percent => {
               console.log(percent)
            })
    })
}
 
const B = (number, callback) => callback(number * number);
const C = (number, callback) => callback(number * 25 / 100);
A(5);
