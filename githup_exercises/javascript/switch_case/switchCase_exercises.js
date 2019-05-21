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

console.log(note);  // No value found

/* 3. What month is it? 
Create a function using the new Date().getMonth() method and switch case in order to return 
the month of the year. Return "It's the month of May!" */

let month = "";

// The getDay() method returns the weekday of a date as a number (0-6):

switch (new Date().getDay()) {
    case 0:
      month = "Sunday";
      break;
    case 1:
      month = "Monday";
      break;
    case 2:
      month = "Tuesday";
      break;
    case 3:
            month = "Wednesday";
      break;
    case 4:
            month = "Thursday";
      break;
    case 5:
            month = "Friday";
      break;
    case 6:
            month = "Saturday";
}

console.log(month);

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