console.log ("suraj"+" "+"Bayas");

let a ="suraj";
let b=3;

console.log('hi my names is ${a} and my age is ${b}'); // hi my names ${a} and my age is ${b}
console.log(`hi my names is ${a} and my age is ${b}`); // hi my names is suraj and my age is 3      

let x =new String("suraj-bayas");
console.log(x); // [String: 'suraj']
console.log(x[1]); // 'u'
console.log(typeof x); // object

console.log(x.length); // 5
console.log(x.toUpperCase()); // 'SURAJ'
console.log(x.toLowerCase()); // 'suraj'
console.log(x.charAt(1)); // 'u'
console.log(x.indexOf('u')); // 1

const str = x.substring(0,5);
console.log(str); // 'suraj'

const str1 = x.slice(0,5);
console.log(str1); // 'suraj'

const str2 = x.split('-');
console.log(str2); // [ 'suraj', 'bayas' ]

const str3 = x.replace('suraj','bayas');
console.log(str3); // 'bayas-bayas'

const str4 = x.trim();
console.log(str4); // 'suraj-bayas'

const str5 = x.includes('suraj');
console.log(str5); // true

const str6 = x.startsWith('suraj');
console.log(str6); // true

const str7 = x.endsWith('bayas');
console.log(str7); // true

const str8 = x.repeat(3);
console.log(str8); // 'suraj-bayassuraj-bayassuraj-bayas'