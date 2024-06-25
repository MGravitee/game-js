const pokemonList = [
  {
      name: "Bulbasaur",
      hint1: "Grass/Poison type",
      hint2: "First Pokémon in the Pokédex",
      hint3: "Evolves into Ivysaur",
      points: 1
  },
  {
      name: "Ivysaur",
      hint1: "Grass/Poison type",
      hint2: "Evolves from Bulbasaur",
      hint3: "Evolves into Venusaur",
      points: 1
  },
  {
      name: "Venusaur",
      hint1: "Grass/Poison type",
      hint2: "Evolves from Ivysaur",
      hint3: "Can Mega Evolve",
      points: 1
  },
  {
      name: "Charmander",
      hint1: "Fire type",
      hint2: "Lizard Pokémon",
      hint3: "Evolves into Charmeleon",
      points: 1
  },
  {
      name: "Charmeleon",
      hint1: "Fire type",
      hint2: "Evolves from Charmander",
      hint3: "Evolves into Charizard",
      points: 1
  },
  {
      name: "Charizard",
      hint1: "Fire/Flying type",
      hint2: "Evolves from Charmeleon",
      hint3: "Can Mega Evolve",
      points: 1
  },
  {
      name: "Squirtle",
      hint1: "Water type",
      hint2: "Turtle Pokémon",
      hint3: "Evolves into Wartortle",
      points: 1
  },
  {
      name: "Wartortle",
      hint1: "Water type",
      hint2: "Evolves from Squirtle",
      hint3: "Evolves into Blastoise",
      points: 1
  },
  {
      name: "Blastoise",
      hint1: "Water type",
      hint2: "Evolves from Wartortle",
      hint3: "Can Mega Evolve",
      points: 1
  },
  {
      name: "Caterpie",
      hint1: "Bug type",
      hint2: "Worm Pokémon",
      hint3: "Evolves into Metapod",
      points: 1
  },
  {
      name: "Metapod",
      hint1: "Bug type",
      hint2: "Evolves from Caterpie",
      hint3: "Evolves into Butterfree",
      points: 1
  },
  {
      name: "Butterfree",
      hint1: "Bug/Flying type",
      hint2: "Evolves from Metapod",
      hint3: "Butterfly Pokémon",
      points: 1
  },
  {
      name: "Weedle",
      hint1: "Bug/Poison type",
      hint2: "Caterpillar Pokémon",
      hint3: "Evolves into Kakuna",
      points: 1
  },
  {
      name: "Kakuna",
      hint1: "Bug/Poison type",
      hint2: "Evolves from Weedle",
      hint3: "Evolves into Beedrill",
      points: 1
  },
  {
      name: "Beedrill",
      hint1: "Bug/Poison type",
      hint2: "Evolves from Kakuna",
      hint3: "Can Mega Evolve",
      points: 1
  },
  {
      name: "Pidgey",
      hint1: "Normal/Flying type",
      hint2: "Tiny Bird Pokémon",
      hint3: "Evolves into Pidgeotto",
      points: 1
  },
  {
      name: "Pidgeotto",
      hint1: "Normal/Flying type",
      hint2: "Evolves from Pidgey",
      hint3: "Evolves into Pidgeot",
      points: 1
  },
  {
      name: "Pidgeot",
      hint1: "Normal/Flying type",
      hint2: "Evolves from Pidgeotto",
      hint3: "Can Mega Evolve",
      points: 1
  },
  {
      name: "Rattata",
      hint1: "Normal type",
      hint2: "Mouse Pokémon",
      hint3: "Evolves into Raticate",
      points: 1
  },
  {
      name: "Raticate",
      hint1: "Normal type",
      hint2: "Evolves from Rattata",
      hint3: "Mouse Pokémon",
      points: 1
  },
  {
      name: "Spearow",
      hint1: "Normal/Flying type",
      hint2: "Tiny Bird Pokémon",
      hint3: "Evolves into Fearow",
      points: 1
  },
  {
      name: "Fearow",
      hint1: "Normal/Flying type",
      hint2: "Evolves from Spearow",
      hint3: "Beak Pokémon",
      points: 1
  },
  {
      name: "Ekans",
      hint1: "Poison type",
      hint2: "Snake Pokémon",
      hint3: "Evolves into Arbok",
      points: 1
  },
  {
      name: "Arbok",
      hint1: "Poison type",
      hint2: "Evolves from Ekans",
      hint3: "Cobra Pokémon",
      points: 1
  },
  {
      name: "Pikachu",
      hint1: "Electric type",
      hint2: "Mouse Pokémon",
      hint3: "Evolves into Raichu",
      points: 1
  },
  {
      name: "Raichu",
      hint1: "Electric type",
      hint2: "Evolves from Pikachu",
      hint3: "Mouse Pokémon",
      points: 1
  },
  {
      name: "Sandshrew",
      hint1: "Ground type",
      hint2: "Mouse Pokémon",
      hint3: "Evolves into Sandslash",
      points: 1
  },
  {
      name: "Sandslash",
      hint1: "Ground type",
      hint2: "Evolves from Sandshrew",
      hint3: "Mouse Pokémon",
      points: 1
  },
  {
      name: "Nidoran",
      hint1: "Poison type",
      hint2: "Female counterpart",
      hint3: "Evolves into Nidorina",
      points: 1
  },
  {
      name: "Nidorina",
      hint1: "Poison type",
      hint2: "Evolves from Nidoran♀",
      hint3: "Evolves into Nidoqueen",
      points: 1
  },
  {
      name: "Nidoqueen",
      hint1: "Poison/Ground type",
      hint2: "Evolves from Nidorina",
      hint3: "Drill Pokémon",
      points: 1
  },
  {
      name: "Nidoran",
      hint1: "Poison type",
      hint2: "Male counterpart",
      hint3: "Evolves into Nidorino",
      points: 1
  },
  {
      name: "Nidorino",
      hint1: "Poison type",
      hint2: "Evolves from Nidoran♂",
      hint3: "Evolves into Nidoking",
      points: 1
  },
  {
      name: "Nidoking",
      hint1: "Poison/Ground type",
      hint2: "Evolves from Nidorino",
      hint3: "Drill Pokémon",
      points: 1
  },
  {
      name: "Clefairy",
      hint1: "Fairy type",
      hint2: "Moon Pokémon",
      hint3: "Evolves into Clefable",
      points: 1
  },
  {
      name: "Clefable",
      hint1: "Fairy type",
      hint2: "Evolves from Clefairy",
      hint3: "Fairy Pokémon",
      points: 1
  },
  {
      name: "Vulpix",
      hint1: "Fire type",
      hint2: "Fox Pokémon",
      hint3: "Evolves into Ninetales",
      points: 1
  },
  {
      name: "Ninetales",
      hint1: "Fire type",
      hint2: "Evolves from Vulpix",
      hint3: "Fox Pokémon",
      points: 1
  },
  {
      name: "Jigglypuff",
      hint1: "Normal/Fairy type",
      hint2: "Balloon Pokémon",
      hint3: "Evolves into Wigglytuff",
      points: 1
  },
  {
      name: "Wigglytuff",
      hint1: "Normal/Fairy type",
      hint2: "Evolves from Jigglypuff",
      hint3: "Balloon Pokémon",
      points: 1
  },
  {
      name: "Zubat",
      hint1: "Poison/Flying type",
      hint2: "Bat Pokémon",
      hint3: "Evolves into Golbat",
      points: 1
  },
  {
      name: "Golbat",
      hint1: "Poison/Flying type",
      hint2: "Evolves from Zubat",
      hint3: "Bat Pokémon",
      points: 1
  },
  {
      name: "Oddish",
      hint1: "Grass/Poison type",
      hint2: "Weed Pokémon",
      hint3: "Evolves into Gloom",
      points: 1
  },
  {
      name: "Gloom",
      hint1: "Grass/Poison type",
      hint2: "Evolves from Oddish",
      hint3: "Evolves into Vileplume",
      points: 1
  },
  {
      name: "Vileplume",
      hint1: "Grass/Poison type",
      hint2: "Evolves from Gloom",
      hint3: "Flower Pokémon",
      points: 1
  },
  {
      name: "Paras",
      hint1: "Bug/Grass type",
      hint2: "Mushroom Pokémon",
      hint3: "Evolves into Parasect",
      points: 1
  },
  {
      name: "Parasect",
      hint1: "Bug/Grass type",
      hint2: "Evolves from Paras",
      hint3: "Mushroom Pokémon",
      points: 1
  }
];