// FUNCTIONS IN JS ----->
// It is simply a peice of code which which we can use in our program many times
// It is just like a variable holding some peice of code

// decleration --->
function nameoffunction(){
    console.log("you are running code present inside a function ");
}

// function call
nameoffunction();

// function expression
let func = function(){            // this is also called anonymous function
console.log("this is an example of function expression");
}

// calling function expression
func();

// example
// passing values (arguments and parameters)

let invitation = function(name="defaultName",time = "night"){         // local variable to this function
    console.log("welcome ! ${name} you are invited on our event and time will be night");
}

// console.log(name);
invitation("vedant","morning");
invitation("harry","morning");              // output -->  welcome ! harry you are invited on our event
// invitation();


// Return values {how to return value from the function}

// let agecalc = function(birthYear,currentYear){
let agecalc = function(birthYear,currentYear=2023){
    let age = currentYear - birthYear;
//     console.log(`your current age is = ${age}`);
    return age;
 //   console.log("after return statement no line of code will be executed");
}

// agecalc(2005);
// agecalc(2005,2023);           // output --> your current age is = 18
// console.log(agecalc(2005));           // output --> 18

let functionresult = agecalc(2005);
console.log(`your age is = ${functionresult}`);            // output ---> Your age is = 18




// ARROW FUNCTION IN JS ---> {ES6}

// Special form of function expression 
// it allows us to write function more fast because 
// no need to use function keyword
// no need to use parenthesis() in case of single-parameter
// no need to use curely {} if single line code in function
// no need to use return statement if sinlge line code in function

// function expression 
/* let  invitation2 = function(name){
    console.log(`welcome ${name} to this event`);
} 
invitation2("coders");  */

/* let invitation2 = name => {
    return `welcome ${name} to this event`;
} */

let invitation2 = name => `welcome ${name} to this event`;
console.log(invitation2("coders"));          // output --> welcome coders to this event





// Passing functions as an arguments { Higher order functions example}

// exmaple 1 --> tranformer function {higher order function} , callbacks
let uppercase = function(str){
    return str.toUpperCase();
}

let lowercase = function(str){
    return str.toLowerCase();
}

let transformer = function(str,fun){
    return fun(str);
}

console.log(transformer("hello",uppercase));         // output ---> HELLO
console.log(transformer("heLLO",lowercase));         // output ---> hello


// example 2 ---> returning function {function returning another function}

let compliment = function(msg){
    return function(name){
        console.log(`${msg},${name}`);
    }
};

// compliment("you are good coder")("carry");

//  2nd method -->
let complimented = compliment("you are good coder");          // output --->you are a good coder lurie

// complimented("lurie");
console.log(complimented);

// compliment is a higher order function



// immediately invoked function expression
// executed only once

// now this is expression
(function(name){
    console.log("this function will never execute again ",name);
})("IIFE");




// SetTimeOut and setInterval method
// setTimeOut --> run function "once" after "interval" of time
// setInterval ---> run function repeatedly, starting after the interval of time and then repeating....

// Syntax ---> setTimeOut(func|code,delay,arg1,arg2,....)

function greeting(name){
    console.log(`xyz ${name}`);
}
// setTimeout(greeting,1000,"Neha");      // 5000 ms = 5 sec


// setInterval --->
// Syntax --->  setInterval(func|code,delay,arg1,arg2,....)

setInterval(greeting,3000,"john");




// HOISTING IN JS -------------------> "variable" decleration are "hoisted" "toward" top of their scope
test = 10;
console.log(test);

var test;     // o/p---> 10
let test;      // o/p----> error
// const test;    // o/p---> error   

// FUNCTION DECLERATION ---->

test();
function test() {
    console.log("hello programmers");               // o/p-----> hello programmers
}

// NOT FUNCTION EXPRESSION OR ARROW FUNCTION--->

test();
var test =()=> {
    console.log("hello programmers");               // o/p-----> error
}