// console.log(2>1);// true
// console.log(2<1);//false
// console.log(2<=1);//false
// console.log(2>=1);//true
// console.log(2==1);//false
// console.log(2===1)//false
// console.log(2!=1);//true

//the reason is that the equality == check and comparisons >,<,>=,<= works differently
//comparison converts null to a number, treating it as 0.That's why (3)null>=0 =>true & (1)null>0 =>false
// console.log(null>1)//false
// console.log(null==1)//false
// console.log(null<1)//true
// console.log(null>=1)//false

// console.log(undefined>1)//false
// console.log(undefined<1)//false
// console.log(undefined==1)//false

//strict check (data type is checked)
console.log("5"===5); //false
// node 01_basics/04_comparisionoperator.js