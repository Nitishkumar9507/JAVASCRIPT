// function 

const myname = function () {
    console.log("N")
    console.log("I")
    console.log("T")
    console.log("I")
    console.log("S")
    console.log("H")
}
const addTwoNo = function (num1, num2) { // num1 , num2 are parameters
    let sum = num1 + num2;
    console.log("Sum of the given No is :", sum)
}
const loginMessage = function (username) {
    if (username === undefined) {
        console.log("Please enter username:")
        return
    }
    return `${username} just logeed in !`
}

// console.log(myname())
// console.log(addTwoNo(43,53)) // 43, 53 are arguments
// console.log(loginMessage("Nitish kumar")) //run properly 
// console.log(loginMessage("")) // just logeed in ! --> if u give empty string as a parameter it return empty value
// console.log(loginMessage()) // will not run properly -->return undefined just logeed in !
// console.log(loginMessage()) // if condition check and return the message


// ================ next lec ======================

const calculatePrice = function (...num) {
    return num
}

// console.log(calculatePrice(200,299,300,388,3434)) // return the array of all values -->[ 200, 299, 300, 388, 3434 ]

// passing object as parameter 

const userObj = {
    Name: "Nitish",
    Lname: "Kumar",
    Email: "niti@gmail.com"
}

function handelObject(anyobject) {
    console.log(`Name of the user is ${anyobject.Name} and Email is ${anyobject.Email}`)
}

// console.log(handelObject(userObj))
// console.log(handelObject({
//     Name:"Another name ",
//     Email:"another@mail.com"
// })) //we can  also pass direct object as argument 

// =========== PASSING ARRAY ================

const array = [32332, 2322, 23234, 4243, 5545, 4564]
function handelArray(anyarray) {
    console.log(anyarray[2])
}

// handelArray(array) //23234
// handelArray([322, 322,222]) //23234



// ==================== new file 02_scope.js ====================== 

let a = 10; //block level scop
const c = 30;//block level scope
var b = 20;  //global scope 

// console.log(a)
// console.log(b)
// console.log(c)

// nested scope 

function one() {
    const username = "Nitish kumar "

    function two() {
        const website = "Youtube "
        console.log(username)
    }
    // console.log(website) //website is out of scope here we cannot access it 
    // two()
}
one()

if (true) {
    const username = "Nitish kumar "
    if (username === "Nitish kumar ") {
        const website = " Youtube "
        // console.log (username + website)

    }
    // console.log(website)
}
// console.log(username)

// +++++++++++++++++++++ interesting fact ++++++++++++++++++++++++++ 

// console.log(addone(9))
function addone (num){
    return (num + 1 )
}

// console.log(addTwo(8))
const addTwo = function (num){ // it is refered as expression and it is not hosted 
    return (num + 2 )
}

// ============================= next file --> 02_arrow.js ====================== 

const user = {
    username :"Nitish ",
    price : 999,

    welcomemsg:function (){
        console.log(`${this.username} , just loggedin!`)
        console.log(this)
    }
}

// user.welcomemsg() //Nitish  , just loggedin! 

// user.username = "kumar";

// user.welcomemsg() //kumar  , just loggedin! 

// console.log(this) // {}

// we can use this in object 

// this cannot be used in function 

const thisfuncton = function (){
    username: "Nitish "
    email : "nitish@mail.com"
    console.log(this.username)
}

// thisfuncton() // undefined


// arrow function 

const thisarrowfuncton =()=>{
    username: "Nitish "
    email : "nitish@mail.com"
    console.log(this.username)
    console.log(this)
}

// thisarrowfuncton()//undefined , {}

//normal arrow function 
const arrowfnadd = (num1, num2)=>{
    return num1 +num2 ;
}

// console.log(arrowfnadd(87, 98))// 185

// implicit arrow function 
const arrowaddone= (num)=>num + 1; // if u use {} here you have to use return keyword to return the value and if u use () then return keyword is not used
const returnobj =()=>({ username:"Nitish"}) // here to return an object we cannot use {} , it should be wrapped under ({}) like this

// console.log(arrowaddone(9)) //10
// console.log(returnobj()) //{ username: 'Nitish' } 