// Date Object Exercises

/* 1. What day is it? 
Create a function to to display the current date and time in the following format: 
Today is Wednesday. The current time is 1PM : 34 : 59. */ 

/* function currDate() {
    let dateFormat = new Date();
} 
console.log(); */

let date = new Date();

var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
d.getHours() + ":" + d.getMinutes();

// 16-5-2015 9:50


/* 2. Date Formats
Create a function to display the current date in the following formats dd-mm-yyyy, dd/mm/yyyy. */



/* 3. Is New Year's day a Sunday?
Create a function to check whether the 1st of January is a Sunday 
between the years of 2014 and 2050. */



/* 4. How many days till Christmas?
Create a function to calculate the days till Christmas. */ 



/* 5. Days in a month
Create a function to calculate the number of days in a specified month. 
Examples and Expected Output: 
* getDaysInMonth(1, 2012); --> 31
* getDaysInMonth(2, 2012); --> 29
* getDaysInMonth(9, 2012); --> 30
* getDaysInMonth(12, 2012); --> 31 */