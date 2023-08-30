// node 01_basics/07_dates
let mydate = new Date();

// to declare a date variable 
let mybirthday = new Date(2000,6,7 ,5,55);
// console.log(mybirthday); //2000-07-08T05:55:00.000Z
// console.log(mybirthday.toDateString());// Fri Jul 07 2000

// to declare a timestamp
let mytimestamp = Date.now()
// console.log(mytimestamp); // return milliseconds till now -->1693377258192
// console.log(mytimestamp/1000); // return seconds till now -->1693377258.192
// console.log(Math.floor(mytimestamp/1000)); // return seconds till now -->1693377258


// console.log(mydate);//2023-08-30T05:49:56.300Z
// console.log(mydate.toString());// Wed Aug 30 2023 05:52:45 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString());//Wed Aug 30 2023
// console.log(mydate.toTimeString());// 05:52:45 GMT+0000 (Coordinated Universal Time)

// console.log(mydate.toLocaleString("en-In"));// 8/30/2023, 5:52:45 AM
// console.log(mydate.toLocaleString());// 8/30/2023, 5:52:45 AM
// console.log(mydate.toLocaleDateString());// 8/30/2023
// console.log(mydate.toLocaleTimeString());// 5:52:45 AM
// console.log(mydate.toUTCString());// Wed, 30 Aug 2023 05:52:45 GMT


// Wed Aug 30 2023 06:12:56 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.getDate());// 30

// console.log(mydate.getFullYear());// 2023
// console.log(mydate.getMonth());// 7
// console.log(mydate.getDay());// 3

// console.log(mydate.getHours());// 6
// console.log(mydate.getMinutes());// 10
// console.log(mydate.getSeconds());// 40
// console.log(mydate.getMilliseconds());// 356

// console.log(mydate.getTime());// 1693375840356
// console.log(mydate.getTimezoneOffset());// 0

// console.log(mydate.getUTCDate());// 
// console.log(mydate.getUTCDay());// 
// console.log(mydate.getUTCFullYear());// 

//console.log(mydate.getDate());
