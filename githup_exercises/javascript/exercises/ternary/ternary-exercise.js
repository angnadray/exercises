// Ternary

/* 1. Declare a variable named canDrive. Check if someone's age is over 18. 
If so, print 'yes, can drive' and if not, print 'no, too young!' */

let age = 17;
let canDrive = (age >= 18) ? "yes, can drive" : "no, too young";
console.log(canDrive); // no, too young

/* 2. Declare a variable named speedCheck. If speed is above 130km, 
print 'you're going too fast!'. If speed is lower than 130km, 
print 'You're driving below the speed limit' */

let speed = 100;
let speedLimit = 130;
let speedCheck = (speed > speedLimit) ? "You're going too fast!" : "You're driving below the speed limit";
console.log(speedCheck); // You're driving below the speed limit

/* 3. Declare a variable named personAge. If age is below 21, print "serve juice". 
Otherwise print "serve wine" */

let legalAge = 25;
let personAge = (legalAge >= 21) ? "serve wine" : "serve juice";
console.log(personAge); // serve wine

/* 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". 
If false, print "Ticket costs €12,00" */

let student = false;
let isStudent = (student == true) ? "Ticket costs €5,00" : "Ticket costs €12,00";
console.log(isStudent); // Ticket costs €12,00

/* 5. Declare a variable named timeOfDay. Check if the time of day is 'morning' - 
if so, print "Good Morning". If not, print "Good Evening */

timeOfDay = 18;
let greeting = (timeOfDay <= 12) ? "Good Morning" : "Good Evening";
console.log(greeting); // Good Evening

/* it matters which variable should go first, have to change all to first */