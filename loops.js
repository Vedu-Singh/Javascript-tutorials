// CONTROL FLOW STATEMENTS IN JS ---->
// run the specific task 10 times 
// without for loop

// console.log("Run the task");
// console.log("Run the task");
// console.log("Run the task");
// console.log("Run the task");
// console.log("Run the task");
// console.log("Run the task");

// FOR LOOPS --->
/* for(let i=1;i<=10;i++){
    console.log("Run the task",i);
} */


// usecase of for loop 
// let dishes = ["pani-puri","vada-pav","howdra"];

// Access the array values
/* for(let i=0;i<dishes.length;i++){
    console.log(dishes[i]);
}
// iteration and value of i
// 0,1,2 */




// WHILE LOOP ----->
for(let i = 1; i<=5; i++){                   // infinite loop in case we miss conditional statements
      console.log("for loop" , i);
}

console.log("*********");


/* let j=1;
while(j<=5){       // while() --> get error --> conditional statement is mandatory
    console.log("while loop",j);
    j++;
} */

let dishes = ['vada-pav','dahi-vada','kachori'];
let j=0;
while(j<dishes.length){
    console.log("Favourate Dish= ",dishes[j]);
    j++;     // without this statement we will get infinite loop
}



// DO-WHILE LOOP ----->

let k = 1;

do {
    console.log("At least run time= ",k);
    k++;
} while(k<=1);     // condition false already


// IF, ELSE, ELSE-IF STATEMENTS IN JS --------->

// let budget = 5000;
let budget = 6500;
if(budget>6000){
    console.log("will do dinner in 5 star hotel");
}
else if(budget>4500){
    console.log("will do dinner in 3 star hotel");
}
else if(budget>3000){
    console.log("will do dinner in 2 star hotel");
}
else {
    console.log("run if" + "all" + "condition false");
}

// after 1st condition true controll get out of scope
console.log("I am outside of conditional block");



// NESTED-IF STATEMENTS ----->
let num = 23;

if(num > 22){
    console.log("Run if 1st condition becomes true");
    if(num > 25){
        console.log("Run if both conditions becomes true");
    if(num>20){
        console.log("Run if all conditions are true");
    }
  }
}


// BREAK AND CONTINUE STATEMENTS IN JS ------------> { also called jump statements }
// CONTINUE STATEMENTS ---> { used to skip some values of loops }
for(let i=1;i<=10;i++){
    if(i==2){
       continue;   // move towards the next iteration
    }  console.log("Value of i= ",i);
}

// BREAK STATEMENTS ----> { used to terminate the loop and controll transfer from outside }
for(let k=1;k<=10;k++){
    if(k==5){
        console.log("Our desired value is= ",k);
        break;
    }
    console.log("Value of k is = ", k);
}

console.log("Now i am outside of loop scope");




// LOGICAL OPERATORS -------->   AND (&&) , OR (||) , NOT(!)
let pswd = "qwerty@";
// if(pswd.length>5 &&  pswd.includes('@')){
//    if(pswd.length>5 ||  pswd.includes('@')){
        if(pswd.length>5 ||  pswd.includes('@')){
    console.log("Password stength is strong");
}
else {
    console.log("change your password");
}


// NOT OPERATOR ---> (!) "true to false" and "false to true"

let status = false;
if(!status){  // change into true
    console.log("Your status is = ",status);
}

// priorities
// not
// and , or ( from left to right )

let result = true && true || false && !false;
reuslt = true && true || false && true;
result = true || false  &&  true;
result = true && true;
console.log(result);        // output ----> true

