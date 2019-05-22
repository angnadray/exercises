// Switch Statements 

/* 1. Color Analyzer 
Create a function that takes a string in its parameters. Console log a different statement 
for each color (red, blue, green, yellow). 
* Example: analyzeColor("Red") -> "Red is a primary color". */ 

/* let color = "Red";

switch (color) {
    case "Red":
    color = `${color} is a primary color`;
    break;
    case "Blue":
    color = `${color} is a primary color`;
    break;
    case "Green":
    color = `${color} is not a primary color`;
    break;
    case "Yellow":
    color = `${color} is a primary color`;
}
console.log(color); // Red is a primary color */

function color(color) {

switch (color) {
    case "Red":
        console.log(`${color} is a primary color`);
    break;
    case "Blue":
        console.log(`${color} is a primary color`);
    break;
    case "Green":
        console.log(`${color} is a secondary color`);
    break;
    case "Yellow":
        console.log(`${color} is a primary color`);
    default:
        console.log(`${color} is not primary nor a secondary color`);    
}}
color("purple"); // Blue is a primary color

/* 2. Grading 
Create a function that takes a grade in its parameters. Console log comments depending on 
the grade. 
* Example: grade("A") -> "Good job!", grade("F") -> "Failed" */

/* const grade = "A";
switch (grade) {
  case "A":
    note = `Great Job!`;
    break;
  case "F":
    note = `Study harder`;
    break;
  default:
    note = `Improvements are needed`;
}

console.log(note);  // Great Job! */

function grade(grade) {

switch (grade) {
  case "A":
      console.log(`Great Job!`);
    break;
  case "F":
      console.log(`Failed. Study harder!`);
    break;
  default: 
    console.log(`Some improvements are needed!`);
}} 
grade("C");  // Some improvements are needed!

/* 3. What month is it? 
Create a function using the new Date().getMonth() method and switch case in order to return 
the month of the year. Return "It's the month of May!" */

/* let month = "It's the month of ";

switch (new Date().getMonth()) {
    case 0:
        month += "January";
        break;
    case 1:
        month += "February";
        break;
    case 2:
        month += "March";
        break;
    case 3:
        month += "April";
        break;
    case 4:
        month += "May";
        break;
    case 5:
        month += "June";
        break;
    case 6:
        month += "July";
        break;
    case 7:
        month += "August";
        break;
    case 8:
        month += "September";
        break;
    case 9:
        month += "October";
        break;
    case 10:
        month += "November";
        break;
    case 11:
        month += "December";
}
console.log(month); // It's the month of May */

function month() {

let message = `It's the month of`; 

switch (new Date().getMonth()) {
    case 0:
        console.log(`${message} January`);
        break;
    case 1:
        console.log(`${message} February`);
        break;
    case 2:
        console.log(`${message} March`);
        break;
    case 3:
        console.log(`${message} April`);
        break;
    case 4:
        console.log(`${message} May`);
        break;
    case 5:
        console.log(`${message} June`);
        break;
    case 6:
        console.log(`${message} July`);
        break;
    case 7:
        console.log(`${message} August`);
        break;
    case 8:
        console.log(`${message} September`);
        break;
    case 9:
        console.log(`${message} October`);
        break;
    case 10:
        console.log(`${message} November`);
        break;
    case 11:
        console.log(`${message} December`);
}}
month() // It's the month of May

/* 4. Fruits
Create a function that takes a string in its parameters. Console log a different statement 
for each fruit (e.g. banana, orange, strawberry, apple). 
* Example: fruits("Orange") -> Great choice! An orange is full of vitamin C!" */

/* let fruit = "banana";

switch(fruit) {
    case "banana":
    fruit = `Great choice! the ${fruit} is the sweetest fruit of them all`;
    break;
    case "orange":
    fruit = `Great choice! an ${fruit} is full of vitamin C`;
    break;
    case "strawberry":
    fruit = `Great choice! the ${fruit} has the least sugar in this list of fruits`;
    break;
    case "apple":
    fruit = `Great choice! an ${fruit} a day keeps the doctor away`;
}
console.log(fruit); //   */

function fruit(fruit) {
switch(fruit) {
    case "banana":
    console.log(`Great choice! the ${fruit} is the sweetest fruit of them all`); //  
    break;
    case "orange":
    console.log(`Great choice! an ${fruit} is full of vitamin C`);
    break;
    case "strawberry":
    console.log(`Great choice! the ${fruit} has the least sugar in this list of fruits`);
    break;
    case "apple":
    console.log(`Great choice! an ${fruit} a day keeps the doctor away`);
}}
fruit("banana"); // Great choice! the banana is the sweetest fruit of them all

/* 5.Jobs 
Create a function and a person object. Console log different statements for each job 
(e.g."teacher", "driver", "programmer", "actor", "chef") using a switch statement.
* Examples of expected output
* "Maria Smith is a teacher. She teaches children."
* "Maria Smith is a driver. She drives a truck." */ 

let person = `Maria Smith`;
let job = [
    ["teacher","She teaches children."],
    ["actress","She plays in romantic movies."],
    ["driver","She drives a truck."],
    ["chef", "She loves her job in her restaurant."],
];

job.forEach(jobNam => {
    switch(jobNam[0]) {
        case "teacher":
            console.log(`${person} is a ${jobNam[0]}. ${jobNam[1]}`);
            break;
        case "actress":
            console.log(`${person} is a ${jobNam[0]}. ${jobNam[1]}`);
            break;
        case "driver":
            console.log(`${person} is a ${jobNam[0]}. ${jobNam[1]}`);
            break;
        case "chef":
            console.log(`${person} is a ${jobNam[0]}. ${jobNam[1]}`);
            break;
        default: 
        note = `${person} is jobless`;
            break;   
    }
})

    /*
        Maria Smith is a teacher. She teaches children.
        Maria Smith is a actress. She plays in romantic movies.
        Maria Smith is a driver. She drives a truck.
        Maria Smith is a chef. She loves her job in her restaurant.
    */