// Functions Exercises 3

/* 1. XO
Create a function that takes a string, checks if it has the same number of 'x's and 'o's 
and returns either true or false.
	
* Return a boolean value (true or false).
* The string can contain any character.
* When neither an x nor an o is in the string, return true.

Examples:
* XO("ooxx") ➞ true
* XO("xooxx") ➞ false
* XO("ooxXm") ➞ true (case insensitive)
* XO("zpzpzpp") ➞ true (returns true if no x and o)
* XO("zzoo") ➞ false */

function xoCount(str) {
    let x = "x";
    let o = "o";
    let xoVar = str.split("");

    for(let i = 0; i < str.length; i++) {
        if ((xoVar === x,o) && (x[i] = o[i])) {
            console.log(true);
        }
        else {

        }
    }
}
xoCount("don't know what to write anymore");

/* 2. Pie 
Create a function that determines whether or not it's possible to split a pie fairly given 
these three parameters:

* Total number of slices.
* Number of recipients.
* How many slices each person gets.

Example of defining the function: equalSlices(total slices, no. recipients, slices each)

Examples:
* equalSlices(11, 5, 3) ➞ false
* // 5 people x 3 slices each = 15 slices > 11 slices 

* equalSlices(8, 3, 2) ➞ true
* equalSlices(8, 3, 3) ➞ false
* equalSlices(24, 12, 2) ➞ true */

function fairSplit (slice, recipients, remain) {
 
    if(slice/recipients >= remain) {
        console.log("fairly distributed");
    } else {
        console.log("not fairly distributed");
    }
    };
    fairSplit(10, 8, 1);//fairly distributed since the remain is >1

/* 3. Cubed
Create a function that takes in an array of numbers and returns the sum of its cubes.
Examples: 
* sumOfCubes([1, 5, 9]) ➞ 855
* // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
* sumOfCubes([3, 4, 5]) ➞ 216
* sumOfCubes([2]) ➞ 8
* sumOfCubes([]) ➞ 0

**Note**
If given an empty array, return 0. */

function cubed(numArr) {

    let calcCub = [];
    let totalSum = [];

    for (let i = 0; i < numArr.length; i++) {
        let cubResult = numArr[i] ** 3;
        calcCub.push(cubResult);
        let sum = cubResult + cubResult.length;
        totalSum.push(sum)
    }

    console.log(totalSum);
}

cubed([2, 4, 6, 8,]);

//______________________________

function sumOfCubes (input1) {
    let sum=0;
    for(let a=0; a<input1.length; a++){
        let given = input1[a]**3;
        sum = sum+given;
         
    }
    console.log(sum);
}
sumOfCubes([3,5,7]); // we ll get the sum of the square cubes of given Nos.= 495

/* 4. Amplify the Multiples of 4
Create a function that takes an integer and returns an array from 1 to the given number, where:

* If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number).
* If the number cannot be divided evenly by 4, simply return the number.

Examples
* amplify(4) ➞ [1, 2, 3, 40]
* amplify(3) ➞ [1, 2, 3]
* amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 
    22, 23, 240, 25]

**Notes**
The given integer will always be equal to or greater than 1.
Include the number (the number in the parameters). */

function amplifyNumbers (input2) {
    let result =[];
    for(let b=0; b<input2.length; b++) {
        if(input2[b]% 4 === 0) {
            result.push(input2[b] * 10);
        } else {
            result.push(input2[b]);
        }
    }
    console.log(result); // [ 1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120 ]
};
amplifyNumbers([1,2,3,4,5,6,7,8,9,10,11,12]);//remainder =0 multiply it by 10 ...

/* 5. Months
Create a function that takes a number (from 1 to 12) and return its corresponding month name 
as a string.
* monthName(3) ➞ "March"
* monthName(12) ➞ "December"
* monthName(6) ➞ "June" */

function monthFinder(month) {
    if(month == 1) {
        console.log("January");
    } else if (month == 2) {
        console.log ("February");
    } else if (month == 3) {
        console.log ("March");
    } else if (month == 4) {
        console.log ("April");
     } else if (month == 5) {
            console.log ("May");
     } else if (month == 6) {
        console.log ("June");
    }   else if (month == 7) {
        console.log ("July");
    }   else if (month == 8) {
        console.log ("August");
    }   else if (month == 9) {
        console.log ("September");
    }   else if (month == 10) {
        console.log ("October");
    }   else if (month == 11) {
        console.log ("November");
    }   else if (month == 12) {
        console.log ("December");
    } else {
        console.log("this is not a valid No of month");
    }
    }
    monthFinder(5);// May >> 12 months called respectively 

