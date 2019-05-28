// Callback Function 

/* 1. 
With the snippet of code below, create a function called "each" which accepts two 
parameters: an array and a callback function. The "each" function should loop over 
the array passed to it and run the callback function on each element in it.
// this function should accept 2 parameters, put them in! 

function each(){
    // put your code inside here!
}

each([1,2,3,4], function(val){
    console.log(val);
});

each([1,2,3,4], function(val){
    console.log(val*2);
});

each([1,2,3,4], function(val){
    console.log(val/2);
}); */

function each(arr, func){
    arr.forEach(element => {
       func(element);
    });
}

each([1,2,3,4], function(val){
    console.log(val+3);
});

each([1,2,3,4], function(val){
    console.log(val/2);
});

function timesTwo(val) {
    console.log(val*2);
}
each([1,2,3,4], timesTwo);

//__________________________________

function each2(arr2, func2){
    arr2.forEach(element2 => {
       console.log(func2(element2))
    });
}

each2([1,2,3,4], val2 => val2*2)

/* 2
Create a function called "map" which accepts two parameters: an array and a callback. 
The "map" function should return a new array with the result of each value being passed 
to the callback function.
Example:
map([1,2,3,4], function(val){
    return val * 2;
}); // [2,4,6,8] */

function map(array, cbFunc){
    let mapArr = [];
    array.forEach(element => {
        mapArr.push(cbFunc(element));
    });
    console.log(mapArr);
}

map([1,2,3,4], function(rest){
    return rest * 2;
}); // [ 2, 4, 6, 8 ]

/* 3
Create a function called "filter" which accepts two parameters an array and a callback. 
The function should return a new array with all of the values that return false for the callback.
Examples:
filter([1,2,3,4], function(val){
    return val > 2;
}); // [1,2]

filter([2,3,4,5], function(val){
    return val % 2 === 0;
}); // [3,5] */

function filter(arr3, func3) {
    let filArr = [];
    arr3.forEach(element => {
        if (!func3(element)) {
            filArr.push(element);
        }
    });
    console.log(filArr);
}

filter([1,2,3,4], val3 => val3 > 2); // [ 1, 2 ]