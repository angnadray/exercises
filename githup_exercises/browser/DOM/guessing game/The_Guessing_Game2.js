let inputValue= document.getElementById("guess");
let displayText= document.getElementById("displayText");
let game = document.getElementById("game");
let play = document.getElementById("play");
let playAgain = document.getElementById("playAgain");
let clickMe = document.getElementById("clickMe");

inputValue.style.display="none";
playAgain.style.display="none";
clickMe.style.display = "none";

function startGame() {
    inputValue.style.display="inline-block";
    clickMe.style.display = "inline-block";  
    play.style.display="none";
}


function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    /* result =  */return Math.floor(Math.random() * (max - min + 1)) + min;
    // return result;
}
let random = randomNum(1,10);
console.log(random);

let attempt= 0;
function userGuessNum() {
   attempt++;
   if(inputValue.value == random){
    game.innerHTML=`The number is indeed ${random}, you got the number correctly after ${attempt} attempts.`
    displayText.innerHTML="Success!!!"
   } else {
    game.innerHTML=`Try again! You have ${3-attempt} attempts left.`
    displayText.innerHTML="Wrong!!!!!" 
   }

   inputValue.value="";
}