"use scrict" // treat all js code as newer version js

// alert("hello Duniya") //can be used on browser dont run on node js

// primitive datatypes

/* Number(76), BigInt(8769789684876876486874), String("this is a string"), Boolean(True/False), Null(emty value/null), Symbol(used to uniquely identify the data types), Undefined(Not declared) */

//object

// referenced datatypes (non -primitive)
// Arrays, objects, functions

let subjects =["Hindi","English","Computer"] //Array
let myobj ={                                // Objects {}
    name:"nitish kumar",
    age: 19,
    class:"BCA"
}

function myfunction(){               //function
    console.log("This is a function");
}
console.log(subjects[0]);
console.log(myobj.name);
console.log(myfunction());