let score="03223abs";
let temp =null;
console.log(typeof score); // string
console.log(typeof temp); // object
console.log(Number(temp)); // NaN
console.log(Number(score)); // NaN
console.log(typeof Number(score)); // number
console.log(typeof Number(temp)); // number


let islogin=true;
let islogout=false;

console.log(typeof islogin); // boolean
console.log(typeof islogout); // boolean
console.log(Number(islogin)); // 1
console.log(Number(islogout)); // 0

let name="";
console.log(typeof name); // string
console.log(Boolean(name)); // false
name="suraj";
console.log(Boolean(name)); // true

let age=0;
console.log(typeof age); // number
console.log(Boolean(age)); // false
age=25;
console.log(Boolean(age)); // true


sum=33;
console.log(typeof sum); // number
b=String(sum);

console.log(typeof b); // string