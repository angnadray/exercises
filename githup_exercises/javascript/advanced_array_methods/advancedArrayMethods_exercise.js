// Map, Filter, Reduce & Sort


/* 1. Increment by 1
Given an array of numbers, e.g. ```javascript let 
arrayOfNumbers = [3, 45, 6, 56, 7, 9]; ``` , create a 
function that increments each element by 1. Return the a 
new array of modified elements.  */

let arrayOfNumbers = [3, 45, 6, 56, 7, 9];

let sumArr = arrayOfNumbers.map(num => num + 1);
console.log(sumArr); // [ 4, 46, 7, 57, 8, 10 ]

/* 2. Sum Up
Write a function called sum that uses the reduce to sum up 
an array of numbers. Do NOT use a typical loop; just use the 
reduce method.

* Examples:
* sum([1,2,3,4,5]); //returns 15
* sum([6,7,7]); //returns 20 */

let arr = [1,2,3,4,5];
let result = arr.reduce((sum, current) => sum + current);

console.log(result); // 15

/* 3. instanceOf

Reduce

Sum up the instances of each of these:
javascript
const data = ['car', 'car', 'truck', 'truck', 'bike', 
'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 
'truck', 'pogostick'];
* Expected Output: 
javascript
object = {
  bike: 2
  car: 5
  pogostick: 1
  truck: 3
  van: 2
  walk: 2
}
*/

const data = ['car', 'car', 'truck', 'truck', 'bike', 
'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 
'truck', 'pogostick'];

let countedData = data.reduce(function (allData, data) { 
  if (data in allData) {
    allData[data]++;
  }
  else {
    allData[data] = 1;
  }
  return allData;
}, {});
console.log(countedData); // { car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1 }

/* 4. Inventors
Look at the piece of code below and complete the tasks and questions.

```javascript
const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
```
Map

* Give an array of inventors' first and last names. */

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

let firstLastNames = inventors.map(objParam => {
    let namesObj = {};
    namesObj[objParam.first] = objParam.last;
    return namesObj;
})
console.log(firstLastNames);
                            /*
                            [ { Albert: 'Einstein' },
                            { Isaac: 'Newton' },
                            { Galileo: 'Galilei' },
                            { Marie: 'Curie' },
                            { Johannes: 'Kepler' },
                            { Nicolaus: 'Copernicus' },
                            { Max: 'Planck' },
                            { Katherine: 'Blodgett' },
                            { Ada: 'Lovelace' },
                            { 'Sarah E.': 'Goode' },
                            { Lise: 'Meitner' },
                            { Hanna: 'Hammarström' } ]
                            */

/* Reduce

* How many years did all of the inventors live?  */

let totalYears = inventors.reduce((param1, param2) => param1 + (param2.passed - param2.year), 0);

console.log(totalYears);

/* 5. Square Root
Given an array of numbers, find the square root of those 
numbers using map. 
 */

/* 6. Instances of Letters
Create a function that takes a string as an argument and 
counts the number of each letter in that string. */ 

/* 7. List of Movies
Given the code below, complete the task
```javascript
let friends = [{
  name: 'Maria',
  films: ['Avengers: Infinity War', 'Avatar' ],
  age: 22
}, {
  name: 'John',
  films: ['Forest Gump', 'Pulp Fiction', 'Spider-Man'],
  age: 29
}, {
  name: 'Jean',
  films: ['Deadpool', 'Incredibles 2'],
  age: 20
}];
```

* Create a function that returns an array of your friends 
favourite films!
 */


/* 8. Filter Evens
Write a function called filterEvens that uses the filter method to filter an array and only return the even numbers. The function should take in an array of numbers as an argument, and should not use a loop.

* Examples:

* filterEvens([1,2,3,11,12,13]); //returns [2,12]
* filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]

 */


/* 9. Search 
Given an array, create a function which uses filter() to filter an array based on a search query.
* Example
``` javascript
const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

console.log(filterItems(friends, 'ka')); // ["Rika", "Marika"];
console.log(filterItems(friends, 'e')); // ["Alex", "Oliver"];
``` */

