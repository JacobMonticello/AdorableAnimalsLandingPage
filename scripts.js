function fetchAnimal() {
    // Define the API endpoint
    const apiUrl = "https://api.adorableanimals.dev/random";

    // Make a fetch request to the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Retrieve the URL of the adorable animal from the API response
            //const animalUrl = data.imageUrl;

            // delete
            animalUrl = 'https://adorableanimals.s3.amazonaws.com/IMG_3672.jpg';

            // Get the image element and set its src attribute to the animal URL
            document.getElementById('animal-image').src = animalUrl;
        })
        .catch(error => console.error('Error fetching adorable animal:', error));
}
