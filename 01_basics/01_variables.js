const accountId = 9507;
let email = "nitish@gmail.com";
var password = "888888";
accountCity = "jaipur"; // not prefered to use like this
let myname; //this variable will be declared as undefined:

// accountId=2; //it cant be redeclared as it is a const 

email ="abcd@gmil.com";
password="8757";
accountCity="darbhanga";
console.log(accountId);
console.table([accountId,email,password,accountCity]) // table is used to print the value of multiple variables in the array at a time

/* var was used earlier now it is suggested to use const and let 
prefer not to use var because of issue in block scope and functional scope

let -> can be reassigned 
var -> can be reassigned 
const -> can not reassign the value
*/
