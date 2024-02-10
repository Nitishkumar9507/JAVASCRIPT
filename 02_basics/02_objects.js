// objects literal
const mySymbol = Symbol ("nitish kumar");

const jsObject ={
    Name:"Nitish kumar", // behind the scene Name is processed as "Name" : "Nitish kumar"
    "Current city": "Delhi", // in this case we can not access this element using dot operator so we use ["Current city"] to access it 
    Class:"BCA",
    Roll:2788680503,
    Age: 20,
    Location:"Darbhanga",
    [mySymbol]:"Mykey1"
}

// console.log(jsObject.Name) // dot operator --> used to accesss object values
// console.log(jsObject["Current city"]); // we can't access this using . //Delhi
// console.log(jsObject.mySymbol) // return -- Mykey1 but it is not a symbol its type is string 
// console.log(jsObject[mySymbol])
// console.log( typeof jsObject[mySymbol]) // here it also show string -- confusion!

// we can change the value of object 
jsObject.Location = "Bihar";

// console.log(jsObject.Location)//Bihar
// we can also freeze the object 
// Object.freeze(jsObject) // now no any change can be reflected in object

// console.log(jsObject);

jsObject.greeting = function (){
    console.log("Hello user");// adds a method in jsobject (object)
}
jsObject.greetingTwo = function (){
    console.log(`Hello user ${this.Name}`);// adds a method in jsobject (object)
}

// jsObject.greetingTwo()// Hello user Nitish kumar
// console.log(jsObject.greetingTwo)//[Function (anonymous)] 
// console.log(jsObject.greetingTwo()) //Hello user Nitish kumar

// ================================== lec 17 ===========================================
// we can also give object as a value in an object 

const normalObject={
    Name : "Nitish kumar",
    Class : "Bca",
    Education: {
        Tenth:"CBSE",
        Twelve:"BSEB"
    }
}
// console.log(normalObject.Education.Tenth) //CBSE

const obj1={1:"q", 2:"g", 3:"k"}
const obj2={4:"q", 5:"g", 6:"k"}
const obj3={7:"q", 8:"g", 9:"k"}

// how to merge/ cobine all these object in single object 
const obj4 = {obj1,obj2,obj3} 
// console.log(obj4) //{ obj1: { '1': 'q', '2': 'g', '3': 'k' },  obj2: { '4': 'q', '5': 'g', '6': 'k' },  obj3: { '7': 'q', '8': 'g', '9': 'k' }  }
const anotherobj = Object.assign({}, obj1,obj2,obj3) //{'1': 'q', '2': 'g', '3': 'k', '4': 'q', '5': 'g', '6': 'k', '7': 'q', '8': 'g', '9': 'k' }
// Note: here if we add an empty obj at first index then all object will be copied into that empty obj else it will bw copied into the obj which is at 0 index 
// console.log(anotherobj)

// instead we can also use spread operater here 
const spreadobj = {...obj1,...obj2, ...obj3}
// console.log(spreadobj)

// some time we GET  arra  of object 
const arrayOfObj = [
    {Name: "nitish", Lname: "Kumar"},
    {Name: "nitish", Lname: "Kumar"},
    {Name: "nitish", Lname: "Kumar"},
    {Name: "nitish", Lname: "Kumar"},
    {Name: "nitish", Lname: "Kumar"},
    {Name: "nitish", Lname: "Kumar"}
]

// to access these object value use 
// console.log(arrayOfObj[1].Name)

// we can get keys and values of an object by using Object.keys and Object.values 
// console.log(Object.keys(arrayOfObj)) //[ '0', '1', '2', '3', '4', '5' ]
console.log(Object.values(obj3))//[ 'q', 'g', 'k' ]
console.log(Object.entries(obj3))//[ [ '7', 'q' ], [ '8', 'g' ], [ '9', 'k' ] ]


// destructuring of object 
const destructerObj ={
    Name:"Nitish ",
    Lname: "Kumar",
    myclass:"BCA",
}
// const {properties}=object; // syntax for destructuring

const {Name, Lname, myclass}=destructerObj;

console.log(Name, Lname, myclass)

// API===============================================  