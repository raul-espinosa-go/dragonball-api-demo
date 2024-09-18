// Define the API endpoint
const apiUrl = 'https://dragonball-api.com/api/characters';

// Function to fetch data from the API
async function fetchData() {
    try {
        // Make the request to the API
        const response = await fetch(apiUrl);

        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the JSON from the response
        const data = await response.json();

        // Get the characters container
        const charactersContainer = document.getElementById('characters');
        
        // Clear any existing content
        charactersContainer.innerHTML = '';

        // Loop through the characters and create HTML elements
        data.items.forEach(character => {
            const card = document.createElement('div');
            card.className = 'character-card';

            // Create an image element
            const img = document.createElement('img');
            img.src = character.image || 'https://via.placeholder.com/200';
            img.alt = character.name;

            // Create a title element
            const title = document.createElement('h2');
            title.textContent = character.name;

            // Create an info section
            const info = document.createElement('div');
            info.className = 'info';
            info.innerHTML = `
                <strong>Ki:</strong> ${character.ki} <br>
                <strong>Max Ki:</strong> ${character.maxKi} <br>
                <strong>Race:</strong> ${character.race} <br>
                <strong>Gender:</strong> ${character.gender} <br>
                <strong>Affiliation:</strong> ${character.affiliation}
            `;

            // Append elements to the card
            card.appendChild(img);
            card.appendChild(document.createElement('hr'));
            card.appendChild(title);
            card.appendChild(info);

            // Append the card to the container
            charactersContainer.appendChild(card);
        });

    } catch (error) {
        // Handle any errors
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function to fetch data
fetchData();
