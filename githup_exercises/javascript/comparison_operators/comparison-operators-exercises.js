// Comparison Operators Exercises

/* Declare two variables "x" and "y". Assign a value of 20 to x. Assign a value of 30 to y.  */

let x = 20;
let y = 30;
let z = 5;

//1 Check whether x and y are equal. 
console.log(x == y); 
/* false */

//2 Check whether x and y are **not** equal.
console.log(!(x == y)); 
/* true */

//3 Check whether x is greater than y. 
console.log(x > y); 
/* false */

//4 Check whether x is less than or equal to y. 
console.log(x <= y); 
/* true */

//5 Check whether y is greater than x. 
console.log(y > x); 
/* true */

//6 Declare another variable "z" and give it a value of 5. 
//Multiply z and x and, check whether this result is greater than z added to y. 
console.log((z * x) > (z + y)); 
/* true */

//7 Subtract z from x and check whether this result is less than y divided by z.
console.log((x - z) < (y / z)); 
/* false */

//8 Check whether z, x and y are equal.
console.log(x == y == z); 
/* this question can not be solved in javaScript, with this method
you can not compare 3 values at once, probably would need logical operators to solve it */

console.log((z === x) && (z === y) && (x === y)); // like this can be solved

//9 Check whether the remainder of x divided by z and the remainder of y divided by z are equal.
console.log((x % z) == (y % z)); 
/* true */

//10 Check whether z added to x is greater than y minus z. 
//If it is not, find an operator which will give a result of true. 
console.log((z * x) > (y - z)); 
/* true */