//dates

let date = new Date();
console.log(date.toString()); // current date and time

let date1 = new Date("2024-06-01");
console.log(date1.toString()); // Sat Jun 01 2024 00:00:00 GMT+0530 (India Standard Time)

console.log(date1.toJSON()); // 2024-06-01T00:00:00.000Z
console.log(date1.toISOString()); // 2024-06-01T00:00:00.000Z   

console.log(typeof date1); // object

let mycreateddate = new Date("2024-06-01");
console.log(mycreateddate.toDateString()); // Sat Jun 01 2024 00:00:00 GMT+0530 (India Standard Time)
console.log(mycreateddate.toLocaleString()); // 00:00:00 GMT+0530 (India Standard Time)
console.log(mycreateddate.getDate()); // 1
console.log(mycreateddate.getDay()); // 6 (Saturday)
console.log(mycreateddate.getFullYear()); // 2024
console.log(mycreateddate.getHours()); // 0
console.log(mycreateddate.getMilliseconds()); // 0
console.log(mycreateddate.getMinutes()); // 0
console.log(mycreateddate.getMonth()); // 5 (June, months are zero-indexed)
console.log(mycreateddate.getSeconds()); // 0
console.log(mycreateddate.getTime()); // milliseconds since Jan 1, 1970

//timestamp examples 
let timestamp = 1711920000000;
let dateFromTimestamp = new Date(timestamp);
console.log(dateFromTimestamp.toString()); // Sat Jun 01 2024 00:00:00 GMT+0530 (India Standard Time)
console.log(dateFromTimestamp.toLocaleString()); // 00:00:00 GMT+0530 (India Standard Time) 
//get 
const currentDate = new Date();
console.log(currentDate.getFullYear()); // 2024
console.log(currentDate.getMonth()); // 5 (June, months are zero-indexed)
console.log(currentDate.getDate()); // 1
console.log(currentDate.getDay()); // 6 (Saturday)
console.log(currentDate.getHours()); // current hour
console.log(currentDate.getMinutes()); // current minute
console.log(currentDate.getSeconds()); // current second
console.log(currentDate.getMilliseconds()); // current millisecond
