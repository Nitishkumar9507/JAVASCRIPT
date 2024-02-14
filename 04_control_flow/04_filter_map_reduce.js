// storing values returned by foreach in variable 

// const newarr = [ "Hindi","Eng","Math","Science"]

// const values =newarr.forEach((item)=>{
//     // console.log(item);
//     return item ;
// })
// console.log(values); //Undefined  it means foreach doesnot return any values

// filter  it takes a callback function and return the values based on the condition given
const mynum= [11,12,13,14,15,16]
// const returnedval = mynum.filter((num)=> num<15)
// console.log(returnedval);//[ 11, 12, 13, 14 ]

// const returnedval1 = mynum.filter((num)=>{
//     num<=15;
// })
// console.log(returnedval1); // [] -> Empty array because we used {} here so we have to return it explicitely
const returnedval1 = mynum.filter((num)=>{
    return num<=15;
})
// console.log(returnedval1); // [ 11, 12, 13, 14, 15 ]

const userDetails =[
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

const detail =userDetails.filter((details)=>{
    return details.Name==="Nitish";
})

// console.log(detail); //[ { Name: 'Nitish', Lname: 'Kumar', Email: 'nitish@mail' } ]

// map 
// const newnum = mynum.map((num)=> num - 10) //if u open block scope {} then use return keyword 
// console.log(newnum);//[ 1, 2, 3, 4, 5, 6 ]

// chaining 
// const mynum= [11,12,13,14,15,16] 

// const newnum2 = mynum
//             .map((num)=> num - 10)
//             .map((num)=> num + 20)

// console.log(newnum2); //[ 21, 22, 23, 24, 25, 26 ]

const newnum2 = mynum
            .map((num)=> num - 10)
            .map((num)=> num + 20)
            .filter((num)=>num<25)
// console.log(newnum2); //[ 21, 22, 23, 24 ]

// ================================== reduce ============================= 
// reduce used to get sum of all 

// const initval = 0; 
// const allsum = mynum.reduce((acc, curval)=> acc + curval ,initval)
// console.log(allsum); // 81


// sum of shopping cart 
const shoppingCart =[
    {
        Course :"Javascript",
        Price:999
    },
    {
        Course :"Java",
        Price:1999
    },
    {
        Course :"Pythen",
        Price:2999
    },
    {
        Course :"Web Developmant",
        Price:4999
    },
    {
        Course :"Cpp",
        Price:999
    }
]
const sumtotal = shoppingCart.reduce((accu, course)=> accu + course.Price,0)
// console.log(sumtotal); //11995 
