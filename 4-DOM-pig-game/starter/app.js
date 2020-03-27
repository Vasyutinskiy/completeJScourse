/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

3. Add another dice to the game, so that there are two dices now. The player looses his current score 
when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the 
    CSS code for the first one.)

// Additional content(as an examples)
// Random dice choice for each case
// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// manipulation with DOM

// textContent - put's as a plain text
// document.querySelector('#current-' + activePlayer).textContent = dice;
// innerHTML - put's content as a html elem
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// let x = document.querySelector('.player-score').textContent;
// console.log(x);

// function btn() {
//     // do smth
// }
// btn();

// btn - here is a great example of callback func usage here!!!!EVListener wil called this fnction
// document.querySelector('btn-roll').addEventListener('click', btn);


*/
let scores, roundScore, winValue, activePlayer, gamePlaying;
// gamePlaying - state variable!!!

// init function call!!!
init();

// HERE IS EXAMPLE OF ANONYMUS CALLBACK FUNC and used only in this CONTEXT!!!
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
        // 1. Random number

        // REBUILD INTO THE FUNCTION!!!!
        let diceFirst = Math.floor(Math.random() * 6) + 1;
        let newDiceFirst = Math.floor(Math.random() * 6) + 1;

        let diceSecond = Math.floor(Math.random() * 6) + 1;
        let newDiceSecond = Math.floor(Math.random() * 6) + 1;

        // 2. Display Result
        let diceDOMfirst = document.querySelector('.dice-0');
        diceDOMfirst.style.display = 'block';
        diceDOMfirst.src = 'dice-' + diceFirst + '.png';

        let diceDOMsecond = document.querySelector('.dice-1');
        diceDOMsecond.style.display = 'block';
        diceDOMsecond.src = 'dice-' + diceSecond + '.png';

        if(((diceFirst === 6) && (newDiceFirst === 6)) || ((diceSecond === 6) && (newDiceSecond === 6))){
            // debugger;
            // If prev and new dice === 6
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }

        // 3. Update the round score IF the rolled number was NOT a 1(because of rules)
        if(diceFirst !== 1 || diceSecond !== 1) {
            // Add score
            roundScore += diceFirst + diceSecond;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else {
            // Next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
        // Add current score to user global score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if(scores[activePlayer] >= winValue) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice-0').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.winScore-cover').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else {
            // Next player
            nextPlayer();
        }
    }
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        // set roundScore in UI to 0
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice-0').style.display = 'none';
        document.querySelector('.dice-1').style.display = 'none';
}

// New game action(just passed function, don't call!!!)
document.querySelector('.btn-new').addEventListener('click', init);


// Initialization function(write in the beginning!!!)
function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    // Set winValue
    document.querySelector('#winScore').addEventListener('change', function(){
        winValue = document.getElementById('winScore').value;

        if(winValue !== undefined && winValue > 0){
            gamePlaying = true;
        }else {
            gamePlaying = false;
        }
    });

    // Hide it by default in the beginning
    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
    // show in the beginning
    document.querySelector('.winScore-cover').style.display = 'block';

    // faster than querySelector but for exact elements
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('winScore').value = '';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    // first remove to check all clean
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    // add active class
    document.querySelector('.player-0-panel').classList.add('active');
};




















