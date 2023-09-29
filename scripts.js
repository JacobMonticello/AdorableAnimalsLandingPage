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
            document.getElementById('demo-image').src = animalUrl;
        })
        .catch(error => console.error('Error fetching adorable animal:', error));
}


function copyCode() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}
