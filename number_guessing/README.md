Live Link: https://number-guessing-fia.vercel.app/

# Number Guessing Game

## HTML Structure

### Head Section
- `<meta charset="utf-8" />`: Sets the character encoding for the webpage.
- `<title>Number guessing game</title>`: Sets the title of the webpage displayed in the browser tab.
- `<link rel="stylesheet" href="styles.css" />`: Links to an external CSS file to style the webpage.

### Body Section
- `<h1>Number guessing game</h1>`: Displays the main heading of the webpage.
- `<p>`: Provides instructions for the game.
- `<div class="form">`: Contains a form for users to input their guesses.
  - `<label for="guessField">Enter a guess: </label>`: Label for the guess input field.
  - `<input type="number" min="1" max="100" required id="guessField" class="guessField" />`: Input field for the user's guess.
  - `<input type="submit" value="Submit guess" class="guessSubmit" />`: Submit button for the guess.
- `<div class="resultParas">`: Contains paragraphs to display game results.
  - `<p class="guesses"></p>`: Displays the previous guesses.
  - `<p class="lastResult"></p>`: Displays the result of the last guess.
  - `<p class="lowOrHi"></p>`: Displays whether the last guess was too high or too low.

## JavaScript

- `let randomNumber = Math.floor(Math.random() * 100) + 1;`: Generates a random number between 1 and 100.
  
### Variables
- `guesses`, `lastResult`, `lowOrHi`: Selects elements from the HTML to display game information.
- `guessCount`: Tracks the number of guesses.
- `resetButton`: Holds the reset button element.

### Functions
- `checkGuess()`: Checks the user's guess against the random number and updates the game status.
- `setGameOver()`: Disables input fields and creates a reset button when the game ends.
- `resetGame()`: Resets the game to its initial state.

### Event Listeners
- `guessSubmit.addEventListener("click", checkGuess);`: Listens for a click on the submit button to check the guess.

## CSS

### Styles
- `html`: Sets the font family for the entire webpage.
- `body`: Sets the width and margin for the body of the webpage.
- `.form input[type="number"]`: Styles the guess input field.
- `.lastResult`: Styles the result text displayed after each guess.
