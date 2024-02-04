// Array

const arrayOne = [23, 45, 76, 87, 98];
const arrayTwo = ["nitish", "kumar", "yadav"];

const myarray = new Array("a", "b", 1, 2, 4);

// console.log(arrayOne); //[23, 45, 76, 87, 98]

// methods
// arrayOne.push(100)
// console.log(arrayOne);//[23, 45, 76, 87, 98, 100]

// arrayOne.pop()
// console.log(arrayOne);//[23, 45, 76, 87 ]

// console.log (arrayOne.at(3)) // 87
// console.log (arrayOne.concat(arrayTwo)) // [ 23, 45, 76, 87, 98, 'nitish', 'kumar', 'yadav' ]

// if u push an array into an array it takes new array as a  single element 
// arrayOne.push(arrayTwo)
// console.log(arrayOne)//[ 23, 45, 76, 87, 98, [ 'nitish', 'kumar', 'yadav' ] ]

// const newarray = arrayOne.concat(arrayTwo) //concat returns new aaray
// console.log(newarray)

// const bothArray = [...arrayOne, ...arrayTwo] // it is a spread operator which spread the elements of an array and combines it to return a new array
// console.log(bothArray)
// console.log(arrayOne)
// console.log(arrayTwo)

// const arrayInsideArray = [2, 5, 77, [33, 66,98], 76, 98, [1, 2, 333, 5656, 787], 76,87687]
// in this situation use .flat(depth of array) to get all the elements of all arrays in  one array 
// const realArray = arrayInsideArray.flat(Infinity)
// console.log(realArray) //[2,  5,    77,   33,66, 98,    76,   98,1,  2,   333, 5656,787, 76, 87687]

// console.log(Array.isArray("nitish kumar")) //false
// console.log(Array.from("nitish kumar")) // make array from string ['n', 'i', 't', 'i','s', 'h', ' ', 'k','u', 'm', 'a', 'r']
// console.log(Array.from("988798697987978")) //['9', '8', '8', '7','9', '8', '6', '9','7', '9', '8', '7','9', '7', '8']

let score1 =111;
let score2 =1761;
let score3 =761;
// console.log(Array.of(score1, score2, score3)) //[ 111, 1761, 761 ]


// ====================================================================================
// at: ƒ at()
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// findLast: ƒ findLast()
// findLastIndex: ƒ findLastIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toReversed: ƒ toReversed()
// toSorted: ƒ toSorted()
// toSpliced: ƒ toSpliced()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()
// with: ƒ with()
// Symbol(Symbol.iterator): ƒ values()
// Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}

// node 02_basics/01_arrays.js