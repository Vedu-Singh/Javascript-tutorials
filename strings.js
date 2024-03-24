// STRINGS IN JS

console.log("Hello Guys");

let firstName = "Vedant";
let lastName = "Singh";
// console.log(firstName,lastName);    // console log property it creats a space in btw firstname and lastname variable


// STRING CONCATENATION --->

// METHOD 1---> Using + operator
// let fullName = firstName + lastName ; 
// let fullName = firstName +" " + lastName ;  // now space is created in btw fname and lname
// console.log(fullName);                    // here space is not been created in btw firstname and lastname

// METHOD 2----> Using Template literals
let fullName = `I want to become ${firstName} ${lastName}`;   // ``-->backticks symbol
console.log(fullName);    


// GETTING STRING CHARACTER --> {AGR STRING SE CHARACTER NIKALNA H TOH KAISE NIKALEGE}
// ARRAY OF CHARS
// onsole.log(firstName[5]);

// STRING METHODS ---->
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.toLocaleLowerCase());
console.log(firstName.toLocaleUpperCase());
console.log(lastName.indexOf("n"));        // output ---> 2 { returns index of particular character }

//  COMMON STRING METHODS
let hobbies = '   reading coding dancing    ';
// console.log(hobbies);          // it will print spaces also
// trim method()
l// et result = hobbies.trim();
// console.log(hobbies);            // it will not print spaces
// indexof method()
// console.log(result).indexOf("reading");     // output ----> 0
console.log(result).lastindexOf("dancing");     // output ----> 15 {exists krta h character}
// agar character exists nhi krta h toh --->
console.log(result).lastindexOf("Reading");     // output ----> -1 { -ve values dega output m }   // CASE SENSITIVE HOTA H


// INCLUDE METHOD ----->
console.log(result.includes("reading"));     // output ----> true
console.log(result.includes("readings"));     // output ----> false

// SLICE METHOD -->
let xss = "webdeveloper";
// console.log(xss.slice(0,5));           // excluding last one 0-4   { output ---> webde }

let result = fullName.slice(0,4);  // 0-3
// IMP note doesn't mutate original string
console.log("Original string= ",fullName);
console.log("Extracted String= ",result);

// string split method ----->
// let favcolors = "brown  blue  black  grey";
let favcolors = "brown,blue,black,grey";
// let arrcolors = favcolors.split(' ');
let arrcolors = favcolors.split(',');
// string to array conversion
console.log(arrcolors);


// JS STRINGS ARE IMMUTABLE { THEY CAN'T BE MODIFIED }

let str = "Hello";
str[0]="p";
str[1]="q";
// there will be no change in "str" variable
console.log(str);    // output ---> Hello


let str1 = "Hello";
str1 = str1 + "Coders";
console.log(str1);             // output --> HelloCoders

