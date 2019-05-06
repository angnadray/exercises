/* # Loops

1. Addition 
Write a program to add up the numbers 1 to 20. */
let i;

for (i = 1; i <= 20; i++) {
    console.log(i);
}

/* 2. There are i bottles of beer on the wall. 
Write a program that will output, "There is one bottle 
of beer on the wall." "There are two bottles of beer on 
the wall" etc.  */
for (i = 1; i <= 3; i++) {
    if (i === 1) {
        console.log(`"There is ${i} bottle of beer on the wall."`)
    }
    else {
        console.log(`"There is ${i} bottles of beer on the wall."`)
    }
}   /*  "There is 1 bottle of beer on the wall."
        "There is 2 bottles of beer on the wall."
        "There is 3 bottles of beer on the wall."
    */

/* 3. The odd/even reporter
Write a program that will iterate from 0 to 20. For each 
iteration, it will check if the current number is even 
or odd, and report that to the screen (e.g. "2 is even").
 */
for (i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`)
    }
    else {
        console.log(`${i} is odd`)
    }
}
    /* 
    0 is even
    1 is odd
    2 is even
    3 is odd
    4 is even
    5 is odd
    6 is even
    7 is odd
    8 is even
    9 is odd
    10 is even
    11 is odd
    12 is even
    13 is odd
    14 is even
    15 is odd
    16 is even
    17 is odd
    18 is even
    19 is odd
    20 is even
     */

/* 4. Multiplication Tables
Write a program that will iterate from 0 to 10. For each 
iteration of the for loop, it will multiply the number 
by 9 and log the result (e.g. "2 * 9 = 18").
**Bonus**: Use a nested for loop to show the tables for 
every multiplier from 1 to 10 (100 results total).
 */

let m =0;
for (i = 0; i <=10; i++) {
     let m = i * 9;
    console.log(`${i} * 9 = ${m}`);
}
    /*
    0 * 9 = 0
    1 * 9 = 9
    2 * 9 = 18
    3 * 9 = 27
    4 * 9 = 36
    5 * 9 = 45
    6 * 9 = 54
    7 * 9 = 63
    8 * 9 = 72
    9 * 9 = 81
    10 * 9 = 90 
     */

 /* 5. Grades
Write a program to calculate the average marks of the following students.
Then, this average is used to determine the corresponding grade for the class. 
John	90
Tom	    60
Jane	77
Maria	81
Carl	65

The marks are graded as follows :
Range	Grade
<60	    F
<70	    D
<80	    C
<90	    B
<100    A
> */
let marks = [90, 60, 77, 81, 65];
let total = 0;

for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
    console.log(total);
}

let average = total / marks.length;
console.log(`average of the class is ${average}`); // 74,61

if (average < 60) {
    console.log(`class average grade is F`)
}
else if (average < 70) {
    console.log(`class average grade is D`)
}
else if (average < 80) {
    console.log(`class average grade is C`)
}
else if (average < 90) {
    console.log(`class average grade is B`)
}
else {
    console.log(`class average grade is A`)
}

/* 6. Fizz Buzz
Write a program which iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the 
number and for the multiples of five print "Buzz". For 
numbers which are multiples of both three and five print
 "FizzBuzz". */
 for (i = 1; i <= 100; i++) {
    
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz');
    } // it is important to write this condition first or else it is not meet after the other two

    else if (i % 3 === 0) {
        console.log(`Fizz`)
    }
    else if (i % 5 === 0) {
        console.log(`Buzz`)
    }
    else {
        console.log(i);
    }
}
    /* 
    1
    2
    Fizz
    4
    Buzz
    Fizz */

/* 7. Sum of Multiples
Write a program to add the multiples of 3 and 5 under 1000.
 */
let add = 0;

for (let i = 1; i <= 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        add = add +i;
    }
}
console.log(add); // 234168

/* 8. Create an array filled with your friends' and family's
 names. Loop over the array and greet each friend e.g. 
 Hello Maria! Hello Mike! etc. 

**Bonus**: Print the indexes of each item in the array. 
Expected output example: Mike is at index 1 of my friends 
array.  */
let friends = ['Lola', 'Petra', 'Carol', 'Raul'];

for (let i = 0; i < friends.length; i++) {
    console.log(`Hello ${friends[i]} you are at index ${i}`);
}
    /* 
    Hello Lola you are at index 0
    Hello Petra you are at index 1
    Hello Carol you are at index 2
    Hello Raul you are at index 3
    */

/* 9. Write a program that will output the following using 
loops: 
>100 200 300 400 500 600 700 800 900 1000
>1 2 4 8 16 32 64 128
>0 2 4 6 8 10
>3 6 9 12 15
>9 8 7 6 5 4 3 2 1 0 */

for(let i=1; i<=10; i++) {
sum =i*100;
console.log(`the output is ${sum}`);
}//quiz 9a, 

console.log('............................................................');
let powerOf;
for(let i=0; i<8; i++) {
powerOf = Math.pow(2, i);
console.log(`the output is ${powerOf}`);
}//quiz 9b, 


for(let i=0; i<=10; i++) {
if(i%2==0) {
    console.log(`${i}`);
};
}//quiz 9c,
 

for(let i=1; i<=15; i++) {
    if(i%3==0) {
        console.log(`${i}`);
    };
    }//quiz 9d,

for(let i=9; i>=0; i--){
    console.log(`the reversed values are: ${i}`);
};//quiz 9e, reversing values  

/* 10. isPalindrome
Write a program to check whether a word is a palindrome or 
not. 
Note: a palindrome is a word, phrase, or sequence that reads 
the same backwards as forwards, e.g. madam or tarrattarrat */

let word ='madam';
let transform = word.toLowerCase().split('');
let reversed= transform.reverse();
let joined = reversed.join('');
     /*  if(word==reversed)  */ 
      if(word == joined){ 
         console.log(`The word ${word} is a palindrome`);
     }  else {
    console.log(`The word ${word} is not a palindrome`);
    }//quiz 10, with out array

