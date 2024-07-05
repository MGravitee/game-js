"use strict";

//!ask Randy about hitting enter key on closing the pop-up and the text input at the same time.

// Grabbing HTML elements --------------------->

// audio on pageload - sorry  ;)

document.addEventListener("mouseenter", playThemeSong);

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

//Countdown timer

const mainTimer = document.getElementById("count-down-main");
const timerTextElem = document.getElementById("time-main");

//Answer text box

const answerInput = document.getElementById("answer-box");

// Endgame text output

const endGameScore = document.getElementById("game-end-txt-output");

// Buttons

const startGameBtn = document.getElementById("start-game-btn");
const showHintBtn = document.getElementById("get-hint-btn");
const newPokemonBtn = document.getElementById("new-word-btn");
const checkAnswerBtn = document.getElementById("check-answer-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const quitBtn = document.getElementById("quit-btn");

// start game function

function startGame() {
    startScreen.classList.add("hide");
    scoreBoardElem.classList.remove("hide");
    gameScreen.classList.remove("hide");
    stopAudio(themeSongAudio, 0);
    playAudio(whosThatAudio, 0.5);
    playStartGameAudioDelayed();
    startMainTimer();
    grabWord();
}

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

let hintOne;
let hintTwo;
let hintThree;

let currentHintIndex = 0;
let hints = [];

// for hint cooldown so you can't spam the button

let hintCoolDown = false;
const hintCoolDownDuration = 4000;

// showHint function

// function showHint() {
//     if (hints.length === 0) {
//         // No more hints available, keep the button disabled
//         console.log('No more hints available.');
//         showHintBtn.disabled = true;
//         showHintBtn.classList.add ("cool-down");
//         return;
//     }

//     // Display the next hint
//     const nextHint = hints.shift();
//     const hintPopUp = document.createElement("div");
//         hintPopUp.classList.add("hint-popup", "slide-in");
//         hintPopUp.innerHTML = `<h2>${nextHint}</h2>`;
//         console.log(nextHint);
//         hintPopUp.addEventListener("animationend", () => {
//             hintPopUp.remove();
//         });
//         setTimeout(() => {
//             hintPopUp.remove();
//         }, 6000);
//         hintOverlay.append(hintPopUp);
//         playAudio(pokeBallAudio, 0.5); // playing hint sound

//          // Disable the button
//         showHintBtn.disabled = true;
//         showHintBtn.classList.add ("cool-down");
//     // Re-enable the button after 6 seconds if there are more hints
//     if (hints.length > 0) {
//         setTimeout(() => {
//             showHintBtn.disabled = false;
//         }, 6000);
//     }
// };

 function showHint () {
    debugger
    if (hints.length === 0) {
        showHintBtn.classList.add("disabled");
        showHintBtn.classList.add("cool-down");
    }
    if (hintCoolDown) {
        return;
    }
    const nextHint = hints.shift();
    console.log(hints);

    if (nextHint) {
        const hintPopUp = document.createElement("div");
        hintPopUp.classList.add("hint-popup", "slide-in");
        hintPopUp.innerHTML = `<h2>${nextHint}</h2>`;
        console.log(nextHint);
        hintPopUp.addEventListener("animationend", () => {
            hintPopUp.remove();
        });
        setTimeout(() => {
            hintPopUp.remove();
        }, 6000);
        hintOverlay.append(hintPopUp);
        playAudio(pokeBallAudio, 0.5); // playing hint sound

        // Set the cooldown flag to true
        hintCoolDown = true;
        showHintBtn.classList.add("disabled"); // this may be unecessary but doing it anyway
        showHintBtn.classList.add("cool-down");
        // Reset the cooldown flag after the cooldown duration
        if (hints.length === 0) {
            return;
        } else {
            setTimeout(() => {
                hintCoolDown = false;
                showHintBtn.classList.remove("disabled");
                showHintBtn.classList.remove("cool-down");
            }, hintCoolDownDuration);
        }
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

function countDown() {
    // console.log(timeLeft);
    if (timeLeft == 0) {
        clearInterval(timerInterval);
        gameEnd();
    }
    if (timeLeft > 0) {
        timeLeft--;
        mainTimer.innerHTML = `${timeLeft} seconds`;
    }
    if (timeLeft <= 30) {
        mainTimer.style.color = "#ffcb05";
    }
    if (timeLeft <= 10) {
        // timerTextElem.style.fontSize = "3rem";
        mainTimer.style.color = "#ff0000";
    }
}

//  this should be to start the timer

function startMainTimer(duration) {
    timeLeft = duration;
    mainTimer.innerHTML = `${timeLeft} seconds`;
    timerInterval = setInterval(countDown, 1000);
}

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
    // Getting random pokemon object out of pokemonList array of objects
    randomWord = pokemonList[Math.floor(Math.random() * pokemonList.length)];

    // Splitting each letter of the name property from object
    shuffleAgain(randomWord);

    // resetting the hints array to 0 so that hints from previous pokemon are discarded before new ones are pushed
    hintCoolDown = false;
    showHintBtn.classList.remove("disabled");
    showHintBtn.classList.remove("cool-down");
    hints = [];

    // grabbing hint properties from randomWord and pushing them into hints array at top of file for cooldown function

    hintOne = randomWord.hint1;
    hints.push(hintOne);
    hintTwo = randomWord.hint2;
    hints.push(hintTwo);
    hintThree = randomWord.hint3;
    hints.push(hintThree);

    currentHintIndex = 0;

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
    if (!playerAnswer) {
        playAudio(noAnswerAudio, 0.5);
        return createPopup("Sorry!", "Please enter a Pokémon name to check!");

        //want to throw an alert saying that the answer wrong if, need the strict ineqality operator to make sure it's a string and only a string
    }
    if (playerAnswer !== correctAnswer) {
        playAudio(wrongAnswerAudio, 0.5);
        return (
            createPopup(
                "Sorry",
                `${playerAnswer} is not the right Pokémon! Try again!`
            ),
            (answerInput.value = "")
        );
        // else the answer is correct, yay!
    } else {
        playAudio(rightAnswerAudio, 0.5);
        createPopup(
            "Yay! You got it!",
            `${playerAnswer.toUpperCase()} is the right Pokémon! Keep going to catch them all!`
        );
        //get point value out of the randomWord object and add it to the players points total
        player.points += randomWord.points;
        //add it to the players points html elem
        playerPointsElem.innerText = player.points;
        grabWord();
    }
};

function gameEnd() {
    gameScreen.classList.add("hide");
    scoreBoardElem.classList.add("hide");
    gameEndScreen.classList.remove("hide");
    stopAudio(startGameAudio, 0);
    getScore();
}

function getScore() {
    if (player.points >= 1) {
        playAudio(victoryAudio, 0.5);
        endGameScore.innerText = `Congrats! You got ${player.points} answers right!`;
    } else {
        playAudio(loseAudio, 0.5);
        endGameScore.innerText =
            "Oh no, you didn't get any answers right, better luck next time!";
    }
}

function playAgain() {
    window.location.reload();
}

function quitGame() {
    close();
}

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

answerInput.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        //checks whether the pressed key is "Enter"
        checkAnswer();
    }
});

