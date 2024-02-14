// for of loop 

// some we have to work on array  
// array of string = ["","",""] 
// array of object = [{},{},{}]

const numbers = [1,2,3,4,5,6]
for (const num of numbers) {
    // console.log(num +2)
}

// Map  it give list of unique values in the same order 

const map= new Map()
map.set('In','India')
map.set('In','India')
map.set('Us','United State')
map.set('Fr','France')

// console.log(map) //Map(3) { 'In' => 'India', 'Us' => 'United State', 'Fr' => 'France' }

// for of loop on map 
for (const keys of map) {
    // console.log(keys)
} 
// output 
//[ 'In', 'India' ]
// [ 'Us', 'United State' ]
// [ 'Fr', 'France' ]

// to obtain the key and value seperately use this syntax 
for (const [keys, value] of map) {  // this is called destructuring of array [keys, value]
    // console.log(keys, ":-" ,value)
} 
// output :-
// In :- India
// Us :- United State
// Fr :- France

// checking for of on object 
const myObj ={
    Name: "Nitish ",
    Lname: "Kumar",
    Email:"abc@gmail.com"
}
// for (const [keys, value] of myObj) {  // this is called destructuring of array [keys, value]
    // console.log(keys, ":-" ,value)
// } //TypeError: myObj is not iterable

// ================================================================ 
// for in loop
// we can use for in loop to iterate on an object 
const newObj = {
    Cpp: "c plus plus",
    js:"javascript",
    rb :"ruby",
    sw:"swift"
}

// for (const key in newObj) {
//     console.log(key)
// }
// we get key of an object , to get values  use that key to iterate over the values of the obj
// Cpp
// js
// rb
// sw

// for (const key in newObj) {
//     console.log(`key: ${key} :- ${newObj[key]}`)
// }

// key: Cpp :- c plus plus
// key: js :- javascript
// key: rb :- ruby
// key: sw :- swift

// for in loop on array 
const newarr = [ "Hindi","Eng","Math","Science"]
for (const key in newarr) {
    // console.log(key);
} //0   1   2   3
// it returns the index of arr 

// ==========================================================  
// for each loop(callback function)
// newarr.forEach((values)=>{console.log(values);}) // Hindi   Eng     Math    Science
// newarr.forEach(PrintVal)


// function PrintVal(val) {
//     console.log(val);
// } // Hindi   Eng     Math    Science

// we can also acess index and array using for each loop 
// newarr.forEach((values, index, arr)=>{console.log(values, index, arr);}) 
// Hindi 0 [ 'Hindi', 'Eng', 'Math', 'Science' ]
// Eng 1 [ 'Hindi', 'Eng', 'Math', 'Science' ]
// Math 2 [ 'Hindi', 'Eng', 'Math', 'Science' ]
// Science 3 [ 'Hindi', 'Eng', 'Math', 'Science' ]

const arrOfObj =[
    {
        Name: "Nitish",
        Lname : "Kumar",
        Email: "nitish@mail"
    },
    {
        Name: "Amit",
        Lname : "Kumar",
        Email: "amit@mail"
    },
    {
        Name: "Sumit",
        Lname : "Kumar",
        Email: "sumit@mail"
    },
    {
        Name: "Raj",
        Lname : "Kumar",
        Email: "raj@mail"
    }
]

arrOfObj.forEach((obj)=>{console.log(obj.Name);}) //Nitish Amit Sumit Raj