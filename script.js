let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let gameOver = false;

function checkGuess() {
  if (gameOver) return;

  const userGuess = parseInt(document.getElementById('userGuess').value);
  const messageDiv = document.getElementById('message');

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    messageDiv.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  guessCount++;

  if (userGuess < randomNumber) {
    messageDiv.textContent = `Too low! Attempts: ${guessCount}`;
  } else if (userGuess > randomNumber) {
    messageDiv.textContent = `Too high! Attempts: ${guessCount}`;
  } else {
    messageDiv.textContent = `🎉 Congratulations! You guessed it right in ${guessCount} attempts.`;
    gameOver = true;
  }
}
