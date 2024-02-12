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
