/* #Conditionals Exercises

/* 1. Check if two given integer values are in the range of 50 to 99 (this includes both 50 and 99). 
Print true if either of them are in the range. */
let a1 = 55;
let b1 = 60;

if (((a1 >= 50) && (a1 <= 99)) && ((b1 >= 50) && (b1 <= 99))) {
    console.log(true);
}

else console.log(false); // true

/* 2. Check if three given integer values are in the range of 50 to 99 (inclusive). 
Print true if one or more of them are in the range. */
let a2 = 56;
let b2 = 18;
let c2 = 32;

if (((a2 >= 50) && (a2 <= 99)) || ((b2 >= 50) && (b2 <= 99)) || (c2 >= 50) && (c2 <= 99)) {
    console.log(true);
}
else console.log(false); // true

/* 3. Declare the variables a, b and c - give them number values. 
Check which one out of the three variables has the largest value and print it to the console. 
Then change the values of the variables to see if your conditional still works. */
let a3 = 78;
let b3 = 45;
let c3 = 89;

if ((a3 > b3) && (a3 > c3)) {
    console.log(`${a3} is the largest`)
}
else if ((b3 > a3) && (b3 > c3)) {
    console.log(`${b3} is the largest`);
}
else console.log(`${c3} is the largest`); // 89 is the largest

/* 4. Add "Py" in front of a given string (any string eg. "JavaScript"). 
If the given string begins with "Py", then print the original string (eg. Pythagoras). */ 


/* 5. Calculate the sum of the two integers. If the sum is in the range of 50..80, 
print 65 otherwise print 80. */
let a5 = 45;
let b5 = 23;
let sum5 = a5 + b5;

if (sum5 >=50 && sum5 <=80) {
    console.log(65);
}
else console.log(80); // 65

/* 6. Check whether the sum of two integers is 8 or whether their difference is 8. 
If one of these is the case, print true. */
let a6 = 6;
let b6 = 4;

if ((a6 + b6 === 8) || (a6 / b6 === 8)) {
    console.log(true)
}
else console.log(false);

/* 7. Check whether one of two integers is 15 or if their sum is 15. 
If one of these is the case, print true. */
let a7 = 10;
let b7 = 5;
let sum7 = a7 + b7;

if (a7 == 15 || b7 == 15 || (a7 + b7 == 15)) {
    console.log(true)
}
else console.log(false); // true - the sum of a7 and b7 is 15

/* 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true. */
let a8 = 22;
let b8 = 24;

if ((a8 % 7 == 0) || (a8 % 11 == 0)) {
    console.log(`${a8} is a multiple of 7 or 8`)
}
else if ((b8 % 7 == 0) || (b8 % 11 == 0)) {
    console.log(`${b8} is a multiple of 7 or 11`)
}
else console.log(`neither ${a8} nor ${b8} are multiples of 7 or 11`); // 22 is a multiple of 7 or 8

/* 9. Calculate the sum of the two given integers. If the two values are same, 
then print triple their sum. */
let a9 = 10;
let b9 = 12;
let sum9 = a9 + b9;

if (a9 === b9) {
    console.log(sum9 * 3)
}
else {
    console.log(`not equal`)
} // not equal

/* 10. Calculate the difference between a specified number and 19 (e.g. 19 - x). 
If the specified number is greater than 19, print double the difference of (x - 19). */
let a10 = 6;
let diff10 = a10 - 19;

if (a10 > 19) {
    console.log(diff10 * 2)
}
else console.log(`whatever`); // whatever




