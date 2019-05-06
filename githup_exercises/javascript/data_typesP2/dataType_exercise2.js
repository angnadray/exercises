/* **Data Types Exercises P2**
**Strings, Numbers, Booleans, Null, undefined data types 
& typeof operator**

Exercises to become familiar with data types and typeof 
operator. 

1. Copy and paste these variables into your JavaScript 
file. In the commented section, write down which type 
you think each variable is. Check your answers by 
printing the types to the console.

let length = 16.78; //
let lastName = "Johnson"; //
let car = ""; //
let isOpen = true; //
 */

/* 1 */
let length = 16.78; 
//number
console.log(typeof length);
let lastName = "Johnson"; 
//string
console.log(typeof lastName);
let car = ""; 
//string
console.log(typeof car);
let isOpen = true; 
//boolean
console.log(typeof isOpen);

/* 2. Declare two variables called ageMark and ageJohn. 
Assign their ages - one age should be assigned as a string, 
the other as a number. Print the variables' data types to 
the console. */
let ageMark = "22";
let ageJohn = 28;
console.log(typeof ageMark);
//string
console.log(typeof ageJohn);
//number

/* 3. Is John older than Mark? Declare a variable with a 
boolean value and print the following to the console eg. 
"John is older than Mark: true" */
let question = "Is John older than Mark:";
let older = true;
console.log(question, older);
//Is John older than Mark: true

/* 4. Use let to declare a variable called x. Do not assign 
a value. Print x's data type to the console. */
let x;
console.log(typeof x);
//undefined

/* 5. Assign a string to x. Print x's data type again. */
x = "a string is here";
console.log(typeof x);
//string

/* 6. Print the last character of x's string to the console. */
console.log(x[15]);
//e

/* 7. Print the length of x to the console, as well as the 
data type of x's length. */
console.log(x.length);
//16
console.log(typeof x.length);
//number

/* 8. Declare three variables: a, b, c. Assign numbers to 
each of the variables. Check if the variable values are 
equal or not (e.g. console.log(a == b);). Do this for each 
possibility (a, b) (a, c), (b, c). Then, print the data 
type of this check to the console. */
let a = 12;
let b = 8;
let c = 10;
console.log(a == b);
console.log(a == c);
console.log(b == c);
// answer for all 3 is false
console.log(typeof a);
//number

/* 9. What is the type of Infinity? Comment your answer. 
Print the type of infinity to the console. */
console.log(typeof Infinity);
//number

/* 10. Declare a variable. Assign the variable the value of 
a number or a string. Use the isNaN() method to check whether 
the variable is a number or not. Print "variable is NOT a 
number: true/false". */
let myvar = "94";
console.log(isNaN(myvar));
//false

/* 11. Print the data type of isNaN(variable) to the console. */
console.log(typeof isNaN(myvar));
//boolean