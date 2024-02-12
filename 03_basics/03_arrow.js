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


