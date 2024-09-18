// Define the API endpoint
const API_URL = "https://dragonball-api.com/api/characters";

// Function to fetch data from the API
async function fetchData() {
  try {
    // Make the request to the API
    const response = await fetch(API_URL);

    // Check if the response is ok
    if (!response.ok) {
      // Get the characters container
      const charactersContainer = document.getElementById("characters");

      // Clear any existing content
      charactersContainer.innerHTML = "";

      // Create an error message
      const errorMessage = document.createElement("p");
      errorMessage.textContent =
        "Failed to fetch characters. Please try again later.";
      errorMessage.className = "error"; // Make sure to apply the class for styling

      // Append the error message to the container
      charactersContainer.appendChild(errorMessage);

      throw new Error("Network response was not ok");
    }

    // Parse the JSON from the response
    const data = await response.json();

    // Get the characters container
    const charactersContainer = document.getElementById("characters");

    // Clear any existing content
    charactersContainer.innerHTML = "";

    // Loop through the characters and create HTML elements
    data.items.forEach((character) => {
      const card = document.createElement("div");
      card.className = "character-card";

      // Create an image element
      const img = document.createElement("img");
      img.src = character.image || "https://via.placeholder.com/200";
      img.alt = character.name;

      // Create a title element
      const title = document.createElement("h2");
      title.textContent = character.name;

      // Create a description element
      const description = document.createElement("p");
      description.textContent =
        character.description || "No description available";
      description.className = "description"; // Make sure to apply the class for scrolling

      // Append elements to the card
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(description);

      // Append the card to the container
      charactersContainer.appendChild(card);
    });
  } catch (error) {
    // Get the characters container
    const charactersContainer = document.getElementById("characters");

    // Clear any existing content
    charactersContainer.innerHTML = "";

    // Create an error message
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "An error occurred while fetching the data.";
    errorMessage.className = "error"; // Make sure to apply the class for styling

    // Append the error message to the container
    charactersContainer.appendChild(errorMessage);

    // Simple error handling
    console.error("Fetch error:", error);
  }
}

// Call the function to fetch data
fetchData();
