const pokemonList = [
    { 
        name: "Bulbasaur", 
        hint1: "Grass/Poison type", 
        hint2: "Seed Pokémon", 
        hint3: "Starter Pokémon in Generation I", 
        points: 1 
    },
    { 
        name: "Ivysaur", 
        hint1: "Grass/Poison type", 
        hint2: "Seed Pokémon", 
        hint3: "Evolves from Bulbasaur", 
        points: 1 
    },
    { 
        name: "Venusaur", 
        hint1: "Grass/Poison type", 
        hint2: "Seed Pokémon", 
        hint3: "Evolves from Ivysaur", 
        points: 1 
    },
    { 
        name: "Charmander", 
        hint1: "Fire type", 
        hint2: "Lizard Pokémon", 
        hint3: "Starter Pokémon in Generation I", 
        points: 1 
    },
    { 
        name: "Charmeleon", 
        hint1: "Fire type", 
        hint2: "Flame Pokémon", 
        hint3: "Evolves from Charmander", 
        points: 1 
    },
    { 
        name: "Charizard", 
        hint1: "Fire/Flying type", 
        hint2: "Flame Pokémon", 
        hint3: "Evolves from Charmeleon", 
        points: 1 
    },
    { 
        name: "Squirtle", 
        hint1: "Water type", 
        hint2: "Tiny Turtle Pokémon", 
        hint3: "Starter Pokémon in Generation I", 
        points: 1 
    },
    { 
        name: "Wartortle", 
        hint1: "Water type", 
        hint2: "Turtle Pokémon", 
        hint3: "Evolves from Squirtle", 
        points: 1 
    },
    { 
        name: "Blastoise", 
        hint1: "Water type", 
        hint2: "Shellfish Pokémon", 
        hint3: "Evolves from Wartortle", 
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
        hint2: "Cocoon Pokémon", 
        hint3: "Evolves from Caterpie", 
        points: 1 
    },
    { 
        name: "Butterfree", 
        hint1: "Bug/Flying type", 
        hint2: "Butterfly Pokémon", 
        hint3: "Evolves from Metapod", 
        points: 1 
    },
    { 
        name: "Weedle", 
        hint1: "Bug/Poison type", 
        hint2: "Hairy Bug Pokémon", 
        hint3: "Evolves into Kakuna", 
        points: 1 
    },
    { 
        name: "Kakuna", 
        hint1: "Bug/Poison type", 
        hint2: "Cocoon Pokémon", 
        hint3: "Evolves from Weedle", 
        points: 1 
    },
    { 
        name: "Beedrill", 
        hint1: "Bug/Poison type", 
        hint2: "Poison Bee Pokémon", 
        hint3: "Evolves from Kakuna", 
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
        hint2: "Bird Pokémon", 
        hint3: "Evolves from Pidgey", 
        points: 1 
    },
    { 
        name: "Pidgeot", 
        hint1: "Normal/Flying type", 
        hint2: "Bird Pokémon", 
        hint3: "Evolves from Pidgeotto", 
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
        hint2: "Mouse Pokémon", 
        hint3: "Evolves from Rattata", 
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
        hint2: "Beak Pokémon", 
        hint3: "Evolves from Spearow", 
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
        hint2: "Cobra Pokémon", 
        hint3: "Evolves from Ekans", 
        points: 1 
    },
    { 
        name: "Pikachu", 
        hint1: "Electric type", 
        hint2: "Mouse Pokémon", 
        hint3: "Evolves from Pichu and into Raichu", 
        points: 1 
    },
    { 
        name: "Raichu", 
        hint1: "Electric type", 
        hint2: "Mouse Pokémon", 
        hint3: "Evolves from Pikachu", 
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
        hint2: "Mouse Pokémon", 
        hint3: "Evolves from Sandshrew", 
        points: 1 
    },
    { 
        name: "Nidoran", 
        hint1: "Poison type", 
        hint2: "Poison Pin Pokémon", 
        hint3: "Evolves into Nidorina", 
        points: 1 
    },
    { 
        name: "Nidorina", 
        hint1: "Poison type", 
        hint2: "Poison Pin Pokémon", 
        hint3: "Evolves from Nidoran♀", 
        points: 1 
    },
    { 
        name: "Nidoqueen", 
        hint1: "Poison/Ground type", 
        hint2: "Drill Pokémon", 
        hint3: "Evolves from Nidorina", 
        points: 1 
    },
    { 
        name: "Nidoran", 
        hint1: "Poison type", 
        hint2: "Poison Pin Pokémon", 
        hint3: "Evolves into Nidorino", 
        points: 1 
    },
    { 
        name: "Nidorino", 
        hint1: "Poison type", 
        hint2: "Poison Pin Pokémon", 
        hint3: "Evolves from Nidoran♂", 
        points: 1 
    },
    { 
        name: "Nidoking", 
        hint1: "Poison/Ground type", 
        hint2: "Drill Pokémon", 
        hint3: "Evolves from Nidorino", 
        points: 1 
    },
    { 
        name: "Clefairy", 
        hint1: "Fairy type", 
        hint2: "Fairy Pokémon", 
        hint3: "Evolves from Cleffa and into Clefable", 
        points: 1 
    },
    { 
        name: "Clefable", 
        hint1: "Fairy type", 
        hint2: "Fairy Pokémon", 
        hint3: "Evolves from Clefairy", 
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
        hint2: "Fox Pokémon", 
        hint3: "Evolves from Vulpix", 
        points: 1 
    },
    { 
        name: "Jigglypuff", 
        hint1: "Normal/Fairy type", 
        hint2: "Balloon Pokémon", 
        hint3: "Evolves from Igglybuff and into Wigglytuff", 
        points: 1 
    },
    { 
        name: "Wigglytuff", 
        hint1: "Normal/Fairy type", 
        hint2: "Balloon Pokémon", 
        hint3: "Evolves from Jigglypuff", 
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
        hint2: "Bat Pokémon", 
        hint3: "Evolves from Zubat", 
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
        hint2: "Weed Pokémon", 
        hint3: "Evolves from Oddish", 
        points: 1 
    },
    { 
        name: "Vileplume", 
        hint1: "Grass/Poison type", 
        hint2: "Flower Pokémon", 
        hint3: "Evolves from Gloom", 
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
        hint2: "Mushroom Pokémon", 
        hint3: "Evolves from Paras", 
        points: 1 
    },
    { 
        name: "Venonat", 
        hint1: "Bug/Poison type", 
        hint2: "Insect Pokémon", 
        hint3: "Evolves into Venomoth", 
        points: 1 
    },
    { 
        name: "Venomoth", 
        hint1: "Bug/Poison type", 
        hint2: "Poison Moth Pokémon", 
        hint3: "Evolves from Venonat", 
        points: 1 
    },
    { 
        name: "Diglett", 
        hint1: "Ground type", 
        hint2: "Mole Pokémon", 
        hint3: "Evolves into Dugtrio", 
        points: 1 
    },
    { 
        name: "Dugtrio", 
        hint1: "Ground type", 
        hint2: "Mole Pokémon", 
        hint3: "Evolves from Diglett", 
        points: 1 
    },
    { 
        name: "Meowth", 
        hint1: "Normal type", 
        hint2: "Scratch Cat Pokémon", 
        hint3: "Evolves into Persian", 
        points: 1 
    },
    { 
        name: "Persian", 
        hint1: "Normal type", 
        hint2: "Classy Cat Pokémon", 
        hint3: "Evolves from Meowth", 
        points: 1 
    },
    { 
        name: "Psyduck", 
        hint1: "Water type", 
        hint2: "Duck Pokémon", 
        hint3: "Evolves into Golduck", 
        points: 1 
    },
    { 
        name: "Golduck", 
        hint1: "Water type", 
        hint2: "Duck Pokémon", 
        hint3: "Evolves from Psyduck", 
        points: 1 
    },
    { 
        name: "Mankey", 
        hint1: "Fighting type", 
        hint2: "Pig Monkey Pokémon", 
        hint3: "Evolves into Primeape", 
        points: 1 
    },
    { 
        name: "Primeape", 
        hint1: "Fighting type", 
        hint2: "Pig Monkey Pokémon", 
        hint3: "Evolves from Mankey", 
        points: 1 
    },
    { 
        name: "Growlithe", 
        hint1: "Fire type", 
        hint2: "Puppy Pokémon", 
        hint3: "Evolves into Arcanine", 
        points: 1 
    },
    { 
        name: "Arcanine", 
        hint1: "Fire type", 
        hint2: "Legendary Pokémon", 
        hint3: "Evolves from Growlithe", 
        points: 1 
    },
    { 
        name: "Poliwag", 
        hint1: "Water type", 
        hint2: "Tadpole Pokémon", 
        hint3: "Evolves into Poliwhirl", 
        points: 1 
    },
    { 
        name: "Poliwhirl", 
        hint1: "Water type", 
        hint2: "Tadpole Pokémon", 
        hint3: "Evolves from Poliwag and into Poliwrath", 
        points: 1 
    },
    { 
        name: "Poliwrath", 
        hint1: "Water/Fighting type", 
        hint2: "Tadpole Pokémon", 
        hint3: "Evolves from Poliwhirl", 
        points: 1 
    },
    { 
        name: "Abra", 
        hint1: "Psychic type", 
        hint2: "Psi Pokémon", 
        hint3: "Evolves into Kadabra", 
        points: 1 
    },
    { 
        name: "Kadabra", 
        hint1: "Psychic type", 
        hint2: "Psi Pokémon", 
        hint3: "Evolves from Abra and into Alakazam", 
        points: 1 
    },
    { 
        name: "Alakazam", 
        hint1: "Psychic type", 
        hint2: "Psi Pokémon", 
        hint3: "Evolves from Kadabra", 
        points: 1 
    },
    { 
        name: "Machop", 
        hint1: "Fighting type", 
        hint2: "Superpower Pokémon", 
        hint3: "Evolves into Machoke", 
        points: 1 
    },
    { 
        name: "Machoke", 
        hint1: "Fighting type", 
        hint2: "Superpower Pokémon", 
        hint3: "Evolves from Machop and into Machamp", 
        points: 1 
    },
    { 
        name: "Machamp", 
        hint1: "Fighting type", 
        hint2: "Superpower Pokémon", 
        hint3: "Evolves from Machoke", 
        points: 1 
    },
    { 
        name: "Bellsprout", 
        hint1: "Grass/Poison type", 
        hint2: "Flower Pokémon", 
        hint3: "Evolves into Weepinbell", 
        points: 1 
    },
    { 
        name: "Weepinbell", 
        hint1: "Grass/Poison type", 
        hint2: "Flycatcher Pokémon", 
        hint3: "Evolves from Bellsprout and into Victreebel", 
        points: 1 
    },
    { 
        name: "Victreebel", 
        hint1: "Grass/Poison type", 
        hint2: "Flycatcher Pokémon", 
        hint3: "Evolves from Weepinbell", 
        points: 1 
    },
    { 
        name: "Tentacool", 
        hint1: "Water/Poison type", 
        hint2: "Jellyfish Pokémon", 
        hint3: "Evolves into Tentacruel", 
        points: 1 
    },
    { 
        name: "Tentacruel", 
        hint1: "Water/Poison type", 
        hint2: "Jellyfish Pokémon", 
        hint3: "Evolves from Tentacool", 
        points: 1 
    },
    { 
        name: "Geodude", 
        hint1: "Rock/Ground type", 
        hint2: "Rock Pokémon", 
        hint3: "Evolves into Graveler", 
        points: 1 
    },
    { 
        name: "Graveler", 
        hint1: "Rock/Ground type", 
        hint2: "Rock Pokémon", 
        hint3: "Evolves from Geodude and into Golem", 
        points: 1 
    },
    { 
        name: "Golem", 
        hint1: "Rock/Ground type", 
        hint2: "Megaton Pokémon", 
        hint3: "Evolves from Graveler", 
        points: 1 
    },
    { 
        name: "Ponyta", 
        hint1: "Fire type", 
        hint2: "Fire Horse Pokémon", 
        hint3: "Evolves into Rapidash", 
        points: 1 
    },
    { 
        name: "Rapidash", 
        hint1: "Fire type", 
        hint2: "Fire Horse Pokémon", 
        hint3: "Evolves from Ponyta", 
        points: 1 
    },
    { 
        name: "Slowpoke", 
        hint1: "Water/Psychic type", 
        hint2: "Dopey Pokémon", 
        hint3: "Evolves into Slowbro or Slowking", 
        points: 1 
    },
    { 
        name: "Slowbro", 
        hint1: "Water/Psychic type", 
        hint2: "Hermit Crab Pokémon", 
        hint3: "Evolves from Slowpoke", 
        points: 1 
    },
    { 
        name: "Magnemite", 
        hint1: "Electric/Steel type", 
        hint2: "Magnet Pokémon", 
        hint3: "Evolves into Magneton", 
        points: 1 
    },
    { 
        name: "Magneton", 
        hint1: "Electric/Steel type", 
        hint2: "Magnet Pokémon", 
        hint3: "Evolves from Magnemite", 
        points: 1 
    },
    { 
        name: "Farfetch'd", 
        hint1: "Normal/Flying type", 
        hint2: "Wild Duck Pokémon", 
        hint3: "Often seen carrying a leek", 
        points: 1 
    },
    { 
        name: "Doduo", 
        hint1: "Normal/Flying type", 
        hint2: "Twin Bird Pokémon", 
        hint3: "Evolves into Dodrio", 
        points: 1 
    },
    { 
        name: "Dodrio", 
        hint1: "Normal/Flying type", 
        hint2: "Triple Bird Pokémon", 
        hint3: "Evolves from Doduo", 
        points: 1 
    },
    { 
        name: "Seel", 
        hint1: "Water type", 
        hint2: "Sea Lion Pokémon", 
        hint3: "Evolves into Dewgong", 
        points: 1 
    },
    { 
        name: "Dewgong", 
        hint1: "Water/Ice type", 
        hint2: "Sea Lion Pokémon", 
        hint3: "Evolves from Seel", 
        points: 1 
    },
    { 
        name: "Grimer", 
        hint1: "Poison type", 
        hint2: "Sludge Pokémon", 
        hint3: "Evolves into Muk", 
        points: 1 
    },
    { 
        name: "Muk", 
        hint1: "Poison type", 
        hint2: "Sludge Pokémon", 
        hint3: "Evolves from Grimer", 
        points: 1 
    },
    { 
        name: "Shellder", 
        hint1: "Water type", 
        hint2: "Bivalve Pokémon", 
        hint3: "Evolves into Cloyster", 
        points: 1 
    },
    { 
        name: "Cloyster", 
        hint1: "Water/Ice type", 
        hint2: "Bivalve Pokémon", 
        hint3: "Evolves from Shellder", 
        points: 1 
    },
    { 
        name: "Gastly", 
        hint1: "Ghost/Poison type", 
        hint2: "Gas Pokémon", 
        hint3: "Evolves into Haunter", 
        points: 1 
    },
    { 
        name: "Haunter", 
        hint1: "Ghost/Poison type", 
        hint2: "Gas Pokémon", 
        hint3: "Evolves from Gastly and into Gengar", 
        points: 1 
    },
    { 
        name: "Gengar", 
        hint1: "Ghost/Poison type", 
        hint2: "Shadow Pokémon", 
        hint3: "Evolves from Haunter", 
        points: 1 
    },
    { 
        name: "Onix", 
        hint1: "Rock/Ground type", 
        hint2: "Rock Snake Pokémon", 
        hint3: "Evolves into Steelix", 
        points: 1 
    },
    { 
        name: "Drowzee", 
        hint1: "Psychic type", 
        hint2: "Hypnosis Pokémon", 
        hint3: "Evolves into Hypno", 
        points: 1 
    },
    { 
        name: "Hypno", 
        hint1: "Psychic type", 
        hint2: "Hypnosis Pokémon", 
        hint3: "Evolves from Drowzee", 
        points: 1 
    },
    { 
        name: "Krabby", 
        hint1: "Water type", 
        hint2: "River Crab Pokémon", 
        hint3: "Evolves into Kingler", 
        points: 1 
    },
    { 
        name: "Kingler", 
        hint1: "Water type", 
        hint2: "Pincer Pokémon", 
        hint3: "Evolves from Krabby", 
        points: 1 
    },
    { 
        name: "Voltorb", 
        hint1: "Electric type", 
        hint2: "Ball Pokémon", 
        hint3: "Evolves into Electrode", 
        points: 1 
    },
    { 
        name: "Electrode", 
        hint1: "Electric type", 
        hint2: "Ball Pokémon", 
        hint3: "Evolves from Voltorb", 
        points: 1 
    },
    { 
        name: "Exeggcute", 
        hint1: "Grass/Psychic type", 
        hint2: "Egg Pokémon", 
        hint3: "Evolves into Exeggutor", 
        points: 1 
    },
    { 
        name: "Exeggutor", 
        hint1: "Grass/Psychic type", 
        hint2: "Coconut Pokémon", 
        hint3: "Evolves from Exeggcute", 
        points: 1 
    },
    { 
        name: "Cubone", 
        hint1: "Ground type", 
        hint2: "Lonely Pokémon", 
        hint3: "Evolves into Marowak", 
        points: 1 
    },
    { 
        name: "Marowak", 
        hint1: "Ground type", 
        hint2: "Bone Keeper Pokémon", 
        hint3: "Evolves from Cubone", 
        points: 1 
    },
    { 
        name: "Hitmonlee", 
        hint1: "Fighting type", 
        hint2: "Kicking Pokémon", 
        hint3: "Evolves from Tyrogue", 
        points: 1 
    },
    { 
        name: "Hitmonchan", 
        hint1: "Fighting type", 
        hint2: "Punching Pokémon", 
        hint3: "Evolves from Tyrogue", 
        points: 1 
    },
    { 
        name: "Lickitung", 
        hint1: "Normal type", 
        hint2: "Licking Pokémon", 
        hint3: "Evolves into Lickilicky", 
        points: 1 
    },
    { 
        name: "Koffing", 
        hint1: "Poison type", 
        hint2: "Poison Gas Pokémon", 
        hint3: "Evolves into Weezing", 
        points: 1 
    },
    { 
        name: "Weezing", 
        hint1: "Poison type", 
        hint2: "Poison Gas Pokémon", 
        hint3: "Evolves from Koffing", 
        points: 1 
    },
    { 
        name: "Rhyhorn", 
        hint1: "Ground/Rock type", 
        hint2: "Spikes Pokémon", 
        hint3: "Evolves into Rhydon", 
        points: 1 
    },
    { 
        name: "Rhydon", 
        hint1: "Ground/Rock type", 
        hint2: "Drill Pokémon", 
        hint3: "Evolves from Rhyhorn", 
        points: 1 
    },
    { 
        name: "Chansey", 
        hint1: "Normal type", 
        hint2: "Egg Pokémon", 
        hint3: "Evolves from Happiny and into Blissey", 
        points: 1 
    },
    { 
        name: "Tangela", 
        hint1: "Grass type", 
        hint2: "Vine Pokémon", 
        hint3: "Evolves into Tangrowth", 
        points: 1 
    },
    { 
        name: "Kangaskhan", 
        hint1: "Normal type", 
        hint2: "Parent Pokémon", 
        hint3: "Has a baby in its pouch", 
        points: 1 
    },
    { 
        name: "Horsea", 
        hint1: "Water type", 
        hint2: "Dragon Pokémon", 
        hint3: "Evolves into Seadra", 
        points: 1 
    },
    { 
        name: "Seadra", 
        hint1: "Water type", 
        hint2: "Dragon Pokémon", 
        hint3: "Evolves from Horsea", 
        points: 1 
    },
    { 
        name: "Goldeen", 
        hint1: "Water type", 
        hint2: "Goldfish Pokémon", 
        hint3: "Evolves into Seaking", 
        points: 1 
    },
    { 
        name: "Seaking", 
        hint1: "Water type", 
        hint2: "Goldfish Pokémon", 
        hint3: "Evolves from Goldeen", 
        points: 1 
    },
    { 
        name: "Staryu", 
        hint1: "Water type", 
        hint2: "Starshape Pokémon", 
        hint3: "Evolves into Starmie", 
        points: 1 
    },
    { 
        name: "Starmie", 
        hint1: "Water/Psychic type", 
        hint2: "Mysterious Pokémon", 
        hint3: "Evolves from Staryu", 
        points: 1 
    },
    { 
        name: "Mr. Mime", 
        hint1: "Psychic/Fairy type", 
        hint2: "Barrier Pokémon", 
        hint3: "Evolves from Mime Jr.", 
        points: 1 
    },
    { 
        name: "Scyther", 
        hint1: "Bug/Flying type", 
        hint2: "Mantis Pokémon", 
        hint3: "Evolves into Scizor", 
        points: 1 
    },
    { 
        name: "Jynx", 
        hint1: "Ice/Psychic type", 
        hint2: "Human Shape Pokémon", 
        hint3: "Evolves from Smoochum", 
        points: 1 
    },
    { 
        name: "Electabuzz", 
        hint1: "Electric type", 
        hint2: "Electric Pokémon", 
        hint3: "Evolves from Elekid and into Electivire", 
        points: 1 
    },
    { 
        name: "Magmar", 
        hint1: "Fire type", 
        hint2: "Spitfire Pokémon", 
        hint3: "Evolves from Magby and into Magmortar", 
        points: 1 
    },
    { 
        name: "Pinsir", 
        hint1: "Bug type", 
        hint2: "Stag Beetle Pokémon", 
        hint3: "Does not evolve", 
        points: 1 
    },
    { 
        name: "Tauros", 
        hint1: "Normal type", 
        hint2: "Wild Bull Pokémon", 
        hint3: "Does not evolve", 
        points: 1 
    },
    { 
        name: "Magikarp", 
        hint1: "Water type", 
        hint2: "Fish Pokémon", 
        hint3: "Evolves into Gyarados", 
        points: 1 
    },
    { 
        name: "Gyarados", 
        hint1: "Water/Flying type", 
        hint2: "Atrocious Pokémon", 
        hint3: "Evolves from Magikarp", 
        points: 1 
    },
    { 
        name: "Lapras", 
        hint1: "Water/Ice type", 
        hint2: "Transport Pokémon", 
        hint3: "Does not evolve", 
        points: 1 
    },
    { 
        name: "Ditto", 
        hint1: "Normal type", 
        hint2: "Transform Pokémon", 
        hint3: "Can transform into any Pokémon", 
        points: 1 
    },
    { 
        name: "Eevee", 
        hint1: "Normal type", 
        hint2: "Evolution Pokémon", 
        hint3: "Has multiple evolutions", 
        points: 1 
    },
    { 
        name: "Vaporeon", 
        hint1: "Water type", 
        hint2: "Bubble Jet Pokémon", 
        hint3: "Evolves from Eevee", 
        points: 1 
    },
    { 
        name: "Jolteon", 
        hint1: "Electric type", 
        hint2: "Lightning Pokémon", 
        hint3: "Evolves from Eevee", 
        points: 1 
    },
    { 
        name: "Flareon", 
        hint1: "Fire type", 
        hint2: "Flame Pokémon", 
        hint3: "Evolves from Eevee", 
        points: 1 
    },
    { 
        name: "Porygon", 
        hint1: "Normal type", 
        hint2: "Virtual Pokémon", 
        hint3: "Evolves into Porygon2", 
        points: 1 
    },
    { 
        name: "Omanyte", 
        hint1: "Rock/Water type", 
        hint2: "Spiral Pokémon", 
        hint3: "Evolves into Omastar", 
        points: 1 
    },
    { 
        name: "Omastar", 
        hint1: "Rock/Water type", 
        hint2: "Spiral Pokémon", 
        hint3: "Evolves from Omanyte", 
        points: 1 
    },
    { 
        name: "Kabuto", 
        hint1: "Rock/Water type", 
        hint2: "Shellfish Pokémon", 
        hint3: "Evolves into Kabutops", 
        points: 1 
    },
    { 
        name: "Kabutops", 
        hint1: "Rock/Water type", 
        hint2: "Shellfish Pokémon", 
        hint3: "Evolves from Kabuto", 
        points: 1 
    },
    { 
        name: "Aerodactyl", 
        hint1: "Rock/Flying type", 
        hint2: "Fossil Pokémon", 
        hint3: "Does not evolve", 
        points: 1 
    },
    { 
        name: "Snorlax", 
        hint1: "Normal type", 
        hint2: "Sleeping Pokémon", 
        hint3: "Evolves from Munchlax", 
        points: 1 
    },
    { 
        name: "Articuno", 
        hint1: "Ice/Flying type", 
        hint2: "Freeze Pokémon", 
        hint3: "Legendary bird Pokémon", 
        points: 1 
    },
    { 
        name: "Zapdos", 
        hint1: "Electric/Flying type", 
        hint2: "Electric Pokémon", 
        hint3: "Legendary bird Pokémon", 
        points: 1 
    },
    { 
        name: "Moltres", 
        hint1: "Fire/Flying type", 
        hint2: "Flame Pokémon", 
        hint3: "Legendary bird Pokémon", 
        points: 1 
    },
    { 
        name: "Dratini", 
        hint1: "Dragon type", 
        hint2: "Dragon Pokémon", 
        hint3: "Evolves into Dragonair", 
        points: 1 
    },
    { 
        name: "Dragonair", 
        hint1: "Dragon type", 
        hint2: "Dragon Pokémon", 
        hint3: "Evolves from Dratini and into Dragonite", 
        points: 1 
    },
    { 
        name: "Dragonite", 
        hint1: "Dragon/Flying type", 
        hint2: "Dragon Pokémon", 
        hint3: "Evolves from Dragonair", 
        points: 1 
    },
    { 
        name: "Mewtwo", 
        hint1: "Psychic type", 
        hint2: "Genetic Pokémon", 
        hint3: "Legendary Pokémon", 
        points: 1 
    },
    { 
        name: "Mew", 
        hint1: "Psychic type", 
        hint2: "New Species Pokémon", 
        hint3: "Legendary Pokémon", 
        points: 1 
    },
];