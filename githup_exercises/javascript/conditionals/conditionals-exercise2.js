/* 1. Make a variable for firstName and age and give each 
variable values. Create an if/else statement to check 
whether the person's age is less than 13. If so, print 
"firstName is a boy/girl". If the age is equal to or 
more than 13 and less than 20, print "firstName is a 
teenager". If the person's age is equal to 20 and less 
than 30, then print "firstName is a young man/woman". 
If none of these conditions apple, print "firstName is a 
man/woman". 
 */
let firstName = "Adel";
let age = 14;
if(age < 13) {
    console.log(`${firstName} is a boy.`);
} else if(age >= 13 && age < 20) {
    console.log(`${firstName} is teenager.`);
} else if (age == 20 && age < 30) {
    console.log(`${firstName} is young man.`);
} else {
    console.log(`${firstName} is a woman name.`);
}

/* 2. Make an if/else statement depending on a person's job. 
Create two variables "firstName" and "job". 
Print 4 different outputs depending on the value of "job" 
eg. "Maria is a teacher in Berlin" / "Maria is a designer 
in Berlin". 
Make 5 different possible outcomes depending on the value
 of job. */
let surName = "Maria";
let job = "architect";

if(job === "programmer") {
    console.log(`${surName} is working is London.`);
} else if (job === "teacher") {
    console.log(`${surName} is working is Berlin.`);
} else if (job === "architect") {
    console.log(`${surName} is working in New-York.`)
} else/* (job != "programmer","teacher","architect"); */{
     console.log(`${surName} is working is Nirobi.`);
}

/* 3. Check if a number is divisible by 3. If it is, 
print "Fizz". Check if a number is divisible by "5". 
If it is, print "Buzz". Check is a number is divisible 
by both 3 and 5. If it is, print "FizzBuzz". If none of 
the above apply, print the number.  */
let divisNumb = 15;
let sound = "Fizz";
let sound2 = "Buzz";

if (divisNumb % 3 ===0 && divisNumb % 5 === 0) {
    console.log(`${sound}${sound2}`);
} else if (divisNumb % 5 === 0) {
    console.log(`${sound2}`);
} else if(divisNumb % 3 === 0) {
    console.log(`${sound}`);
}
else {
    console.log( divisNumb);
}

/* 4. Make an if/else statement depending on the weather 
today!
Create a variable named "temperature" and "weather".
Then, create outputs based on the variable values e.g.
if ((temperature > 15) && (weather === 'sunny') {
console.log(`It is ${temperature} degrees outside and 
${weather}`.
}
>Do this for at least 3 different outputs. */
let temp = 21;
let weather = "cloudy";
let feeling = "weather";

if((temp <= 5 && weather == "windy")) {
    console.log(`The ${feeling} is cold.`);
} else if ((temp <= 24 || temp <6) && (weather == "cloudy")){
    console.log(`The ${feeling} is warm.`);
} else if ((temp >=25 && weather == "cloudy")) {
    console.log(`The ${feeling} is humide.`);
} else {
    console.log(`The temprature is ${temp} and the weather is ${weather}`);
}

/* 5. Calculate the student average mark and then give the 
student a grade. 

student marks = 90, 64, 75, 83, 80, 55

- A+ if the average is greater than 90. 
- A if the average is greater than 80 and less than or 
equal to 90	. 
- B+ if the average is greater than 70 and less than or 
equal to 80. 
- B if the average is greater than 60 and less than or 
equal to 70. 
- C+ if the average is greater than 50 and less than or 
equal to 60. 
- C if the average is greater than 40  and less than or
 equal to 50. 
- D if the average is greater than 30 and less than or 
equal to 40. 
- F if the average is less than or equal to 30. */

let mark = 92;
let title = "grade";

if ((mark > 90 && mark <= 100)) {
    console.log(`The ${title} is A`);
} else if ((mark >= 75 && mark <= 90)) {
    console.log(`The ${title} is B`);
}
    else if ((mark >= 65 && mark <= 74)) {
        console.log(`The ${title} is C+`);
    } else if ((mark >= 45 && mark <= 64)) {
        console.log(`The ${title} is C`);
    } else if ((mark >= 35 && mark <= 44)) {
        console.log(`The ${title} is D`);
    } else {
        console.log(`The ${title} is F`);
    }
