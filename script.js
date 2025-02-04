document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes");
    const pictureOptions = document.getElementById("picture-options");
    const noButton = document.getElementById("no");
    const header = document.querySelector(".header");
    const gifImage = document.getElementById("gif");
    const container = document.querySelector(".container");

    noButton.addEventListener("click", changeGifAndMove);
    yesButton.addEventListener("click", showOptions);
    document.querySelectorAll(".option-btn").forEach(button => {
        button.addEventListener("click", showBigGif);
    });
    function showOptions() {
        // Hide everything
        yesButton.style.display = "none";
        noButton.style.display = "none";
        gifImage.style.display = "none";
        container.style.display = "none";
        header.style.display = "none";

        // Show only the picture options
        pictureOptions.style.display = "flex";
    }

    function moveButton() {
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        // Get the visible page area (excluding scrollbars)
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Calculate max positions for the button to stay within bounds
        const maxX = viewportWidth - buttonWidth - 20; // 20px margin
        const maxY = viewportHeight - buttonHeight - 20; // 20px margin

        // Generate random positions within the bounds
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Apply the random position to the button
        noButton.style.position = "fixed";  // Ensures the button stays in the viewport
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }

    function changeGifAndMove() {
        // List of GIFs
        const gifs = [
            "sad3.gif",  // Replace with the actual paths to your GIFs
            "sad2.gif",
            "sad1.gif",
            "sad.gif",
            "sad4.gif"
        ];

        // Randomly select a GIF from the array
        const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

        // Change the GIF source to the randomly selected one
        gifImage.src = randomGif;

        // Optionally, move the "No" button to a new random location
        moveButton();  // Keeps the random movement behavior
    }
    function showBigGif() {
        // Hide everything
        document.body.innerHTML = ""; 
        
        // Create a new image element
        const bigGif = document.createElement("img");
        bigGif.src = "end.gif"; // Replace with your actual big GIF
        bigGif.style.width = "780px";
        bigGif.style.height = "780px";
        bigGif.style.objectFit = "cover";

        // Append big GIF to body
        document.body.appendChild(bigGif);
    }
});