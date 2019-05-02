/* Operators Exercises */

/* Declare two variables "x" and "y" and assign number values.  */

let x = 20;
let y = 30;

/* 1. Add x and y, and print the result to the console. */
console.log(x + y); /* 50 */

/* 2. Subtract y from x, and print the result to the console. 
Then, subtract x from y and print the result to the console. */

console.log(x - y); /* -10 */
console.log(y - x); /* 10 */

/* 3. Multiply x and y, and print the result to the console. */
console.log(x * y); /* 600 */

/* 4. Divide x and y, and print the result to the console.  */

console.log(x / y); /* 0,66666666 */
console.log(y / x); /* 1,5 */

/* 5. Declare another variable "z" with the value "10". Multiply x and y. 
Then, divide the result by z. Store the result in a new variable named "resultOne". 
Print "resultOne" to the console. */

let z = 10;
let resultOne = (x * y) / z;
console.log(resultOne); /* 60 */

/* 5.1. Declare two variables "a" with the value of 15 and "b" with the value of 9. 
Print the remainder when a is divided by b.  */

let a = 15;
let b = 9;
console.log(a % b); /* 6 */
console.log(b % a); /* 9 */

/* 6. Declare another variable "c" with the value of 20. 
Add a and b, then multiply the result by c. 
Store the result in variable "resultTwo".  Print "resultTwo" to the console. */

let c = 20;
let resultTwo = (a + b) * c;
console.log(resultTwo); /* 480 */

/* 7. Increment a. Print the result to the console. */
console.log(++a); /* 16 */

/* 8. Decrement b. Print the result to the console. */

console.log(--b); /* 8 */

/* 9. Subtract a from b and store this in a new variable "d". 
Add d and c. Print the result to the console. */

let d = a - b;
console.log(d + c); /* 28 */

/* 10. Print the remainder when "resultOne" is divided by "resultTwo" to the console.  */

console.log(resultOne % resultTwo); /* 60 */
