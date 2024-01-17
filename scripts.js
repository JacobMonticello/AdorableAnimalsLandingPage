function fetchAnimal() {
    const apiUrl = "https://api.adorableanimals.dev/random";

    const demoImage = document.getElementById("demo-image");
    const demoFailure = document.getElementById("demo-failure");
    const demoLoading = document.getElementById("demo-loading");

    demoImage.style.display = "none";
    demoFailure.style.display = "none";
    demoLoading.style.display = "block";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const animalUrl = data.imageUrl

            demoImage.style.display = "block";

            demoImage.src = animalUrl;
            //document.getElementById('demo-image').src = animalUrl;

        })
        .catch(error => {
            demoFailure.style.display = "block";
            console.error('Error fetching adorable animal:', error)
        })
        .finally(() => {
            demoLoading.style.display = "none";
        });
}


function copyCode(toCopy) {
    var codeBlock = document.getElementById(toCopy);
  
    navigator.clipboard.writeText(codeBlock.innerHTML);

  
    // Alert the copied text
    //alert("Code copied!");
}
