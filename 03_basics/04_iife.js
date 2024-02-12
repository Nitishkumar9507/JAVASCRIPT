//  Immediately invoked function 

// Syntax --> (function goes here)(function called) 

// function normal(){
//     console.log("This is a normal function ")
// };
// normal()

(function iife(){
    console.log("This is a iife function")
}) (); // it will be executed immediately 

//  Note : both function is not running at a time if you run iife then normal will not run and remember put ; at end of iife function


// (function () {
//     let message = "Hello from IIFE!";
//     console.log(message);
// })();

// we can also pass arguments to iffe function and also declare arrow function as iife function 
((name)=>{
    console.log(`Hello ${name}, Welcome!`)
})("Nitish kumar")

// console.log("This is a msg");

