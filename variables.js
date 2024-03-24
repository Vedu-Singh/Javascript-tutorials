// VARIABLES AND BLOCK SCOPE IN JS ------>
// scope ----> area where variable is defined or accessible

// let score = 90;    // global scope
const score = 90;    // global scope
if(true){
// let score=50;     // block scope
// const score=50;      // const is not accessible by block scope
//   score = 60; 
//    console.log(score);      // nearest value
}

console.log(score);             // output ---> 90


//  TERNARY OPERATOR (? :) -----> { also called conditional operator}


// let age = 20;
// let age = 17;
// let age = 21;
l// et age = 19;
let weight = 60;
/* if(age>18){
    console.log("Qualify");
}
else {
    console.log("Fail");                 // output ---> Qualify  , fail
} */

// sinlge line solution
let result = age > 18 ? weight > 60 ? "Qaulify" : "weightissue" : "ageissue";
console.log(result);             // output ---> fail , qualify , ageissue , weightissue

// SWITCH STATEMENTS IN JS ------> { it is used in compatitive of 'conditional' statements }

let cuurentdate = new Date();

// let weekday = currentdate.getDay();       // 0 to 6

let age = 15;

switch(age){
    case 15:
    case 16:
    case 17:
        result = "These ages are allowed to sit in the exam";
        break;
    
    default:
        result = "Not allowed";

}




// if there is no break statement than "next" case will be executed
console.log(result);
