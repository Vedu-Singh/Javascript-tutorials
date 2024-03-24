// BOOLEAN VALUES AND COMPARISON OPERATORS ---->

let booleantype = true;
let stringtype = "true";

console.log(typeof booleantype, typeof stringtype);            // output --> boolean   string

// methods return boolean values

let email = "www.vedu@gmail.com";
let booleanvalue = email.includes("@");      // output ---> true
// let booleanvalue = email.includes("E");       // output ---> false
console.log(booleanvalue);            

// COMPARISON OPERATORS ALWAYS RETURN BOOLEAN VALUES
// == , === , != , !==
// > , >=
// < , <=

let status = "low";
console.log(status=="low");             // output --> true
console.log(status>="low");            // output --> true
console.log(status<="low");            // output --> true
console.log(status==="low");            // output --> false
console.log(status!=="low");           // output --> true
console.log(status!="low");            // output --> true
