// Define Variables

    var bunnyTypes = ["holland lop", "eastern cotton tail", "lionhead rabbit", "dutch rabbit", "english lob", "french lop", "mini rex", "netherland dwarf", "american fuzzy", "polish rabbit"]; //https://rabbitpedia.com/rabbit-breeds/ for pictures later
    var bunnyAnswer = [];
    var emptyspace = "";
    var guessLetter;
    var letterDisplay = document.getElementById("word-text");


// Define Functions
    function workDisplay(item){
        letterDisplay.textContent += item + " " + "."; 
    }

// Main Section of Game

    //Computer randomly picks a type of rabbit from the array
    var randomWordAddress = Math.floor(Math.random() * 10);
    console.log(randomWordAddress);
    console.log(bunnyTypes[0].length);
    
    //Computer displays the word in this format _ _ _ _ _ _ _
    for (var i=0; i < bunnyTypes[randomWordAddress].length; i++){

        //checks to see if the letter is a space or word        
        if(bunnyTypes[randomWordAddress].charAt(i)==' '){
            bunnyAnswer[i] = " ";
            console.log(bunnyAnswer[i]);
        }
        else{
            bunnyAnswer[i] = "_";
            console.log(bunnyAnswer[i]);
        }

        letterDisplay.innerHTML += bunnyAnswer[i] + "&nbsp;";

    }

    
    //User enters a letter and computer stores a letter
    // document.onkeyup = function(event){

    //Computer checkes to see if that letter has already been used
        //If letter has been used, does NOT count the tries
        //If letter has NOT been used, computer determines if it's in the word or not
    //When user wins, increase the win count by one
    //When loser runs out of try counts, resets the try counter and displays the word
    //Bonus? Change images based on what the word is?

    // }