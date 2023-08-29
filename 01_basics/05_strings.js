let name = "nitish kumar "
let phone = 98090980

// console.log(name + phone); // instead of using this syntax , use backtick `` 

console.log(`My name is ${name} and my phone no is: ${phone} `);

const stringObj = new String("This is a string object ") // here string is declared as an obj with key index
console.log(stringObj);

//some funcions are
// console.log(name.length); //13
// console.log(name.length);
// console.log(name.charAt(5));
// console.log(name.toUpperCase());
// console.log(name.indexOf("k"));
// console.log(name.toLowerCase());

let newstr = name.substring(0,7);
console.log(newstr);
let newstr2 = name.slice(-6,-2);
console.log(newstr2);

const trimstr="    nitish     "
console.log(trimstr);
console.log(trimstr.trim());//remove spaces
console.log(name.replace("kumar","yadav"));
console.log(name.includes("nit"));
console.log(name.split(" "));



// node 01_basics/05_strings.js

// anchor: ƒ anchor()
// at: ƒ at()
// big: ƒ big()
// blink: ƒ blink()
// bold: ƒ bold()
// charAt: ƒ charAt()
// charCodeAt: ƒ charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// isWellFormed: ƒ isWellFormed()
// italics: ƒ italics()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// toWellFormed: ƒ toWellFormed()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
// Symbol(Symbol.iterator): ƒ [Symbol.iterator]()