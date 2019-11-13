# Hare Raising Word Guess

This [website](https://ddiongzon001.github.io/Word_Guess_Game/) is a responsive, quick, and fun timed quiz game about cartoon rabbits.

One page website where the user has to guess the name of the type of rabbit that appears in the image.

![wholepage](assets/images/wholepage.png)

## Technologies used and why
* HTML - main language to build the portfolio page
* CCS - main language to design and format the page
* [Bootstrap](https://getbootstrap.com/) - open-source library to make the website resposive & add buttons
* [Google Font](https://fonts.google.com/) - open-source library of 900+ fonts free to use

## Snippets of Code

The core variables for the code are mostly arrays:
* `bunnyTypes`: the whole list of all the different kinds of rabbits in the program
* `bunnyImages`: the whole list of all the pictures of each rabbit
* `dashes`: after a bunny is randomly selected, the array will populate with the correct number of dashes and spaces in each index
* `bunnyAnswer`: after a bunny is randomly selected, the array will populate with the correct letters and spaces in each index
* `userGuesses`: this array will populate for each key a user enters to guess the bunny type

```javascript
var bunnyTypes = ["american fuzzy", "dutch rabbit", "english lop", "flemish giant", "french lop", "holland lop", "lionhead rabbit", "mini rex", "netherland dwarf", "polish rabbit"]; 
var bunnyImages = ['../Word_Guess_Game/assets/images/american-fuzzy-lop.jpg', '../Word_Guess_Game/assets/images/dutch-rabbit.jpg', '../Word_Guess_Game/assets/images/english-lop.jpg', '../Word_Guess_Game/assets/images/flemish-giant.jpg', '../Word_Guess_Game/assets/images/french-lop-2.jpg','../Word_Guess_Game/assets/images/holland-lop-rabbit.jpg', '../Word_Guess_Game/assets/images/lionhead-rabbit.jpg', '../Word_Guess_Game/assets/images/mini-rex-rabbit-1.jpg', '../Word_Guess_Game/assets/images/netherland-dwarf-rabbit.jpg', '../Word_Guess_Game/assets/images/polish-rabbit.jpg'];
var dashes = [];
var bunnyAnswer = [];
var userGuesses = [];
```
-----

After the computer randomly selects a bunny from the default list, it goes through a for loop depending on how long the word is and fills the dashes array with either a _ or a space.

```javascript
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
```

MIT © [Dealan](https://ddiongzon001.github.io/)
