// Define Variables

var bunnyTypes = ["holland lop", "eastern cotton tail", "lionhead rabbit", "dutch rabbit", "english lob", "french lop", "mini rex", "netherland dwarf", "american fuzzy", "polish rabbit"]; //https://rabbitpedia.com/rabbit-breeds/ for pictures later
var dashes = [];
var bunnyAnswer = [];
var userGuesses = [];
var guessCount = 10;
var guessLetter;

// Define text related javascript
var directionDisplay = document.getElementById("directions-text");
var letterDisplay = document.getElementById("word-text");
var guessCountDisplay = document.getElementById("guess_Count-text");
var usedLetterDisplay = document.getElementById("used_Letter-text");
var againDisplay = document.getElementById("again-text");


// Define Functions

//Prints out the guessed used letters
function usedLetters(item) {
    usedLetterDisplay.textContent += item + ", ";
}


// Main Section of Game

//Computer randomly picks a type of rabbit from the array
var randomWordAddress = Math.floor(Math.random() * bunnyTypes.length);
console.log(randomWordAddress);
console.log(bunnyTypes[0].length);

//Computer displays the word in this format _ _ _ _ _ _ _
for (var i = 0; i < bunnyTypes[randomWordAddress].length; i++) {

    //checks to see if the letter is a space or word        
    if (bunnyTypes[randomWordAddress].charAt(i) == ' ') {
        dashes[i] = " ";
        // console.log(dashes[i]);
    } else {
        dashes[i] = "_";
        // console.log(dashes[i]);
    }

    //Assigns the answer into an array
    bunnyAnswer[i] = bunnyTypes[randomWordAddress].charAt(i);
    console.log(bunnyAnswer[i] = bunnyTypes[randomWordAddress].charAt(i));

    //Displays the _'s on the html
    letterDisplay.innerHTML += dashes[i] + "&nbsp;";

}

//Displays the directions
directionDisplay.textContent = "Guess the type of rabbit! Guess until you're out of guess! Good luck!";
//Displays the guess count
guessCountDisplay.textContent = "Your guess count is: " + guessCount;


//User enters a letter and computer stores a letter
document.onkeyup = function (event) {
    guessLetter = event.key;
    console.log(guessLetter);
    directionDisplay.textContent = "";

    if (guessLetter == 1) {
        guessCount = 10;
        letterDisplay.innerHTML = "";
        usedLetterDisplay.textContent = "";
        dashes = [];
        bunnyAnswer = [];
        userGuesses = [];

        randomWordAddress = Math.floor(Math.random() * bunnyTypes.length);
        console.log(randomWordAddress);
        console.log(bunnyTypes[0].length);

        //Computer displays the word in this format _ _ _ _ _ _ _
        for (var i = 0; i < bunnyTypes[randomWordAddress].length; i++) {

            //checks to see if the letter is a space or word        
            if (bunnyTypes[randomWordAddress].charAt(i) == ' ') {
                dashes[i] = " ";
                // console.log(dashes[i]);
            } else {
                dashes[i] = "_";
                // console.log(dashes[i]);
            }

            //Assigns the answer into an array
            bunnyAnswer[i] = bunnyTypes[randomWordAddress].charAt(i);
            console.log(bunnyAnswer[i] = bunnyTypes[randomWordAddress].charAt(i));

            //Displays the _'s on the html
            letterDisplay.innerHTML += dashes[i] + "&nbsp;";

        }

        //Displays the directions
        directionDisplay.textContent = "Guess the type of rabbit! Guess until you're out of guess! Good luck!";
        //Displays the guess count
        guessCountDisplay.textContent = "Your guess count is: " + guessCount;

    }
    //Computer checkes to see if that letter has already been used


    //If letter has been used, does NOT count the tries

    else if (userGuesses.indexOf(guessLetter) != -1) {
        alert("You already used this letter! Try again.");
    }

    //If letter has NOT been used, computer determines if it's in the word or not
    else if (userGuesses.indexOf(guessLetter) == -1 && guessCount > 0) {
        userGuesses.push(guessLetter);


        //FUNCTION TO SHOW USED LETTERS
        usedLetterDisplay.textContent = "Your used letters are: ";
        userGuesses.forEach(usedLetters);

        //checks to see if its in the Answer array
        if (bunnyAnswer.indexOf(guessLetter) != -1) {

            for (var i = 0; i < bunnyAnswer.length; i++) {
                if (bunnyAnswer[i] === guessLetter) {
                    dashes[i] = guessLetter;
                }
            }

        } else {
            guessCount = guessCount - 1;

            guessCountDisplay.textContent = "";
            guessCountDisplay.textContent = "Your guess count is: " + guessCount;

        }

        //erases all the dashes
        letterDisplay.innerHTML = "";

        //displays the new guessed letters
        for (var i = 0; i < bunnyAnswer.length; i++) {
            letterDisplay.innerHTML += dashes[i] + "&nbsp;";
        }
    }


    //when the guess counter goes to 0, answer will display
    if (guessCount === 0) {
        //erases all the dashes
        letterDisplay.innerHTML = "";

        //displays the new guessed letters
        for (var i = 0; i < bunnyAnswer.length; i++) {
            letterDisplay.innerHTML += bunnyAnswer[i] + "&nbsp;";
        }

        againDisplay.textContent = "Play again? Press 1."
    }

    
}