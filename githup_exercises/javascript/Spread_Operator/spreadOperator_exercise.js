// Spread Operator

/* 1. Combining Arrays 
* Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the 
end of euroCountries array. 
* Once again create two arrays. Add the items of one array to the beginning of the second array. 
* Create another array. Include another array as one of the elements. */

let euroC = ["Germany", "Spain", "Sweden", "Portugal"];
let asianC = ["China", "Japan", "Korea", "Thailand"];

let worldC = [...euroC, ...asianC];
console.log(worldC);

    /*
        [ 'Germany',
        'Spain',
        'Sweden',
        'Portugal',
        'China',
        'Japan',
        'Korea',
        'Thailand' ] 
    */

let ndArr = [1,2,3,4];
let rdArr = [5,6,7,8];
let thArr = [9,8,7,6];

let combArr = [...ndArr, ...rdArr];
console.log(combArr); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

let combArr2 = [...ndArr, [...rdArr], ...thArr];
console.log(combArr2); // [ 1, 2, 3, 4, [ 5, 6, 7, 8 ], 9, 8, 7, 6 ]

/* 2. Copying Arrays
* Copy an array using the spread operator. Store the copied array in another variable. */ 

let oneArr = ["uno", "dos", "tres", "cuatro"];


/* 3. Find the Largest... 
Create a function to find the largest number in an array. */

/* let myArr = [3,5,7,9]
console.log(Math.max(...myArr)); // 9 */

let estNum = [9,8,7,6,5,4,3,2,1];

function myFunc() {
    console.log(Math.max(...estNum));
}
myFunc(estNum); // 9

/* 4. Find the Smallest
Create a function to find the smallest number in an array. */

let sNum = [9,8,7,6,5,4,3,2,1];

function myFunction() {
    console.log(Math.min(...sNum));
}
myFunction(sNum); // 1

/* 5. Clone and Merge
Given two objects:
```javascript
const person = {name: "John"}
const job = {role: "Teacher"}
```
* Clone the person object.
* Merge these two objects into one object: "employee". Use the spread operator to do so. 
Then change the values of the properties in the employee object. */



/* 6.  Is the average a whole number?
Create a function that takes 4 integers as parameters and returns true or false depending 
on whether the average of all the arguments is a whole number or not.
* Examples
* isWhole(1, 2, 3, 4) ➞ false
* isWhole(9, 2, 2, 5) ➞ false

* Once you have created a function, pass in an array as an argument which contains four elements 
- check if this method still outputs the correct result! */



/* 7. Minimum Removals for Even Output 
Create a function that takes 4 integers as an argument and returns the minimum number of removals 
to make the sum of all the elements even. 
* Examples: 
* minRemovals(1, 2, 3, 4) ➞ 0 removals
* minRemovals(5, 7, 9, 11) ➞ 0 removals 
* minRemovals(5, 7, 9, 12) ➞ 1 removal */ 



/* 8. Quadratic Equation 
Create a function to find only the positive determinant value of x in any quadratic equation 
ax^2 + bx + c. The function will take three arguements:

* a as the coefficient of x^2 (x to the power of 2)
* b as the coefficient of x
* c as the constant term

Once you have solved this problem, pass in an array as an argument which contains three elements 
- check if this method still outputs the correct result! */ 



/* 9. Spread Date
Create an array which contains a year, a month and a date. Use spread to access the date of this 
array. */


