const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');


let randomNumber = Math.floor(Math.random() * 100) + 1;   // It will generate an random number 
let attempts = 0;  // Track the number of attempts

function checkGuess() {

    const guess = parseInt(guessInput.value);  // Get user's guess and convert it to an number 
    attempts++;


if (guess === randomNumber) {

   
    message.textContent = ` Congratulations! You guessed the number im ${attempts} attempts.`;
   
   guessInput.disabled = true; //  Disable input field after correct guess
   
   
   
   
}else if (guess <  randomNumber ){
    message.textContent = ' Too low! Guess higher.';
}else {


    message.textContent = ' Too high! Guess Lower';
}


guessInput.value = ' '; // Clear the input field after each guess

}