/* 10. Reformat an Array
Given the following array: 
```javascript
let origialArray = [{key: 1, name: "John"},
	     {key: 2, name: "Maria"},
	     {key: 3, name: "Oliver"},
	     {key: 4, name: "Jane"},
	     {key: 5, name: "Jack"},
	     {key: 6, name: "Albert"},
	     {key: 7, name: "Harry"},
	     {key: 8, name: "Ron"},
	     {key: 9, name: "Kenneth"},
	     {key: 10, name: "Kyle"}];
```
* Reformat the array as follow: 
```javascript
let newArray = [{1: "John"}, {2: "Maria"}, {3: "Oliver"}, 
{4: "Jane"}, {5: "Jack"}, {6: "Albert"}, {7: "Harry"}, 
{8: "Ron"}, {9: "Kenneth"}, {10: "Kyle"}];
 */

/* 11. Sorting Numbers
Given the following array of numbers, sort from smallest to 
largest. 
```javascript
let arrayOfIntegers = [4, 200, 90, 30, 12, 75, 21, 3];
```
* Once you are finished, answer the following questions: 
**Which method did you use to solve the problem? Why did you 
have to use this method?** 
 */


/* 12. Sort Shapes
Given the following array of shapes, complete the task below:
```javascript
let shapes = [
    [5, "Pentagon"],
    [3, "Triangle"],
    [8, "Octagon"],
    [4, "Rectangle"],
    [6, "Hexagon"],
    [10, "Decagon"]
    ];
* Sort the 2D array based on the shapes' sides. Sorting should be in ascending order from smaller number to greater number. 
* Example of output:
``` javascript
[ [ 3, 'Triangle' ],
  [ 4, 'Rectangle' ],
  [ 5, 'Pentagon' ],
  [ 6, 'Hexagon' ],
  [ 8, 'Octagon' ],
  [ 10, 'Decagon' ] ]
```
 */

// Alisio's answers 

//1. Increment by 1
// Given an array of numbers, e.g. ```javascript let arrayOfNumbers = [3, 45, 6, 56, 7, 9]; ``` , create a function that increments each element by 1. Return the a new array of modified elements. 


let arrayOfNumbers =[3, 45, 6, 56, 7, 9];
let modifiedArray = arrayOfNumbers.map(value => value +1);
console.log(modifiedArray); // [ 4, 46, 7, 57, 8, 10 ]
console.log('----------------------- 2----------------');


// 2. Sum Up
// Write a function called sum that uses the reduce to sum up an array of numbers. Do NOT use a typical loop; just use the reduce method.

// * Examples:
// * sum([1,2,3,4,5]); //returns 15
// * sum([6,7,7]); //returns 20

let sumUp = [1,2,3,4,5];
const addedUp=(accumulator, currentValue) => accumulator + currentValue;
let result = sumUp.reduce(addedUp);

console.log(result); // 15


console.log('----------------------- 3 ----------------');

// 3. instanceOf
// ##### Reduce
// Sum up the instances of each of these:
// ```javascript
// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogo stick'];
// ```
// * Expected Output: 
// ```javascript
// object = {
//   bike: 2
//   car: 5
//   pogo stick: 1
//   truck: 3
//   van: 2
//   walk: 2
// }


let data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogo stick'];

let count = data.reduce(function(elements,value){
    if(value in elements){
        elements[value] ++;
    } else {
        elements[value] = 1
    }
    return elements;
},{})

console.log(count);
// { car: 5, truck: 3, bike: 2, walk: 2, van: 2, 'pogo stick': 1 }

console.log('----------------------- 4 ----------------');
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];


// ##### Map
// * Give an array of inventors' first and last names. 
let mapping= inventors.map(outPut =>{
    let pushObj = {};
    pushObj[outPut.first] =  outPut.last
    return pushObj
})
console.log(mapping);


// ##### Reduce
// * How many years did all of the inventors live? 


let countYears = inventors.reduce((obj,person) =>{
    obj[person.first]= person.passed - person.year;
    return obj

},{})
console.log(countYears);


console.log('----------------------- 5 ----------------');

// 5. Square Root
// Given an array of numbers, find the square root of those numbers using map. 

let sqrt = [36,16];
let all = sqrt.map(Math.sqrt);
console.log(all);    //[ 6, 4 ]


console.log('----------------------- 6 ----------------');
// 6. Instances of Letters
// Create a function that takes a string as an argument and counts the number of each letter in that string. 

