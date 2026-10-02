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


/*

types of data types in js
1. Primitive data types
    a. Number - represents both integer and floating-point numbers
    b. String - represents a sequence of characters
    c. Boolean - represents a logical entity and can have two values: true and false
    d. Null - represents the intentional absence of any object value
    e. Undefined - represents a variable that has been declared but not assigned a value
    f. Symbol - represents a unique and immutable value

    call by value - when a variable is assigned a primitive data type, the value is stored directly in the variable. When the variable is copied to another variable, a new copy of the value is created. Changes made to one variable do not affect the other.

2. Non-primitive data types
    a. Object - represents a collection of key-value pairs, where each key is a string and each value can be any data type. Objects can also have methods, which are functions that are associated with the object.
    b. Array - represents an ordered collection of values, where each value can be any data type. Arrays are a special type of object in JavaScript and have their own methods for manipulating the values they contain.
    c. Function - represents a block of code that can be executed when called. Functions can take parameters and return values, and can also be assigned to variables or passed as arguments to other functions.

    call by reference - when a variable is assigned a non-primitive data type, the value is stored as a reference to the memory location where the value is stored. When the variable is copied to another variable, both variables point to the same memory location. Changes made to one variable affect the other.


    +++++++++++++++++++++++++++++
    memory allocation in js
    1. Stack memory - used for storing primitive data types and function calls. The stack is a last-in, first-out (LIFO) data structure, meaning that the last item added to the stack is the first one to be removed. When a function is called, a new stack frame is created to store the function's local variables and parameters. When the function returns, the stack frame is removed from the stack.
    
    2. Heap memory - used for storing non-primitive data types such as objects and arrays. The heap is a region of memory that is managed by the JavaScript engine's garbage collector. When an object or array is created, it is allocated in the heap memory. When there are no more references to an object or array, it becomes eligible for garbage collection and its memory can be reclaimed.



*/

// memory examples

let num1 = 10; // primitive data type, stored in stack memory
let num2 = num1; // copy of num1, stored in stack memory

num2 = 20; // change value of num2, does not affect num1

console.log(num1); // 10
console.log(num2); // 20

let obj1 = { name: "John", age: 30 }; // non-primitive data type, stored in heap memory
let obj2 = obj1; // reference to obj1, stored in stack memory

obj2.age = 40; // change value of obj2, affects obj1

console.log(obj1.age); // 40
console.log(obj2.age); // 40