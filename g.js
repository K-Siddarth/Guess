'use strict'

// console.log(document.querySelector('.message').textContent);
// //The below is DOM manipulation;

// document.querySelector('.message').textContent = 'Correct Number!!🥳'
//document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 34; 
// console.log(document.querySelector('.guess').value); 

//Handling Clicking event;
let secret = 1 + Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;

document.querySelector('.score').textContent = score;

// document.querySelector('.number').textContent = secret;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!⛔'
    }
    else if (guess === secret) {

        document.querySelector('.number').textContent = secret;
        document.querySelector('.message').textContent = 'Correct Number!!🥳';

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }
    else if (guess !== secret) {
        if (score > 1) {
            document.querySelector('.number').textContent = '?';
            document.querySelector('.message').textContent = (guess > secret) ? 'Too High !📈' : 'Too Low !📉'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            score = 0;
            document.querySelector('.number').textContent = secret;
            document.querySelector('.message').textContent = '💥 You lost the game';
            document.querySelector('.score').textContent = score;
        }
    }
    
});

document.querySelector('.again').addEventListener('click', function () {
    secret = 1 + Math.trunc(Math.random() * 20);
    highScore = (highScore >= score) ? highScore : score;
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').width = '15rem';
});