//1. Pick Array of Words
var wordBank = ["kendrick lamar", "logic", "ice cube", "dr dre", "dave east",
"nas", "trae the truth","future", "notorious big", "the game", "snoop dogg",
"eminem", "kanye west", "tupac shakur", "drake", "rakim", "big sean", "slick rick",
"j cole", "busta rhymes", "common", "scarface", "bun b", "pimp c", "donald glover"];

var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
var randomWord;

//2. Pick a Random Word

var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randomWord)




var updateGuessesLeft = function () {
    document.querySelector('#letters-guessed').innerHTML = "Letters Guessed: " + userGuesses.join(', ')
}

var answerArray = [];
for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
}


document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase()

    document.querySelector("#wordIs").innerHTML = answerArray;

if (randomWord.indexOf(userGuess) == -1)  {
    guessesLeft--;
    document.querySelector('#guessesLeft').textContent(appendChild)


//update letters

for (var i = 0; i < randomWord.length; i++)
;



//3. Make spaces for the random word Letters


//var remainingLetters = randomWord.length;
//4. Get a guess from player

//5. Update Game state based on player guess
//6. user guesses correctly
//7. User guesses incorrectly
//8. User Wins
//9. User Losses