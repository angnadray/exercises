//1
let park = 'I can walk in the park all day!';
console.log(park.substring(18,22));
/* prints only the characteres 18 a 22 in this case the word park */

//2
let javsc = 'JavaScript';
console.log(javsc.substring(3,6));
/* prints aSc */

//3
let hello1 = 'Hello World';
console.log(hello1.toLocaleUpperCase());
/* prints HELLO WORLD */

//4
let hello2 = 'Hello Earthling';
console.log(hello2.toLocaleLowerCase());
/* prints hello earthling */

//5
let nice = 'nice shoes';
console.log(nice.includes('l'));
/* false */
console.log(nice.includes('n'));
/* true */

//6
let jjavj = 'JavaScript';
console.log(`${jjavj.substring(0,1)}${jjavj}${jjavj.substring(0,1)}`);
/* prints JJavaScriptJ */

//7
let jjavj2 = 'JavaScript';
console.log(`${jjavj2.substring(7,10)}${jjavj2}${jjavj2.substring(7,10)}`);
/* prints iptJavaScriptipt */

//8
let var1 = 'This is a value for this variable';
console.log(var1.toLocaleUpperCase());
/* THIS IS A VALUE FOR THIS VARIABLE */
console.log(var1.includes('Java'));
/* false */

//9
let var2 = 'OneVariableMorE';
console.log(`${var2.substring(14,15)}${var2.substring(1,14)}${var2.substring(0,1)}`);
/* prints EneVariableMorO - changing positions of the first and last characters */

//10
let name = 'Angie';
let place = 'Berlin';
let job = 'graphic designer';
console.log(`My name is ${name}. I live in ${place} and I am a ${job}.`);
/* prints My name is Angie. I live in Berlin and I am a graphic designer. */

//11
let fox = 'the quick brown fox';
console.log(`${fox[0].toLocaleUpperCase()}${fox.substring(1,19)}`);
/* prints The quick brown fox - capitalizing only the first character, the [] brackets are to give
an index value so in this case I am asking the index 0 of the fox variable, 
no need to use substring */

/* with slice if the first index is bigger than the second one, like 5,3 it prints and empty string.
 With substring it simply swaps the values from 5,3 to 3,5 in order to start from the smaller */