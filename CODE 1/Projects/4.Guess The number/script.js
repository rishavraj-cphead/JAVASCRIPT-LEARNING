let randomnumber = parseInt(Math.random() * 100 + 1);
const userinput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')
let prevGuess = [];
let numGuess = 0;

let playGame = true;
if (playGame) {
    submit.addEventListener('click', function (e) {
          const guess = parseInt(userinput.value);
        e.preventDefault()
        console.log(guess);
        validateguess(guess);
    })
}
function validateguess(guess) {
    //check for a valid value 
    if (isNaN(guess)) {
        alert('please eneter a valid number ')
    }
    else if (guess < 1) {
        alert('please eneter a valid number ')
    }
    else if (guess > 100) {
        alert('please eneter a valid number (less  than 100) ')
    }
   else {
    prevGuess.push(guess);

    if (numGuess === 9) {
        displayGuess(guess);
        displayMessage(`Game over, random number was ${randomnumber}`);
        endgame();
    }
    else {
        displayGuess(guess);
        checkguess(guess);
    }
}
}
function checkguess(guess) {
    if (guess === randomnumber) {
        displayMessage(`You guessed it right ,Horray!!`)

    }
    else if (guess < randomnumber) {
        displayMessage(`Number is tooo low`)
    }
    else if (guess > randomnumber) {
        displayMessage(`Number is tooo high`)
    }

}

function displayGuess(guess) {
    userinput.value = '';
    guessSlot.innerHTML += `${guess} , `;
    numGuess++;
    remaining.innerHTML=`${10-numGuess}`


}
function displayMessage(message) {
lowOrHi.innerHTML=`<h2> ${message}</h2>`
}

function newgame() {

    const newgamebutton = document.querySelector('#newGame');

    newgamebutton.addEventListener('click', function(e) {

        randomnumber = parseInt(Math.random() * 100 + 1);

        prevGuess = [];

        numGuess = 0;

        guessSlot.innerHTML = '';

        remaining.innerHTML = `${10 - numGuess}`;

        userinput.removeAttribute('disabled');

        startOver.removeChild(p);

        playGame = true;

    });
}
function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');

    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);

    playGame = false;
    newgame();
}

