function fetchAnimal() {
    // Define the API endpoint
    const apiUrl = "https://api.adorableanimals.dev/random";

    // Make a fetch request to the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const animalUrl = data.imageUrl

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
