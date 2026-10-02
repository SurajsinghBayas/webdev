console.log(1 == "1"); // true it only check value
console.log(1 === "1"); // false it check both value and type

console.log(1 != "1"); // false it only check value
console.log(1 !== "1"); // true it check both value and type

console.log(1 > 2); // false
console.log(1 < 2); // true

console.log(1 >= 2); // false
console.log(1 <= 2); // true

console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false 

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log(isNaN(NaN)); // true
console.log(isNaN(1)); // false