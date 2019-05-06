// # Array Exercises 

/* 1. Declare a variable named "euroCities" and assign an array to the variable e.g. 
["Paris", "London", "Valletta", "Prague", "Rome"]. 
Declare another variable and assign the second item of the array as a value. */
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let varOne = euroCities[1];
console.log(varOne); // London - index counts from 0

/* 2. Change the first item in the array to "Berlin". */
euroCities[0] = "Berlin";
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

/* 3. Print the length of the array "euroCities". */
console.log(euroCities.length); // 5

/* 4. Remove the last item of the array "euroCities". */ 
console.log(euroCities.pop());

/* 5. Use an array method to add "Budapest" to the euroCities array. */
euroCities.push('Budapest');
console.log(euroCities);  // [ 'berlin', 'London', 'Valletta', 'Prague', 'Budapest' ]

/* 6. Remove the second and third items from the euroCities array. */
euroCities.splice(1,2);
console.log(euroCities);  // [ 'berlin', 'Prague', 'Budapest' ]
/* 7. Create another variable named asianCities and assign an array to the variable. 
Clone the array asianCities. */
let asianCities = ['Japan', 'China', 'thailand', 'singapore'];
console.log(asianCities);

/* 8. Use an array method to select items 2-4 from the array of asianCities and store this in 
another variable. */ 
let cityTown = asianCities.slice(1,4);
console.log(cityTown);

/* 9. Use a method to concat euroCities with asianCities. Store the result in a variable 
(eg. worldCities). */ 
let worldCities = euroCities.concat(asianCities);
console.log(worldCities);

/* 10. Reverse the order of worldCities. */
worldCities.reverse();
console.log(worldCities);

/* 11. Replace the 3rd item in the array of worldCities with "Toronto". */
worldCities.splice(2,1,'Toronto');
console.log(worldCities);

//  [ 'singapore',
//   'thailand',
//   'Toronto',
//   'Japan',
//   'Budapest',
//   'Prague',
//   'berlin' ]
/* 12. Remove no elements from the array of worldCities, but insert "Washington" at the 2nd 
position. */

worldCities.splice(1,1,'washington');
console.log(worldCities);

// [ 'singapore',
// 'washington',
 //'Toronto',
 //'Japan',
 //'Budapest',
 //'Prague',
 //'berlin' ]

/* 13. Write a program to join all elements of the result (worldCities) into a string. 
Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
Expected Output: 
"Berlin,London,Bangkok,Phnom Penh"
"Berlin+London+Bangkok+Phnom Penh" */

console.log(worldCities.toString(''));

// singapore,washington,Toronto,Japan,Budapest,Prague,berlin

/* 14. Empty the array euroCities while keeping the original intact. 

# Bonus */
euroCities.splice(0, 3);
console.log(euroCities); //  []

/* 15. Write a program to reverse the string: "Hello World". */

/* ## Extra Practice

**Print the results to the console.**

1. Make an array of your siblings' names or your favorite movie characters' names.
2. Make an array of your parents' names.
3. Combine these two arrays.
4. Add your pets' names.
5. Reverse the order of the array.
6. Access one of your parents' names.
7. Update the name of one of your parents. */