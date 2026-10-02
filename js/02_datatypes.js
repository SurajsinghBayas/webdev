"use strict";
//alert("Hello, World!");
/* we are using node js not browser so we cannot use alert() function. Instead we can use console.log() function to print the output in the console. */
// maintain code readability and maintainability
console.log (2+5)
console.log (2-5);

// tc39.es/ecma262/#sec-ecmascript-language-types link -"ECMAScript Language Types" or mdn docs

let a=10; // number
let b=10.5; // number
let c="Hello"; // string        
let d=true; // boolean
let e=null; // null --> empty value or no value , standalone value that represents the absence of any object value
let f=undefined; // undefined --> a variable that has been declared but not assigned a value
let g=Symbol("id"); // symbol
let h={name:"John", age:30}; // object

console.log(typeof null); // object
console.log(typeof undefined); // undefined