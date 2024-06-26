"use strict";

// Grabbing HTML elements --------------------->

// audio on pageload - sorry  ;)

// document.addEventListener('DOMContentLoaded', playThemeSong);

//game screens

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-container");
const gameEndScreen = document.getElementById("game-end-screen");

// Scoreboard

const scoreBoardElem = document.getElementById("score-board");
const playerPointsElem = document.getElementById("player-points-output");

// Word to solve

const displayedShuffledLetters = document.getElementById(
    "word-to-solve-output"
);

//Hint containers

const hintOverlay = document.getElementById("hint-overlay");

// const hiddenHintOne = document.getElementById("hint-1");
// const hiddenHintTwo = document.getElementById("hint-2");
// const hiddenHintThree = document.getElementById("hint-3");

// Hints

// const hintOne = document.querySelector(".hint-1-output");
// const hintTwo = document.querySelector(".hint-2-output");
// const hintThree = document.querySelector(".hint-3-output");

//Countdown timer

const mainTimer = document.getElementById("count-down-main");

//Answer text box

const answerInput = document.getElementById("answer-box");

// Endgame text output

//ountdown timer
const endGameScore = document.getElementById("game-end-txt-output");

//buttons

const startGameBtn = document.getElementById("start-game-btn");
const showHintBtn = document.getElementById("get-hint-btn");
const newPokemonBtn = document.getElementById("new-word-btn");
const checkAnswerBtn = document.getElementById("check-answer-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const playAgainBtn = document.getElementById("play-again-btn");

// start game function

const startGame = function () {
    startScreen.classList.add("hide");
    scoreBoardElem.classList.remove("hide");
    gameScreen.classList.remove("hide");
    playWhosThatAudio();
    playStartGameAudioDelayed();
    //!!! startMainTimer(60);
    grabWord();
};

// player object (literally just for tracking points)

const player = {
    points: 0,
};

// variables we need for the game
//like the cat assignment, need to declare a variables that is empty/has no value

let correctAnswer;

// letterArray needs to be defined empty out here for scope otherwise shuffle letters button won't work
let letterArray = [];

// randomWord needs to be defined empty out here for scope otherwise can't grab matching hints from the right object in pokelist array
let randomWord;




//variables for showHint function

let hintOne
let hintTwo
let hintThree

let currentHintIndex = 0;
const hints = [];

// for hint cooldown so you can't spam the button
let hintCoolDown = false;
const hintCoolDownDuration = 4000;

// showHint function

const showHint = function () {
  if (hintCoolDown) {
    return;
  }

const hint = hints.shift();
console.log(hints);
  if (hint) {
    const playerPopUp = document.createElement("div");
    playerPopUp.classList.add("player-popup", "pop-in");
    playerPopUp.innerHTML = `<h2>${hint}</h2>`;
    console.log(hint);
      playerPopUp.addEventListener("animationend", () => {
      playerPopUp.remove();
    });
    setTimeout(() => {
      playerPopUp.remove();
    }, 6000);
    hintOverlay.append(playerPopUp);
    playPokeBallAudio(); // Play hint sound 

   // Set the cooldown flag to true
    hintCoolDown = true;
    showHintBtn.classList.add('disabled'); // this may be unecessary but doing it anyway
    showHintBtn.classList.add("cool-down");
    // Reset the cooldown flag after the cooldown duration
    setTimeout(() => {
      hintCoolDown = false;
      showHintBtn.classList.remove('disabled');
      showHintBtn.classList.remove("cool-down"); 
    }, hintCoolDownDuration);
}
};

// const showHint = function () {
//     if (hintCoolDown) {
//         return;
//     }

//     playPokeBallAudio();
//     if (currentHintIndex < hints.length) {
//         hints[currentHintIndex].style.opacity = "1";
//         currentHintIndex++;
//     }
//     hintCoolDown = true;

//     showHintBtn.classList.add("disabled");
//     showHintBtn.classList.add("cool-down");
//     setTimeout(() => {
//         hintCoolDown = false;
//         showHintBtn.classList.remove("disabled");
//         showHintBtn.classList.remove("cool-down");
//     }, hintCoolDownDuration);
// };

// variables for timer function

let timerInterval;
let timeLeft;

//  this should be to keep track of a countdown

const countDown = function () {
    console.log(timeLeft);
    if (timeLeft > 0) {
        timeLeft--;
        mainTimer.innerHTML = `${timeLeft} seconds`;
    } else {
        //!!! gameEnd();
    }
};

//  this should be to start the timer

const startMainTimer = function (duration) {
    timeLeft = duration;
    mainTimer.innerHTML = `${timeLeft} seconds`;
    timerInterval = setInterval(countDown, 1000);
};

// Function to shuffle letters

const shuffleLetters = function (array) {
    for (let index = array.length - 1; index > 0; index--) {
        let newIndex = Math.floor(Math.random() * (index + 1));
        // Swap elements using temporary variable
        let temp = array[index];
        array[index] = array[newIndex];
        array[newIndex] = temp;
    }
    return array;
};

//function for shuffle letters button

function shuffleAgain(word) {
    letterArray = word.name.split("");
    // calling shuffle function to shuffle them
    // shuffleLetters(letterArray);
    letterArray = shuffleLetters(letterArray);

    // Joining shuffled array of letters back together
    displayedShuffledLetters.innerText = letterArray.join("");
}

// function to grabWord from pokemonList array
const grabWord = function () {
    //playing audio on game start
    // playstartGameAudio();

    // Getting random pokemon object out of pokemonList array of objects
    randomWord = pokemonList[Math.floor(Math.random() * pokemonList.length)];

    // Splitting each letter of the name property from object
    shuffleAgain(randomWord);

    // grabbing hint properties from randomWord and pushing them into hints array at top of file for cooldown function
    
    hintOne = randomWord.hint1;
    hints.push(hintOne);
    hintTwo = randomWord.hint2;
    hints.push(hintTwo);
    hintThree = randomWord.hint3;
    hints.push(hintThree);
  
    
    // hintOne.innerText = randomWord.hint1;
    // hintTwo.innerText = randomWord.hint2;
    // hintThree.innerText = randomWord.hint3;

    // // Resetting the hints and input field
    // hiddenHintOne.style.opacity = "0";
    // hiddenHintTwo.style.opacity = "0";
    // hiddenHintThree.style.opacity = "0";
    // currentHintIndex = 0;

    // Need to check the answer by checking the name object
    correctAnswer = randomWord.name.toLowerCase();

    // Resetting the input field after an answer is given
    answerInput.value = "";

    console.log(randomWord);
};

const checkAnswer = function () {
    // this is to check if the typed value is the correct answer
    let playerAnswer = answerInput.value.toLowerCase();
    // oh man finding the lowercase method was awesome but also super annoying

    //this is thrown if the player leaves the field blank - bang operator and falsey value was super helpful here, spent along trying other stuff
    if (!playerAnswer)
        return createPopup("Sorry!", "Please enter a Pokémon name to check!");

    //want to throw an alert saying that the answer wrong if, need the strict ineqality operator to make sure it's a string and only a string
    if (playerAnswer !== correctAnswer) {
        return (
            createPopup(
                "Sorry",
                `${playerAnswer} is not the right Pokémon! Try again!`
            ),
            (answerInput.value = "")
        );
        // else the answer is correct, yay!
    } else {
        createPopup(
            "Yay! You got it!",
            `${playerAnswer.toUpperCase()} is the right Pokémon! Keep going to catch them all!`
        );
        //get point value money out of the randomWord o, and add it to the players points total
        player.points += randomWord.points;
        //add it to the players points html elem
        playerPointsElem.innerText = player.points;
        grabWord();
    }
};

const gameEnd = function () {
    gameScreen.classList.add("hide");
    gameEndScreen.classList.remove("hide");
    playEndGameAudio();
};

const playAgain = function () {
    window.location.reload();
};

// function to display hints via setTimeout

// const revealHints = function () {

//   setTimeout(() => {
//     hiddenHintOne.style.opacity = "1";
//   }, 3000); // Display the first hint after 3 second

//   setTimeout(() => {
//       hiddenHintTwo.style.opacity = "1";
//   }, 6000); // Display the second hint after 6 seconds

//   setTimeout(() => {
//       hiddenHintThree.style.opacity = "1";
//   }, 9000); // Display the third hint after 9 seconds
// };

//function to display hints

// getHint = function () {
//   hiddenHintOne.style.display = "block";
// }

//event listeners

startGameBtn.addEventListener("click", startGame);
newPokemonBtn.addEventListener("click", grabWord);
checkAnswerBtn.addEventListener("click", checkAnswer);
shuffleBtn.addEventListener("click", () => {
    shuffleAgain(randomWord);
});
showHintBtn.addEventListener("click", showHint);
playAgainBtn.addEventListener("click", playAgain);

// Popup functions

function createPopup(heading, message) {
    const popup = document.createElement("div");
    popup.className = "popup";
    // heading is h2
    const h2 = document.createElement("h2");
    h2.innerHTML = heading;
    const messageElem = document.createElement("p");
    messageElem.innerHTML = message;
    popup.appendChild(h2);
    popup.appendChild(messageElem);

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "Close";
    closeButton.addEventListener("click", function () {
        popup.style.opacity = 0;
        setTimeout(function () {
            popup.remove();
        }, 1000);
    });
    popup.appendChild(closeButton);

    document.body.appendChild(popup);
    setTimeout(function () {
        popup.style.opacity = 1;
    }, 100);
}

// Audio ------------------------>

// Audio HTML elements (made more sense to keep these together)

const themeSongAudio = document.getElementById("theme-song-audio");
const whosThatAudio = document.getElementById("whos-that-audio");
const startGameAudio = document.getElementById("start-game-audio");
const pokeBallAudio = document.getElementById("pokeball-audio");
const endGameAudio = document.getElementById("game-end-audio");

// Audio functions

function playThemeSong() {
    themeSongAudio.volume = 0.5;
    themeSongAudio.play();
}

function playWhosThatAudio() {
    whosThatAudio.volume = 0.5;
    whosThatAudio.play();
}

function playStartGameAudioDelayed() {
    setTimeout(() => {
        startGameAudio.volume = 0.5;
        startGameAudio.loop = true;
        startGameAudio.play();
    }, 3000);
}

function playPokeBallAudio() {
    pokeBallAudio.volume = 0.5;
    pokeBallAudio.play();
}

function playEndGameAudio() {
    startGameAudio.pause();
    endGameAudio.play();
}

grabWord();
