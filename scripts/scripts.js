const pokemonList = [
  {
    name: "Bulbasaur",
    hint1: "It is a Grass/Poison type Pokémon.",
    hint2: "It has a plant bulb on its back.",
    hint3: "It is number 001 in the Pokédex."
  },
  {
    name: "Ivysaur",
    hint1: "It evolves from Bulbasaur.",
    hint2: "It has a flower bud on its back.",
    hint3: "It is a Grass/Poison type Pokémon."
  },
  {
    name: "Venusaur",
    hint1: "It evolves from Ivysaur.",
    hint2: "It has a large flower on its back.",
    hint3: "It is the final form of Bulbasaur."
  },
  {
    name: "Charmander",
    hint1: "It is a Fire type Pokémon.",
    hint2: "It has a flame on the tip of its tail.",
    hint3: "It is number 004 in the Pokédex."
  },
  {
    name: "Charmeleon",
    hint1: "It evolves from Charmander.",
    hint2: "It has a stronger and larger flame on its tail.",
    hint3: "It is a Fire type Pokémon."
  },
  {
    name: "Charizard",
    hint1: "It evolves from Charmeleon.",
    hint2: "It can fly and breathe fire.",
    hint3: "It is the final form of Charmander."
  },
  {
    name: "Squirtle",
    hint1: "It is a Water type Pokémon.",
    hint2: "It has a shell on its back.",
    hint3: "It is number 007 in the Pokédex."
  },
  {
    name: "Wartortle",
    hint1: "It evolves from Squirtle.",
    hint2: "It has furry ears and tail.",
    hint3: "It is a Water type Pokémon."
  },
  {
    name: "Blastoise",
    hint1: "It evolves from Wartortle.",
    hint2: "It has two powerful water cannons on its back.",
    hint3: "It is the final form of Squirtle."
  },
  {
    name: "Caterpie",
    hint1: "It is a Bug type Pokémon.",
    hint2: "It has a green body with yellow ring patterns.",
    hint3: "It is number 010 in the Pokédex."
  },
  {
    name: "Metapod",
    hint1: "It evolves from Caterpie.",
    hint2: "It can harden its shell to protect itself.",
    hint3: "It is a Bug type Pokémon."
  },
  {
    name: "Butterfree",
    hint1: "It evolves from Metapod.",
    hint2: "It has wings that are colored like a rainbow.",
    hint3: "It is a Bug/Flying type Pokémon."
  },
  {
    name: "Weedle",
    hint1: "It is a Bug/Poison type Pokémon.",
    hint2: "It has a sharp stinger on its head.",
    hint3: "It is number 013 in the Pokédex."
  },
  {
    name: "Kakuna",
    hint1: "It evolves from Weedle.",
    hint2: "It hardens into a shell for protection.",
    hint3: "It is a Bug/Poison type Pokémon."
  },
  {
    name: "Beedrill",
    hint1: "It evolves from Kakuna.",
    hint2: "It has large, drill-like arms.",
    hint3: "It is a Bug/Poison type Pokémon."
  },
  {
    name: "Pidgey",
    hint1: "It is a Normal/Flying type Pokémon.",
    hint2: "It is small and very common.",
    hint3: "It is number 016 in the Pokédex."
  },
  {
    name: "Pidgeotto",
    hint1: "It evolves from Pidgey.",
    hint2: "It has larger wings and can fly faster.",
    hint3: "It is a Normal/Flying type Pokémon."
  },
  {
    name: "Pidgeot",
    hint1: "It evolves from Pidgeotto.",
    hint2: "It has a majestic appearance with a large wingspan.",
    hint3: "It is a Normal/Flying type Pokémon."
  },
  {
    name: "Rattata",
    hint1: "It is a Normal type Pokémon.",
    hint2: "It has large teeth that are constantly growing.",
    hint3: "It is number 019 in the Pokédex."
  },
  {
    name: "Raticate",
    hint1: "It evolves from Rattata.",
    hint2: "It is larger and more aggressive than Rattata.",
    hint3: "It is a Normal type Pokémon."
  },
  {
    name: "Spearow",
    hint1: "It is a Normal/Flying type Pokémon.",
    hint2: "It is known for its loud cry that can be heard over half a mile away.",
    hint3: "It is number 021 in the Pokédex."
  },
  {
    name: "Fearow",
    hint1: "It evolves from Spearow.",
    hint2: "It has a long neck and large wingspan.",
    hint3: "It is a Normal/Flying type Pokémon."
  },
  {
    name: "Ekans",
    hint1: "It is a Poison type Pokémon.",
    hint2: "It coils itself up to protect its soft belly.",
    hint3: "It is number 023 in the Pokédex."
  },
  {
    name: "Arbok",
    hint1: "It evolves from Ekans.",
    hint2: "It can expand the hood around its neck when it feels threatened.",
    hint3: "It is a Poison type Pokémon."
  },
  {
    name: "Pikachu",
    hint1: "It is an Electric type Pokémon.",
    hint2: "It stores electricity in its cheeks.",
    hint3: "It is number 025 in the Pokédex."
  },
  {
    name: "Raichu",
    hint1: "It evolves from Pikachu.",
    hint2: "It can generate powerful electrical charges.",
    hint3: "It is an Electric type Pokémon."
  },
  {
    name: "Sandshrew",
    hint1: "It is a Ground type Pokémon.",
    hint2: "It has tough skin and can roll into a ball for protection.",
    hint3: "It is number 027 in the Pokédex."
  },
  {
    name: "Sandslash",
    hint1: "It evolves from Sandshrew.",
    hint2: "It has sharp claws and can curl into a spiky ball.",
    hint3: "It is a Ground type Pokémon."
  },
  {
    name: "Nidoran",
    hint1: "It is a Poison type Pokémon.",
    hint2: "It has large ears and can release toxic spikes from its body.",
    hint3: "It is number 029 in the Pokédex."
  },
  {
    name: "Nidorina",
    hint1: "It evolves from Nidoran♀.",
    hint2: "It is more mature and protective than Nidoran♀.",
    hint3: "It is a Poison type Pokémon."
  },
  {
    name: "Nidoqueen",
    hint1: "It evolves from Nidorina.",
    hint2: "It is larger and stronger, with a tough hide.",
    hint3: "It is a Poison/Ground type Pokémon."
  },
  {
    name: "Nidoran♂",
    hint1: "It is a Poison type Pokémon.",
    hint2: "It is more aggressive and defensive than Nidoran♀.",
    hint3: "It is number 032 in the Pokédex."
  },
  {
    name: "Nidorino",
    hint1: "It evolves from Nidoran♂.",
    hint2: "It is more powerful and aggressive than Nidoran♂.",
    hint3: "It is a Poison type Pokémon."
  },
  {
    name: "Nidoking",
    hint1: "It evolves from Nidorino.",
    hint2: "It has immense power and can crush boulders with its hands.",
    hint3: "It is a Poison/Ground type Pokémon."
  },
  {
    name: "Clefairy",
    hint1: "It is a Fairy type Pokémon.",
    hint2: "It is known for its ability to make friends with humans.",
    hint3: "It is number 035 in the Pokédex."
  },
  {
    name: "Clefable",
    hint1: "It evolves from Clefairy.",
    hint2: "It is larger and more graceful than Clefairy.",
    hint3: "It is a Fairy type Pokémon."
  },
  {
    name: "Vulpix",
    hint1: "It is a Fire type Pokémon.",
    hint2: "It has six beautiful tails that grow more beautiful as it evolves.",
    hint3: "It is number 037 in the Pokédex."
  },
  {
    name: "Ninetales",
    hint1: "It evolves from Vulpix.",
    hint2: "It has nine long, fluffy tails.",
    hint3: "It is a Fire type Pokémon."
  },
  {
    name: "Jigglypuff",
    hint1: "It is a Normal/Fairy type Pokémon.",
    hint2: "It can sing a lullaby that can make anyone drowsy.",
    hint3: "It is number 039 in the Pokédex."
  },
  {
    name: "Wigglytuff",
    hint1: "It evolves from Jigglypuff.",
    hint2: "It has large, round eyes and a soft, plushy body.",
    hint3: "It is a Normal/Fairy type Pokémon."
  },
  {
    name: "Zubat",
    hint1: "It is a Poison/Flying type Pokémon.",
    hint2: "It hangs upside down in caves to sleep.",
    hint3: "It is number 041 in the Pokédex."
  },
  {
    name: "Golbat",
    hint1: "It evolves from Zubat.",
    hint2: "It has larger wings and can fly swiftly in darkness.",
    hint3: "It is a Poison/Flying type Pokémon."
  },
  {
    name: "Oddish",
    hint1: "It is a Grass/Poison type Pokémon.",
    hint2: "It releases a sweet scent that attracts other Pokémon.",
    hint3: "It is number 043 in the Pokédex."
  },
  {
    name: "Gloom",
    hint1: "It evolves from Oddish.",
    hint2: "It drools honey that attracts insects.",
    hint3: "It is a Grass/Poison type Pokémon."
  },
  {
    name: "Vileplume",
    hint1: "It evolves from Gloom.",
    hint2: "It has large, petal-like growths that release a sweet fragrance.",
    hint3: "It is a Grass/Poison type Pokémon."
  },
  {
    name: "Paras",
    hint1: "It is a Bug/Grass type Pokémon.",
    hint2: "It has mushrooms on its back that grow by drawing nutrients from it.",
    hint3: "It is number 046 in the Pokédex."
  },
  {
    name: "Parasect",
    hint1: "It evolves from Paras.",
    hint2: "The mushrooms on its back take over its body and drain its energy.",
    hint3: "It is a Bug/Grass type Pokémon."
  },
  {
    name: "Venonat",
    hint1: "It is a Bug/Poison type Pokémon.",
    hint2: "It has large eyes that emit a powerful radar-like beam.",
    hint3: "It is number 048 in the Pokédex."
  },
  {
    name: "Venomoth",
    hint1: "It evolves from Venonat.",
    hint2: "It is nocturnal and is attracted by bright lights.",
    hint3: "It is a Bug/Poison type Pokémon."
  },
  {
    name: "Diglett",
    hint1: "It is a Ground type Pokémon.",
    hint2: "It lives underground and rarely ventures above ground.",
    hint3: "It is number 050 in the Pokédex."
  }
];