/* 6. Even Number Generator
Create a function that finds all even numbers from 1 to the given number.

Examples:
* evenNums(8) ➞ [2, 4, 6, 8]
* evenNums(4) ➞ [2, 4]
* evenNums(2) ➞ [2]

If there are no even numbers, return an empty array. */ 

function evenNumbers (input3) {
    let result1=[];
    for(let c=1; c<=input3; c++) {
         
        if(c%2 == 0) {
            result1.push(c);
            } else if(c%2 !==0) {
                    result1.push([]);
                    
            }
    }   
    console.log(result1);
    } 
    
evenNumbers(8); // [ [], 2, [], 4, [], 6, [], 8 ] >> we ll get all even Nos until the given No, else empty brace

/* 7. Dictionary
Create a function that takes in an initial word and filters out an array to contain words that 
start with the same letters as the initial word.

Examples
* dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
* dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
* dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

**Notes**
* If none of the words match, return an empty array.
* Keep the filtered array in the same relative order as the original array of words. */

function dictionary (words) {
    let emptyBrace =[];
    for(let c=0; c<words.length; c++) {
        if(words[c].substring(0,1) == "A" || words[c].substring(0,1) == "C" ||
            words[c].substring(0,1) == "S" && words[c].length >=4) {  
            emptyBrace.push(words[c]);
    } else {
        emptyBrace.push([]);
    }
}
console.log(emptyBrace);
}// [ 'Ashu', 'Commune', 'Speed', [], [] ] >> only those words with preset conditions are screened 
dictionary(["Ashu", "Commune", "Speed", "Bottle", "single"]);

/* 8. is a four letter word. 
Create a function that takes an array of strings. Return all words in the array that are exactly 
four letters.

Examples: 
* isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
* isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
* isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"] */

function quatre (givenWords) {
    let emptyBrace1=[];
    for(let d=0; d<givenWords.length; d++) {
        if(givenWords[d].length == 4) {
            console.log(givenWords[d]);
        } else {
            console.log([]);
        }
    }
};

quatre(["Ashu","Commune", "keep","Bottle", "cool"]); 
/* 
Ashu
[]
keep
[]
cool
 */// only words with 4 letters

/* 9. Is it Symmetrical? 
Create a function that takes a number as an argument and returns true or false depending on 
whether the number is symmetrical or not. A number is symmetrical when it is the same as its 
reverse.

Examples:
* isSymmetrical(7227) ➞ true
* isSymmetrical(12567) ➞ false
* isSymmetrical(44444444) ➞ true
* isSymmetrical(9939) ➞ false
* isSymmetrical(1112111) ➞ true */

function symmetrical(numbers) {
    let toStr = numbers.toString();//compare 1
    let toSpl = toStr.split("");
    let toRev = toSpl.reverse();//compare 2
     
    if(toStr[0] == toRev[0] && toStr[1] == toRev[1] && toStr[2] == toRev[2] 
        && (toStr[3]== toRev[3] && toStr[4]== toRev[4] && toStr[5]== toRev[5])) {
        console.log("These No.s are symmetrical");
    } else {
        console.log("These No.s are not symmetrical");
    }

}
symmetrical(12391519321);// These No.s are symmetrical >> the reverse and not-reverse are equal then symmetrical

/* 10. c4n y0u r34d th15? 
Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) 
version of the string.

Examples:
* hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
* hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
* hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

**Notes**
For your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 
'i's with 1, 'o's with 0, and 's's with 5. */

/* 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5. */

function scriptedSentence (wordsReplace) {
    let codedVal1 = wordsReplace.replace(/a/gi, "4");
    let codedVal2 = codedVal1.replace(/e/gi, "3");
    let codedVal3 = codedVal2.replace(/i/gi, "1");
    let codedVal4 = codedVal3.replace(/o/gi, "0");
    let codedVal5 = codedVal4.replace(/s/gi, "5");
    let codedVal6 = codedVal5.replace(/g/gi, "9");
    console.log(codedVal6);
     }
    scriptedSentence("Programming is Cool!");// Pr09r4mm1n9 15 C00l! >> letters replaced with characters 