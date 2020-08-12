/* const log = (text, callback) => {
    setTimeout(() => {
        console.log(`${text}`)
        callback()
    }, 1000)
 }
 
 log('uno', () => {
    log('dos', () => {
        log('tres', () => { })
    })
 }) */

const promesa1 = () => new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve('uno')
   }, 1000);
});
const promesa2 = () => new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve('dos')
   }, 2000);
});
const promesa3 = () => new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve('tres')
   }, 3000);
});

promesa1().then(res=>console.log(res));
promesa2().then(res=>console.log(res));
promesa3().then(res=>console.log(res));