// Grabbing HTML elements
  
// Word to solve

const wordLetters = document.getElementById("word-to-solve-output");


// Hints 

const hintOne = document.querySelector(".hint-1-output");
const hintTwo = document.querySelector(".hint-2-output");
const hintThree = document.querySelector(".hint-3-output");

//answer box

const answerInput = document.getElementById("answer-box")

//buttons

const newPokemonBtn = document.getElementById("new-word-btn");
const checkAnswerBtn = document.getElementById("check-answer-btn");


// variables we need for the game
//like the cat assignment, need to declare a variable that is empty/has no value

let correctAnswer;

// start game function

const startGame = function () {
    //getting random pokemon object out of pokemonList array of obj
    let randomWord =
        pokemonList[Math.floor(Math.random() * pokemonList.length)];
    //splitting each letter of the name property from object.
    let letterArray = randomWord.name.split("");

    for (let index = letterArray.length - 1; index > 0; index--) {
        let newIndex = Math.floor(Math.random() * (index + 1)); //getting a random number from newly made index, swapping elements and swaps there "position" in a temp. variable
        let temp = letterArray[index];
        letterArray[index] = letterArray[newIndex];
        letterArray[newIndex] = temp;
    }
    //joining split/shuffled array of letters back together
    wordLetters.innerText = letterArray.join("");

    //putting hint properties from randomWord into the DOM
    hintOne.innerText = randomWord.hint1;
    hintTwo.innerText = randomWord.hint2;
    hintThree.innerText = randomWord.hint3;

    //need to check the answer by checking the name object
    correctAnswer = randomWord.name.toLowerCase();
   
    console.log(randomWord);
};

startGame();

const checkAnswer = function () {
      let playerAnswer = answerInput.value.toLowerCase();
       //want to throw an alert saying that the answer wrong if, need the strict ineqality operator to make sure it's a string and only a string
    if (playerAnswer !== correctAnswer) 
      return alert(`Sorry ${playerAnswer} is not the right Pokemon! Try again!`)
      console.log(playerAnswer);
}


//event listeners

newPokemonBtn.addEventListener("click", startGame);

checkAnswerBtn.addEventListener("click", checkAnswer)

