function getRandomInclusive(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
   /*  console.log(Math.random()* (max - min + 1 )); */
    
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}

/* console.log(getRandomInclusive(1,10)); */

function guessingGame() {
    let numberToBeGuessed = getRandomInclusive(1,10);
    let count = 1;
    let guess = parseInt(prompt("Guess a number between 1 - 10 "));

    while (guess !== numberToBeGuessed && count <3) {
        // alert for when the user types letters instead of numbers
        if (isNaN(guess)) {
            guess = prompt("You can't use letters, please use a number between 1 - 10")  
        }
        // continuation if the input is a number
        else {
            guess = prompt("Wrong Try again!");
            count++ // if this count++ is out of the else condition it will apply for letters too 
        }  
    }
    
    if (guess === numberToBeGuessed && count <3) {
        console.log("Success!");
    }
    
    else {
        console.log("Sorry...");   
    }
}

guessingGame();