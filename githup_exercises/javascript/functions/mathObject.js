// Math Object Exercises

/* 1. Random Number
Create a function to return a random integer. */ 

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNum(2, 89)); // 25

/* 2. Lowest Number
Create a function that takes an array as an argument and returns the number with 
the lowest value. */ 

function lowNum (arr1) {
    let minNum = arr1.reduce((a, b) => Math.min(a, b))
    console.log(minNum);
 };
 lowNum([14, 58, 20, 77, -5, 66, 4]);

/* 3. The Power Of
Create a function that takes two numbers as arguments. Return the value of the first 
number to the power of the second number. */ 

function powOf(num1, num2) {
    return Math.pow(num1, num2);
}
console.log(powOf(2, 3));

/* 4. Highest Number
Create a function that takes an array as an argument and returns the highest number 
in that array. */ 

function maxNum (arr2) {
    let maxNum = arr2.reduce((a, b) => Math.max(a, b))
    console.log(maxNum);
 };
 maxNum([14, 58, 20, 77, -5, 66, 4]);

/* 5. Pi
Create a function that given a number n, returns PI to n decimal places.
Examples:
* myPi(5) ➞ 3.14159 //5 decimal places
* myPi(4) ➞ 3.1416 //4 decimal places
* myPi(15) ➞ 3.141592653589793 // 15 decimal places */



/* **Bonus** 
#### Random Name 
Create a function for our webdev class 13a that returns a random student's name. */ 

