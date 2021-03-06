// Other LOOPS

// While Loops: Use do while loops to complete the tasks below.

/* 1. Run Along
Create a while loop that runs as long as i is less than 15. Use a while loop. */ 

let runA = "";
let i = 0;

while (i < 15) {
    runA += `loop is ${i} \n`;
    i++;
}
console.log(runA);
/*
loop is 0 
loop is 1 
loop is 2 
loop is 3 
loop is 4 
loop is 5 
loop is 6 
loop is 7 
loop is 8 
loop is 9 
loop is 10 
loop is 11 
loop is 12 
loop is 13 
loop is 14 
 */

/* 2. City Names
Create an array of city names. Loop through the array and add the city names to a string. 
* Example of expected output: "Berlin, Paris, Prague, Rome". */ 

let cityName = ["Berlin", "Paris", "Madrid", "London", "Rome", "Moscow"];
let c = 0;
let stringNames = "";

while (cityName[c]) {
    stringNames += `${cityName[c]},`;
    c++;
}
console.log(stringNames);

/* 
    Berlin, Paris, Madrid, London, Rome, Moscow 
*/

/* 3. Odds and Evens
Create a function that takes an array as an argument. The function should add 1 to each odd 
integer and should minus 1 from each even integer. 
* Examples:
* evenOddTransform([3, 5, 2, 4] -> expected output: [4, 6, 1, 3]
* evenOddTransform([6, 9, 10, 20] -> expected output: [5, 10, 9, 19] */

/* let arrNumber = [3, 5, 2, 4];
let newArray = [];
let n = 0;
while (n < arrNumber.length) {

    if (arrNumber[n] % 2 === 0) {
      let minus = arrNumber[n]-1;
      newArray.push(minus)
    }
    else{
        let plus = arrNumber[n]+1;
      newArray.push(plus)
    }
n++
}
console.log(newArray); */

let arrNumber = [3, 5, 2, 4];

// arrow function
let evenOdd = (arrNumber) => {

let newArray = [];
let n = 0;

while (n < arrNumber.length) {

    if (arrNumber[n] % 2 === 0) {
      let minus = arrNumber[n]-1;
      newArray.push(minus)
    }
    else{
        let plus = arrNumber[n]+1;
      newArray.push(plus)
    }
n++
}
console.log(newArray);
}

evenOdd(arrNumber); // [ 4, 6, 1, 3 ]

// Do While: Use do while loops to complete the tasks below.

/* 1. sumOfNumbers
Create a function that takes an array of at least 3 numbers as an argument and returns the 
sum of the numbers. Use a do while loop. */ 

/* let numArr = [4, 5, 6, 2];
let s = 0;
let totSum = 0;
    
while (s < numArr.length) {
    totSum += numArr[s];
    s++;   
}
console.log(totSum); // 17 */

let numArr = [4, 5, 6, 2];

let sumTot = (numArr) => {

let s = 0;
let totSum = 0;
    
while (s < numArr.length) {
    totSum += numArr[s];
    s++;   
}
console.log(totSum); // 17
}
sumTot(numArr);

/* 2. Add it up!
Create a function that adds numbers from 1-20 together using a while loop. */ 



/* 3. Count Instances 
Create a function that takes an array as an argument and determines whether the array's 
elements are strictly increasing, decreasing or neither. 
* Examples:
* check([1, 2, 3]) ➞ "increasing"
* check([3, 2, 1]) ➞ "decreasing"
* check([1, 2, 1]) ➞ "neither"
* check([1, 1, 2]) ➞ "neither" */

// forEach(): Use the forEach() method to complete the tasks below

/* 1. Capitalize
Create a function that takes an array of names and returns an array with the first letter 
capitalized using a do while loop.

* Examples
* format(["matt", "sara", "lara"]) ➞ ["Matt", "Sara", "Lara"]
* format(["samuel", "MARIA", "luke", "mary"]) ➞ ["Samuel", "Maria", "Luke", "Mary"]
* format(["Cynthia", "Karen", "Jane", "Carrie"]) ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

* Notes: Keep names in the same order and make sure that only the first lesson of the name is 
capitalized. See "Maria" in example 2. */ 
    


/* 2. No Duplicates!
A set is a collection of unique items. A set can be formed from an array from removing all 
duplicate items. Create a function using a do while loop which takes an array and transforms 
it into a set of unique values. See the examples below.
* Example
* [1, 4, 4, 7, 7, 7]
* // original array
* [1, 4, 7]
* // original array transformed into a set
* [1, 6, 6, 9, 9] ➞ [1, 6, 9]
* [2, 2, 2, 2, 2, 2] ➞ [2]
* [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25] */



/* 3. Repeat it 
Create a function that takes two arguments (item, times). Create a function that repeats the 
"item" as many times as specified by "times". The first argument (item) is the item that needs 
repeating while the second argument (times) is the number of times the item is to be repeated. 
Return the result in an array.
* Example: repeat("example", 3) -> ["example", "example", "example"] */




// **Bonuses - Choose the loop**

//Find the Odd Ones Out

/* Create a function that takes an array as an argument and find the integer which occurs an 
odd number of times. 
* Examples
* findOdd([-2, -2, 3, 3, -5, 7, -5, 7, 7]) ➞ 7 (appears three times)
* findOdd([3, 2, 2, 3, 20, 10, 2, 20, 10, 3, 3, 2, 2]) ➞ 2 (appears 5 times)
* findOdd([12]) ➞ 12 (appears once) */



// Factors 

/* A factor chain is an array where each previous element is a factor of the next consecutive 
element. 
The following is a factor chain:
[3, 6, 12, 36]

* // 3 is a factor of 6 (3 * 2 = 6)
* // 6 is a factor of 12 (6 * 2 = 12)
* // 12 is a factor of 36 (12 * 3 = 36) */



/* Create a function that determines whether or not an array is a factor chain using a while loop.
* Examples
* factorChain([1, 2, 4, 8, 16, 32]) ➞ true
* factorChain([1, 1, 1, 1, 1, 1]) ➞ true
* factorChain([2, 4, 6, 7, 12]) ➞ false
* factorChain([10, 1]) ➞ false */