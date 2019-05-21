// Switch Statements 

/* 1. Color Analyzer 
Create a function that takes a string in its parameters. Console log a different statement 
for each color (red, blue, green, yellow). 
* Example: analyzeColor("Red") -> "Red is a primary color". */ 

let color = "Red";

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
console.log(color); // Red is a primary color

/* 2. Grading 
Create a function that takes a grade in its parameters. Console log comments depending on 
the grade. 
* Example: grade("A") -> "Good job!", grade("F") -> "Failed" */

const grade = "A";
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

console.log(note);  // Great Job!

/* 3. What month is it? 
Create a function using the new Date().getMonth() method and switch case in order to return 
the month of the year. Return "It's the month of May!" */

let month = "It's the month of ";

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
console.log(month); // It's the month of May

/* 4. Fruits
Create a function that takes a string in its parameters. Console log a different statement 
for each fruit (e.g. banana, orange, strawberry, apple). 
* Example: fruits("Orange") -> Great choice! An orange is full of vitamin C!" */



/* 5.Jobs 
Create a function and a person object. Console log different statements for each job 
(e.g."teacher", "driver", "programmer", "actor", "chef") using a switch statement.
* Examples of expected output
* "Maria Smith is a teacher. She teaches children."
* "Maria Smith is a driver. She drives a truck." */ 