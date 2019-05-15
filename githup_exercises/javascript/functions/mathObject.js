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

function mathMin() {
    let numArray = [654, -3, 0, 6577, -2, 0.44, 40, -1, 100];
    let smallNum;

    for (let i = 0; i < numArray.length; i++) {
        smallNum = numArray[i];

        for (let j = 0; j < numArray.length; j++) {
            // these 2 loops compare each number with all the other numbers in the array
            smallNum = Math.min(smallNum, numArray[j]);

        }
        return smallNum;

    }
}

console.log(mathMin()); // -3

//_________________________________________________

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

function mathMax() {
    let numArray2 = [654, -3, 0, 6577, -2, 0.44, 40, -1, 100];
    let maxNum;

    for (let i = 0; i < numArray2.length; i++) {
        maxNum = numArray2[i];

        for (let j = 0; j < numArray2.length; j++) {
            // these 2 loops compare each number with all the other numbers in the array
            maxNum = Math.max(maxNum, numArray2[j]);

        }
        return maxNum;

    }
}

console.log(mathMax()); // -3

//__________________________________________________

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

function myPi(decPlaces) {
    return Math.PI.toFixed(decPlaces);
}
console.log(myPi(5));

/* **Bonus** 
#### Random Name 
Create a function for our webdev class 13a that returns a random student's name. */ 