shuffleBtn.addEventListener("click", () => {
    shuffleAgain(randomWord);
    playAudio(shuffleAudio, 0.5);
});
showHintBtn.addEventListener("click", showHint);
playAgainBtn.addEventListener("click", playAgain);
quitBtn.addEventListener("click", quitGame);

// Popup functions

function createPopup(heading, message) {
    const popUp = document.createElement("div");
    popUp.className = "popup";
    // heading is h2
    const h2 = document.createElement("h2");
    h2.innerHTML = heading;
    const messageElem = document.createElement("p");
    messageElem.innerHTML = message;
    popUp.appendChild(h2);
    popUp.appendChild(messageElem);

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "Close";
    closeButton.addEventListener("click", function () {
        popUp.style.opacity = 0;
        setTimeout(function () {
            answerInput.focus();
            popUp.remove();
        }, 500);
        closeButton.addEventListener("keydown", function (e) {
            //checks if Enter is pressed
            if (e.code === "Enter") {
                popUp.style.opacity = 0;
                setTimeout(function () {
                    answerInput.focus();
                    popUp.remove();
                }, 500);
            }
        });
    });
    popUp.appendChild(closeButton);

    document.body.appendChild(popUp);
    setTimeout(function () {
        popUp.style.opacity = 1;
        closeButton.focus();
    }, 100);
}

// closeButton.addEventListener("keydown", function (event) {
//     if(event.key === "Enter") {    popup.style.opacity = 0;
//         setTimeout(function () {
//             popup.remove();
//         }, 1000);
//     }});

// Audio ------------------------>

// Audio HTML elements (made more sense to keep these together)

const themeSongAudio = document.getElementById("theme-song-audio");
const whosThatAudio = document.getElementById("whos-that-audio");
const startGameAudio = document.getElementById("start-game-audio");
const pokeBallAudio = document.getElementById("pokeball-audio");
const victoryAudio = document.getElementById("victory-audio");
const loseAudio = document.getElementById("lose-audio");
const shuffleAudio = document.getElementById("shuffle-audio");
const rightAnswerAudio = document.getElementById("right-answer-audio");
const wrongAnswerAudio = document.getElementById("wrong-answer-audio");
const noAnswerAudio = document.getElementById("no-answer-audio");

// Audio functions

// helper function to play audio with specified source instead of having a hard coded function for each audio files

function playAudio(audioElement, volume = 1.0) {
    audioElement.currentTime = 0; // Rewind to the beginning
    audioElement.play(); // Play the audio
}

function stopAudio(audioElement, volume = 1.0) {
    audioElement.pause(); // pause the audio
}

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
    }, 2000);
}

function playPokeBallAudio() {
    pokeBallAudio.volume = 0.5;
    pokeBallAudio.play();
}
function playShuffleAudio() {
    shuffleAudio.volume = 0.5;
    shuffleAudio.play();
}

function playEndGameAudio() {
    startGameAudio.pause();
}

// playThemeSong();
