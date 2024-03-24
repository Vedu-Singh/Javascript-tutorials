// OBJECTS IN JS---------->
 
let car = {
    color: "black",
    model: "2022",
    company: "Mercedes",          // properties of car objects
}
console.log(car);

// ACCESING THE JS OBJECT PROPERTIES----------> USING BRACKET STYLE AND DOT STYLE
// 1ST METHOD---> DOT STYLE

console.log(car.company);         // o/p----> Mercedes

// 2ND METHOD----> BRACKET STYLE
console.log(car["model"]);       // o/p----> 2022

let propertyName = "color";

console.log(car["propertyName"]);       // computed things     // o/p------> black
console.log(car.propertyName);        // o/p ----> undefined         // use direct property name

// MODIFY THE OBJECT PROPERTY------>
// car.color = "brown";
car["color"] = "brown";
car.model = 2024;
console.log(car.color);           // o/p ---> brown and 2024
console.log(car.model);



// DELETING PROPERTIES OF OBJECTS ------->

let obj = {
    prop1 : "value1",
    prop2 : "value2",
}

// delete obj.prop1;
let returnValue = delete obj.prop1;
console.log(obj.prop1,returnValue);           // o/p------> undefined, true


// It always returns true
console.log(obj.prop1);         // o/p ------> undefined


// FUNCTIONS VS METHOD {OBJECTS K ANDR FUNCTION HOTA H TOH USSE METHOD BOLA JATA H}--> it is nothing but object property(key) holding function as a "value"
let ageCalculate = function(birthyear){
    let age = 2023-birthyear;
    console.log(`Current Age is: ${age}`);
}
ageCalculate(2003);


/* let person = {
    ageCalculate: function(birthyear=2008){
        let age = 2023-birthyear;
        return age;
    }
} */

// console.log(`Current Age is: ${person.ageCalculate()}`);           // o/p-------------> Current Age is 15
console.log(`Current Age is: ${person.ageCalculate(2003)}`);         // o/p ---> Current Age is 20








// "THIS" KEYWORDS IN JS -------> In each method we have an access of special keyword called "this"..
// "this" keyword represent the object. "Calling" the "method" in which "this"  is "present"

// example ----->
let person = {
    firstName: "Harry",
    lastName: "Brook",
    city: "Delhi",
    birthyear: 1998,
    Education: "software engineer",
    getSummary: function(){
    //    return `harry brook lived in Delhi. He is a software enigneer and its birthyear is 1998`;
    // return `${this.firstName} ${this.lastName} lives in ${this.city}.His birthyear is ${this.birthyear}`; // agar hum same hi object k andr doosri properties ko acces krna chahte h so this keyword ka use hota h 
    return this;      // it will return whole object with its prototype
    }          // it will give updated value only
}

console.log(person.getSummary());       // o/p ----> harry brook lived in Delhi. He is a software enigneer and its birthyear is 1998

// step1- Check in which method we use "this" keyword
// step2- Owner of that method(who is calling those methods)







// FOR-EACH METHOD OF ARRAY IN JS ------> its another type of loop which we used to traverse over an array

let dishes = ['Biryani','channy','karahi','bhallay'];

// used for loop
for(let i=0;i<dishes.length;i++){
    console.log(dishes[i]);
}

console.log("******");

// using for-each method 
dishes.forEach(function(element){
    console.log(element);
});                 // o/p -------> first it will print all elements inside for loop and then outside element and then for each element will be printed 






//  OBJECTS INSIDE ARRAY  ---->

let blockList = [{userName:"Vedu",reason:"Hack-Tech content"},{userName:"Shivam",reason:"Copyright content"}];
console.log(blockList);           // o/p --> at 0 index 1st object will be printed and at 1st index 2nd object will be printed

for(let i=0;i<blockList.length;i++){
/*    console.log(blockList[i]);         // o/p ---> both will get printed
    console.log(blockList[i].userName);     // o/p ---> vedu and shivam
*/    console.log(blockList[i].reason);       // o/p --> hack-tech content and copyright content
    console.log(`User ${blockList[i].userName} Blocked due to this ${blockList[i].reason} as reason `);
}







// MATH OBJECT BUILD IN OBJECT IN JAVASCRIPT ------->    console.log(Math);

let number = 9.6;
console.log(Math.round(number));     // round to nearest integer
console.log(Math.floor(number));    // round to down
console.log(Math.ceil(number));        // round to up
console.log(Math.trunc(number));        // remove the decimal part

let random = Math.random();
console.log(Math.round(random*100));       // 1-100







// FUNCTION --->  CALL AND APPLY METHOD IN JS --> We can manually set the value of "this" keyword using call and apply method
// "use strict"
let mainPlane = {
    airline: "Air India",
    iatacode: "AI",
    bookings: [],
    book:function(flightNum,name){
        console.log(`${name} Booked flight on ${this.airline} with flight Number ${this.iatacode}${flightNum}`);
        this.bookings.push({flightName:`${this.airline}`,name:name,flightNum:`${this.iatacode}${flightNum}`});
    }
}

mainPlane.book(553,"Carlos");
mainPlane.book(643,"Jack");
// console.log(mainPlane);

// new airline launched of same group
let childPlane = {
    airline: "Indigo",
    iatacode: "Ii",
    bookings: [],
}

let book = mainPlane.book;
// book(665,"Lurie");       // book is a regular function
// "this" value is undefined at least in strict mode

// Solution using "call" method
book.call(childPlane,689,"Zack");
console.log(childPlane);