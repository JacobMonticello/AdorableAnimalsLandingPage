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
    var codeBlock = document.getElementById("code-text");
  
    navigator.clipboard.writeText(codeBlock.innerHTML);

  
    // Alert the copied text
    alert("Code copied!");
}
