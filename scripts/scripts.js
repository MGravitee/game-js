"use strict";

// list of pokemon

const pokemonList = [
    {
      name: "Bulbasaur",
      hints: [
        "It is a Grass/Poison type Pokémon.",
        "It has a plant bulb on its back.",
        "It is number 001 in the Pokédex."
      ]
    },
    {
      name: "Ivysaur",
      hints: [
        "It evolves from Bulbasaur.",
        "It has a flower bud on its back.",
        "It is a Grass/Poison type Pokémon."
      ]
    },
    {
      name: "Venusaur",
      hints: [
        "It evolves from Ivysaur.",
        "It has a large flower on its back.",
        "It is the final form of Bulbasaur."
      ]
    },
    {
      name: "Charmander",
      hints: [
        "It is a Fire type Pokémon.",
        "It has a flame on the tip of its tail.",
        "It is number 004 in the Pokédex."
      ]
    },
    {
      name: "Charmeleon",
      hints: [
        "It evolves from Charmander.",
        "It has a stronger and larger flame on its tail.",
        "It is a Fire type Pokémon."
      ]
    },
    {
      name: "Charizard",
      hints: [
        "It evolves from Charmeleon.",
        "It can fly and breathe fire.",
        "It is the final form of Charmander."
      ]
    },
    {
      name: "Squirtle",
      hints: [
        "It is a Water type Pokémon.",
        "It has a shell on its back.",
        "It is number 007 in the Pokédex."
      ]
    },
    {
      name: "Wartortle",
      hints: [
        "It evolves from Squirtle.",
        "It has furry ears and tail.",
        "It is a Water type Pokémon."
      ]
    },
    {
      name: "Blastoise",
      hints: [
        "It evolves from Wartortle.",
        "It has two powerful water cannons on its back.",
        "It is the final form of Squirtle."
      ]
    },
    {
      name: "Caterpie",
      hints: [
        "It is a Bug type Pokémon.",
        "It has a green body with yellow ring patterns.",
        "It is number 010 in the Pokédex."
      ]
    },
    {
      name: "Metapod",
      hints: [
        "It evolves from Caterpie.",
        "It can harden its shell to protect itself.",
        "It is a Bug type Pokémon."
      ]
    },
    {
      name: "Butterfree",
      hints: [
        "It evolves from Metapod.",
        "It has wings that are colored like a rainbow.",
        "It is a Bug/Flying type Pokémon."
      ]
    },
    {
      name: "Weedle",
      hints: [
        "It is a Bug/Poison type Pokémon.",
        "It has a sharp stinger on its head.",
        "It is number 013 in the Pokédex."
      ]
    },
    {
      name: "Kakuna",
      hints: [
        "It evolves from Weedle.",
        "It hardens into a shell for protection.",
        "It is a Bug/Poison type Pokémon."
      ]
    },
    {
      name: "Beedrill",
      hints: [
        "It evolves from Kakuna.",
        "It has large, drill-like arms.",
        "It is a Bug/Poison type Pokémon."
      ]
    },
    {
      name: "Pidgey",
      hints: [
        "It is a Normal/Flying type Pokémon.",
        "It is small and very common.",
        "It is number 016 in the Pokédex."
      ]
    },
    {
      name: "Pidgeotto",
      hints: [
        "It evolves from Pidgey.",
        "It has larger wings and can fly faster.",
        "It is a Normal/Flying type Pokémon."
      ]
    },
    {
      name: "Pidgeot",
      hints: [
        "It evolves from Pidgeotto.",
        "It has a majestic appearance with a large wingspan.",
        "It is a Normal/Flying type Pokémon."
      ]
    },
    {
      name: "Rattata",
      hints: [
        "It is a Normal type Pokémon.",
        "It has large teeth that are constantly growing.",
        "It is number 019 in the Pokédex."
      ]
    },
    {
      name: "Raticate",
      hints: [
        "It evolves from Rattata.",
        "It is larger and more aggressive than Rattata.",
        "It is a Normal type Pokémon."
      ]
    },
    {
      name: "Spearow",
      hints: [
        "It is a Normal/Flying type Pokémon.",
        "It is known for its loud cry that can be heard over half a mile away.",
        "It is number 021 in the Pokédex."
      ]
    },
    {
      name: "Fearow",
      hints: [
        "It evolves from Spearow.",
        "It has a long neck and large wingspan.",
        "It is a Normal/Flying type Pokémon."
      ]
    },
    {
      name: "Ekans",
      hints: [
        "It is a Poison type Pokémon.",
        "It coils itself up to protect its soft belly.",
        "It is number 023 in the Pokédex."
      ]
    },
    {
      name: "Arbok",
      hints: [
        "It evolves from Ekans.",
        "It can expand the hood around its neck when it feels threatened.",
        "It is a Poison type Pokémon."
      ]
    },
    {
      name: "Pikachu",
      hints: [
        "It is an Electric type Pokémon.",
        "It stores electricity in its cheeks.",
        "It is number 025 in the Pokédex."
      ]
    },
    {
      name: "Raichu",
      hints: [
        "It evolves from Pikachu.",
        "It can generate powerful electrical charges.",
        "It is an Electric type Pokémon."
      ]
    },
    {
      name: "Sandshrew",
      hints: [
        "It is a Ground type Pokémon.",
        "It has tough skin and can roll into a ball for protection.",
        "It is number 027 in the Pokédex."
      ]
    },
    {
      name: "Sandslash",
      hints: [
        "It evolves from Sandshrew.",
        "It has sharp claws and can curl into a spiky ball.",
        "It is a Ground type Pokémon."
      ]
    },
    {
      name: "Nidoran♀",
      hints: [
        "It is a Poison type Pokémon.",
        "It has large ears and can release toxic spikes from its body.",
        "It is number 029 in the Pokédex."
      ]
    },
    {
      name: "Nidorina",
      hints: [
        "It evolves from Nidoran♀.",
        "It is more mature and protective than Nidoran♀.",
        "It is a Poison type Pokémon."
      ]
    },
    {
      name: "Nidoqueen",
      hints: [
        "It evolves from Nidorina.",
        "It is larger and stronger, with a tough hide.",
        "It is a Poison/Ground type Pokémon."
      ]
    },
    {
      name: "Nidoran♂",
      hints: [
        "It is a Poison type Pokémon.",
        "It is more aggressive and defensive than Nidoran♀.",
        "It is number 032 in the Pokédex."
      ]
    },
    {
      name: "Nidorino",
      hints: [
        "It evolves from Nidoran♂.",
        "It is more powerful and aggressive than Nidoran♂.",
        "It is a Poison type Pokémon."
      ]
    },
    {
      name: "Nidoking",
      hints: [
        "It evolves from Nidorino.",
        "It has immense power and can crush boulders with its hands.",
        "It is a Poison/Ground type Pokémon."
      ]
    },
    {
      name: "Clefairy",
      hints: [
        "It is a Fairy type Pokémon.",
        "It is known for its ability to make friends with humans.",
        "It is number 035 in the Pokédex."
      ]
    },
    {
      name: "Clefable",
      hints: [
        "It evolves from Clefairy.",
        "It is larger and more graceful than Clefairy.",
        "It is a Fairy type Pokémon."
      ]
    },
    {
      name: "Vulpix",
      hints: [
        "It is a Fire type Pokémon.",
        "It has six beautiful tails that grow more beautiful as it evolves.",
        "It is number 037 in the Pokédex."
      ]
    },
    {
      name: "Ninetales",
      hints: [
        "It evolves from Vulpix.",
        "It has nine long, fluffy tails.",
        "It is a Fire type Pokémon."
      ]
    },
    {
      name: "Jigglypuff",
      hints: [
        "It is a Normal/Fairy type Pokémon.",
        "It can sing a lullaby that can make anyone drowsy.",
        "It is number 039 in the Pokédex."
      ]
    },
    {
      name: "Wigglytuff",
      hints: [
        "It evolves from Jigglypuff.",
        "It has large, round eyes and a soft, plushy body.",
        "It is a Normal/Fairy type Pokémon."
      ]
    },
    {
      name: "Zubat",
      hints: [
        "It is a Poison/Flying type Pokémon.",
        "It hangs upside down in caves to sleep.",
        "It is number 041 in the Pokédex."
      ]
    },
    {
      name: "Golbat",
      hints: [
        "It evolves from Zubat.",
        "It has larger wings and can fly swiftly in darkness.",
        "It is a Poison/Flying type Pokémon."
      ]
    },
    {
      name: "Oddish",
      hints: [
        "It is a Grass/Poison type Pokémon.",
        "It releases a sweet scent that attracts other Pokémon.",
        "It is number 043 in the Pokédex."
      ]
    },
    {
      name: "Gloom",
      hints: [
        "It evolves from Oddish.",
        "It drools honey that attracts insects.",
        "It is a Grass/Poison type Pokémon."
      ]
    },
    {
      name: "Vileplume",
      hints: [
        "It evolves from Gloom.",
        "It has large, petal-like growths that release a sweet fragrance.",
        "It is a Grass/Poison type Pokémon."
      ]
    },
    {
      name: "Paras",
      hints: [
        "It is a Bug/Grass type Pokémon.",
        "It has mushrooms on its back that grow by drawing nutrients from it.",
        "It is number 046 in the Pokédex."
      ]
    },
    {
      name: "Parasect",
      hints: [
        "It evolves from Paras.",
        "The mushrooms on its back take over its body and drain its energy.",
        "It is a Bug/Grass type Pokémon."
      ]
    },
    {
      name: "Venonat",
      hints: [
        "It is a Bug/Poison type Pokémon.",
        "It has large eyes that emit a powerful radar-like beam.",
        "It is number 048 in the Pokédex."
      ]
    },
    {
      name: "Venomoth",
      hints: [
        "It evolves from Venonat.",
        "It is nocturnal and is attracted by bright lights.",
        "It is a Bug/Poison type Pokémon."
      ]
    },
    {
      name: "Diglett",
      hints: [
        "It is a Ground type Pokémon.",
        "It lives underground and rarely ventures above ground.",
        "It is number 050 in the Pokédex."
      ]
    }
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
