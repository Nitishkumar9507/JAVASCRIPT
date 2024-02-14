// if 
// const isUserLoggedIn = true;
// if(isUserLoggedIn){
//     console.log("User Logged In!")
// }
// Operators -> <, >, <=, >=, ==,!==, ===(strict check it also compare data type ), &&, ||(OR)

const age= 12;

// if(age>18){
//     console.log("You can Vote!")
// }else{
//     console.log("You are underage Wait till 18 !")
// }

const balance = 10000;
const newbalance=balance.toLocaleString()
// if(balance>5000){console.log(`Your balance is greater than 5000 your final balance is :${newbalance}`)};

// if-elseif-else 

const enrolled=true;
const attendence=false;
const validId =true;

// if(enrolled && attendence && validId){
//     console.log("You are Eligible for Campus placement! ")
// }else{
//     console.log("You are not eligible for Campus Placement, Please contact your HOD ")
// }

// +++++++++++++++++++++++++++++++ Switch ++++++++++++++++++++++++++++++++++ 

const index = 22;
// switch (index) {
//     case 1:
//         console.log("Jnuary")
//         break;
//     case 2:
//         console.log("February")
//         break;
//     case 3:
//         console.log("March")
//         break;
//     case 4:
//         console.log("April")
//         break;
//     case 5:
//         console.log("May")
//         break;
//     case 6:
//         console.log("June")
//         break;
//     case 7:
//         console.log("July")
//         break;
//     case 8:
//         console.log("August")
//         break;
//     case 9:
//         console.log("September")
//         break;
//     case 10:
//         console.log("October")
//         break;
//     case 11:
//         console.log("November")
//         break;
//     case 12:
//         console.log("December")
//         break;

//     default:
//         console.log("Invalid index of month ")
//         break;
// }


// =================== Truthy and Falsy value ================= 
const Email= []; // ""-->false, "value"-->true, []--> true
if(Email){
    console.log("Got the Email value")
}else{
    console.log("No Email value")
}
// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// Truthy value 
// "0", "false", " "(space), [], {}, function(){} 

// to check these condition 

// empty object checking 
const emptyObj={ Name:"Nitish"};
if(Object.keys(emptyObj).length === 0 ){
    console.log("Object is empty")
}else{console.log("Object is nonempty")}

// empty array checking 
if(Email.length === 0){
    console.log("Array is empty")
}else{console.log("Array is nonempty")}

// ================================================================================================ 

// +++++++++++++++++ The nullish coalescing operator +++++++++++++++++++++++++++++++ 

// Syntax --> const result = someValue ?? defaultValue; 
// Note -> The nullish coalescing operator returns the right-hand operand when the left-hand operand is null or undefined. If the left-hand operand is any other falsy value (such as 0, an empty string '', or false), it returns the left-hand operand. 

const x = null;
const y = 42;

const result1 = x ?? 'Default Value'; // result1 is 'Default Value'
const result2 = y ?? 'Default Value'; // result2 is 42
console.log(`Value1: ${result1} , Value2: ${result2}`)

// Ternary Operator 
// Syntax -> Ternary ? True:False 

const ternary = false;
if(ternary?console.log("This is true statement!"):console.log("This is false Statement!"));
