// Objects P2

/* 1. Check if a number is within a given range
Write a program that checks if a number is within the range of an object's min and max properties. 

Examples: 
* 4, { min: 0, max: 5 }) ➞ true 
* 4, { min: 4, max: 5 }) ➞ true
* 4, { min: 6, max: 10 }) ➞ false
* 5, { min: 5, max: 5 }) ➞ true

* Notes: Assume min <= max is always true. */ 

let range = {
    min: 0,
    max: 10,
}

let num = 11;

if ((num >= range.min) && (num <= range.max)) {
    console.log("true");
}
else console.log("false");

/* 2. Return Keys and Values
Write a program that takes an object and returns the keys and values in separate arrays. 

Examples: 
* { a: 1, b: 2, c: 3 } ➞ ["a", "b", "c"], [1, 2, 3]
* {key: true} ➞ ["key"], [true] */

let val = {
    a: 1,
    b: 2,
    c: 3,
}
console.log(Object.keys(val), Object.values(val)); // [ 'a', 'b', 'c' ] [ 1, 2, 3 ] 

/* 3. Scrabble 
Write a program that, given an array of scrabble tiles, 
counts the maximum score that a player can earn from the tiles in their hand. 
Example: 
[
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]

The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28 */

let scrabble = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ];
let maxScore = 0;

  for (let i = 0; i < scrabble.length; i++) 
  {
    maxScore = maxScore + scrabble[i].score;
  }
    console.log(maxScore); // 28

/* 4. Is it an empty object? 
Write a program that returns true if an object is empty, and false if otherwise. 

Examples: 
* {} ➞ true
* {a: 1} ➞ false */

let emptyObject = {};
if(Object.keys(emptyObject).length == 0) {
    console.log("True, it is an empty value")
} else {
    console.log("False, it is not empty value");
};//quiz 4, used to verify weather the object is empty or not