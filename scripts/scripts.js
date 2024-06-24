// Grabbing HTML elements
  

// scoreboard

const playerPointsElem = document.getElementById("player-points-output")

// Word to solve

const displayedShuffledLetters = document.getElementById("word-to-solve-output");

//hint containers

const hiddenHintOne = document.getElementById("hint-1");
const hiddenHintTwo = document.getElementById("hint-2");
const hiddenHintThree = document.getElementById("hint-3");

// Hints 

const hintOne = document.querySelector(".hint-1-output");
const hintTwo = document.querySelector(".hint-2-output");
const hintThree = document.querySelector(".hint-3-output");

//countdown timer

const mainTimer = document.getElementById("count-down-main");

//answer box

const answerInput = document.getElementById("answer-box")

//buttons

const showHintBtn = document.getElementById("get-hint-btn");
const newPokemonBtn = document.getElementById("new-word-btn");
const checkAnswerBtn = document.getElementById("check-answer-btn");
const shuffleBtn = document.getElementById("shuffle-btn");

// variables we need for the game
//like the cat assignment, need to declare a variables that is empty/has no value

let correctAnswer;

// letterArray needs to be defined empty out here for scope otherwise shuffle letters button won't work
let letterArray = [];

// randomWord needs to be defined empty out here for scope otherwise can't grab matching hints from the right object in pokelist array
let randomWord;


//variables for showHint function

let currentHintIndex = 0
const hints = [hiddenHintOne,hiddenHintTwo, hiddenHintThree]




// player object (literally just for tracking points)

const player = {
  points: 0,
};

// showHint function

const showHint = function () {
  if (currentHintIndex < hints.length) {
    hints[currentHintIndex].style.opacity = "1";
    currentHintIndex++;
  }
  playPokeBall;
};





// variables for timer function

let timerInterval;
let timeLeft


//  this should be to keep track of a countdown

const countDown = function () {
  console.log(timeLeft);
  if (timeLeft > 0) {
    timeLeft--;
    mainTimer.innerHTML = `${timeLeft} seconds`;
  } else {
    clearInterval(timerInterval)
  }
};


//  this should be to start the timer

const startMainTimer = function (duration) {
  timeLeft = duration;
  mainTimer.innerHTML = `${timeLeft} seconds`;
  timerInterval = setInterval (countDown, 1000);
}


// Function to shuffle letters

const shuffleLetters = function(array) {
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
const grabWord = function() {

  // Getting random pokemon object out of pokemonList array of objects
  randomWord = pokemonList[Math.floor(Math.random() * pokemonList.length)];
  
  // Splitting each letter of the name property from object
shuffleAgain(randomWord);

  // Putting hint properties from randomWord into the DOM
  hintOne.innerText = randomWord.hint1;
  hintTwo.innerText = randomWord.hint2;
  hintThree.innerText = randomWord.hint3;

  // Resetting the hints and input field
  hiddenHintOne.style.opacity = "0";
  hiddenHintTwo.style.opacity = "0";
  hiddenHintThree.style.opacity = "0";
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
    if (!playerAnswer) return createPopup("Sorry!", "Please enter a Pokémon name to check!");

      //want to throw an alert saying that the answer wrong if, need the strict ineqality operator to make sure it's a string and only a string
      if (playerAnswer !== correctAnswer) {return createPopup("Sorry", `${playerAnswer} is not the right Pokémon! Try again!`), answerInput.value = "";
        // else the answer is correct, yay!
      } else {
        createPopup ("Yay! You got it!", `${playerAnswer.toUpperCase()} is the right Pokémon! Keep going to catch them all!`)
        //get point value money out of the randomWord o, and add it to the players points total
        player.points += randomWord.points;
        //add it to the players points html elem
        playerPointsElem.innerText = player.points;
        grabWord();
      }
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

newPokemonBtn.addEventListener("click", grabWord);

checkAnswerBtn.addEventListener("click", checkAnswer)

shuffleBtn.addEventListener("click",() => {
  shuffleAgain(randomWord);
});

showHintBtn.addEventListener("click", showHint);




// Popup functions

function createPopup(heading ,message) {
  const popup = document.createElement('div');
  popup.className = 'popup';
  // heading is h2
  const h2 = document.createElement('h2');
  h2.innerHTML = heading;
  const messageElem = document.createElement('p');
  messageElem.innerHTML = message;
  popup.appendChild(h2);
  popup.appendChild(messageElem);

  const closeButton = document.createElement('button');
  closeButton.innerHTML = 'Close';
  closeButton.addEventListener('click', function() {
      popup.style.opacity = 0;
      setTimeout(function() {
          popup.remove();
      }, 1000);
  });
  popup.appendChild(closeButton);

  document.body.appendChild(popup);
  setTimeout(function() {
      popup.style.opacity = 1;
  }, 100);
}



// Audio functions

function playPokeBall () {
  let pokeBallSound = new Audio("../assets/sounds/pokeball-sound.mp3")
  pokeBallSound.play();

}






grabWord();