// let details = ['mobile', 'car','tv','equipment'].map(value => value.length)


// console.log(details);


let word= 'javascript';
let splitted = word.split('');

let str = splitted.reduce(function(total,letter){
    if(letter in total){
        total[letter]++;
    }else{
        total[letter] = 1;

    }
    return total;

},{})
console.log(str);
// { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

console.log('----------------------- 7 ----------------');

// 7. List of Movies
// Given the code below, complete the task
// * Create a function that returns an array of your friends favourite films!

let friends = [{
    name: 'Maria',
    films: ['Avengers: Infinity War', 'Avatar' ],
    age: 22
  }, {
    name: 'John',
    films: ['Forest Gump', 'Pulp Fiction', 'Spider-Man'],
    age: 29
  }, {
    name: 'Jean',
    films: ['Deadpool', 'Incredibles 2'],
    age: 20
  }];

  let favMovies = friends.reduce((acc,curr)=>{
      return [...acc,...curr.films]
  },[]);

  console.log(favMovies);
  

  console.log('----------------------- 8 ----------------');

//   8. Filter Evens
// Write a function called filterEvens that uses the filter method to filter an array and only return the even numbers. The function should take in an array of numbers as an argument, and should not use a loop.

// * Examples:

// * filterEvens([1,2,3,11,12,13]); //returns [2,12]

let even = [1,2,3,11,12,13];
let filtered = even.filter(val =>{
      return  val % 2=== 0
});

console.log(filtered);

console.log('----------------------- 9 ----------------');

// Given an array, create a function which uses filter() to filter an array based on a search query.
// * Example
// ``` javascript
// const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

// console.log(filterItems(friends, 'ka')); // ["Rika", "Marika"];

const friendss = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

function filteredFriends(arr,query){
  return arr.filter(function(el){
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  }) ;
}

console.log(filteredFriends(friendss,'ka')); // [ 'Rika', 'Marika' ]


console.log('----------------------- 10 ----------------');
// 10. Reformat an Array
// Given the following array:
let originalArray = [{key: 1, name: "John"},
	     {key: 2, name: "Maria"},
	     {key: 3, name: "Oliver"},
	     {key: 4, name: "Jane"},
	     {key: 5, name: "Jack"},
	     {key: 6, name: "Albert"},
	     {key: 7, name: "Harry"},
	     {key: 8, name: "Ron"},
	     {key: 9, name: "Kenneth"},
         {key: 10, name: "Kyle"}];
let reformatted =  originalArray.map(person=>{
    object = {};
    object[person.key]=person.name;
    return object
})

console.log(reformatted);

// [ { '1': 'John' },
//   { '2': 'Maria' },
//   { '3': 'Oliver' },
//   { '4': 'Jane' },
//   { '5': 'Jack' },
//   { '6': 'Albert' },
//   { '7': 'Harry' },
//   { '8': 'Ron' },
//   { '9': 'Kenneth' },
//   { '10': 'Kyle' } ]

console.log('----------------------- 11 ----------------');

// 11. Sorting Numbers
// Given the following array of numbers, sort from smallest to largest. 
// ```javascript
// let arrayOfIntegers = [4, 200, 90, 30, 12, 75, 21, 3];
// ```


let arrayOfIntegers = [4, 200, 90, 30, 12, 75, 21, 3];

let resortedArray = arrayOfIntegers.sort((a,b)=> a-b)
console.log(resortedArray);

//[ 3, 4, 12, 21, 30, 75, 90, 200 ]


console.log('----------------------- 12 ----------------');


// 12. Sort Shapes
// Given the following array of shapes, complete the task below:
// ```javascript
// let shapes = [
//     [5, "Pentagon"],
//     [3, "Triangle"],
//     [8, "Octagon"],
//     [4, "Rectangle"],
//     [6, "Hexagon"],
//     [10, "Decagon"]
//     ];
// * Sort the 2D array based on the shapes' sides. Sorting should be in ascending order from smaller number to greater number. 


let shapes = [
        [5, "Pentagon"],
        [3, "Triangle"],
        [8, "Octagon"],
        [4, "Rectangle"],
        [6, "Hexagon"],
        [10, "Decagon"]
        ];

let newSort = shapes.sort((a,b)=>{
    return a[0] - b[0]
});
console.log(newSort);