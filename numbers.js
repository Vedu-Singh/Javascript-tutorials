// NUMBERS DATA TYPES IN JS

let score = 50;
console.log(score , typeof score);          // output --> 50 , number

// Mathematical operators --> /,%,*,**,+,-

// let result = score / 2;      // gives quotient  { output --> 25 }
// let result = score % 2;      // gives remainder  { output --->  0 }
// console.log(result);


// mathematical expression 

let result = score*2+(4*3)-8/2 %4;    // output --> 100+12-0 --> 112
// using priority and precedence ---> 1.> brackets () , 2.> power opr ** , 3.> * / % (from left to right) , 4.> + - (from left to right)
console.log(result);

// concatenation of numbers with strings
let resultLine = "My total score = " + result ;
console.log(resultLine);            // output ---> My total score = 112  { number gets converted to string }


// LOOSE EQUALITY (==) AND STRICT EQUALITY OPERATOR (===) --> used for comparison
// let age = 22;      // number type value
// console.log(age == '22');  // focus only on value but not type { output ---> true }
// loose not equality operator
console.log(age != "22");   // false ---> output
// console.log(age === '22');  // focus on both value and its type { output ---> false }
console.log(age !=="22");   // output ---> true { strict not equality operator}

// TYPE CONVERSION IN JAVASCRIPT ----->
// let stringtype = "54";
// let stringtype = "Hello";
console.log(stringtype, typeof stringtype);      // output --> 54  string /  Hello  string

// number method 
// let numbertype = Number(stringtype);
console.log(numbertype,typeof numbertype);    // output ---> 54 'number' / NaN  'number'


// IMP note ---> in number method passing string must be of numeric values

let numbertype = 54;
console.log(typeof numbertype);           // number --> output
// String method
let stringtype = String(numbertype);
console.log(stringtype,typeof stringtype);   // 54  string --> output

// BOOLEAN METHOD IN JS --> TRUE/FALSE
let age = 32;     // number except 0 is considered as true
// let age = "32";   // string except 0 is considered as true
// let age = " ";    // empty string is considered as false
let booleanvalueage = Boolean(age);
console.log("boolean value of age is",booleanvalueage);  // output----> boolean value of age is true
