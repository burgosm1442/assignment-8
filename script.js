// Game State Variables
var playerScore = 0;
var computerScore = 0;
var playerDice = [1, 1, 1, 1, 1];
var computerDice = [1, 1, 1, 1, 1];
var playerHold = [false, false, false, false, false];
var computerHold = [false, false, false, false, false];
var playerWins = 0;
var computerWins = 0;

// Dice Roll Function
function rollDice() {
    for (var i = 0; i < 5; i++) {
        if (computerDice[i] >= 5) {
            toggleHold(false, i);
        }
    }
    for (var i = 0; i < 5; i++) {
        if (!playerHold[i]) {
            playerDice[i] = Math.floor(Math.random() * 6) + 1;
            document.getElementById('playerDice' + i).src = 'dice' + playerDice[i] + '.png';
        }
        if (!computerHold[i]) {
            computerDice[i] = Math.floor(Math.random() * 6) + 1;
            document.getElementById('computerDice' + i).src = 'dice' + computerDice[i] + '.png';
        }
    }
    updateTotal();
}

// Hold Toggle Function
function toggleHold(player, i) {
    if (player) {
        playerHold[i] = !playerHold[i];
        var element = document.getElementById('playerDice' + i);
        if (element.classList.contains('red-border')) {
            element.classList.remove('red-border');
        } else {
            element.classList.add('red-border');
        }
    } else {
        computerHold[i] = !computerHold[i];
        var element = document.getElementById('computerDice' + i);
        if (element.classList.contains('red-border')) {
            element.classList.remove('red-border');
        } else {
            element.classList.add('red-border');
        }
    }
}

// Score Update Function
function updateTotal() {
    playerScore = playerDice.reduce((a, b) => a + b, 0);
    computerScore = computerDice.reduce((a, b) => a + b, 0);
    document.getElementById('status1').innerHTML = 'Total: ' + playerScore;
    document.getElementById('status2').innerHTML = 'Total: ' + computerScore;
    checkWin();
}

// Win Check Function
function checkWin() {
    if (playerScore === 21 || computerScore === 21) {
        document.getElementById('rollButton').disabled = true;
        if (playerScore === 21) {
            playerWins++;
            document.getElementById('status1').innerHTML += ' Player Wins!';
        } else {
            computerWins++;
            document.getElementById('status2').innerHTML += ' Computer Wins!';
        }
        document.getElementById('playerScore').innerHTML = 'Player: ' + playerWins;
        document.getElementById('computerScore').innerHTML = 'Computer: ' + computerWins;
    }
}

// Game Reset Function
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerDice = [1, 1, 1, 1, 1];
    computerDice = [1, 1, 1, 1, 1];
    playerHold = [false, false, false, false, false];
    computerHold = [false, false, false, false, false];
    document.getElementById('rollButton').disabled = false;
    for (var i = 0; i < 5; i++) {
        var playerDiceElement = document.getElementById('playerDice' + i);
        var computerDiceElement = document.getElementById('computerDice' + i);
        playerDiceElement.src = 'dice1.png';
        computerDiceElement.src = 'dice1.png';
        if (playerDiceElement.classList.contains('red-border')) {
            playerDiceElement.classList.remove('red-border');
        }
        if (computerDiceElement.classList.contains('red-border')) {
            computerDiceElement.classList.remove('red-border');
        }
    }
    updateTotal();
}
