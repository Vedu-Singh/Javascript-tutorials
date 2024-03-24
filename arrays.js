// ARRAYS ---> ARE LIKE OBJECTS IN JS { TYPE OF DATA TYPE IN JS }

/* let dish1 = "pizza";
let dish2 = "capechino"; */
// instead of this 
let dishes = ['pizza',"capechino","barito"];
// access elements of array
console.log(dishes[0]);            // output --> pizza
// modify the array
dishes[0]="laccha-paratha";
console.log(dishes);        // output --> ['laccha-paratha',"capechino","barito"]

// ARRAY METHODS
// JOIN METHOD -->
console.log(dishes.join(' '));             // output -->  laccha-paratha  capechino  barito

// INDEXOF METHOD -->
console.log(dishes.indexOf("capechino"));     // output ---> 1    // case-sensitive

// CONCAT METHOD ---->
let newdishes = ["sweet-dish","Mock-tails"];
console.log(dishes.concat(newdishes));                      // ['laccha-paratha',"capechino","barito","sweet-dish","Mock-tails"]

// LENGTH METHOD --->
console.log(dishes.length);         // output ----> 3
console.log(newdishes.length);       // output ---> 2

let updatedishes = dishes.concat(newdishes);
console.log(updatedishes.length);       // output --> 5

// upto this it is immutable methods 
// mutable methods ---> PUSH METHOD { ORIGINAL ARRAY MAY BE MODIFIED }
console.log(updatedishes.push("Dahi-vadha"));                // output ---> 6  { new element ko add krta h array m }
// returns new length of array
console.log(updatedishes);                      // output --> ['laccha-paratha',"capechino","barito","sweet-dish","Mock-tails","Dahi-vadha"]

// POP METHOD -- > { it deletes elements from last of array }
console.log(updatedishes.pop());                  // output --> Dahi-vadha
console.log(updatedishes);         // output --> ['laccha-paratha',"capechino","barito","sweet-dish","Mock-tails"]

