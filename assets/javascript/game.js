// Define Variables

    // Regular Variables
        //Number of lives the user has to guess the word
        var guessCount = 5;

        //User's letter that they guess
        var guessLetter;

        //Stores computer's randomly generated number
        var randomWordAddress;

    // Array Variables
        //Contains all the possible guess words
        var bunnyTypes = ["american fuzzy", "dutch rabbit", "english lop", "flemish giant", "french lop", "holland lop", "lionhead rabbit", "mini rex", "netherland dwarf", "polish rabbit"];

        //Contains all the images for each guess word
        var bunnyImages = ['../Word_Guess_Game/assets/images/american-fuzzy-lop.jpg', '../Word_Guess_Game/assets/images/dutch-rabbit.jpg', '../Word_Guess_Game/assets/images/english-lop.jpg', '../Word_Guess_Game/assets/images/flemish-giant.jpg', '../Word_Guess_Game/assets/images/french-lop-2.jpg', '../Word_Guess_Game/assets/images/holland-lop-rabbit.jpg', '../Word_Guess_Game/assets/images/lionhead-rabbit.jpg', '../Word_Guess_Game/assets/images/mini-rex-rabbit-1.jpg', '../Word_Guess_Game/assets/images/netherland-dwarf-rabbit.jpg', '../Word_Guess_Game/assets/images/polish-rabbit.jpg'];

        //Contains the number of dashes and spaces depending on the guess word
        var dashes = [];

        //Contains each letter of the guess word
        var bunnyAnswer = [];

        //Contains each letter that the user guesses
        var userGuesses = [];

    // Define text related javascript
        //Displays on the page the directions and whether they win or lose
        var directionDisplay = document.getElementById("directions-text");

        //Displays on the page the dashes and correct letters
        var letterDisplay = document.getElementById("word-text");

        //Displays on the page how many lives the user has left
        var guessCountDisplay = document.getElementById("guess_Count-text");

        //Displays on the page the letters the user has guessed
        var usedLetterDisplay = document.getElementById("used_Letter-text");

        //Displays on the page when the user wins or loses
        var againDisplay = document.getElementById("again-text");

// Define Functions

    //Resets all variables
    function reset() {

        //Resets dashes, bunnyAnswer, userGuesses arrays to blank/zero, resets the guess word and puts back lives to 5
        guessCount = 5;
        directionDisplay.style.fontWeight = 'normal';
        directionDisplay.textContent = "";
        letterDisplay.style.fontSize = '30px';
        letterDisplay.innerHTML = "";
        usedLetterDisplay.textContent = "";
        againDisplay.textContent = ""

        console.log(guessCount);
    
        dashes = [];
        bunnyAnswer = [];
        userGuesses = [];

    }

    //Picks the random number
    function randomWord(){

        //Computer randomly picks a number and sets the variable randomWordAddress (which will be used for the array) and displays the rabbit's picture on the page
        randomWordAddress = Math.floor(Math.random() * bunnyTypes.length);

    }

    //Assigns all variables and arrays based off the random guess word
    function assign(){

        //Assigns the dashes and guess word in their arrays
        for (var i = 0; i < bunnyTypes[randomWordAddress].length; i++) {

            //checks to see if the letter is either a space or word        
            if (bunnyTypes[randomWordAddress].charAt(i) == ' ') {
                dashes[i] = " ";
            } 
            else {
                dashes[i] = "_";
            }

            //Assigns the guess word's letters in each index
            bunnyAnswer[i] = bunnyTypes[randomWordAddress].charAt(i);
        }

    }

    //Displays all variables, arrays and pictures on webpage
    function display(){

        //Displays the guess word's picture
        document.getElementById("rabbit-pic").src = bunnyImages[randomWordAddress];

        //Displays the directions
        directionDisplay.textContent = "Guess the type of rabbit! If you guess a wrong letter, you lose a life! Guess until you're out of chances! Good luck!";

        //Displays the guess word in dashes
        for (var i = 0; i < bunnyTypes[randomWordAddress].length; i++) {
            letterDisplay.innerHTML += dashes[i] + "&nbsp;";
        }
        
        //Displays the guess count
        guessCountDisplay.textContent = "Lives Remaining: " + guessCount;

        //Hides the button
        document.getElementById("again-text").style.visibility = 'hidden';

    }

    // Prints out the guessed used letters
    function usedLetters(item) {
        usedLetterDisplay.textContent += item + ", ";
    }

    //Checks if user wins before the guess count
    function checkWin(dash) {
        return dash != "_";
    }

    //Shows the button when the user wins or loses
    document.getElementById('')




// Main Section of Game

    //Picks random word, assigns the arrays, and displays on the page
    randomWord();
    assign();
    display();

    //User enters a letter and computer stores a letter
    document.onkeyup = function (event) {

        //Assigns the user's guess into guessLetter variable
        guessLetter = event.key;
        guessLetter = guessLetter.toLowerCase();

        //Hides the directions
        directionDisplay.textContent = "";

        if(guessLetter >= "a" && guessLetter <= "z"){

            //If letter has been used, does NOT count the tries
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
                    if (dashes.every(checkWin)) {
                        directionDisplay.style.fontWeight = 'bold';
                        directionDisplay.textContent = "YOU WIN!";
                        
                        //Asks the user if they want to play again.
                        againDisplay.style.visibility = 'visible';
                        againDisplay.textContent = "Play again?";
                        againDisplay.onclick = function () {

                            reset();
                            randomWord();
                            assign();
                            display();
                
                        }
                    }


                }

                else {
                    guessCount--;

                    guessCountDisplay.textContent = "";
                    guessCountDisplay.textContent = "Lives Remaining: " + guessCount;

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
                directionDisplay.style.fontWeight = 'bold';
                directionDisplay.textContent = "YOU LOST! Here is the answer: ";

                //displays the new guessed letters
                for (var i = 0; i < bunnyAnswer.length; i++) {
                    letterDisplay.innerHTML += bunnyAnswer[i] + "&nbsp;";
                }

                //asks the user if they want to replay again
                againDisplay.style.visibility = 'visible';
                againDisplay.textContent = "Play again?"
                againDisplay.onclick = function () {

                    reset();
                    randomWord();
                    assign();
                    display();
        
                }
            }
        }
        else{
            alert("Please guess a letter from a through z only!");
        }
    }