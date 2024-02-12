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
