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
    let guess = parseInt(prompt("Guess a nunber between 1 - 10 "));
    
    while (guess !== numberToBeGuessed && count <3) {
        guess = prompt("Wrong Try again!");
        count++ 
    }

    if (guess === numberToBeGuessed && count <3) {
        console.log("Success!");
    }
    else {
        console.log("Sorry...");
        
    }
}


guessingGame();


