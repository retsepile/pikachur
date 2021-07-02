let base_URL = "https://pokeapi.co/api/v2/pokemon/";

// Fetching a list of pokemon
function getPokemonList(url) {
  fetch(url)
    // Converting data from JSON
    .then((response) => response.json())

    .then((data) => {
      // Console log to display the info
      console.log(data);
      // Get the list of pokemon from the results
      let pokemon = data.results;
      // Get element from HTML to write buttons in
      let container = document.querySelector(".pokemon-list-container");
      // Clear the container
      container.innerHTML = "";
      // Loop over pokemon list and create an HTML button for each one. Add the button to the container
      pokemon.forEach((btn) => {
        container.innerHTML += `<button onclick="getPokemonInfo('${btn.url}')">${btn.name}</button>`;
      });
      // Add a next pokemon button
      container.innerHTML += `<br><br><button onclick="getPokemonList('${data.next}')">Next</button>`;
      container.innerHTML += `<button onclick="getPokemonList('${data.previous}')">Previous</button>`;
    });
}

// Default pokemon list
getPokemonList(base_URL);

//  Information about a specific pokemon
function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Make sure data comes through
      console.log(data);
      // Write data to pokemon information container
      document.querySelector(".pokemon-info").innerHTML = `
    <img src="${data.sprites.other.dream_world.front_default} ">
    `;
      document.querySelector(".pokemon-info").innerHTML += `<br><span> ${
        "Weight:" + data.weight + "kg" + ""
      }</span>`;

      document.querySelector(".pokemon-info").innerHTML += `<br><span> ${
        "Height:" + data.height + "m" + ""
      }</span>`;

      document.querySelector(".pokemon-info").innerHTML += `<br><span> ${
        "Name:" + data.name + "" + ""
      }</span>`;
    });
}
