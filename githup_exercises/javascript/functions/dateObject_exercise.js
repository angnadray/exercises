// Date Object Exercises

/* 1. What day is it? 
Create a function to to display the current date and time in the following format: 
Today is Wednesday. The current time is 1PM : 34 : 59. */ 

function date() {
    let date = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let getDayName = days[date.getDay()];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "september", "October", "November", "December"];
    let getMonthName = months[date.getMonth()];

    let dateResult = `Today is ${getDayName}, ${getMonthName} ${date.getDate()} of ${date.getFullYear()}. The current time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(dateResult);
}
date();

/* 2. Date Formats
Create a function to display the current date in the following formats dd-mm-yyyy, dd/mm/yyyy. */

function dateForm() {
    let dateForm = new Date();
    let months2 = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    let getMonthName2 = months2[dateForm.getMonth()];

    let dateFormResult = `${dateForm.getDate()}-${getMonthName2}-${dateForm.getFullYear()}`;
    console.log(dateFormResult);
    let dateFormResult2 = `${dateForm.getDate()}/${getMonthName2}/${dateForm.getFullYear()}`;
    console.log(dateFormResult2);
}
dateForm();

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