// Define Variables

var bunnyTypes = ["american fuzzy", "dutch rabbit", "english lop", "flemish giant", "french lop", "holland lop", "lionhead rabbit", "mini rex", "netherland dwarf", "polish rabbit"]; 
var bunnyImages = ['../Word_Guess_Game/assets/images/american-fuzzy-lop.jpg', '../Word_Guess_Game/assets/images/dutch-rabbit.jpg', '../Word_Guess_Game/assets/images/english-lop.jpg', '../Word_Guess_Game/assets/images/flemish-giant.jpg', '../Word_Guess_Game/assets/images/french-lop-2.jpg','../Word_Guess_Game/assets/images/holland-lop-rabbit.jpg', '../Word_Guess_Game/assets/images/lionhead-rabbit.jpg', '../Word_Guess_Game/assets/images/mini-rex-rabbit-1.jpg', '../Word_Guess_Game/assets/images/netherland-dwarf-rabbit.jpg', '../Word_Guess_Game/assets/images/polish-rabbit.jpg'];
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
// var rabbitpicDisplay = document.getElementById("rabbit-pic").src;


// Define Functions

//Prints out the guessed used letters
function usedLetters(item) {
    usedLetterDisplay.textContent += item + ", ";
}

//Checks if user wins before the guess count
function checkWin(dash){
    return dash != "_";
}

//Play again button


// Main Section of Game

//Computer randomly picks a type of rabbit from the array
var randomWordAddress = Math.floor(Math.random() * bunnyTypes.length);
console.log(randomWordAddress);
console.log(bunnyTypes[0].length);

document.getElementById("rabbit-pic").src = bunnyImages[randomWordAddress];

// rabbitpicDisplay.src = bunnyImages[randomWordAddress];

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
directionDisplay.textContent = "Guess the type of rabbit! If you guess a wrong letter, you lose a life! Guess until you're out of chances! Good luck!";
//Displays the guess count
guessCountDisplay.textContent = "Your guess count is: " + guessCount;


//User enters a letter and computer stores a letter
document.onkeyup = function (event) {
    guessLetter = event.key;
    console.log(guessLetter);
    directionDisplay.textContent = "";

    //Play again?
    againDisplay.onclick = function() {
        guessCount = 10;
        letterDisplay.innerHTML = "";
        usedLetterDisplay.textContent = "";
        againDisplay.textContent = ""

        dashes = [];
        bunnyAnswer = [];
        userGuesses = [];

        randomWordAddress = Math.floor(Math.random() * bunnyTypes.length);
        console.log(randomWordAddress);
        console.log(bunnyTypes[0].length);

        document.getElementById("rabbit-pic").src = bunnyImages[randomWordAddress];

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
        directionDisplay.textContent = "Guess the type of rabbit! If you guess a wrong letter, you lose a life! Guess until you're out of chances! Good luck!";
        //Displays the guess count
        guessCountDisplay.textContent = "Your number of chances left: " + guessCount;

    }
    // if (guessLetter == 1  && guessCount == 0) {
    //     guessCount = 10;
    //     letterDisplay.innerHTML = "";
    //     usedLetterDisplay.textContent = "";
    //     againDisplay.textContent = ""

    //     dashes = [];
    //     bunnyAnswer = [];
    //     userGuesses = [];

    //     randomWordAddress = Math.floor(Math.random() * bunnyTypes.length);
    //     console.log(randomWordAddress);
    //     console.log(bunnyTypes[0].length);

    //     //Computer displays the word in this format _ _ _ _ _ _ _
    //     for (var i = 0; i < bunnyTypes[randomWordAddress].length; i++) {

    //         //checks to see if the letter is a space or word        
    //         if (bunnyTypes[randomWordAddress].charAt(i) == ' ') {
    //             dashes[i] = " ";
    //             // console.log(dashes[i]);
    //         } else {
    //             dashes[i] = "_";
    //             // console.log(dashes[i]);
    //         }

    //         //Assigns the answer into an array
    //         bunnyAnswer[i] = bunnyTypes[randomWordAddress].charAt(i);
    //         console.log(bunnyAnswer[i] = bunnyTypes[randomWordAddress].charAt(i));

    //         //Displays the _'s on the html
    //         letterDisplay.innerHTML += dashes[i] + "&nbsp;";

    //     }

    //     //Displays the directions
    //     directionDisplay.textContent = "Guess the type of rabbit! If you guess a wrong letter, you lose a life! Guess until you're out of chances! Good luck!";
    //     //Displays the guess count
    //     guessCountDisplay.textContent = "Your number of chances left: " + guessCount;

    // }


    //Computer checkes to see if that letter has already been used

    //If letter has been used, does NOT count the tries

    // else 
    if (userGuesses.indexOf(guessLetter) != -1) {
        alert("You already used the letter " + guessLetter + " Try again.");
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

            //checks to see if you win
            if(dashes.every(checkWin)){
                directionDisplay.textContent = "YOU WIN!"
                againDisplay.textContent = "Play again?"
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
        directionDisplay.textContent = "YOU LOST! Here is the answer: ";

        //displays the new guessed letters
        for (var i = 0; i < bunnyAnswer.length; i++) {
            letterDisplay.innerHTML += bunnyAnswer[i] + "&nbsp;";
        }

        againDisplay.textContent = "Play again?"
    }

    
}