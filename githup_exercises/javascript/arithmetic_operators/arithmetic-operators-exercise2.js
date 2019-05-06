/* Math Problems */

// **Percent** Calculate the percentage of 17/30. Expected output: number%
let x = 17;
let y = 30;
let thePercent = (x / y * 100);
console.log(thePercent); /* 56,6666666 etc */

/*  **Average**  */

/* The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
What is Noemy's average hour? */

let hours = (8+6+5+9+8+2+1+8.5+7+4);
let days = 10;
console.log(hours / days);

/* A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
Expected output: Score in the sixth test: --. */

let totalAverage = 85;
let fiveTests = (75+70+85+90+100); /* 420 */
let averagexSix = (totalAverage * 6) /* 510 */
let sixthTest = (averagexSix - fiveTests);
console.log(sixthTest); /* 90 */

/* For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
Expected output: James needs a minimum of --% to get an 80% average. */

let average8 = 78;
let jamesTotal = 80;
let average9 = ((jamesTotal * 2) - average8) /*  */
console.log(average9); /* 82 */

/* **Consumer Formula** */

/* Calculate the three bills including tips:
€22.35 + 10% tip
€26.67 + 15% tip
€35.92 + 20% tip */

let bill1 = 22.35;
let bill2 = 26.67;
let bill3 = 35.92;
console.log((bill1 * 1.10) + (bill2 * 1.15) + (bill3 * 1.20)); /* 98.3595 */
