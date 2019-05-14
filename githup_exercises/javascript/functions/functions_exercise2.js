// FUNCTIONS exercise 2

/* 1. Reverse
Create a function to reverse a number. 

Examples: 
* reverse(34532) -> expected output: 23543 */

function reverse(num) {
    let arrRev = num.toString().split('');
    let arrRev2 = arrRev.reverse().join("");
    let arrRev3 = Number(arrRev2);
    console.log(arrRev3);
}
reverse(34532); //output 23543

/* 2. Alphabetical Order
Create a function to sort a string into alphabetical order. 
Examples:
<<<<<<< HEAD
* alphaOrder("webdev") -> expected output: "bdeevw"

* Note: Assume numbers, symbols and punctuation are not included in the string. */  

/* function alphaOrder(string) {
    let array = string.toLowerCase().match(/\w/g).sort().join("");
    console.log(array);
    } */

function alphaOrder(str) {
    let wordOrder = str.split('').sort().join('');
    console.log(wordOrder);
}
alphaOrder("Hi! My name's Lola, I'm a shy person!!"); // aaaeehhiillmmmnnooprsssyy

/* 3. The Greater Numbers
Create a function which accepts two arguments, an array of numbers and a number. 
The function should return the elements of the array which are greater than the second argument. 
Examples: 
* findGreatest([3, 4, 5], 4) -> expected output: 5
* findGreatest([10, 20, 30], 12) -> expected output: 20, 30
* findGreatest([0, 10, 3], 4) -> expected output: 10 */

/* function myMax(a) {
    let m = n = a.length;

    for (let i = 0; i != n; ++i) {
        if (a[i] > m) {
            m = a[i];
        }
    }
    console.log(m);
}
myMax([10, 20, 30]); // 30

//____________________________ only to find out the greatest number in an array */

function greatNum(arr, nr){
    let res = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > nr){
        res.push(arr[i]);
        }
    }
console.log(res);
}
greatNum([1,2,3,4,5,6,7], 3); // [ 4, 5, 6, 7 ]

/* 4. Dog Years
Create a function which calculates how old a dog is in doggie years. The function should accept 
one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculation 
of 1 human year = 7 dog years. 

Example
* dogAge(4) -> expected output example: "Your doggie is 28 years old in human years!" */

function calculateDogAge(dogAge) {
    let humanYears = 7 * dogAge;
    console.log(`Your doggie is ${humanYears} years old in human years!`);
}
calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);

/* 5. A Lifetime Supply...
Create a function to calculate how much you'll need for a lifetime supply of your favorite snack. 
The function should accept two arguments: age and amount per day. The function should calculate the 
amount that will be consumed for the rest of your life given a constant max age. 

Examples: 
* calcSupply(25, 2) -> expected output: You will need 40,150 bars of chocolate (2 a day) to last 
you till the age of 80. 
* calcSupply(40, 3) -> expected output: You will need 43,800 packets of crisps  (3 a day) to last 
you till the age of 80. 

**Bonus - A lifetime supply**
Accept floating point values for amount per day and round the result. */ 

function calcSupply(age, perDay) {
    let maxAge = 70;
    let totalNeed = (perDay * 365) * (maxAge - age);
    let message = `At ${age}, if you take ${perDay} cookies per day, you will need ${totalNeed} cookies to last you until the age of ${maxAge}`;
    console.log(message);
}
calcSupply(34, 16); // At 34, if you take 16 cookies per day, you will need 210240 cookies to last you until the age of 70
calcSupply(23, 5); // At 23, if you take 5 cookies per day, you will need 65700 cookies to last you until the age of 70
calcSupply(18, 40); // At 18, if you take 40 cookies per day, you will need 525600 cookies to last you until the age of 70

/* 6. For the longest word
Create a function to find the longest word in string. 
Examples: 
* longestWord("this is a web development course") ->  expected output: "development" */

function longestWord(stringVal) {
    let str1 = stringVal.split(" ");
    let longest = [];
    let word = [];

    for (let i = 0; i < str1.length; i++) {
        if (longest < str1[i].length) {
            longest = str1[i].length;
            word = str1[i];
        }
    }
    console.log(word);
}
longestWord("The longest word to be seen"); // longest
longestWord("Here a random sentence passing by"); // sentence

/* 7. AEIOU: Vowels
Create a function that takes a string in its parameters and counts the number of vowels in the 
string. 
Examples: 
* findVowels("this is a string") -> expected output: 4 vowels found
* Notes: vowels are "a, e, i, o u". */ 

function vowelCount(sentence)
{
    let vowList = 'aeiouAEIOU';
    let vCount = [];
  
    for(let i = 0; i < sentence.length ; i++) {
        if (vowList.indexOf(sentence[i]) !== -1)
        {
        vCount ++;
        }
    }
    let output2 = `${vCount} vowels found`;
    console.log(output2);
}
vowelCount("Here a random sentence passing by"); // 10 vowels found

// __________________________________________

function countVowels(string2) {
    let match = string2.match(/[aeiou]|[AEIOU]/g);
    let output3 = `${match.length} vowels found`;
    console.log(output3);  
}
countVowels("Just another random sentence passing by"); // 11 vowels found

/* 8. Data Types
Create a function that detects the data type of the argument passed. 

Examples: 
* detectType("hello") -> expected output: type of argument is a string. 
* detectType(4) -> expected output: type of argument is a number. */ 

function typeOfData(dataValue){
    let output4 = `Type of "${dataValue}": is ${typeof dataValue}`;
    console.log(output4);
}
typeOfData("Here a random sentence passing by"); // Type of "Here a random sentence passing by": is string
typeOfData(5678); // Type of "5678": is number
typeOfData(true); // Type of "true": is boolean
typeOfData([1, 2, 3, 4]); // Type of "1,2,3,4": is object

/* 9. Count Occurrences 
Create a function that accepts two arguments: a string and a letter. The function should count the 
number of occurrences of that letter in the string. 

Examples: 
* countOccurrences("this is a string", "i") -> expected output: occurrences of i: 3 */ 

function charCount(string3, letter) {
    let letterCount = [];
        for (let i = 0; i < string3.length; i++) {
            if (string3[i] === letter) {
            letterCount ++;
            }
        }
    let output5 = `Occurrences of "${letter}": ${letterCount}`;
    console.log(output5);
}
charCount("Here a random sentence passing by", "e"); // Occurrences of e: 5 

/* 10. Counting Letters
Create a function that counts the number of occurrences of each letter in a string. 

Examples: 
* countLetters("tree") -> expected output: t: 1, r: 1, e: 2 */

