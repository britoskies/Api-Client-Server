// Importing Axios, FileSystem and Path

const axios = require("axios");
const fs = require('fs').promises;
const path = require('path');

// Main function

const main = async () => {

  // API REQUEST | DESTRUCTURING API DATA

  let response = await axios.get("https://rickandmortyapi.com/api/character");
  let { data: { results } } = response;

  const header = "id,Name,Status,Species\n";

  let characters = results
    .map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
      };
    })
    .map((character) => Object.values(character).join(","))
    .join("\n");

    // Establishing new path
    
    csvPath = path.join(__dirname, "data.csv");

    // Creating the file

    await fs.writeFile(csvPath, header + characters);
};

main();
