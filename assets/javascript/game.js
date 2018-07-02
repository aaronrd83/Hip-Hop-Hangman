//1. Pick Array of Words
var wordBank = ["kendrick lamar", "logic", "ice cube", "dr dre", "dave east",
"nas", "trae the truth","future", "notorious big", "the game", "snoop dogg",
"eminem", "kanye west", "tupac shakur", "drake", "rakim", "big sean", "slick rick",
"j cole", "busta rhymes", "common", "scarface", "bun b", "pimp c", "donald glover"];

var randomWord; "";
var wordLetters = [];
var letterBlanks = 0;
var blanksForGuesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

function startGame() {
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    wordLetters = randomWord.split("");
    letterBlanks = wordLetters.length;



//RESET
    guessesLeft = 9;
    wrongLetters = [];
    blanksForGuesses = [];

    for (var i=0; i < letterBlanks; i++) {
        blanksForGuesses.push("_");
    }

    document.getElementById("wordGuess").innerHTML = blanksForGuesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCount").innerHTML = winCount;
    document.getElementById("lossCount").innerHTML = lossCount;
}


//Letter checks
function checkLetters(letter) {
    var isLetterInWord = false;

    for (var i=0; i<letterBlanks; i++) {
        if(randomWord[i] == letter) {
            isLetterInWord = true;
        }
    }


    if (isLetterInWord) {
        for (var i=0; i<letterBlanks; i++) {
            if(randomWord[i] == letter) {
                blanksForGuesses[i] = letter;
            }
        }
    }

    else {
        wrongLetters.push(letter);
        guessesLeft--
    }


function gameOver() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left:" + numGuesses);

    
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordGuess").innerHTML = blanksForGuesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
    
    if (wordLetters.toString() == blanksForGuesses.toString()) {
        winCount++;
        alert("Winner");

        document.getElementById("winCount").innerHTML = winCount;

        startGame();
    }

    else if (guessesLeft = 0) {
        lossCount++;
        alert("You Lose!");

        document.getElementById("lossCount").innerHTML = lossCount;

        startGame();

    }
}

startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(lettersGuessed);
    gameOver();
    }

};

//2. update letters
//3. Make spaces for the random word Letters
//4. remainingLetters = randomWord.length
//5. Get a guess from player
//6. Update Game state based on player guess
//7. user guesses correctly
//8. User guesses incorrectly
//9. User win