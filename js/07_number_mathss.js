const score =200;
console.log(typeof score);
console.log (score);

const temp = new Number(200);

console.log(typeof score); // number
console.log(typeof temp);
console.log (temp);

//tostring
console.log(score.toString().length);
console.log(temp.toString());

console.log(typeof score.toString());
console.log(typeof temp.toString());

// tofixed
console.log(score.toFixed(2));
console.log(temp.toFixed(2));

// toprecision --> returns a string representing the number to a specified precision in fixed-point or exponential notation.
n=43.54646
console.log(n.toPrecision(2)); 
console.log(n.toPrecision(4));

const x =1000;
//tolocaleString() --> returns a string with a language sensitive representation of this number.
console.log(x.toLocaleString('en-IN')); // 1,000
console.log(x.toLocaleString('de-DE')); // 1.000
console.log(x.toLocaleString('ar-EG')); // ١٬٠٠٠


//// Mathssss library

console.log(Math); // 3.141592653589793
console.log(Math.PI); // 3.141592653589793
l=-3442443
console.log(Math.abs(l)); // 3442443
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.8)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.max(1,2,3,4,5)); // 5
console.log(Math.min(1,2,3,4,5)); // 1
console.log(Math.pow(2,3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.random()); // random number between 0 and 1
console.log((Math.random()*10 )+1 ); // 4

const min=1;
const max=6;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between 1 and 6    