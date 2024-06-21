"use strict";

// list of pokemon

const pokemonList = [
    {
        name: "Bulbasaur",
        hints: [
            "It is a Grass/Poison type Pokémon.",
            "It has a plant bulb on its back.",
            "It is number 001 in the Pokédex.",
        ],
    },
    {
        name: "Ivysaur",
        hints: [
            "It evolves from Bulbasaur.",
            "It has a flower bud on its back.",
            "It is a Grass/Poison type Pokémon.",
        ],
    },
    {
        name: "Venusaur",
        hints: [
            "It evolves from Ivysaur.",
            "It has a large flower on its back.",
            "It is the final form of Bulbasaur.",
        ],
    },
    {
        name: "Charmander",
        hints: [
            "It is a Fire type Pokémon.",
            "It has a flame on the tip of its tail.",
            "It is number 004 in the Pokédex.",
        ],
    },
    {
        name: "Charmeleon",
        hints: [
            "It evolves from Charmander.",
            "It has a stronger and larger flame on its tail.",
            "It is a Fire type Pokémon.",
        ],
    },
    {
        name: "Charizard",
        hints: [
            "It evolves from Charmeleon.",
            "It can fly and breathe fire.",
            "It is the final form of Charmander.",
        ],
    },
    {
        name: "Squirtle",
        hints: [
            "It is a Water type Pokémon.",
            "It has a shell on its back.",
            "It is number 007 in the Pokédex.",
        ],
    },
    {
        name: "Wartortle",
        hints: [
            "It evolves from Squirtle.",
            "It has furry ears and tail.",
            "It is a Water type Pokémon.",
        ],
    },
    {
        name: "Blastoise",
        hints: [
            "It evolves from Wartortle.",
            "It has two powerful water cannons on its back.",
            "It is the final form of Squirtle.",
        ],
    },
    {
        name: "Caterpie",
        hints: [
            "It is a Bug type Pokémon.",
            "It has a green body with yellow ring patterns.",
            "It is number 010 in the Pokédex.",
        ],
    },
];

const wordLetters = document.getElementById("word-to-solve-output");

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
    wordLetters.innerText = letterArray.join("");
    console.log(randomWord);
};

startGame();
