const score = 900
// console.log(score);

const balance= new Number(500)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //decimal points 700.00

let num2= 684.98698
// console.log(num2.toPrecision(3));
let num3 = 10000000
// console.log(num3.toLocaleString("en-in"));// local string 10,00,000
// ==================================================== maths ==========================================

// console.log(Math.abs(-98));// 98  return an absolute/pos value
// console.log(Math.round(9.8));//10
// console.log(Math.ceil(9.4));//10
// console.log(Math.floor(9.6));//9

console.log(Math.random()); //return value bw 0.00-1.00 -->0.9552181440407199
console.log((Math.random()*10) +1 );//return value bw 1-10 --> 5.815707233977308
console.log(Math.floor((Math.random()*10) +1 ));//return value bw 0 - 1

// another way to generate random no is 
const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max - min +1 )) +min); // no b/w 10 - 20


// E: 2.718281828459045
// LN2: 0.6931471805599453
// LN10: 2.302585092994046
// LOG2E: 1.4426950408889634
// LOG10E: 0.4342944819032518
// PI: 3.141592653589793
// SQRT1_2: 0.7071067811865476
// SQRT2: 1.4142135623730951
// abs: ƒ abs()
// acos: ƒ acos()
// acosh: ƒ acosh()
// asin: ƒ asin()
// asinh: ƒ asinh()
// atan: ƒ atan()
// atan2: ƒ atan2()
// atanh: ƒ atanh()
// cbrt: ƒ cbrt()
// ceil: ƒ ceil()
// clz32: ƒ clz32()
// cos: ƒ cos()
// cosh: ƒ cosh()
// exp: ƒ exp()
// expm1: ƒ expm1()
// floor: ƒ floor()
// fround: ƒ fround()
// hypot: ƒ hypot()
// imul: ƒ imul()
// log: ƒ log()
// log1p: ƒ log1p()
// log2: ƒ log2()
// log10: ƒ log10()
// max: ƒ max()
// min: ƒ min()
// pow: ƒ pow()
// random: ƒ random()
// round: ƒ round()
// sign: ƒ sign()
// sin: ƒ sin()
// sinh: ƒ sinh()
// sqrt: ƒ sqrt()
// tan: ƒ tan()
// tanh: ƒ tanh()
// trunc: ƒ trunc()

// node 01_basics/06_nums_and_maths