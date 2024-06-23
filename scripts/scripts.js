// Grabbing HTML elements
  
// Word to solve

const displayedShuffledLetters = document.getElementById("word-to-solve-output");


// Hints 

const hintOne = document.querySelector(".hint-1-output");
const hintTwo = document.querySelector(".hint-2-output");
const hintThree = document.querySelector(".hint-3-output");


//countdown timer

const mainTimer = document.getElementById("count-down-main");


//answer box

const answerInput = document.getElementById("answer-box")

//buttons

const newPokemonBtn = document.getElementById("new-word-btn");
const checkAnswerBtn = document.getElementById("check-answer-btn");
const shuffleBtn = document.getElementById("shuffle-btn");

// variables we need for the game
//like the cat assignment, need to declare a variable that is empty/has no value

let correctAnswer;

// timer function

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


// hint timer


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

let letterArray = [];
let randomWord;


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

  // Need to check the answer by checking the name object
  correctAnswer = randomWord.name.toLowerCase();

  // Resetting the input field after an answer is given
  answerInput.value = "";

  console.log(randomWord);

};

grabWord();

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
        grabWord();
      }
}


//event listeners

newPokemonBtn.addEventListener("click", grabWord);

checkAnswerBtn.addEventListener("click", checkAnswer)
shuffleBtn.addEventListener("click",() => {
  shuffleAgain(randomWord);
})





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

// createPopup('Hello', 'This is a popup');
// createPopup('Hint', 'this is a hint');
