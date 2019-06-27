// Define Variables

var bunnyTypes = ["holland lop", "eastern cotton tail", "lionhead rabbit", "dutch rabbit", "english lob", "french lop", "mini rex", "netherland dwarf", "american fuzzy", "polish rabbit"]; //https://rabbitpedia.com/rabbit-breeds/ for pictures later
var dashes = [];
var bunnyAnswer = [];
var userGuesses = [];
var emptyspace = "";
var guessLetter;

// Define text related javascript
var letterDisplay = document.getElementById("word-text");
var usedLetterDisplay = document.getElementById("used_Letter-text");


// Define Functions

//Prints out the guessed used letters
function usedLetters(item) {
    usedLetterDisplay.textContent += item + ", ";
}

//Prints out the correct guess letters of the guess word


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


//User enters a letter and computer stores a letter
document.onkeyup = function (event) {
    guessLetter = event.key;
    console.log(guessLetter);

    //Computer checkes to see if that letter has already been used


    //If letter has been used, does NOT count the tries

    if (userGuesses.indexOf(guessLetter) != -1) {
        alert("You already used this letter! Try again.");
    }

    //If letter has NOT been used, computer determines if it's in the word or not
    else if (userGuesses.indexOf(guessLetter) == -1) {
        userGuesses.push(guessLetter);

        //FUNCTION TO SHOW USED LETTERS
        usedLetterDisplay.textContent = "Your used letters are: ";
        userGuesses.forEach(usedLetters);

        //checks to see if its in the Answer array
        if (userGuesses.indexOf(dashes) != -1){
            

        }



    }


    //When user wins, increase the win count by one
    //When loser runs out of try counts, resets the try counter and displays the word
    //Bonus? Change images based on what the word is?

}