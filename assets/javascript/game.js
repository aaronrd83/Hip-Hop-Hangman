//1. Pick Array of Words
var wordBank = ["nas", "tupac", "eminem", "drake", "xxxtentacion", "future",
"common", "offset", "rakim", "migos", "quavo", "logic", "ludacris", "scarface", "nelly", "yelawolf",
"redman"];
//variables (global)
var randomWord;
var userGuess = "";
var wordLetters = [];
var letterBlanks = 0;
var blanksForGuesses = [];
var guessedLetters = [];
var guessesLeft = 9;

var winCount = 0;
var lossCount = 0;



 $("#numGuesses").text(guessesLeft)
 $("#winCount").text(winCount)
 $("#lossCount").text(lossCount)

//Start Game Function
function startGame() {
    guessedLetters = [];
    guessesLeft = 9;
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    wordLetters = randomWord.split("");
    letterBlanks = wordLetters.length;
    console.log("test")
   


//RESET GameBoard
    for (var i=0; i < letterBlanks; i++) {
        blanksForGuesses.push("_");
    }

    document.getElementById("wordGuess").innerHTML = blanksForGuesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = guessedLetters    

}

//Letter checks
function checkLetters(letter) {
var userGuess = "";

if (guessedLetters.includes(letter) === false) {
    guessedLetters.push(letter)
    document.getElementById("wrongGuesses").innerHTML = guessedLetters;
    guessesLeft--;
    console.log("guessesLeft", guessesLeft)
    $("#numGuesses").text(guessesLeft)
}

for (var i = 0; i<wordLetters.length; i++) {
    if (guessedLetters.includes(wordLetters[i]) === true) {
        userGuess += wordLetters[i];
    }
    else {
        userGuess += " _ "
    }
    
}
document.getElementById("wordGuess").innerHTML = userGuess

gameOver();
}

//Game Over Function
function gameOver() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left:" + guessesLeft);

    

    //User Wins
    if (wordLetters.toString() === randomWord.toString()) {
        winCount++;
        $("#winCount").text(winCount)
        alert("Winner");
        startGame();
    }

    //User Loses
    else if (guessesLeft === 0) {
        lossCount++;
        $("#lossCount").text(lossCount)
        alert("You Lose!");
        startGame();

    }
}

startGame();

document.onkeyup = function(event) {
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(lettersGuessed);
    }
;

 gameOver();
//2. update letters
//3. Make spaces for the random word Letters
//4. remainingLetters = randomWord.length
//5. Get a guess from player
//6. Update Game state based on player guess
//7. user guesses correctly
//8. User guesses incorrectly
//9. User win